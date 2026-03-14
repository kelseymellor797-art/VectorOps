export interface Position {
  id: string;
  unitId: string;
  lat: number;
  lng: number;
  speed?: number;
  heading?: number;
  timestamp: Date;
}
