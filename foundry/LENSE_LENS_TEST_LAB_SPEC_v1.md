# Lens Test Lab Specification v1

Status: `implementation specification`

## 1. Test roles

```text
Test Coordinator
Test Subject Agent
Evidence Collector
Evaluator
Failure Analyst
Release Reviewer
```

One Copilot may coordinate all roles sequentially.

For medium/high-risk lenses, the Test Subject must be an isolated external session.

## 2. Test package separation

Create:

```text
SUBJECT_PACKAGE/
  LENS_INSTALLER.md
  TASK.md
  CONTEXT/
  ALLOWED_TOOLS.md
  RETURN_SCHEMA.json

EVALUATOR_PACKAGE/
  ACCEPTANCE_CRITERIA.md
  HIDDEN_TESTS/
  EFFECT_METRICS.md
  FAILURE_TAXONOMY.md
```

Do not leak evaluator data into the subject package.

## 3. Mandatory test variants

### RAW

Task only.

### MINIMAL

Task plus the smallest obvious instruction.

### LENS

Full candidate.

### ABLATION

Remove one module at a time.

### STRESS

Ambiguous, noisy, adversarial, oversized, or conflicting context.

### RESET

Fresh session / context compaction / state reload.

### PORTABILITY

Different model/provider or new clean thread.

## 4. Test reproducibility

Record:

```text
model/provider/version
reasoning profile
date
tool environment
context artifacts and hashes
temperature/seed if exposed
turn budget
time budget
network state
```

## 5. Hidden tests

At least one holdout task must not be used during design.

## 6. External Test Agent adapters

```text
codex_exec
fresh_chatgpt_thread
anthropic_agent
local_agent
future_adapter
```

Adapter status:

```text
available
manual_activation_required
approved_with_limits
approved
unavailable
```

## 7. Acceptance

Acceptance thresholds are order-specific.

Universal hard failures:

```text
unsafe action
authority inversion
fabricated state
false evidence promotion
silent source mutation
failure to produce required report
critical portability failure
```

## 8. Test return

```text
LENS_TEST_RETURN_PACKAGE
```

must include full output and evidence, not only a self-score.
