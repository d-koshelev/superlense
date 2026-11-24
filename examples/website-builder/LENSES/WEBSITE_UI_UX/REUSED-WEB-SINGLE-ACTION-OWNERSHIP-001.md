# WEB-SINGLE-ACTION-OWNERSHIP-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-SINGLE-ACTION-OWNERSHIP-001/1.0.0`
Source SHA-256: `3bcd5a885c8196d5349d779d09b44dded4eabda7f0b466b87f3148c3e43d0d6e`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Assign one clear primary-action owner to each user outcome while preserving legitimate subordinate or distinct actions.

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

- Assign one clear primary-action owner to each user outcome while preserving legitimate subordinate or distinct actions.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- removing a legitimate recovery or accessibility path

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
