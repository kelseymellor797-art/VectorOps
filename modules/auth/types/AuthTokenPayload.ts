import type { UserRole } from "@vectorops/core";

export interface AuthTokenPayload {
  sub: string;
  tenantId: string;
  role: UserRole;
}
