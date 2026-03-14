import type { User } from "../../core/entities/User.ts";
import type { Membership } from "../../core/entities/Membership.ts";

export interface LoginResponse {
  token: string;
  user: User;
  membership: Membership;
}
