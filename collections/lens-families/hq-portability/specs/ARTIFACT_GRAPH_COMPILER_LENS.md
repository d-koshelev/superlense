# Artifact Graph Compiler

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQARTIFACT-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Named artifacts may be inaccessible, missing, stale, superseded, or dependent on other files.

## Behavioral transformation

Compile an artifact graph with availability, content hash when accessible, source, project ownership, dependency, privacy, and supersession edges.

## Input contract

Accessible artifact bytes/metadata and explicit failed-access observations.

## Output/state contract

HQ_ARTIFACT_MANIFEST with accessible, missing, unavailable, superseded, and redacted nodes.

## Baseline

List of filenames.

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

- access fabrication
- orphaned dependency
- hashing a name instead of content

## Validation contract

- one missing artifact retained
- accessible files hashed
- inaccessible content never synthesized

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
