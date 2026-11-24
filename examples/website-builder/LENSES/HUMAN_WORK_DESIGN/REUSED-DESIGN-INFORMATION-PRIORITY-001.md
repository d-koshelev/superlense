# DESIGN-INFORMATION-PRIORITY-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/DESIGN-INFORMATION-PRIORITY-001/1.1.1`
Source SHA-256: `f2947031d13ad5cf3219c28d7aed8c2ccee5681dad370d01c5b81f699be0bb17`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Present information according to its importance, frequency, and moment of use.; expected Focus, Report Fidelity, Action Precision

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

- Present information according to its importance, frequency, and moment of use.; expected Focus, Report Fidelity, Action Precision
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- compression loss or hiding evidence from experts

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
