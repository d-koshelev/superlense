# UI-SELF-REVIEW-BIAS-CORRECTOR-001

Version: `0.1.0`
Decision: `REUSE_VERSIONED_CANDIDATE_PRIOR_ART`
Source: `ui-learning-lab://catalog/candidate/UI-SELF-REVIEW-BIAS-CORRECTOR-001/0.1.0/candidate.json`
Source SHA-256: `3188b8b70096cd49fbbe08a0951d9ba61bd1eab7d4daad2e58406c9be1e81b0d`
Source maturity: `STATIC_PASS`
Evidence: `local behavioral lab candidate; not canonical`

## Single responsibility

Separate builder self-report from frozen independent audit and unsupported claims.

## Activation

same system builds and evaluates

## Input

- rendered UI or supplied interface artifacts
- accepted requirements and versioned evidence

## Output

- bounded audit or evidence result
- limitations, defects, and next gate

## Runtime doctrine

- Separate builder self-report from frozen independent audit and unsupported claims.
- Defer to hard-failure detection, evidence integrity, and explicit operator authority; record unresolved conflict.
- Operator acceptance remains separate.

## Non-goals and aberrations

- cryptographic isolation claims
- replacing independent review

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
