# WEBSITE-ASSET-LICENSE-REGISTER-001

Version: `0.1.0`
Maturity: `prototype`
Group: `07_WEBSITE_ENGINEERING`
Context loading: `ON_DEMAND`

## Single responsibility

Block production use of assets whose ownership or permission is unresolved.

## Activation

A third-party, client, stock, font, or generated asset is proposed.

## Governing rule

Record source, owner, permission, project, version, approval, and audit date.

## Non-goal

Do not infer a license from possession or prior use.

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
