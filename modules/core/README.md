# @vectorops/core

Core domain module for VectorOps. Contains shared entity interfaces, enums, and types used across the platform.

## Structure

```
core/
  index.ts              # Barrel exports

  entities/
    Tenant.ts            # Organisation / tenant
    User.ts              # Platform user
    Membership.ts        # User ↔ Tenant link with role
    Unit.ts              # Fleet vehicle / unit
    Call.ts              # Service call / job request
    Assignment.ts        # Call ↔ Unit assignment
    Position.ts          # GPS position record

  enums/
    CallStatus.ts        # Call lifecycle states
    UserRole.ts          # User role types

  types/
    GeoLocation.ts       # Latitude / longitude pair
```

## Usage

```ts
import { CallStatus, UserRole } from "@vectorops/core";
import type { Call, Unit, GeoLocation } from "@vectorops/core";
```
