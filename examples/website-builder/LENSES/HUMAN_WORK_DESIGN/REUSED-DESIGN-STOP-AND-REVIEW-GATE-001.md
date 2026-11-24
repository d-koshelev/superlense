# DESIGN-STOP-AND-REVIEW-GATE-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/DESIGN-STOP-AND-REVIEW-GATE-001/1.0.0`
Source SHA-256: `3c199354feea65a49a56c47ffe533d04c6cf7744bb6b7379bd46edfdd55184c4`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Stop meaningful design work when the proposed direction cannot be clearly connected to helping a specific user perform a specific primary task.; expected Focus, Action Precision, Stability

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

- Stop meaningful design work when the proposed direction cannot be clearly connected to helping a specific user perform a specific primary task.; expected Focus, Action Precision, Stability
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- overblocking harmless cosmetic work or repeating a resolved warning

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
