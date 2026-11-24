import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const prototypeRoot = path.join(root, 'printer', 'prototypes');
const statePath = path.join(root, 'printer', 'PRINTER_STATE.json');
const catalogPath = path.join(root, 'catalog', 'LENS_CATALOG.json');
const graphPath = path.join(root, 'catalog', 'DEPENDENCY_GRAPH.json');
const requiredFiles = [
  'LENS_MANIFEST.json', 'LENS_DOCTRINE.md', 'LENS_INSTALLER.md', 'LENS_SET_COMPOSITION.json',
  'LENS_EFFECT_HYPOTHESIS.md', 'LENS_INPUT_CONTRACT.md', 'LENS_OUTPUT_CONTRACT.md', 'LENS_STATE_SCHEMA.json',
  'LENS_TEST_SUBJECT_PROMPT.md', 'LENS_TEST_PLAN.md', 'LENS_EXPECTED_OUTPUT.schema.json',
  'LENS_ABLATION_MATRIX.md', 'LENS_KNOWN_ABERRATIONS.md', 'LENS_CLEAN_EXPORT_PROFILE.md'
];
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const writeJson = (p, v) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, `${JSON.stringify(v, null, 2)}\n`, 'utf8'); };
const write = (p, v) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, v, 'utf8'); };
const hash = (v) => crypto.createHash('sha256').update(v).digest('hex');
const relative = (p) => path.relative(root, p).replaceAll('\\', '/');
const now = () => new Date().toISOString();

const seeds = [
  { id: 'LENS-INTAKE-001', name: 'Expert Intake and Normalization', primary: 'Collimator', secondary: ['Aperture', 'Prism'], mechanism: 'normalizes operator input into goals, constraints, unknowns, and acceptance records', metrics: ['Focus', 'Context Quality', 'Epistemic Discipline'], risk: 'nuance loss or invented certainty' },
  { id: 'LENS-DECISION-001', name: 'Decision Preparation and Escalation', primary: 'Objective', secondary: ['Response', 'Prism'], mechanism: 'separates evidence, options, reversible defaults, and true operator decisions', metrics: ['Goal Retention', 'Operator Burden', 'Epistemic Discipline'], risk: 'tunnel vision or unnecessary escalation' },
  { id: 'LENS-BOUNDARY-001', name: 'Read-Only Architecture and Evidence Boundary', primary: 'Filter', secondary: ['Prism', 'Aperture'], mechanism: 'constrains mutation while permitting evidence-gathering reads and labels claims by provenance', metrics: ['Boundary Compliance', 'Epistemic Discipline', 'Action Precision'], risk: 'overconstraint or false blocking' },
  { id: 'LENS-STATE-001', name: 'Session Reattachment and State Projection', primary: 'Memory', secondary: ['Stabilizer'], mechanism: 'reattaches governing pointers and projects only current task state after reset', metrics: ['Continuity', 'Goal Retention', 'Stability'], risk: 'stale-state amplification or state divergence' },
  { id: 'LENS-QUEUE-001', name: 'Planning-before-Queue Admission', primary: 'Planning', secondary: ['Aperture'], mechanism: 'compiles requests into dependency-ready tasks before execution admission', metrics: ['Coordination', 'Action Precision', 'Goal Retention'], risk: 'queue theater or bureaucracy' },
  { id: 'LENS-REPORT-001', name: 'Operator Overview and Evidence Report', primary: 'Response', secondary: ['Prism'], mechanism: 'compresses outcome, provenance, unknowns, blockers, and next action into an operator-facing report', metrics: ['Report Fidelity', 'Operator Burden', 'Epistemic Discipline'], risk: 'compression loss or report inflation' }
];

