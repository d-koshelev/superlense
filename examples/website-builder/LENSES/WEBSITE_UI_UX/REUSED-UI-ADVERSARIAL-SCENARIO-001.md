# UI-ADVERSARIAL-SCENARIO-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-ADVERSARIAL-SCENARIO-001/0.1.0/candidate.json`
Source SHA-256: `fef59e50350665babb338718fd2dc551f2776e0d6ccf32b592aa6270686c96fb`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Generate bounded difficult content and state scenarios without leaking evaluator gold.

## Activation

stress or mutation campaign

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Generate bounded difficult content and state scenarios without leaking evaluator gold.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- random destructive fuzzing
- builder hints

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
