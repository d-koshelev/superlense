# Developer guide

Requires Python 3.11+, Git, and a Chromium-compatible browser. Runtime code uses only the Python standard library. Google Chrome is used through its headless command line; no network or cloud service is required.

Run:

```bash
python3 -m compileall -q src scripts tests
python3 -m unittest discover -s tests -v
bash -n scripts/*.sh
PYTHONPATH=src python3 -m copilot_ui_lab.cli doctor
```

Keep source catalogs deterministic. Generated campaigns belong under `runs/`; browser evidence belongs under `evidence/`. Add a schema for every new durable record, a positive and negative test for each checker, and a checkpoint before every phase commit.

Dependencies are recorded in `reports/dependencies.json` with version, purpose, and license. Never add system packages merely for convenience.
