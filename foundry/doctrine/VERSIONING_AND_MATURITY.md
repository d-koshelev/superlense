# Lens versioning and maturity policy

Lens packages use Semantic Versioning:

- PATCH: compatible contract clarification or defect correction;
- MINOR: compatible behavior/capability addition requiring regression;
- MAJOR: incompatible input/output, authority, state, or composition change.

## State machine

`proposed -> prototype -> candidate -> validated -> catalog_released -> deprecated -> superseded`

- `prototype`: complete static package, L1.
- `candidate`: at least one independent external scenario, L2.
- `validated`: repeated external evidence plus regression, L3.
- `catalog_released`: L4, compatibility record, clean export, release review.
- Critical use also requires L5 and human review.

Rejection and conflict are orthogonal terminal review outcomes. Supersession retains the prior package and provenance. No bootstrap process automatically promotes a Lens.

