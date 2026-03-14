import type { LoginRequest } from "../types/LoginRequest.ts";
import type { LoginResponse } from "../types/LoginResponse.ts";
import type { AuthUserContext } from "../types/AuthUserContext.ts";

export interface AuthService {
  login(input: LoginRequest): Promise<LoginResponse>;
  getCurrentUser(token: string): Promise<AuthUserContext>;
}
