# LENS-DECISION-001

Version: `0.1.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-DECISION-001/0.1.0`
Source SHA-256: `3a37c38bcd2e76319543ca7461f48d3f356ef83a118798a7b13779b15ac3062b`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

separates evidence, options, reversible defaults, and true operator decisions; expected Goal Retention, Operator Burden, Epistemic Discipline

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

- separates evidence, options, reversible defaults, and true operator decisions; expected Goal Retention, Operator Burden, Epistemic Discipline
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- tunnel vision or unnecessary escalation

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
