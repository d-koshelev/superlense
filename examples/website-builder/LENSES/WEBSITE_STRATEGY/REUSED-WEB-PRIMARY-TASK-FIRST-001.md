# WEB-PRIMARY-TASK-FIRST-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-PRIMARY-TASK-FIRST-001/1.0.1`
Source SHA-256: `89ee729c8a82a714109861fefdd95372c256326be653e8dfb25c6e65825e331d`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Identify the user's main continuous activity and protect its workspace, position, and shortest interaction path.

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

- Identify the user's main continuous activity and protect its workspace, position, and shortest interaction path.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- hiding genuinely frequent expert tools

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
