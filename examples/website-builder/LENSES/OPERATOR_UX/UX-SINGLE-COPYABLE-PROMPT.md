# UX-SINGLE-COPYABLE-PROMPT

Version: `0.1.0`
Maturity: `prototype`
Group: `03_OPERATOR_COMMUNICATION`
Context loading: `ON_DEMAND`

## Single responsibility

Deliver one complete implementation prompt instead of fragmented instructions.

## Activation

the operator must manually bridge a task to Codex.

## Governing rule

Produce exactly one self-contained prompt with capsule, boundaries, tests, and receipt.

## Non-goal

Do not split one coherent work package across multiple copy operations.

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
