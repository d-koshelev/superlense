# LENS-REPORT-001

Version: `0.1.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-REPORT-001/0.1.0`
Source SHA-256: `fe32448f820215e3d9e3a15617ecb659f70633c0b3999c7001b1e5afb4ba4e03`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

compresses outcome, provenance, unknowns, blockers, and next action into an operator-facing report; expected Report Fidelity, Operator Burden, Epistemic Discipline

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

- compresses outcome, provenance, unknowns, blockers, and next action into an operator-facing report; expected Report Fidelity, Operator Burden, Epistemic Discipline
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- compression loss or report inflation

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