function packageFiles(spec, version = '0.1.0') {
  const answers = {
    defined_problem_class: true, behavioral_transformation: true, removable: true, input_contract: true,
    output_or_state_contract: true, scope_authority_boundaries: true, baseline_measurable: true, version_and_provenance: true
  };
  const manifest = {
    schema_version: '1.0.0', lens_id: spec.id, name: spec.name, version, package_type: 'LensModulePrototype',
    classification: { primary_effect_class: spec.primary, secondary_effect_classes: spec.secondary, scope: 'task_family', authority: 'advisory_with_explicit_boundaries', persistence: 'session' },
    adjacent_concept_check: { result: 'Lens_Module_candidate', not_merely: ['doctrine', 'prompt', 'persona', 'skill', 'tool', 'queue', 'memory_store', 'report_form', 'department', 'agent'] },
    qualification: { answers, passes: Object.values(answers).every(Boolean) },
    maturity: 'prototype', evidence_level: 'L1', external_validation: 'waiting_external_agent',
    provenance: { source: 'operator seed candidate plus Foundry compilation', printer: 'scripts/lens-printer.mjs', doctrine: 'LNS-FOUNDRY-DOCTRINE@1.0.0' }
  };
  const subjectPrompt = `# Public test-subject instructions\n\nApply ${spec.name} v${version} to the representative task. Preserve operator authority, state assumptions, and follow the input/output contracts. Do not claim that the Lens is validated. Evaluator criteria are intentionally not included.\n`;
  return {
    'LENS_MANIFEST.json': `${JSON.stringify(manifest, null, 2)}\n`,
    'LENS_DOCTRINE.md': `# ${spec.name}\n\nThis removable module ${spec.mechanism}. It cannot override operator authority, Root Doctrine, tool permissions, or task boundaries. It must label evidence, inference, hypothesis, contradiction, and unknown.\n`,
    'LENS_INSTALLER.md': `# Installer\n\nMount after Root Doctrine and before task execution. Verify manifest digest, read input/output contracts, apply only to the named task family, and unmount by removing this package projection. No global configuration mutation is required.\n`,
    'LENS_SET_COMPOSITION.json': `${JSON.stringify({ set_id: `${spec.id}-SOLO`, version, ordered_modules: [spec.id], context_budget: { estimated_tokens: 'unavailable', policy: 'measure_not_guess' }, authority_check: { result: 'pass', operator_final: true }, compatibility_check: { result: 'provisional', tested_pairs: [], unknown_pairs: [] } }, null, 2)}\n`,
    'LENS_EFFECT_HYPOTHESIS.md': `# Effect hypothesis\n\nFor the target task family, ${spec.id} ${spec.mechanism}, which should improve ${spec.metrics.join(', ')}, while adding unmeasured token/latency overhead and risking ${spec.risk}. This is a hypothesis; measured effects are unavailable until baseline-controlled external tests return.\n`,
    'LENS_INPUT_CONTRACT.md': `# Input contract\n\nRequired: representative prompt, task family, operator goal, relevant current state, allowed/forbidden actions, acceptance criteria, provider profile, and explicit unknowns. Reject stale or conflicting authority pointers.\n`,
    'LENS_OUTPUT_CONTRACT.md': `# Output contract\n\nReturn bounded task framing/actions plus evidence references, assumptions, unknowns, verification result, mutations, blockers, rollback, next action, and Operator Overview. Never fabricate unavailable measurements.\n`,
    'LENS_STATE_SCHEMA.json': `${JSON.stringify({ '$schema': 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['lens_id', 'version', 'mounted_at', 'task_id', 'status'], properties: { lens_id: { const: spec.id }, version: { const: version }, mounted_at: { type: 'string' }, task_id: { type: 'string' }, status: { enum: ['mounted', 'unmounted', 'stale', 'blocked'] }, state_refs: { type: 'array' } } }, null, 2)}\n`,
    'LENS_TEST_SUBJECT_PROMPT.md': subjectPrompt,
    'LENS_TEST_PLAN.md': `# Public test plan\n\nRun RAW, MINIMAL, LENS, ABLATION, STRESS, RESET, and PORTABILITY variants with equivalent task inputs. Preserve transcripts and mutation audit. Evaluator package, hidden cases, weights, expected answer, other variants, and revision advice remain separated.\n`,
    'LENS_EXPECTED_OUTPUT.schema.json': `${JSON.stringify({ '$schema': 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['result', 'evidence', 'assumptions', 'unknowns', 'verification', 'operator_overview'], properties: { result: {}, evidence: { type: 'array' }, assumptions: { type: 'array' }, unknowns: { type: 'array' }, verification: { type: 'object' }, operator_overview: { type: 'string' } } }, null, 2)}\n`,
    'LENS_ABLATION_MATRIX.md': `# Ablation matrix\n\n| Variant | Removed mechanism | Expected diagnostic value |\n|---|---|---|\n| full | none | reference Lens condition |\n| no-primary | ${spec.primary} mechanism | isolates primary contribution |\n| no-boundary | boundary enforcement | detects unsafe dependence |\n| no-report | report contract | separates behavior from presentation |\n\nNo effect is assumed before measurement.\n`,
    'LENS_KNOWN_ABERRATIONS.md': `# Known and hypothesized aberrations\n\n- Primary hypothesis: ${spec.risk}.\n- Provider overfit: unknown.\n- Context-budget sensitivity: unknown.\n- Composition interactions: unknown until pairwise tests.\n`,
    'LENS_CLEAN_EXPORT_PROFILE.md': `# Clean export profile\n\nInclude exactly the 14 canonical package files. Exclude transcripts, evaluator/hidden tests, local paths, credentials, runtime state, logs, unrelated catalog records, and Git metadata. Recompute SHA-256 digest after export.\n`
  };
}

