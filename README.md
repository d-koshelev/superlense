# SuperLense

A lens is a removable set of instructions that changes how an AI agent handles one kind of task. The **intake lens**, for example, turns a loose request into a goal, constraints, open questions and acceptance criteria. The **decision lens** keeps a proposal separate from a decision the user has approved.

Each prototype states what goes in, what should come out, where its authority ends and what result would count as an improvement. You can read and try a lens with an agent of your choice.

## Try the intake lens

1. Give an agent the request “Plan a weekend workshop for eight people. We have a room and a €200 budget.” Save its answer.
2. In a fresh conversation, provide the [intake doctrine](foundry/printer/prototypes/LENS-INTAKE-001/0.1.0/LENS_DOCTRINE.md) and the [output contract](foundry/printer/prototypes/LENS-INTAKE-001/0.1.0/LENS_OUTPUT_CONTRACT.md). Repeat the same request.
3. Compare both answers. Did the second answer preserve the budget, flag the missing date and distinguish the user's requirements from the agent's suggestions? Record an omission in either answer. This pair illustrates the method. A claim about a model needs repeated, independently scored trials.

## Explore

| Start here | What you can do |
| --- | --- |
| [Original six lenses](foundry/catalog/LENS_CATALOG.json) | Try intake, decisions, boundaries, session state, queue admission or reporting. |
| [Later collections](collections/README.md) | Browse versioned packages for design review, web interfaces, human attention and restoring a project in a new session. |
| [Lens printer](foundry/LENSE_LENS_PRINTER_ARCHITECTURE_v1.md) | Follow an order into a versioned package with an effect hypothesis, input and output contracts and an ablation plan. |
| [UI learning protocol](learning-lab/LENS_LEARNING_PROTOCOL.md) | Turn a reproducible interface defect into a candidate rule and compare behavior with the rule enabled and disabled. |
| [Game designer installer](examples/game-design/GAME_DESIGNER_LENSE.md) | Run a design interview, keep track of failed experiments and identify unexplored parts of the game. |
| [Website builder kit](examples/website-builder/README.md) | Take a site brief through intake, design choices and implementation handoff. |
| [Reusable skills](skills) | Apply procedures for studying a source, reviewing code or turning a verified result into reusable knowledge. |
| [Specialist registry](specialist-registry/specialists/SPECIALIST_REGISTRY.md) | Explore assignments, work reports and what a specialist learned from a task. |
| [Original Git objects](history/README.md) | Inspect the July 2026 catalogue and UI protocol with their original commit IDs. |

With Node.js 20 or newer, run these from the root:

```sh
node foundry/scripts/lens-printer.mjs validate-all
node --test specialist-registry/tests/registry.test.js
```

The first command checks the files of the original printer packages. The second exercises the specialist registry. Model performance and human acceptance are evaluated separately.

By Dmitry Koshelev. [MIT License](LICENSE).
