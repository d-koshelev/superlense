# DESIGN-OPERATOR-AGENCY-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/DESIGN-OPERATOR-AGENCY-001/1.1.1`
Source SHA-256: `465f34331b5a50fbd9b4710460f09e83b876121d3ce7c92f9a79164fed06c1f3`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Keep the user as the primary actor with visible consequences, boundaries, and intervention controls.; expected Boundary Compliance, Operator Burden, Action Precision

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

- Keep the user as the primary actor with visible consequences, boundaries, and intervention controls.; expected Boundary Compliance, Operator Burden, Action Precision
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- control theater or excessive confirmation

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
