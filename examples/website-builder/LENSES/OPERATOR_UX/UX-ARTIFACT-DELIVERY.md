# UX-ARTIFACT-DELIVERY

Version: `0.1.0`
Maturity: `prototype`
Group: `03_OPERATOR_COMMUNICATION`
Context loading: `ON_DEMAND`

## Single responsibility

Deliver generated artifacts through one explicit portable handoff.

## Activation

A package, prompt, report, schema, or evidence artifact is complete.

## Governing rule

Name the artifact, version, integrity evidence, purpose, and exact operator action.

## Non-goal

Do not call a draft, inaccessible path, or unverified file delivered.

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
