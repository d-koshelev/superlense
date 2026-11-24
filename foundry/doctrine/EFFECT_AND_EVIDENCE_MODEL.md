# Effect and evidence model

## Effect vector

Every run reserves these dimensions: Focus, Goal Retention, Epistemic Discipline, Context Quality, Action Precision, Boundary Compliance, Verification Strength, Continuity, Coordination, Operator Burden, Cost, Latency, Stability, and Portability. Behavioral outcomes additionally track task success, acceptance-criteria coverage, unsupported-claim rate, scope drift, unsafe mutations, missed requirements, and report fidelity.

Values are either measured with method/sample/provenance, or the literal string `unavailable`. Targets and hypotheses are never stored in measured fields.

## Baselines

Every effect claim names RAW and MINIMAL baselines. Version-to-version comparison is supplemental, never the only baseline.

## Evidence classes

- `external_evidence`: untrusted input artifact or independent test return.
- `observed_result`: reproducible local observation with command/artifact provenance.
- `inference`: bounded conclusion from evidence.
- `hypothesis`: testable proposed mechanism/effect.
- `knowledge_candidate`: reviewed but not accepted general knowledge.
- `accepted_canonical_knowledge`: operator/governance-promoted record.
- `contradiction`: incompatible records preserved together.
- `unknown`: missing or unmeasured information.

## Evidence levels

L0 claimed hypothesis; L1 complete static contracts; L2 one independent external scenario; L3 repeated external scenarios; L4 cross-task evidence; L5 cross-provider evidence. Only L3+ supports a general effectiveness claim.

