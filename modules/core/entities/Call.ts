import type { CallStatus } from "../enums/CallStatus.ts";
import type { GeoLocation } from "../types/GeoLocation.ts";

export interface Call {
  id: string;
  tenantId: string;
  status: CallStatus;
  origin: GeoLocation;
  destination: GeoLocation;
  createdAt: string;
  updatedAt: string;
}
