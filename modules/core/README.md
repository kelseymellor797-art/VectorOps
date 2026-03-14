# @vectorops/core

Core domain module for the VectorOps platform.

## Overview

This module defines the foundational entities, enums, and shared types used across all VectorOps modules. It serves as the single source of truth for the platform's domain model.

## Contents

- **Entities** — `Tenant`, `User`, `Membership`, `Unit`, `Call`, `Assignment`, `Position`
- **Enums** — `CallStatus`, `UserRole`
- **Types** — `GeoLocation`

## Usage

Other modules in the VectorOps monorepo depend on `@vectorops/core` for shared type definitions:

```ts
import { Call, CallStatus, GeoLocation } from "@vectorops/core";
```

## Design Principles

- This module should remain **framework-agnostic** — no runtime dependencies on any specific backend, frontend, or database framework.
- Contains only type definitions (interfaces and enums) — no business logic, no database code, no mock data.
- All other VectorOps modules may depend on this module, but this module should not depend on any other VectorOps module.
