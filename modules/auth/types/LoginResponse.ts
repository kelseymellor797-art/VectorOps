import type { User, Membership } from "@vectorops/core";

export interface LoginResponse {
  token: string;
  user: User;
  membership: Membership;
}
