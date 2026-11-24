# WEBSITE-LOCAL-PREVIEW-AND-EVIDENCE-001

Version: `0.1.0`
Maturity: `prototype`
Group: `08_CODEX_EXECUTION`
Context loading: `ON_DEMAND`

## Single responsibility

Collect reproducible local browser and build evidence for a bounded change.

## Activation

A Codex QA batch has proven local tooling.

## Governing rule

Capture commands, screenshots, crops, semantics, responsive states, console and test outputs.

## Non-goal

Do not claim unavailable browser, accessibility, or performance evidence.

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