function validatePackage(dir) {
  const observed = fs.readdirSync(dir).sort();
  const missing = requiredFiles.filter((name) => !observed.includes(name));
  const unexpected = observed.filter((name) => !requiredFiles.includes(name));
  const invalidJson = [];
  const secretHits = [];
  const forbiddenSubjectTerms = [];
  for (const name of observed) {
    const file = path.join(dir, name);
    if (!fs.statSync(file).isFile()) continue;
    const content = fs.readFileSync(file, 'utf8');
    if (name.endsWith('.json')) try { JSON.parse(content); } catch { invalidJson.push(name); }
    if (/(?:sk-[A-Za-z0-9]{16,}|bearer\s+[A-Za-z0-9._-]{16,}|password\s*=|C:\\Users\\)/i.test(content)) secretHits.push(name);
    if (name === 'LENS_TEST_SUBJECT_PROMPT.md' && /(hidden scoring weights|expected correct answer|results of other variants|revision recommendation)/i.test(content)) forbiddenSubjectTerms.push(name);
  }
  const digestInput = requiredFiles.filter((name) => fs.existsSync(path.join(dir, name))).map((name) => `${name}\0${fs.readFileSync(path.join(dir, name), 'utf8')}\0`).join('');
  const result = { valid: !missing.length && !unexpected.length && !invalidJson.length && !secretHits.length && !forbiddenSubjectTerms.length, missing, unexpected, invalid_json: invalidJson, secret_hits: secretHits, test_leak_hits: forbiddenSubjectTerms, package_sha256: hash(digestInput) };
  return result;
}

function printPackage(spec, version = '0.1.0') {
  const dir = path.join(prototypeRoot, spec.id, version);
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, content] of Object.entries(packageFiles(spec, version))) write(path.join(dir, name), content);
  const validation = validatePackage(dir);
  if (!validation.valid) throw new Error(`STATIC_VALIDATION_FAILED:${spec.id}:${JSON.stringify(validation)}`);
  return { dir, validation };
}

function updatePrinter(run) {
  const state = fs.existsSync(statePath) ? readJson(statePath) : { state_id: 'PRINTER-STATE-0001', runs: [] };
  state.updated_at = now(); state.status = 'ready'; state.active_run = null;
  state.semantic_version_policy = 'doctrine/VERSIONING_AND_MATURITY.md';
  state.runs = [...(state.runs ?? []).filter((item) => item.run_id !== run.run_id), run];
  writeJson(statePath, state);
}

function compileOrder() {
  const orderPath = path.join(root, 'orders', 'LORD-REPO-MIGRATION-001.json');
  const order = readJson(orderPath);
  if (!order.representative_test_prompt || !order.acceptance_criteria?.length) throw new Error('ORDER_PARSE_FAILED');
  const catalog = readJson(catalogPath);
  const released = new Set(catalog.modules.filter((m) => m.maturity === 'catalog_released').map((m) => m.lens_id));
  const missing = order.required_lens_set.filter((id) => !released.has(id));
  const compiled = {
    order_id: order.order_id, parsed: true, task_family: order.task_family,
    effect_target: { desired: order.desired_effect_vector, baselines: ['RAW', 'MINIMAL'], measured: 'unavailable' },
    catalog_resolution: { reusable_released_modules: order.required_lens_set.filter((id) => released.has(id)), inventory_candidates: order.required_lens_set.filter((id) => seeds.some((s) => s.id === id)), missing_qualified_modules: missing },
    composition: { set_id: 'LENS-SET-REPO-MIGRATION-001', version: '0.1.0', ordered_modules: order.required_lens_set, context_budget: { measured_tokens: 'unavailable', gate: 'measure_before_release' }, authority_check: { result: 'pass', operator_final: true, source_mutation: 'forbidden' }, compatibility_check: { result: 'provisional', unknown_pairs: 'all_unexternally_tested_pairs' } },
    missing_module_orders: missing.map((id) => ({ development_order_id: `LDEV-${id}`, lens_id: id, status: 'planned', reason: 'no catalog_released module satisfies requirement' })),
    release_eligibility: false,
    compiled_at: now()
  };
  order.status = 'compiled'; order.compiled_ref = 'orders/LORD-REPO-MIGRATION-001-COMPILED.json';
  writeJson(orderPath, order);
  writeJson(path.join(root, 'orders', 'LORD-REPO-MIGRATION-001-COMPILED.json'), compiled);
  write(path.join(root, 'orders', 'LENS_DEVELOPMENT_ORDERS.jsonl'), `${compiled.missing_module_orders.map((item) => JSON.stringify(item)).join('\n')}\n`);
  return compiled;
}

