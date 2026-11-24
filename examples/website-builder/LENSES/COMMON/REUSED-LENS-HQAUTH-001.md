# LENS-HQAUTH-001

Version: `0.1.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-HQAUTH-001/0.1.0`
Source SHA-256: `5e6ef2d4499019391e7a39761cb5f4096bea436c1e21c490c5e7205f8fb90330`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Assign authority class, source provenance, acceptance state, and explicit supersession edges to every governing record.

## Activation

Project coordination, state, evidence, or reporting requires this responsibility.

## Input

- current operator request
- accepted project state
- relevant direct evidence and limitations

## Output

- one bounded decision or state record
- evidence level, limitations, and next gate

## Runtime doctrine

- Assign authority class, source provenance, acceptance state, and explicit supersession edges to every governing record.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- authority inversion
- silent promotion
- false supersession

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
