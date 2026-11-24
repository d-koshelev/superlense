# WEB-STATE-LANGUAGE-ACTION-CONSISTENCY-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-STATE-LANGUAGE-ACTION-CONSISTENCY-001/1.0.0`
Source SHA-256: `edde9657eba75173b731ee69f09e76b56919ad7c1ee625d988e949c7807719b3`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Keep state, explanation, resolution language, call-to-action label, and actual effect in one coherent causal chain.

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

- Keep state, explanation, resolution language, call-to-action label, and actual effect in one coherent causal chain.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- over-explaining a simple successful transition

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
