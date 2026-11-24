# DESIGN-OVERENGINEERING-CONTROL-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/DESIGN-OVERENGINEERING-CONTROL-001/1.0.0`
Source SHA-256: `6ed4625853e999b4512ce1a7b77d64c2611769d0f33a16922ea28303da5c7794`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Classify whether solution complexity is necessary, justified, experimental, premature, or overengineered relative to the real problem.; expected Cost, Operator Burden, Action Precision

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

- Classify whether solution complexity is necessary, justified, experimental, premature, or overengineered relative to the real problem.; expected Cost, Operator Burden, Action Precision
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- false simplicity that ignores safety, scale, or audience diversity

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
