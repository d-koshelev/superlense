# Lense — Canonical Definition and Lens Taxonomy v1

Status: `canonical terminology candidate`
Purpose: `define exactly what a Lens is, distinguish it from adjacent concepts, and provide a classification for the Lense Foundry catalog`
Authority: `Operator / Root Lense`
Validation status: `requires Foundry baseline testing before canonical promotion`

---

# 1. Canonical Terms

## 1.1 Base Agent

The model/runtime that performs inference and actions.

Examples:

```text
ChatGPT thread
Codex session
Claude agent
local model
tool-using worker
```

The Base Agent is the light source in the optical metaphor.

It is not a Lens.

## 1.2 Doctrine

A versioned set of rules, priorities, authority relations, epistemic rules, boundaries, and invariants.

Doctrine answers:

```text
what is important
what is allowed
what is prohibited
who decides
what counts as evidence
what must be reported
```

Doctrine is the **optical geometry and coating specification**.

Doctrine alone is not necessarily a complete Lens.

## 1.3 Lens Element

One atomic mechanism that changes agent behavior.

Examples:

```text
context selector
privacy filter
evidence classifier
tool boundary
acceptance checker
state restorer
handoff filter
```

A Lens Element may be too small to use independently.

## 1.4 Lens Module

A versioned, removable, testable behavioral transformation mounted between an operator/project state and a Base Agent.

A Lens Module must:

1. target a defined problem class;
2. transform at least one of:
   - active context;
   - task representation;
   - goals/priorities;
   - evidence interpretation;
   - action/tool policy;
   - state continuity;
   - evaluation/output;
3. expose an input contract;
4. expose an output or state-update contract;
5. define scope and non-scope;
6. define authority and boundaries;
7. produce a measurable effect against a baseline;
8. have version and provenance.

Short definition:

> A Lens Module is a testable transformation that changes how an agent sees, frames, acts on, verifies, or preserves a class of tasks.

## 1.5 Lens Set

An ordered composition of Lens Modules required for one task class or component.

```text
Lens Set =
Intake
+ Focus
+ Evidence
+ Boundary
+ Planning
+ Tool
+ Verification
+ Report
+ Recovery
```

The order matters.

Two individually valid lenses may conflict when composed.

## 1.6 Mission Lense

A task- or worker-bound Lens Set plus:

```text
identity
task
relevant state
knowledge projection
tool permissions
acceptance criteria
report contract
lease/expiration
```

A Mission Lense is the complete working optical assembly mounted onto one agent run.

## 1.7 Root Lense

The whole operator-governed control plane:

```text
authority
doctrine
catalog
planning
queue
knowledge
workers
reports
state
evaluation
portability
```

The Root Lense is better compared to an adaptive optical bench than to one glass lens.

## 1.8 Meta-Lens

A Lens Module that observes or modifies Lens selection, composition, calibration, testing, or recovery.

Examples:

```text
Lens Selector
Aberration Detector
Context Budget Optimizer
Provider Calibration Lens
Lens Failure Analyzer
```

---

# 2. Formal Model

Let:

```text
M = Base Agent
x = operator input or task
s = project state
e = environment/tools
L = Lens Module or Lens Set
```

A Lens can be represented as:

```text
L = <Trigger, Scope, Selector, Frame, Policy, StateProjection,
     Affordances, Verification, OutputContract, UpdateRule>
```

The lensed run is:

```text
c = Selector(x, s)
r = Frame(c, Scope)
a = M(r, Policy, StateProjection(s), Affordances(e))
v = Verification(a)
y = OutputContract(a, v)
s' = UpdateRule(s, y)
```

The Lens effect is not the output alone.

It is the measured difference from a baseline:

```text
Effect(L) =
Metrics(Lensed Run)
-
Metrics(Baseline Run)
```

A Lens can have:

```text
positive effects
neutral effects
negative effects
trade-offs
```

A Lens that has never been compared with a baseline is a hypothesis or prototype, not a validated technology.

---

# 3. Does the Term “Lens” Apply?

## Yes — with a strict definition

The term is appropriate because the system:

