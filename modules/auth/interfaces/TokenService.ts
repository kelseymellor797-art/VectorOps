import type { AuthTokenPayload } from "../types/AuthTokenPayload.ts";

export interface TokenService {
  sign(payload: AuthTokenPayload): Promise<string>;
  verify(token: string): Promise<AuthTokenPayload>;
}
