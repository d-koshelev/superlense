# WEB-NAVIGATION-TAXONOMY-AND-REACHABILITY-001

Version: `1.0.0`
Decision: `REUSE_COMPATIBLE`
Source: `foundry-catalog://printer/prototypes/WEB-NAVIGATION-TAXONOMY-AND-REACHABILITY-001/1.0.0`
Source SHA-256: `6e3aab362d43cb44a9510585a2c8964e048e0993e254abfb0dd2bb1b9c8203b6`
Source maturity: `prototype`
Evidence: `L1`

## Single responsibility

Express one understandable navigation hierarchy and keep every required destination reachable at every supported viewport.

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

- Express one understandable navigation hierarchy and keep every required destination reachable at every supported viewport.
- Do not promote proposals, reports, or missing evidence into accepted fact.
- Preserve operator authority, unrelated projects, and valid existing behavior.

## Non-goals and aberrations

- collapsing useful expert navigation into an opaque menu

## Conflict and precedence

the operator's authority and immutable safety/evidence rules win. Accepted
project-specific decisions outrank domain/provider defaults. If evidence is
missing or rules conflict, return `UNKNOWN` or `BLOCKED`; never invent access,
completion, acceptance, or deployment.

This file is the portable runtime contract used by the installer. Provenance
is retained above, but no external source is required at runtime. The package
does not silently replace or promote the source module.