- selects a subset of the available field;
- changes the representation seen by the agent;
- concentrates work on a target;
- excludes or attenuates irrelevant/unsafe paths;
- requires calibration;
- can introduce aberrations;
- can be composed with other lenses;
- can be removed or replaced while preserving the Base Agent.

## But not every prompt or rule is a Lens

The term should not be used merely because instructions were written.

Use this distinction:

```text
Rule:
one constraint

Doctrine:
a governed rule system

Prompt:
one serialized invocation

Role/Persona:
a behavioral framing

Skill:
a procedure or tool-use capability

Memory:
stored state

Queue:
work-state and dependencies

Agent:
execution substrate

Lens:
a modular tested transformation across input/context/policy/action/evaluation

Lense:
the complete governed system that composes lenses
```

## Doctrine and focus

Doctrine creates **policy focus**:

```text
prefer this
forbid that
preserve this authority
use this evidence standard
```

Doctrine does not automatically create **task focus**.

Task focus also needs:

```text
context selection
goal definition
acceptance criteria
state projection
action boundaries
verification
```

Therefore:

```text
Doctrine is usually a necessary Lens element.
Doctrine is not sufficient to be a complete Lens.
```

---

# 4. Primary Classification by Optical Effect

Every Lens Module has one primary class and zero or more secondary classes.

## LENS-A — Aperture / Intake Lens

Effect:

```text
controls what enters active work
```

Transforms:

```text
free-form input
-> bounded intake record
```

Examples:

- Operator Intake Lens
- Expert Intake and Normalization Lens
- File Intake Lens
- Request Triage Lens

Primary metrics:

```text
intent capture
missing-input detection
scope precision
operator burden
```

Failure mode:

```text
important signal excluded
irrelevant noise admitted
```

## LENS-F — Filter / Boundary Lens

Effect:

```text
attenuates forbidden, unsafe, private, irrelevant, or out-of-scope paths
```

Examples:

- Read-Only Boundary Lens
- Privacy Lens
- Mutation Scope Lens
- Clean Export Lens
- Tool Guard Lens

Primary metrics:

```text
boundary compliance
false blocking
unsafe action rate
tool precision
```

Failure mode:

```text
under-filtering
over-filtering
authority inversion
```

## LENS-C — Collimator / Normalization Lens

Effect:

```text
turns irregular input into aligned typed representations
```

Examples:

- Unit Normalization Lens
- Scientific Claim Normalization Lens
- Repository Structure Normalizer
- Expert Update Normalizer

Primary metrics:

```text
classification accuracy
unit/reference-plane consistency
ambiguity reduction
record completeness
```

Failure mode:

```text
normalization destroys nuance
assumption promoted to fact
```

## LENS-P — Prism / Epistemic Separation Lens

Effect:

```text
separates mixed information into distinct epistemic channels
```

Separates:

```text
evidence
inference
hypothesis
decision
AI proposal
local measurement
accepted knowledge
contradiction
unknown
```

Examples:

- Evidence Classification Lens
- Creator/AI Separation Lens
- Local/Literature Evidence Lens
- Canon Promotion Lens

Primary metrics:

```text
epistemic classification accuracy
provenance coverage
false promotion rate
contradiction detection
```

Failure mode:

```text
AI synthesis becomes operator intent
literature becomes local fact
```

## LENS-O — Objective / Focusing Lens

Effect:

```text
concentrates the agent on one objective and its acceptance criteria
```

Examples:

- Mission Objective Lens
- RP5 Optimization Lens
- Migration Planning Lens
- Chapter Pilot Lens

Primary metrics:

```text
goal retention
acceptance-criteria coverage
scope drift
priority adherence
```

Failure mode:

```text
overfocus hides important dependencies
objective drifts across turns
```

## LENS-Z — Zoom / Abstraction Lens

Effect:

```text
changes granularity, time horizon, or system boundary
```

Examples:

- Executive Summary Lens
- Component Detail Lens
- Strategic Roadmap Lens
- Minimal Reproducer Lens

Primary metrics:

```text
appropriate abstraction
compression without information loss
decision usefulness
```

