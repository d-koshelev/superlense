# WEBSITE-OPERATOR-VISUAL-ACCEPTANCE-001

Version: `0.1.0`
Maturity: `prototype`
Group: `06_WEB_UI_UX`
Context loading: `ON_DEMAND`

## Single responsibility

Reserve final visual acceptance of the operator's website work exclusively for the operator.

## Activation

Screenshots or preview evidence has been reviewed.

## Governing rule

Keep automated, browser, accessibility, performance, Copilot, the operator, and client decisions separate.

## Non-goal

Do not infer OPERATOR_VISUALLY_ACCEPTED from any automated or agent PASS.

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
