export interface User {
  id: string;
  email: string;
  displayName: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
}
