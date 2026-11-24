# Copilot UI Learning Lab

A local, evidence-based loop for improving UI work without model-weight training:

`TASK → BUILD → RENDER → EVIDENCE → INDEPENDENT AUDIT → DEFECT → ROOT CAUSE → LENS ORDER → CANDIDATE → REGRESSION → ABLATION → SECOND FIXTURE → HOLDOUT → OPERATOR REVIEW`

The lab compares Lens bundles, captures direct browser evidence, finds objective defects, and admits only verified reusable rule gaps to candidate-lens development.

## Quick start

```bash
copilot-ui-lab doctor
copilot-ui-lab task list
copilot-ui-lab campaign new --tasks TASK-UI-001,TASK-UI-003,TASK-UI-004 --variants RAW,FULL
copilot-ui-lab campaign run <campaign-id>
copilot-ui-lab report
```

Generated artifacts stay in `runs/` and `evidence/`. Hidden holdouts and mutation oracle data are denied to the builder. This project never infers operator visual acceptance.
