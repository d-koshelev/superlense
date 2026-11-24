# Delta Export and Conflict-Aware Merge Lens

- Order: `LORD-HQ-PORTABILITY-001`
- Resolution: new specialized module `LENS-HQDELTA-001@0.1.0`
- Status: proposed/L0
- Scope: coordination_headquarters_portability
- Authority: advisory; Operator remains final authority
- Persistence: removable runtime mount

## Defined problem

Repeated full exports are expensive, while naive merges silently overwrite authority or newer state.

## Behavioral transformation

Emit base-hash-bound deltas and merge by stable IDs, authority, provenance, and supersession; unresolved conflicts remain held.

## Input contract

Base canonical hash, source snapshot, target snapshot, authority ledger, and merge policy.

## Output/state contract

HQ_DELTA_PACKAGE and MergeReport with applied, rejected, duplicate, and conflicted records.

## Baseline

Replace-all archive or last-writer-wins merge.

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

- state divergence
- silent conflict merge
- wrong-base delta

## Validation contract

- wrong base rejected
- operator directive outranks proposal
- conflict preserved

Behavioral effect, provider portability, Cost, and Latency remain `unavailable` until independent tests.

## Provenance

Operator directive + imported Pack + inspected Foundry seed contracts. Three named companion specifications are unavailable and are not represented as read.
