import type { LoginRequest } from "../types/LoginRequest";
import type { LoginResponse } from "../types/LoginResponse";
import type { AuthUserContext } from "../types/AuthUserContext";

export interface AuthService {
  login(input: LoginRequest): Promise<LoginResponse>;
  getCurrentUser(token: string): Promise<AuthUserContext>;
}
