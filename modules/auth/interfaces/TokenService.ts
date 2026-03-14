import type { AuthTokenPayload } from "../types/AuthTokenPayload";

export interface TokenService {
  sign(payload: AuthTokenPayload): Promise<string>;
  verify(token: string): Promise<AuthTokenPayload>;
}
