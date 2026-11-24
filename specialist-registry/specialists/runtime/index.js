'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const STATES = ['BACKLOG','READY','RUNNING','WAITING_DEPENDENCY','WAITING_EVIDENCE','BLOCKED','REPORTING','REPORT_READY','VERIFYING','DONE','FAILED','SUPERSEDED'];
const TRANSITIONS = {
  BACKLOG:['READY','BLOCKED','SUPERSEDED'], READY:['RUNNING','BLOCKED','SUPERSEDED'],
  RUNNING:['WAITING_DEPENDENCY','WAITING_EVIDENCE','BLOCKED','REPORTING','FAILED'],
  WAITING_DEPENDENCY:['READY','BLOCKED','FAILED'], WAITING_EVIDENCE:['READY','BLOCKED','FAILED'],
  BLOCKED:['READY','FAILED','SUPERSEDED'], REPORTING:['REPORT_READY','FAILED'],
  REPORT_READY:['VERIFYING','FAILED'], VERIFYING:['DONE','FAILED'], DONE:[], FAILED:['READY','SUPERSEDED'], SUPERSEDED:[]
};
const stable = value => value === undefined ? undefined : Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])])) : value;
const encode = value => JSON.stringify(stable(value));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const fail = code => { const e = new Error(code); e.code = code; throw e; };
const clone = value => JSON.parse(JSON.stringify(value));

function canonical(root, candidate) {
  if (typeof candidate !== 'string' || !candidate || candidate.includes('\0')) fail('INVALID_PATH');
  const rootReal = fs.realpathSync.native(path.resolve(root));
  const absolute = path.resolve(rootReal, candidate);
  let cursor = absolute, suffix = [];
  while (!fs.existsSync(cursor)) { const parent = path.dirname(cursor); if (parent === cursor) break; suffix.unshift(path.basename(cursor)); cursor = parent; }
  const existing = fs.realpathSync.native(cursor);
  const resolved = path.resolve(existing, ...suffix);
  const rel = path.relative(rootReal, resolved);
  if (rel === '..' || rel.startsWith('..'+path.sep) || path.isAbsolute(rel)) fail('PATH_ESCAPE');
  return resolved.replaceAll('\\','/').toLowerCase();
}
const overlap = (a,b) => a === b || a.startsWith(b+'/') || b.startsWith(a+'/');

