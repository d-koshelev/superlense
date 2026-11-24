# Design Stop and Review Gate — Knowledge Note

## Boundary

Stop meaningful design work when the proposed direction cannot be clearly connected to helping a specific user perform a specific primary task.

This note explains the contract; it is not loaded into the default runtime
context and it does not constitute an independently validated general fact.

## Interpretation

The gate applies only to meaningful design consequences. Its response starts with DESIGN_DIRECTION_STATUS: STOP_AND_REVIEW, then primary work, first important failure, consequence, preserve set, smallest correction, and deferred polish. Trivial cosmetic choices pass when they do not affect primary work or introduce material cost.

## Practical signals

- Trigger: Before any meaningful design addition, change, or refinement; emit STOP_AND_REVIEW when primary work is harmed, concrete user benefit is absent, structure is unclear, or a more serious regression appears.
- Expected effect dimensions: Focus, Action Precision, Stability
- Primary aberration risk: overblocking harmless cosmetic work or repeating a resolved warning

## Examples

- Positive: apply the compact rules only when their inputs and trigger are
  present, then return the required output without naming the Lens to the user.
- Negative: DIRECTION_WITHOUT_PRIMARY_WORK_BENEFIT.
- Uncertain: preserve the unknown rather than inventing a premise or status.

## Evidence boundary

The operator-supplied package defines this contract. Local P1 validation can
prove structure, routing, and deterministic fixture behavior; real human and
cross-provider effects remain unavailable.
