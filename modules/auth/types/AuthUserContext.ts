import type { UserRole } from "@vectorops/core";

export interface AuthUserContext {
  userId: string;
  tenantId: string;
  role: UserRole;
}
