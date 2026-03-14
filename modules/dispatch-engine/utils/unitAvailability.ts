import type { Unit, Assignment } from "@vectorops/core";

/**
 * Filter units to only those that are not currently assigned.
 * A unit is considered available if it has no active assignment.
 */
export function getAvailableUnits(
  units: Unit[],
  activeAssignments: Assignment[]
): Unit[] {
  const assignedUnitIds = new Set(
    activeAssignments.map((a) => a.unitId)
  );
  return units.filter((unit) => !assignedUnitIds.has(unit.id));
}
