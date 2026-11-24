# Lens Printer Architecture v1

Status: `implementation specification`

## 1. Role

The Lens Printer is not an LLM prompt generator.

It is a compiler that translates:

```text
Lens Order
+ Effect Target
+ Catalog Modules
+ Provider Profile
+ Context Budget
```

into:

```text
versioned Lens Prototype Package
```

## 2. Internal stages

### 2.1 Order Parser

Normalizes the request and preserves the original test prompt.

### 2.2 Effect Target Compiler

Maps desired behavior into the Lens Effect Vector and primary effect classes.

### 2.3 Catalog Resolver

Finds reusable Lens Modules and their compatibility constraints.

### 2.4 Missing Module Detector

Creates a Lens Development Order when the catalog is insufficient.

### 2.5 Composition Solver

Produces an ordered Lens Set.

Checks:

```text
authority conflicts
duplicate modules
context budget
state dependencies
tool dependencies
provider compatibility
output-contract compatibility
```

### 2.6 Artifact Compiler

Generates the self-contained prototype package.

### 2.7 Static Validator

Validates:

```text
manifest
schema
pointer integrity
scope
authority
forbidden actions
output contract
test contract
portable paths
secret scan
```

### 2.8 Versioner and Exporter

Assigns semantic version and creates clean export.

## 3. Composition rule

Preferred order:

```text
Intake
-> Normalization
-> Epistemic Separation
-> Objective
-> State Projection
-> Boundary
-> Planning
-> Actuation
-> Verification
-> Response
-> Recovery
```

This is a default, not a universal law.

## 4. Context budget

Every module declares:

```text
minimum tokens
typical tokens
maximum tokens
compressibility
priority
removable examples
```

The Printer produces:

```text
LensContextBudgetReport
```

If the Lens Set exceeds budget:

```text
reduce examples
retrieve modules on demand
split Mission Lense
reject composition
```

Never silently truncate governing rules.

## 5. Provider calibration

The Printer supports provider profiles:

```text
reasoning depth
context window
tool syntax
file support
structured output support
background/runtime support
safety boundary
```

A provider-specific build is a variant, not a new scientific Lens unless its behavioral transformation differs.

## 6. Printer output state

```text
printed_unvalidated
static_validation_failed
ready_for_test
testing
revision_required
candidate
validated
released
```
