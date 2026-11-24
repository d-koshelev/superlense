# WEB-VISUAL-HIERARCHY-AND-DENSITY-001

Version: `1.0.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-VISUAL-HIERARCHY-AND-DENSITY-001/1.0.1`
Source SHA-256: `b538ca9bc5a02e53d34f8b2fbf7d5aa08c7f8f59460c71df2f385c57189a85e8`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Control hierarchy, grouping, density, spacing, contrast, and competing accents for the actual audience and task.

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

- Control hierarchy, grouping, density, spacing, contrast, and competing accents for the actual audience and task.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- mistaking aesthetic preference for an operational defect

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
