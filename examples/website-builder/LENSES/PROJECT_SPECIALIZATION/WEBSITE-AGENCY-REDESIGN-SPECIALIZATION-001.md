# WEBSITE-AGENCY-REDESIGN-SPECIALIZATION-001

Version: `0.1.0`
Maturity: `prototype`
Group: `10_PROJECT_SPECIALIZATION`
Context loading: `ON_DEMAND`

## Single responsibility

Route agency redesign intake without hard-coding the operator and Anya's agency facts.

## Activation

Project type is AGENCY_WEBSITE_REDESIGN.

## Governing rule

Elicit positioning, services, proof, work, lead qualification, recruiting, and preserves only as relevant.

## Non-goal

Do not assume agency name, audience, services, stack, or desired goals.

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
