import type { Call, Unit, Assignment, Position } from "@vectorops/core";

export interface DispatchService {
  findClosestUnit(
    call: Call,
    units: Unit[],
    positions: Position[]
  ): Unit | null;

  assignUnit(
    call: Call,
    unit: Unit
  ): Assignment;
}
