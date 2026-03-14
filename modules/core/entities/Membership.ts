import type { UserRole } from "../enums/UserRole.ts";

export interface Membership {
  id: string;
  userId: string;
  tenantId: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
