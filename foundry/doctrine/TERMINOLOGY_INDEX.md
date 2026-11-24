# Canonical Lens terminology index

The imported taxonomy is evidence. This index is the accepted workspace vocabulary under Root Doctrine v1.0.0.

| Term | Canonical meaning | Automatically a Lens? |
|---|---|---|
| Base Agent | Model/runtime that reasons or acts | No |
| Doctrine | Governed rules, authority, boundaries, and invariants | No |
| Prompt | Serialized invocation | No |
| Persona | Behavioral framing | No |
| Skill | Procedure or tool-use capability | No |
| Tool | Executable affordance | No |
| Queue | Task-state and dependency mechanism | No |
| Memory store | Persisted state | No |
| Report form | Output structure | No |
| Department | Responsibility boundary | No |
| Agent | Inference/worker identity | No |
| Lens Element | Atomic behavioral mechanism, possibly not independently mountable | Not necessarily |
| Lens Module | Versioned, removable, testable transformation with contracts and measurable baseline effect | Yes, after qualification |
| Lens Set | Ordered, compatibility-checked composition of Lens Modules | Composite |
| Mission Lense | Task-bound Lens Set plus identity, state, tools, acceptance, report, and expiry | Assembly, not one module |
| Root Lense | Operator-governed control plane | System, not one module |
| Meta-Lens | Qualifying module that selects/calibrates/tests other lenses | Only after qualification |

## Eight-question Lens Qualification Test

All answers must be explicit and auditable:

1. Is the target problem class defined?
2. Does it transform context, task framing, goals, evidence, action/tool policy, continuity, verification, or output?
3. Is it removable without replacing the Base Agent?
4. Does it expose an input contract?
5. Does it expose an output or state-update contract?
6. Are scope, non-scope, authority, and boundaries explicit?
7. Can its effect be compared with RAW/MINIMAL baseline behavior?
8. Does it have version and provenance?

A “no” means `adjacent_concept` or `incomplete_candidate`, not a Lens Module.

