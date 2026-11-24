# HUMAN-ENERGY-ALLOCATION-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/HUMAN-ENERGY-ALLOCATION-001/1.1.1`
Source SHA-256: `e1d173ec8d0c332f8e48a2c35772fc2862f3360c685ef080f723ddc1d0f7b110`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Allocate attention, time, decision energy, and compute resources productively.; expected Operator Burden, Cost, Coordination

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

- Allocate attention, time, decision energy, and compute resources productively.; expected Operator Burden, Cost, Coordination
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- optimizing cost at the expense of quality or accountability

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
