# @vectorops/auth

Auth contracts, types, and helpers for VectorOps.

## Overview

This module defines the authentication-related types, interfaces, and utility functions used across the VectorOps platform. It is **framework-agnostic** — no database, HTTP framework, or JWT library is included here.

## Contents

- **types/** — `AuthTokenPayload`, `AuthUserContext`, `LoginRequest`, `LoginResponse`
- **interfaces/** — `AuthService`, `TokenService`
- **utils/** — `authGuards` (role-checking helpers)

## Usage

Import from the package entry point:

```ts
import type { AuthTokenPayload, AuthService } from "@vectorops/auth";
import { isAdmin } from "@vectorops/auth";
```

## Notes

- Backend implementation (JWT signing, database lookups, etc.) will be added in a later phase.
- This module depends on `@vectorops/core` for shared types like `UserRole`, `User`, and `Membership`.
