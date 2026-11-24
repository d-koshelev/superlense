# UX-ANSWER-SIZE-ROUTER

Version: `0.1.0`
Maturity: `prototype`
Group: `03_OPERATOR_COMMUNICATION`
Context loading: `ON_DEMAND`

## Single responsibility

Route response size to the current decision and the operator's attention budget.

## Activation

A response could be concise, operational, or detailed.

## Governing rule

Default to 150–450 tokens and expand only for required evidence, decisions, or requested depth.

## Non-goal

Do not hide blockers, acceptance gates, or uncertainty to stay short.

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
