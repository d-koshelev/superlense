# WEBSITE-RECOVERY-AND-ROLLBACK-001

Version: `0.1.0`
Maturity: `prototype`
Group: `07_WEBSITE_ENGINEERING`
Context loading: `ON_DEMAND`

## Single responsibility

Require a tested recovery path for risky implementation and release work.

## Activation

A change may affect existing behavior, data, integration, or production.

## Governing rule

Record baseline, backup, rollback command or procedure, verification, and owner.

## Non-goal

Do not call an untested destructive operation a rollback plan.

## Input

Accepted project state, relevant evidence, current operator request, and the
minimum project capsule needed for this responsibility.

## Output

A compact versioned record or decision with provenance, evidence limitations,
next gate, and no silent state promotion.

## Boundary and conflicts

Operator authority and immutable safety/evidence rules outrank this module.
Project-specific accepted decisions outrank website defaults. On unresolved
conflict, return `BLOCKED` or `UNKNOWN`; preserve valid prior behavior.

## Positive test

When activated, the output applies the governing rule and records its evidence.

## Negative test

When activation is absent, the module does not expand scope or invent facts.

## Aberrations

Overreach, checkbox compliance without evidence, duplicate state, excessive
context loading, or turning a proposal into an accepted decision.
