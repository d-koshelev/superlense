# Restore Verification Lens

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQRESTORE-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

An archive can be intact at ZIP level but semantically stale, unauthorized, incomplete, or conflict-laden.

## Behavioral transformation

Verify ZIP receipt, manifest checksums, canonical state hash, schemas, authority, supersession, project counts, conflicts, and missing artifacts before synchronization.

## Input contract

Runtime archive, external ZIP receipt, expected schemas, and optional prior canonical state.

## Output/state contract

RestoreVerificationReport with pass/hold/fail gates and exact discrepancies.

## Baseline

Archive opens successfully.

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

- false synchronization
- manifest-only trust
- ignored conflict

## Validation contract

- tampered state rejected
- missing artifact reported
- correct fixture returns expected counts

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
