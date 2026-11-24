# WEB-USER-FLOW-BEFORE-SCREEN-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-USER-FLOW-BEFORE-SCREEN-001/1.0.1`
Source SHA-256: `b5ef90d696957a1e063eaadba09bf696b1a798411eb7f7318897b581df86e194`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Define the real user flow before implementing isolated screens or static mockups.

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

- Define the real user flow before implementing isolated screens or static mockups.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- over-specifying a trivial one-step interaction

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
