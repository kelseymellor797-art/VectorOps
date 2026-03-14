import type { UserRole } from "../enums/UserRole";

export interface Membership {
  id: string;
  tenantId: string;
  userId: string;
  role: UserRole;
  createdAt: Date;
}
