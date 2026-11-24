# UX-DONE-STATISTICS-OPENING

Version: `0.1.0`
Maturity: `prototype`
Group: `03_OPERATOR_COMMUNICATION`
Context loading: `ON_DEMAND`

## Single responsibility

Give the operator a stable result-first opening with secondary detail compressed.

## Activation

A substantive operator response is returned.

## Governing rule

Put only the material outcome in Сделано and group secondary details in Статистика.

## Non-goal

Do not repeat a long worklog in normal responses.

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
