# LENS-HQDELTA-001

Version: `0.1.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/LENS-HQDELTA-001/0.1.0`
Source SHA-256: `143b9511bd512dadf7a16e79e184a2dd9ab616d7e13b77ed7a4f3a4b30c8f0a7`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Emit base-hash-bound deltas and merge by stable IDs, authority, provenance, and supersession; unresolved conflicts remain held.

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

- Emit base-hash-bound deltas and merge by stable IDs, authority, provenance, and supersession; unresolved conflicts remain held.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- state divergence
- silent conflict merge
- wrong-base delta

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
