import type { CallStatus } from "../enums/CallStatus";
import type { GeoLocation } from "../types/GeoLocation";

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
