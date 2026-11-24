# WEB-ERROR-FIRST-VISUAL-QA-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-ERROR-FIRST-VISUAL-QA-001/1.0.1`
Source SHA-256: `8f6e84dc0632f51f5ebc2c970f765c8d19e1aa15e7a1e34d81997ca2621aa541`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Inspect the real implemented interface in severity order, fix hard failures, and preserve strengths before polish.

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

- Inspect the real implemented interface in severity order, fix hard failures, and preserve strengths before polish.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- polishing screenshots instead of validating task behavior

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
