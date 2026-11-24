# Canonical State and Integrity Lens

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQINTEGRITY-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Runtime identity, snapshot version, canonical state hash, manifest hash, and ZIP hash can be conflated.

## Behavioral transformation

Canonicalize constrained JSON deterministically and compute each integrity identifier over its explicitly defined byte domain.

## Input contract

Typed canonical-state object, manifest core, runtime build metadata, final ZIP bytes.

## Output/state contract

Canonical JSON bytes and five non-aliased identifier fields with algorithms and domains.

## Baseline

Ad hoc JSON serialization and one ambiguous hash.

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

- hash-domain ambiguity
- nondeterministic key order
- self-referential ZIP hash

## Validation contract

- two independent loads match
- five identifiers distinct fields
- tamper changes expected hash only

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
