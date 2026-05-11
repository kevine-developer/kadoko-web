import { apiFetch } from "../client";

export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
}

export class UserService {
  static async getById(id: string): Promise<User | null> {
    try {
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

  static async getByUsername(username: string): Promise<User | null> {
    try {
      const data = await apiFetch<{ success: boolean; user: User }>(`/users/username/${username}`);
      if (data.success) {
        return data.user;
      }
      return null;
    } catch (error) {
      console.error(`[UserService] Failed to fetch user by username ${username}:`, error);
      return null;
    }
  }
}