Failure mode:

```text
too abstract to act
too detailed to decide
```

## LENS-M — Memory / State Projection Lens

Effect:

```text
selects and reconstructs the relevant project state for the current task
```

Examples:

- Session Reattachment Lens
- Mission Snapshot Lens
- Canon State Lens
- Queue History Lens
- Research Runtime Lens

Primary metrics:

```text
state reconstruction fidelity
stale-state rate
context purity
cross-session recovery
```

Failure mode:

```text
stale state overrides current truth
important state omitted
```

## LENS-T — Trajectory / Planning Lens

Effect:

```text
turns goals into ordered tasks, dependencies, priorities, and gates
```

Examples:

- Planning Lens
- Queue Admission Lens
- Experiment DOE Lens
- Component Lens-Set Planner

Primary metrics:

```text
dependency correctness
task granularity
blocked-work detection
replanning quality
```

Failure mode:

```text
queue theater
over-decomposition
serial bottleneck missed
```

## LENS-ACT — Actuation / Tool Lens

Effect:

```text
selects, enables, and constrains actions and tools
```

Examples:

- Repository Tool Lens
- Web Research Lens
- Fabrication Planning Lens
- Code Patch Lens
- Test Execution Lens

Primary metrics:

```text
tool precision
successful action rate
mutation-scope compliance
cost
```

Failure mode:

```text
tool misuse
action without evidence
unnecessary action
```

## LENS-S — Sensor / Verification Lens

Effect:

```text
observes outputs and compares them with acceptance criteria or oracles
```

Examples:

- Regression Lens
- Scientific Reproducibility Lens
- External Test Lens
- Fact Verification Lens
- Playtest Lens

Primary metrics:

```text
defect detection
false pass/fail rate
reproducibility
oracle quality
```

Failure mode:

```text
tests validate the wrong thing
metric gaming
```

## LENS-R — Response / Presentation Lens

Effect:

```text
projects complex internal state into an operator-appropriate result
```

Examples:

- Operator Overview Lens
- Decision Card Lens
- Executive Report Lens
- Control Deck Projection Lens

Primary metrics:

```text
decision usefulness
report fidelity
information density
operator burden
```

Failure mode:

```text
summary hides uncertainty
presentation becomes source of truth
```

## LENS-STAB — Stabilization / Recovery Lens

Effect:

```text
preserves task identity and valid state across interruption, compaction, failure, or migration
```

Examples:

- Bootstrap Lens
- Context Compaction Recovery Lens
- Lease Recovery Lens
- Rollback Lens
- Portable Runtime Lens

Primary metrics:

```text
recovery fidelity
state divergence
time to resume
rollback success
```

Failure mode:

```text
session appears attached but is stale
silent state replacement
```

## LENS-BS — Beam Splitter / Coordination Lens

Effect:

```text
decomposes and routes independent work to specialists
```

Examples:

- Handoff Lens
- Worker Assignment Lens
- Research Wave Lens
- Department Routing Lens

Primary metrics:

```text
routing accuracy
parallel efficiency
duplicate-work rate
handoff loss
```

Failure mode:

```text
fictional parallelism
duplicate claims
specialist mismatch
```

## LENS-BC — Beam Combiner / Integration Lens

Effect:

```text
merges outputs from multiple tasks, agents, or evidence streams
```

Examples:

- Merge Review Lens
- System Integration Lens
- Canon Merge Lens
- Research Synthesis Lens

Primary metrics:

```text
conflict detection
provenance preservation
integration correctness
information loss
```

Failure mode:

```text
conflicts silently flattened
summary overwrites source evidence
```

## LENS-X — Aberration Correction / Meta-Lens

Effect:

```text
detects and corrects failure in Lens selection, composition, calibration, or measurement
```

Examples:

- Lens Failure Analyzer
- Context Budget Optimizer
- Provider Calibration Lens
- Doctrine Conflict Detector
- Lense Improvement Observer

Primary metrics:

```text
failure localization
revision success
regression rate
calibration transfer
```

Failure mode:

```text
meta-system optimizes its own metrics rather than task success
```

---

