# DESIGN-ERROR-FIRST-CRITIQUE-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/DESIGN-ERROR-FIRST-CRITIQUE-001/1.1.1`
Source SHA-256: `42d56b7fff6ac2234414234bca9f49d06366ad1348fb98eaa88d7f314231a6cd`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Find and correct hard failures before polishing or amplifying strengths.; expected Action Precision, Verification Strength, Stability

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

- Find and correct hard failures before polishing or amplifying strengths.; expected Action Precision, Verification Strength, Stability
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- negativity bias or treating taste as correctness

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
