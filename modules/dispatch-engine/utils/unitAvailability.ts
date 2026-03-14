import type { Unit, Assignment } from "@vectorops/core";

/**
 * Check whether a unit is available for dispatch.
 * A unit is considered available if it has no active assignment.
 */
export function isUnitAvailable(
  unit: Unit,
  activeAssignments: Assignment[]
): boolean {
  return !activeAssignments.some((a) => a.unitId === unit.id);
}
