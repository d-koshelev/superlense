# UI-REQUIREMENT-TRACEABILITY-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-REQUIREMENT-TRACEABILITY-001/0.1.0/candidate.json`
Source SHA-256: `27a411d19d580d5e8a205c86879a558e49463881e58a8b1498d2f57f50c6f135`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Link every acceptance requirement to direct evidence and an explicit result.

## Activation

task evaluation; completion reporting

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Link every acceptance requirement to direct evidence and an explicit result.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- inventing missing requirements
- subjective polish

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
