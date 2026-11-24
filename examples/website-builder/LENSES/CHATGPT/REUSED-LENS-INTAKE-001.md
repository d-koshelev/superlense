# LENS-INTAKE-001

Version: `0.1.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-INTAKE-001/0.1.0`
Source SHA-256: `1b974c77370c3908f560be742dfc86eadd6ee2bcaa715afe0c1ee9e74b226c85`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

normalizes operator input into goals, constraints, unknowns, and acceptance records; expected Focus, Context Quality, Epistemic Discipline

## Activation

Project coordination, state, evidence, or reporting requires this responsibility.

## Input

- current operator request
- accepted project state
- relevant direct evidence and limitations

## Output

- one bounded decision or state record
- evidence level, limitations, and next gate

## Runtime doctrine

- normalizes operator input into goals, constraints, unknowns, and acceptance records; expected Focus, Context Quality, Epistemic Discipline
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- nuance loss or invented certainty

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
