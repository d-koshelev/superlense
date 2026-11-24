# UI-RESPONSIVE-STRESS-AUDITOR-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-RESPONSIVE-STRESS-AUDITOR-001/0.1.0/candidate.json`
Source SHA-256: `327035bdd5397689267c7bc1c56f23cd177999d5e1b10c2c35977e73b2585599`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Stress responsive behavior across required viewports, scaling, content, and input modes.

## Activation

responsive interface evaluation

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Stress responsive behavior across required viewports, scaling, content, and input modes.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- one-viewport visual approval
- framework-specific CSS

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