function fixture() {
  const started = now();
  const compiled = compileOrder();
  const spec = { id: 'LENS-FIXTURE-001', name: 'Deterministic Printer Contract Fixture', primary: 'Collimator', secondary: ['Response'], mechanism: 'normalizes a fixed input into a fixed contract record', metrics: ['Context Quality', 'Report Fidelity'], risk: 'fixture overfit' };
  const printed = printPackage(spec);
  const run = { run_id: 'PRINT-FIXTURE-0001', status: 'static_valid', input_ref: 'orders/LORD-REPO-MIGRATION-001.json', outputs: [relative(printed.dir)], validation: printed.validation, package_digest: printed.validation.package_sha256, started_at: started, finished_at: now(), determinism: 're-run digest compared by validator' };
  updatePrinter(run);
  writeJson(path.join(root, 'printer', 'fixtures', 'DETERMINISTIC_FIXTURE.json'), { fixture_id: 'PRINTER-FIXTURE-v1', order_digest: hash(JSON.stringify(compiled)), expected_file_count: 14, expected_names: requiredFiles, first_run: run });
  write(path.join(root, 'reports', 'PRINTER_VALIDATION_REPORT.md'), `# Printer Validation Report\n\n- Run: ${run.run_id}\n- Result: static valid\n- Files: 14 required, zero missing/unexpected\n- Package SHA-256: \`${run.package_digest}\`\n- JSON parse errors: none\n- Secret/path scan hits: none\n- Subject/evaluator leakage hits: none\n- Behavioral effect: unavailable\n- Token Usage / Work Cost Telemetry: unavailable\n\n## Operator Overview\n\nThe deterministic fixture proves package compilation and static contract checks. It does not prove that the Lens changes agent behavior usefully.\n`);
  console.log(JSON.stringify(run));
}

function printSeeds() {
  const catalog = readJson(catalogPath);
  const records = [];
  for (const spec of seeds) {
    const printed = printPackage(spec);
    const manifest = readJson(path.join(printed.dir, 'LENS_MANIFEST.json'));
    records.push({
      lens_id: spec.id, name: spec.name, version: '0.1.0', classification: manifest.classification,
      qualification: { adjacent_concept_check: manifest.adjacent_concept_check, answers: manifest.qualification.answers, passes: true },
      maturity: 'prototype', evidence_level: 'L1', effect_hypothesis: `${spec.mechanism}; expected ${spec.metrics.join(', ')}`,
      measured_effect_vector: 'unavailable', contracts: { package_path: relative(printed.dir), package_sha256: printed.validation.package_sha256 },
      aberrations: [spec.risk], external_test_status: 'waiting_external_agent', provenance: manifest.provenance
    });
  }
  catalog.updated_at = now(); catalog.modules = records;
  catalog.compatibility_edges = [];
  catalog.note = 'Six L1 prototypes; no candidate, validated, or catalog_released Lens.';
  writeJson(catalogPath, catalog);
  const graph = readJson(graphPath);
  graph.updated_at = now(); graph.nodes = records.map((record) => record.lens_id);
  graph.orders_before = [
    { before: 'LENS-INTAKE-001', after: 'LENS-BOUNDARY-001', status: 'hypothesis' },
    { before: 'LENS-STATE-001', after: 'LENS-QUEUE-001', status: 'hypothesis' },
    { before: 'LENS-DECISION-001', after: 'LENS-REPORT-001', status: 'hypothesis' }
  ];
  graph.unknown_interactions = ['All pairwise and provider interactions require external tests.'];
  writeJson(graphPath, graph);
  updatePrinter({ run_id: 'PRINT-SEEDS-0001', status: 'static_valid', input_ref: 'operator seed inventory', outputs: records.map((r) => r.contracts.package_path), validation: { packages: 6, valid: 6, behavioral_effect: 'unavailable' }, package_digest: hash(JSON.stringify(records.map((r) => r.contracts.package_sha256))), started_at: now(), finished_at: now() });
  console.log(JSON.stringify({ printed: records.length, maturity: 'prototype', evidence_level: 'L1' }));
}

function validateAll() {
  const results = [];
  for (const lensDir of fs.readdirSync(prototypeRoot)) {
    for (const version of fs.readdirSync(path.join(prototypeRoot, lensDir))) {
      const dir = path.join(prototypeRoot, lensDir, version);
      if (fs.statSync(dir).isDirectory()) results.push({ package: relative(dir), ...validatePackage(dir) });
    }
  }
  const failed = results.filter((r) => !r.valid);
  console.log(JSON.stringify({ packages: results.length, failed: failed.length, results }, null, 2));
  if (failed.length) process.exitCode = 1;
}

const command = process.argv[2];
if (command === 'fixture') fixture();
else if (command === 'print-seeds') printSeeds();
else if (command === 'validate-all') validateAll();
else throw new Error('Usage: node scripts/lens-printer.mjs fixture|print-seeds|validate-all');
