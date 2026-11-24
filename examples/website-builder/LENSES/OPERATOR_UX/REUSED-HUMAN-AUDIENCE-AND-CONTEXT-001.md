# HUMAN-AUDIENCE-AND-CONTEXT-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/HUMAN-AUDIENCE-AND-CONTEXT-001/1.1.1`
Source SHA-256: `b7cf75612325861464c90ddb738975bb2dbc8028313f561a7a301c1e6092bc00`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Adapt the work to the actual audience's role, expertise, task, and operating conditions.; expected Context Quality, Action Precision, Operator Burden

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

- Adapt the work to the actual audience's role, expertise, task, and operating conditions.; expected Context Quality, Action Precision, Operator Burden
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- stereotyping the audience or hiding exact evidence

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
