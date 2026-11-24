# WEB-INFORMATION-PRIORITY-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-INFORMATION-PRIORITY-001/1.0.1`
Source SHA-256: `fae81ebb1f8326266ef2ba9681f8cd81d4dcee2069416fb8968d1bb916e43486`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Classify web-interface information by operational importance and avoid permanent equal-weight display.

## Activation

Website UI or website-delivery work is active.

## Input

- current operator request
- accepted project state
- relevant direct evidence and limitations

## Output

- one bounded decision or state record
- evidence level, limitations, and next gate

## Runtime doctrine

- Classify web-interface information by operational importance and avoid permanent equal-weight display.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- over-compression that hides expert evidence

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
