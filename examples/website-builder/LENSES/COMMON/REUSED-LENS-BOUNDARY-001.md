# LENS-BOUNDARY-001

Version: `0.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-BOUNDARY-001/0.1.1`
Source SHA-256: `8be6e984fe9ead36bd6a91d9e9fd87c15970514a47883a96e7c5744bb84f5e7b`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

constrains mutation while permitting evidence-gathering reads and labels claims by provenance; expected Boundary Compliance, Epistemic Discipline, Action Precision

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

- constrains mutation while permitting evidence-gathering reads and labels claims by provenance; expected Boundary Compliance, Epistemic Discipline, Action Precision
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- overconstraint or false blocking

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
