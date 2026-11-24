# Coordination Queue and Decision Lens

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: reuse `LENS-QUEUE-001@0.1.0` + `LENS-DECISION-001@0.1.0`
- Status: reused seed prototypes/L1; no maturity change
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Project-local task lists can be promoted accidentally into the Headquarters canonical queue, and proposals can appear as decisions.

## Behavioral transformation

Preserve Planning-before-Queue admission, tag queue scope, and separate accepted decisions from proposals and pending operator choices.

## Input contract

Authority ledger, project registry, queue records, decision records.

## Output/state contract

HQ coordination queue, project-local queue references, decision ledger, and explicit admission status.

## Baseline

Concatenated task lists and recommendations.

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

- queue theater
- local-queue promotion
- unnecessary escalation

## Validation contract

- project-local queue remains local
- only accepted HQ tasks enter HQ queue
- proposal remains noncanonical

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