# 5. Classification by Scope

```text
Turn Lens
- one response

Session Lens
- one conversation/session

Mission Lens
- one bounded task or run

Project Lens
- one long-lived project domain

Component Lens
- one Copilot component

Provider Lens
- calibration for a model/provider

Root Lens
- whole governed workspace

Meta-Lens
- manages other lenses
```

---

# 6. Classification by Authority

```text
Advisory
- proposes, does not block

Default
- used unless explicitly overridden

Mandatory
- required for a task class

Blocking
- can prevent execution or promotion

Sovereign/Root
- defines authority and invariants for the whole Lense
```

A low-level Lens must not override a higher-authority Lens.

---

# 7. Classification by Persistence

```text
Stateless
- transforms one input/output only

Ephemeral State
- maintains state for one run

Session State
- persists within a thread/session

Project State
- reads/writes versioned project records

Portable State
- can export/import validated state across sessions
```

---

# 8. Classification by Maturity

```text
concept
draft
prototype
experimental
candidate
validated
catalog_released
limited_release
deprecated
superseded
rejected
```

Names such as “Research Lens” or “Decision Lens” describe purpose, not maturity.

---

# 9. Lens Qualification Test

A candidate is a Lens Module only if all mandatory conditions are answered.

## Mandatory

1. What problem class triggers it?
2. What input does it consume?
3. What transformation does it perform?
4. What output/state change does it produce?
5. What is outside scope?
6. What authority and tool boundaries apply?
7. How can its effect be measured against a baseline?
8. How is it versioned and reproduced?

## Classification

```text
0–2 answered:
rule, note, or idea

3–4 answered:
prompt pattern or role profile

5–7 answered:
Lens prototype

8 answered + external test:
candidate Lens

8 answered + reproducible regression evidence:
validated Lens
```

---

# 10. Existing Lense Objects Reclassified

## Doctrine

```text
Not a Lens by itself.
Usually a Policy/Boundary Lens element.
```

## Queue

```text
Not a Lens.
A state machine and work ledger.

Queue Admission Lens and Queue Projection Lens are lenses.
```

## Knowledge registry

```text
Not a Lens.
A state/data source.

Knowledge Retrieval Lens and Epistemic Separation Lens are lenses.
```

## Skill

```text
Not necessarily a Lens.
A procedure/action capability.

A Tool Lens decides when and how the skill may be used.
```

## Department

```text
Not a Lens.
An ownership and responsibility structure.

A Routing Lens sends work to it.
```

## Report form

```text
Not a Lens.
An output contract.

A Report/Response Lens applies the contract.
```

## Persona or title

```text
Usually not a Lens.
It becomes a Lens only if it has contracts, state, boundaries, and measurable effects.
```

## “Material and Rare-Earth Lense”

It is a valid **Lens family name**, but it is a real Lens Module only when it defines:

```text
trigger
input evidence
material candidate records
screening transformations
outputs
uncertainty
tests
decision effect
```

Otherwise it is a department role or research perspective.

---

# 11. Recommended Catalog Fields

Every catalog entry should include:

```text
lens_id
name
primary_effect_class
secondary_effect_classes
scope_class
authority_class
persistence_class
maturity
problem_classes
trigger
input_contract
transformation_contract
state_projection
action_affordances
verification_contract
output_contract
update_rule
dependencies
incompatible_with
effect_vector
baseline
test_suite
known_aberrations
cost_overhead
version
provenance
```

---

# 12. Canonical Short Definition

Public:

> A Lens focuses an AI agent on a class of problems.

Technical:

> A Lens Module is a versioned and testable transformation that selects context, frames a task, applies doctrine and state, constrains actions, and verifies outputs to produce a measurable behavioral effect relative to a baseline agent.

System-level:

> Lense is the operator-governed control plane that selects, composes, tests, and evolves Lens Modules around AI agents.

---

# 13. Central Design Rule

```text
Do not name something a Lens because it sounds specialized.

Name it a Lens only when:
- the transformation is explicit;
- the effect is measurable;
- the boundaries are defined;
- the module can be tested, versioned, removed, and composed.
```
