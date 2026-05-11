import { apiFetch } from "../client";

export interface User {
  id: string;
  name: string;
  username: string;
  image?: string;
  description?: string;
}

export class UserService {
  static async getById(id: string): Promise<User | null> {
    try {
      // Note: On utilise le endpoint public pour le partage
      const data = await apiFetch<{ success: boolean; user: User }>(`/users/${id}`);
      if (data.success) {
        return data.user;
      }
      return null;
    } catch (error) {
      console.error(`[UserService] Failed to fetch user ${id}:`, error);
      return null;
    }
  }
}
