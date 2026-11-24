# UI-INTERACTION-STATE-AUDITOR-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-INTERACTION-STATE-AUDITOR-001/0.1.0/candidate.json`
Source SHA-256: `e56b07989cea1eb4880c93d45abdbc8bf45f3ca92e7cffe3d0346a3fad1bae25`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Audit state transitions, action language, recovery, focus, and data preservation from traces.

## Activation

interactive interface; stateful workflow

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Audit state transitions, action language, recovery, focus, and data preservation from traces.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- visual styling
- implementation repair

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
