# Two original Git commits

This self-contained bundle holds two independent roots, with their original trees, timestamps and SHA-1 object IDs. The catalogue was recorded on 11 July 2026 and the UI learning protocol on 26 July 2026, Paris time. These are dates recorded by Git. This repository makes those artifacts available in November 2026.

From a checkout of SuperLense:

```sh
git bundle verify history/origins.bundle
git fetch history/origins.bundle refs/heads/catalogue:refs/tags/origin-catalogue refs/heads/lab:refs/tags/origin-ui-lab
git show origin-catalogue:catalog/LENS_CATALOG.json
git show origin-ui-lab:LENS_LEARNING_PROTOCOL.md
```

| Reference | Original Git commit |
| --- | --- |
| origin-catalogue | `1b8cbca834cfae09ef40e69ce4d1584eb7f572e7` |
| origin-ui-lab | `09c636e28535f02e4a084cae5d7ba395dcb93c97` |

The MIT license at the repository root also covers the project author's materials in these two snapshots.
