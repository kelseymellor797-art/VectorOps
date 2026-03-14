import type { CallStatus } from "../enums/CallStatus.ts";
import type { GeoLocation } from "../types/GeoLocation.ts";

export interface Call {
  id: string;
  tenantId: string;
  customerName: string;
  callbackNumber?: string;
  pickupLocation: GeoLocation;
  dropoffLocation?: GeoLocation;
  serviceType: string;
  notes?: string;
  status: CallStatus;
  createdAt: Date;
}
