# HUMAN-PRIMARY-WORK-001

Version: `1.1.1`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/HUMAN-PRIMARY-WORK-001/1.1.1`
Source SHA-256: `637a3e0892545b6544d57386a05a4f2bf5e9ea44e4292148322e6c3810f3eb4a`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Identify the person's primary activity and protect it from tools, service processes, and secondary information.; expected Focus, Operator Burden, Context Quality

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

- Identify the person's primary activity and protect it from tools, service processes, and secondary information.; expected Focus, Operator Burden, Context Quality
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- hiding support that is genuinely continuous

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
