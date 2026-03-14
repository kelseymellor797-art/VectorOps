import type { UserRole } from "../../core/enums/UserRole.ts";

export interface AuthUserContext {
  userId: string;
  tenantId: string;
  role: UserRole;
}
