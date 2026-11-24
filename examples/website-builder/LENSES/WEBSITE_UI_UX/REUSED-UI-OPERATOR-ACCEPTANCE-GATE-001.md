# UI-OPERATOR-ACCEPTANCE-GATE-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-OPERATOR-ACCEPTANCE-GATE-001/0.1.0/candidate.json`
Source SHA-256: `b280be65e9eb9fa0c1544c3a4224bb94520c43591ae90cd73d1a63f929bbe0db`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Prevent automated or model review from implying operator visual acceptance.

## Activation

reporting; promotion

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Prevent automated or model review from implying operator visual acceptance.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- performing tests
- choosing aesthetic preferences

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
