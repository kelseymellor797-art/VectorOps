import type { UserRole } from "../../core/enums/UserRole.ts";

export interface AuthTokenPayload {
  sub: string;
  tenantId: string;
  role: UserRole;
}
