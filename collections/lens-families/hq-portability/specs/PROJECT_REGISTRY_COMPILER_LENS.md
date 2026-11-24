# Project Registry Compiler

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQPROJECT-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Multiple projects have separate current states, returns, blockers, and next actions that can drift or be merged incorrectly.

## Behavioral transformation

Compile one bounded registry row per project with latest accepted return, decisions, blockers, next action, and local-queue reference.

## Input contract

Authority-qualified thread ledger and artifact graph.

## Output/state contract

HQ_PROJECT_REGISTRY with stable project IDs and freshness/provenance markers.

## Baseline

Narrative multi-project recap.

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

- project conflation
- stale latest-return selection
- lost blocker

## Validation contract

- five projects retained
- stale return rejected
- each project has exact next action or unavailable

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
