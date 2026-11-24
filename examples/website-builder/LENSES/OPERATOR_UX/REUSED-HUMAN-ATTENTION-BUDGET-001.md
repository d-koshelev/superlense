# HUMAN-ATTENTION-BUDGET-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/HUMAN-ATTENTION-BUDGET-001/1.1.1`
Source SHA-256: `e0e556ee4c2d9f25b093fe1d1c3d0e06a6d8db48e74130cb96e0e006d9e7d027`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Protect limited human attention and working memory from competing demands.; expected Focus, Operator Burden, Continuity

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

- Protect limited human attention and working memory from competing demands.; expected Focus, Operator Burden, Continuity
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- overcompression or missed situational detail

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
