import { UserRole } from "@vectorops/core";

export function isAdmin(role: UserRole): boolean {
  return role === UserRole.ADMIN;
}

export function isDispatcher(role: UserRole): boolean {
  return role === UserRole.DISPATCHER;
}

export function isDriver(role: UserRole): boolean {
  return role === UserRole.DRIVER;
}
