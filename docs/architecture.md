# VectorOps Architecture

## Overview

VectorOps is a monorepo containing all services and apps for the fleet & logistics operations platform.

## Structure

```
vectorops/
  apps/
    server/          # FastAPI backend
    dispatcher-console/  # React-TS app for dispatchers
    driver-pwa/          # React-TS PWA for drivers
    public-track/        # React-TS public tracking page

  modules/
    core/            # Core shared business logic
    auth/            # Authentication & authorization
    fleet/           # Fleet management domain
    calls/           # Call management domain
    assignments/     # Assignment management domain
    tracking/        # Real-time tracking domain
    realtime/        # WebSocket / real-time infrastructure

  packages/
    ui/              # Shared React UI components
    types/           # Shared TypeScript type definitions
    api-client/      # Shared API client utilities

  docs/
    architecture.md  # This file
    roadmap.md       # Product roadmap
```

## Apps

| App | Description |
|-----|-------------|
| `apps/server` | FastAPI backend serving the REST API |
| `apps/dispatcher-console` | Internal web app for fleet dispatchers |
| `apps/driver-pwa` | Progressive Web App for drivers |
| `apps/public-track` | Public-facing shipment tracking page |

## Shared Packages

| Package | Description |
|---------|-------------|
| `packages/types` | TypeScript interfaces and enums shared across apps |
| `packages/ui` | React component library |
| `packages/api-client` | Typed API client generated from the backend schema |

## Modules

Business logic is grouped by domain responsibility:

| Module | Responsibility |
|--------|----------------|
| `modules/core` | Utilities, constants, and foundational logic |
| `modules/auth` | Authentication flows and permission logic |
| `modules/fleet` | Vehicle and driver management |
| `modules/calls` | Incoming call handling |
| `modules/assignments` | Job and route assignment logic |
| `modules/tracking` | GPS & location tracking logic |
| `modules/realtime` | WebSocket events and real-time updates |
