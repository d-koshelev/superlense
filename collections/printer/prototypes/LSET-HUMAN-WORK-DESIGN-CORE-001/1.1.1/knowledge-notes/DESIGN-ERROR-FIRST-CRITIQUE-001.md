# Error-First Critique — Knowledge Note

## Boundary

Find and correct hard failures before polishing or amplifying strengths.

This note explains the contract; it is not loaded into the default runtime
context and it does not constitute an independently validated general fact.

## Interpretation

Error-first is a severity discipline, not a negative tone. Preserve records stop a correction from erasing a working decision; regression evidence decides whether the fix is safe.

## Practical signals

- Trigger: Review, critique, redesign, debugging, validation, and acceptance work.
- Expected effect dimensions: Action Precision, Verification Strength, Stability
- Primary aberration risk: negativity bias or treating taste as correctness

## Examples

- Positive: apply the compact rules only when their inputs and trigger are
  present, then return the required output without naming the Lens to the user.
- Negative: PRAISE_BEFORE_DIAGNOSIS.
- Uncertain: preserve the unknown rather than inventing a premise or status.

## Evidence boundary

The operator-supplied package defines this contract. Local P1 validation can
prove structure, routing, and deterministic fixture behavior; real human and
cross-provider effects remain unavailable.
