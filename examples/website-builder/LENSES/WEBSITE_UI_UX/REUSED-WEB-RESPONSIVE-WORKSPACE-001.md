# WEB-RESPONSIVE-WORKSPACE-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-RESPONSIVE-WORKSPACE-001/1.0.1`
Source SHA-256: `e1b0422059f23ab72aed56aec23c37ab7bd09ebbf760db2af708177fb68e5770`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Preserve completion of the primary task across narrow, standard, and wide browser workspaces.

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

- Preserve completion of the primary task across narrow, standard, and wide browser workspaces.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- forcing identical layout instead of equivalent task completion

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
