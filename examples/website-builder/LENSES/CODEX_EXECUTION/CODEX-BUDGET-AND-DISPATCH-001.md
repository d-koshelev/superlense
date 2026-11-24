# CODEX-BUDGET-AND-DISPATCH-001

Version: `0.1.0`
Maturity: `prototype`
Group: `08_CODEX_EXECUTION`
Context loading: `ON_DEMAND`

## Single responsibility

Invoke Codex only for necessary local evidence or execution and track its cost.

## Activation

A task may require repository access, deterministic tooling, or local evidence.

## Governing rule

Default CHATGPT_ONLY; batch coherent work; require a <=3500-token context capsule.

## Non-goal

Do not spend Codex on brainstorming, questionnaires, generic advice, or repeated scans.

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
