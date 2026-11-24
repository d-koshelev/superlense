# Write a study draft

Keep the source inventory, progress, conflicting records and reviewer notes in the research workspace. The study file below holds the findings intended for the readers of one topic guide. Keep restricted evidence in its authorized space. Use a shareable source identifier and locator when a private location cannot travel with a finding.

Save UTF-8 JSON under the working root. This example shows the required fields.

```json
{
  "schema_version": 1,
  "package_id": "stocktake-codes",
  "version": "0.1.0-draft.1",
  "description": "Look up stocktake codes in the West room manual.",
  "applicability": ["West room stocktake"],
  "items": [{
    "id": "square-mark", "revision": 1, "kind": "claim",
    "statement": "A square identifies a counted shelf.",
    "applicability": ["West room shelf labels"],
    "exceptions": ["On training sheets the square is only a sample mark."],
    "provenance": ["West manual, edition 3, section 2", "West manual, edition 3, appendix A"]
  }]
}
```

Give each finding a stable lowercase ID and a positive integer revision. Use `claim`, `procedure` or `constraint` according to the source. Put mandatory prerequisites in its applicability, and qualifications that change the conclusion in its statement or exceptions. Include an explicit `exceptions` array, using an empty array only after checking the source. Cite every necessary part in `provenance`. Keep the versioned source and precise locations in the private study record. Record unavailable evidence or open questions there and narrow the delivered finding accordingly. A correction to the finding needs a new revision. A changed guide needs a new package version.

From an existing working root with an existing output parent, run:

```sh
not-only-skills export-study-draft --root . --study study.json --output exports/stocktake-codes
```

Use the actual ID as the output directory name in the project's isolated exports directory. The command renders the submitted findings into reader Markdown and writes a research-only export. It reports the package and artifact digests. Supply the artifact digest to `verify-export --output DIRECTORY --expect-artifact DIGEST`. Existing output directories are protected. Use a fresh destination when checking a revision.

To make a guide discoverable in an assigned research catalog, bind the member ID, version, package digest and artifact digest from the receipt to the entry's selection description and routing phrases. Keep the catalog's two existing policy documents and scope. Discover the guide through the reader, select its actual ID and inspect the returned body. Compilation checks the supplied data and its export. Establish semantic support and coverage by reviewing the original; keep that result with the source inventory.
