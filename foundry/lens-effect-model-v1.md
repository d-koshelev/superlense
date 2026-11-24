# Lens Effect Model v1

Status: `evaluation standard candidate`
Purpose: `describe what a Lens changes and how to measure it`

---

# 1. Lens Effect Vector

For one Lens L and task family T:

```text
E(L,T) = [
  Focus,
  GoalRetention,
  EpistemicDiscipline,
  ContextQuality,
  ActionPrecision,
  BoundaryCompliance,
  VerificationStrength,
  Continuity,
  Coordination,
  OperatorBurden,
  Cost,
  Latency,
  Stability,
  Portability
]
```

Effects are measured against:

```text
RAW baseline
MINIMAL instruction baseline
previous Lens version
```

Do not compare only against the previous version.

---

# 2. Positive Effects

## Focus Gain

The Lens reduces irrelevant active context while preserving required dependencies.

Possible measurement:

```text
relevant context items / all active context items
```

## Goal Retention

The objective and acceptance criteria remain stable across turns, tools, and handoffs.

## Epistemic Discipline

The Lens correctly distinguishes:

```text
evidence
inference
hypothesis
decision
unknown
```

## Action Precision

The agent performs only actions needed for the task.

## Verification Strength

The output is checked against meaningful criteria/oracles.

## Continuity

The system restores valid state after interruption/reset.

## Coordination

Work is routed to the right specialist without duplication or handoff loss.

## Operator Burden Reduction

The operator performs fewer repeated explanations, corrections, and manual routing steps.

---

# 3. Costs and Negative Effects

Every Lens can introduce:

```text
token overhead
latency
report overhead
reduced creativity
missed peripheral evidence
overconstraint
false blocking
stale-state amplification
authority conflict
metric gaming
```

A Lens effect report must show both benefit and cost.

---

# 4. Effect Measurement Levels

## Level 0 — Claimed effect

The designer states what the Lens should do.

## Level 1 — Static contract evidence

The Lens has explicit inputs, outputs, scope, and boundaries.

## Level 2 — Single scenario evidence

The Lens is compared against RAW/MINIMAL once.

## Level 3 — Repeated scenario evidence

Multiple runs show stable effect.

## Level 4 — Cross-task evidence

The effect transfers across related tasks.

## Level 5 — Cross-model/provider evidence

The effect transfers or has calibrated variants.

Only Level 3+ should support a general effectiveness claim.

---

# 5. Effect Profiles by Lens Class

| Lens class | Primary desired effect | Common cost | Critical risk |
|---|---|---|---|
| Aperture | scope precision | missed context | excludes critical signal |
| Filter | boundary compliance | false blocking | overconstraint |
| Collimator | normalized records | nuance loss | invented certainty |
| Prism | epistemic separation | classification overhead | false promotion |
| Objective | goal retention | tunnel vision | ignores dependencies |
| Zoom | useful abstraction | detail loss | wrong level |
| Memory | continuity | stale context | stale truth |
| Planning | ordered execution | bureaucracy | queue theater |
| Tool | action precision | tool latency | unsafe action |
| Sensor | defect detection | evaluation cost | wrong oracle |
| Response | operator clarity | compression loss | hides uncertainty |
| Stabilizer | recovery | state overhead | divergent recovery |
| Beam Splitter | parallelism | coordination cost | duplicate work |
| Beam Combiner | integration | merge overhead | provenance loss |
| Meta-Lens | calibration | recursive complexity | optimizes wrong metric |

---

# 6. Example Effect Profiles

## Expert Intake and Normalization Lens

Expected:

```text
Focus: medium
Epistemic discipline: high
Context quality: high
Operator burden: lower
Action precision: neutral
Cost: low-medium
```

## Decision Preparation Lens

Expected:

```text
Goal retention: high
Operator burden: strongly lower
Decision usefulness: high
Creativity: may narrow options
Cost: medium
```

## Mission Lense

Expected:

```text
Focus: high
Continuity: high
Boundary compliance: high
Action precision: high
Cost: medium-high
Risk: overfocus and stale state
```

## Lense Improvement Observer

Expected:

```text
Failure localization: high
Long-term quality: high
Immediate task success: neutral
Cost: medium
Risk: recursive governance
```

---

# 7. Lens Effect Report

Every test should produce:

```text
lens_id
version
task_family
baseline variants
sample count
effect claims
measured effect vector
confidence
trade-offs
negative effects
aberrations
model/provider
context conditions
known limitations
promotion recommendation
```

---

# 8. Validation Rule

A Lens is not “better” because:

```text
the answer is longer
the report looks structured
the agent sounds confident
the designer prefers it
```

A Lens is better only if it produces a useful measured improvement for the intended task/risk class without unacceptable regressions or overhead.
