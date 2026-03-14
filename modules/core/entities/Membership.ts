import type { UserRole } from "../enums/UserRole.ts";

export interface Membership {
  id: string;
  tenantId: string;
  userId: string;
  role: UserRole;
  createdAt: Date;
}
