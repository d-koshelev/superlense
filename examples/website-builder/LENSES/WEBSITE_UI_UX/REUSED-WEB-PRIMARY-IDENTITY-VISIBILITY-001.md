# WEB-PRIMARY-IDENTITY-VISIBILITY-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-PRIMARY-IDENTITY-VISIBILITY-001/1.0.0`
Source SHA-256: `bbc5a0c4cc4cb601a544248b614d09ff98bff7f93485fabc8e6438b4dec57024`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Keep the identity of the user's current work understandable without guessing across realistic content and viewports.

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

- Keep the identity of the user's current work understandable without guessing across realistic content and viewports.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- allowing identity text to crowd the current decision

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
