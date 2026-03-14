# VectorOps Roadmap

## Phase 1 — Monorepo Foundation ✅

- [x] Set up pnpm workspace
- [x] Scaffold `apps/dispatcher-console`, `apps/driver-pwa`, `apps/public-track` (Vite + React-TS)
- [x] Create `apps/server` (FastAPI)
- [x] Create `packages/types`, `packages/ui`, `packages/api-client`
- [x] Create domain modules: `core`, `auth`, `fleet`, `calls`, `assignments`, `tracking`, `realtime`

## Phase 2 — Core Backend

- [ ] Define data models (vehicles, drivers, assignments)
- [ ] Implement authentication (JWT)
- [ ] REST endpoints for fleet management
- [ ] WebSocket support for real-time updates

## Phase 3 — Frontend Apps

- [ ] Dispatcher console: dashboard, map view, assignment board
- [ ] Driver PWA: current job, navigation, status updates
- [ ] Public tracking page: shipment status, ETA

## Phase 4 — Shared Packages

- [ ] Publish `@vectorops/types` with shared interfaces
- [ ] Build `@vectorops/ui` component library
- [ ] Generate `@vectorops/api-client` from OpenAPI spec

## Phase 5 — Infrastructure

- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Containerise with Docker Compose
- [ ] Deploy to cloud (Fly.io / Railway / AWS)