class RegistryStore {
  constructor(file, options={}) { this.file=path.resolve(file); this.root=path.resolve(options.root||path.dirname(this.file)); this.clock=options.clock||(()=>new Date().toISOString()); this.reset(); this.load(); }
  reset(){ this.events=[]; this.specialists={}; this.workers={}; this.queues={}; this.assignments={}; this.leases={}; this.idempotency={}; }
  load(){
    if (!fs.existsSync(this.file)) return;
    const raw=fs.readFileSync(this.file,'utf8'); if (!raw.endsWith('\n')) fail('EVENT_LOG_TRUNCATED');
    const lines=raw.split('\n').filter(Boolean); let prev='0'.repeat(64), seq=1; const ids=new Set();
    for(const line of lines){ let e; try{e=JSON.parse(line)}catch{fail('EVENT_LOG_TAMPERED')}
      if(e.seq!==seq++ || e.previous_hash!==prev || ids.has(e.event_id)) fail('EVENT_CHAIN_INVALID');
      const supplied=e.hash; const material={...e}; delete material.hash; if(hash(encode(material))!==supplied) fail('EVENT_CHAIN_INVALID');
      ids.add(e.event_id); prev=supplied; this.events.push(e); this.apply(e);
    }
  }
  projection(){ return clone({specialists:this.specialists,workers:this.workers,queues:this.queues,assignments:this.assignments,leases:this.leases,idempotency:this.idempotency}); }
  append(type,payload,key){
    const materialHash=hash(encode({type,payload}));
    if(key && this.idempotency[key]) { if(this.idempotency[key]!==materialHash) fail('IDEMPOTENCY_CONFLICT'); return {replayed:true}; }
    const e={seq:this.events.length+1,event_id:hash(`${this.events.length+1}:${type}:${materialHash}`).slice(0,32),timestamp:this.clock(),type,payload:stable(payload),idempotency_key:key||null,material_hash:materialHash,previous_hash:this.events.at(-1)?.hash||'0'.repeat(64)};
    e.hash=hash(encode(e)); fs.mkdirSync(path.dirname(this.file),{recursive:true}); fs.appendFileSync(this.file,JSON.stringify(e)+'\n',{encoding:'utf8',flush:true}); this.events.push(e); this.apply(e); return clone(e);
  }
  apply(e){ const p=e.payload;
    if(e.idempotency_key) this.idempotency[e.idempotency_key]=e.material_hash;
    if(e.type==='SPECIALIST_REGISTERED') this.specialists[p.specialist_id]=p;
    if(e.type==='WORKER_CREATED'){this.workers[p.worker_id]=p;this.queues[p.worker_id]=[]}
    if(e.type==='TASK_ENQUEUED') this.queues[p.worker_id].push({task_id:p.task_id,state:'BACKLOG'});
    if(e.type==='TASK_TRANSITIONED') this.queues[p.worker_id].find(x=>x.task_id===p.task_id).state=p.to;
    if(e.type==='LEASE_ACQUIRED') this.leases[p.lease_id]=p;
    if(e.type==='LEASE_RELEASED') this.leases[p.lease_id].released_at=p.released_at;
    if(e.type==='ASSIGNMENT_CREATED') this.assignments[p.assignment_id]=p;
    if(e.type==='WORK_REPORT_RECORDED') this.assignments[p.assignment_id].work_report=p.report;
    if(e.type==='LEARNING_OUTPUT_RECORDED') this.assignments[p.assignment_id].learning_output=p.output;
  }
  register(def,key){ if(!def.specialist_id||!def.version||!def.specialization) fail('INVALID_SPECIALIST'); return this.append('SPECIALIST_REGISTERED',def,key); }
  createWorker(w,key){ if(w.role==='MANAGER' && w.primary_specialization) fail('MANAGER_DOMAIN_EXECUTION_DENIED'); if(!w.worker_id||!w.primary_specialization) fail('INVALID_WORKER'); return this.append('WORKER_CREATED',w,key); }
  enqueue(worker_id,task,key){ if(!this.workers[worker_id]) fail('UNKNOWN_WORKER'); return this.append('TASK_ENQUEUED',{worker_id,...task},key); }
  transition(worker_id,task_id,to,key){ if(!STATES.includes(to)) fail('INVALID_QUEUE_STATE'); const q=this.queues[worker_id]?.find(x=>x.task_id===task_id); if(!q) fail('UNKNOWN_TASK'); if(!TRANSITIONS[q.state].includes(to)) fail('ILLEGAL_QUEUE_TRANSITION'); const a=Object.values(this.assignments).find(x=>x.worker_id===worker_id&&x.task_id===task_id); if(to==='DONE'&&(!a?.work_report||!a?.learning_output)) fail('COMPLETION_EVIDENCE_REQUIRED'); return this.append('TASK_TRANSITIONED',{worker_id,task_id,from:q.state,to},key); }
  acquireLease(lease,key){ const now=Date.parse(this.clock()); const paths=(lease.paths||[]).map(p=>canonical(this.root,p)); if(!paths.length) fail('EMPTY_WRITE_LEASE'); for(const l of Object.values(this.leases)){ if(l.released_at||Date.parse(l.expires_at)<=now) continue; if(paths.some(a=>l.paths.some(b=>overlap(a,b)))) fail('LEASE_OVERLAP'); } return this.append('LEASE_ACQUIRED',{...lease,worktree:canonical(this.root,lease.worktree),paths},key); }
  releaseLease(id,key){ const l=this.leases[id]; if(!l) fail('UNKNOWN_LEASE'); return this.append('LEASE_RELEASED',{lease_id:id,released_at:this.clock()},key); }
  assign(a,key){ const w=this.workers[a.worker_id]; if(!w) fail('UNKNOWN_WORKER'); if(w.role==='MANAGER') fail('MANAGER_DOMAIN_EXECUTION_DENIED'); if(w.primary_specialization!==a.specialization) fail(a.follow_up_allowed?'FOLLOW_UP_SPECIALIST_REQUIRED':'SPECIALIZATION_MISMATCH'); const d=this.specialists[a.specialist_id]; if(!d||d.quarantined||d.deprecated) fail('SPECIALIST_UNAVAILABLE'); if(a.scope_expansion) fail('TASK_SCOPE_EXPANSION_DENIED'); if(a.resource_request?.cpu_ms>d.scaling_policy.max_cpu_ms) fail('RESOURCE_CEILING_EXCEEDED'); if(a.read_only){if((a.owned_write_paths||[]).length||a.lease_id) fail('READ_ONLY_WRITE_DENIED')} else { const l=this.leases[a.lease_id], now=Date.parse(this.clock()); if(!l||l.released_at||Date.parse(l.expires_at)<=now||l.worker_id!==a.worker_id||l.worktree!==canonical(this.root,a.worktree)||(a.owned_write_paths||[]).some(p=>!l.paths.some(lp=>{const cp=canonical(this.root,p);return cp===lp||cp.startsWith(lp+'/')}))) fail('WRITE_LEASE_REQUIRED'); } return this.append('ASSIGNMENT_CREATED',a,key); }
  recordWorkReport(id,report,key){if(!this.assignments[id])fail('UNKNOWN_ASSIGNMENT');if(report.evidence_label!=='REPORTED_BY_WORKER')fail('INVALID_EVIDENCE_LABEL');return this.append('WORK_REPORT_RECORDED',{assignment_id:id,report},key)}
  recordLearningOutput(id,output,key){if(!this.assignments[id])fail('UNKNOWN_ASSIGNMENT');if(!output.learnings||!Array.isArray(output.learnings))fail('INVALID_LEARNING_OUTPUT');return this.append('LEARNING_OUTPUT_RECORDED',{assignment_id:id,output},key)}
}
module.exports={RegistryStore,STATES,TRANSITIONS,canonical,overlap,encode};
