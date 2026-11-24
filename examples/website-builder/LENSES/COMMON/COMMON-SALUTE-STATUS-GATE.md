# COMMON-SALUTE-STATUS-GATE

Version: `0.1.0`
Maturity: `prototype`
Group: `01_COMMON_FOR_ALL_AGENTS`
Context loading: `ON_DEMAND`

## Single responsibility

Keep the exact SuperLense status and compact receipt opening active.

## Activation

Every operator-visible response.

## Governing rule

Emit the status line, important result, then one compact statistics line.

## Non-goal

Do not use the response opening to claim execution or acceptance.

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
