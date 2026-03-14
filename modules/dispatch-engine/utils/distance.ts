import type { GeoLocation } from "@vectorops/core";

/**
 * Calculate the Haversine distance between two geographic points.
 * Returns distance in kilometers.
 */
export function haversineDistance(a: GeoLocation, b: GeoLocation): number {
  const R = 6371; // Earth's radius in km
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);

  const sinHalfDLat = Math.sin(dLat / 2);
  const sinHalfDLng = Math.sin(dLng / 2);

  const h =
    sinHalfDLat * sinHalfDLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinHalfDLng * sinHalfDLng;

  return 2 * R * Math.asin(Math.sqrt(h));
}
