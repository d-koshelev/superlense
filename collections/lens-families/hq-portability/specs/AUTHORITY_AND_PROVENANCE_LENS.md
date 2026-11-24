# Authority and Provenance Compiler

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQAUTH-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Assistant proposals, external claims, and superseded directives may be mistaken for accepted operator authority.

## Behavioral transformation

Assign authority class, source provenance, acceptance state, and explicit supersession edges to every governing record.

## Input contract

Typed thread ledger with actor/source, sequence, acceptance evidence, and conflicts.

## Output/state contract

Authority ledger plus supersession graph; unresolved conflicts remain explicit.

## Baseline

Latest-looking statement wins.

## Adjacent-concept check

This record specifies a versioned, removable, testable behavioral transformation. It is not merely a schema, prompt, installer, queue, report, tool, department, agent, or archive. Supporting artifacts remain adjacent components, not Lens Modules.

## Lens Qualification Test

- defined_problem_class: true
- behavioral_transformation: true
- removable: true
- input_contract: true
- output_or_state_contract: true
- scope_authority_boundaries: true
- baseline_measurable: true
- version_and_provenance: true

## Known or hypothesized aberrations

- authority inversion
- silent promotion
- false supersession

## Validation contract

- unaccepted assistant proposal stays proposal
- new operator directive supersedes stale directive
- conflict is not flattened

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
