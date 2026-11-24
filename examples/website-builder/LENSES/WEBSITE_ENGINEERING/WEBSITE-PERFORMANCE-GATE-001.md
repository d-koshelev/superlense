# WEBSITE-PERFORMANCE-GATE-001

Version: `0.1.0`
Maturity: `prototype`
Group: `07_WEBSITE_ENGINEERING`
Context loading: `ON_DEMAND`

## Single responsibility

Treat measurable website performance risks as an independent release gate.

## Activation

Implementation, QA, or release review is active.

## Governing rule

Check bundle, images, fonts, layout shift, largest content, interaction latency, caching, and third parties.

## Non-goal

Do not merge performance with accessibility acceptance or invent unavailable scores.

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
