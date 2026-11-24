# HUMAN-INTERRUPTION-COST-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/HUMAN-INTERRUPTION-COST-001/1.1.1`
Source SHA-256: `ed4c1385520f466865d4aa8ebbee5054a20a374dea206c4b21cf2ca8dbff79d2`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Protect work flow from interruptions that do not justify their recovery cost.; expected Continuity, Operator Burden, Focus

## Activation

Human/operator design work is active.

## Input

- current operator request
- accepted project state
- relevant direct evidence and limitations

## Output

- one bounded decision or state record
- evidence level, limitations, and next gate

## Runtime doctrine

- Protect work flow from interruptions that do not justify their recovery cost.; expected Continuity, Operator Burden, Focus
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- failing to interrupt when material danger exists

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
