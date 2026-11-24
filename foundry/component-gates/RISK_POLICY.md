# Component risk-to-maturity policy

| Risk | Minimum Lens maturity/evidence | Additional requirement |
|---|---|---|
| LOW | candidate / L2 | one independent scenario |
| MEDIUM | validated / L3 | repeated scenarios and regression |
| HIGH | catalog_released / L4 | compatibility and clean export |
| CRITICAL | catalog_released / L5 | cross-provider test and human review |

A failed gate forbids component implementation/release. It may authorize a non-production, isolated test scaffold needed to collect gate evidence, provided the scaffold is read-only, clearly labeled, not mounted into another system, and cannot mutate canonical state.

