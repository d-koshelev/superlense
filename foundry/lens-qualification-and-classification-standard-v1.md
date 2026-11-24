# Lens Qualification and Classification Standard v1

## Classification workflow

```text
Candidate object
-> Adjacent-concept check
-> Lens Qualification Test
-> Primary Effect Class
-> Secondary Effect Classes
-> Scope/Authority/Persistence classes
-> Effect hypothesis
-> Baseline test
-> External test
-> Catalog status
```

## Adjacent-concept check

Before assigning `lens_id`, determine whether the object is actually:

```text
rule
doctrine
prompt template
persona
skill
tool
memory store
queue
report form
department
agent
Lens Module
Lens Set
Mission Lense
Root Lense
Meta-Lens
```

## Required effect hypothesis

```text
For task family <T>,
Lens <L>
changes <mechanism>
which should improve <metrics>
while costing <overhead>
and risking <aberrations>.
```

## Example

```text
For repository migration planning,
Read-Only Architecture Lens
selects repository structure and evidence,
blocks file mutation,
requires uncertainty and risk records,
and verifies a migration report.

Expected improvement:
boundary compliance, evidence quality, migration completeness.

Expected costs:
more tokens and slower response.

Risk:
overconstraint may prevent useful local experiments.
```

## Test minimum

```text
RAW
MINIMAL
LENS
STRESS
RESET
```

## Promotion

```text
Prompt pattern:
contracts incomplete

Lens prototype:
contracts complete, no external evidence

Candidate Lens:
external test completed

Validated Lens:
repeated test + regression + known limitations

Catalog Lens:
validated + clean export + compatibility record
```
