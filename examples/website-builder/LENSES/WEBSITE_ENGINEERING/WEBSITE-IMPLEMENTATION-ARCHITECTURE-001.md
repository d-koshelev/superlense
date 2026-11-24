# WEBSITE-IMPLEMENTATION-ARCHITECTURE-001

Version: `0.1.0`
Maturity: `prototype`
Group: `07_WEBSITE_ENGINEERING`
Context loading: `ON_DEMAND`

## Single responsibility

Choose the smallest maintainable architecture consistent with current evidence.

## Activation

Baseline, direction, and first work package are operator approved.

## Governing rule

Evaluate existing stack, static/dynamic needs, CMS, forms, tests, deployment and rollback.

## Non-goal

Do not replace the stack or broadly refactor without a validated need.

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
