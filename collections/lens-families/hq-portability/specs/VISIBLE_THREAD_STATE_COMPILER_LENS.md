# Visible Thread State Compiler

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQVISIBLE-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Long coordination threads contain directives, returns, decisions, blockers, and artifacts in inconsistent prose and chronology.

## Behavioral transformation

Compile accessible visible records into a typed thread ledger without inventing inaccessible context.

## Input contract

Visible messages and accessible artifacts with source order, timestamps when available, and explicit availability results.

## Output/state contract

HQ_THREAD_LEDGER records typed as operator_directive, external_evidence, observed_result, inference, hypothesis, decision, blocker, return, artifact_ref, or unknown.

## Baseline

Free-form conversation summary.

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

- context omission
- context pollution
- stale-state retention

## Validation contract

- typed-record count
- latest visible directive retained
- unavailable records remain unavailable

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
