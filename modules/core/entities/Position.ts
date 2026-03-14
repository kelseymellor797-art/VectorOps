import type { GeoLocation } from "../types/GeoLocation.ts";

export interface Position {
  id: string;
  unitId: string;
  location: GeoLocation;
  timestamp: string;
}
