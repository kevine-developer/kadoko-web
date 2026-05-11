import { apiFetch } from "../client";

export interface Reception {
  id: string;
  title: string;
  description?: string;
  date: string;
  location?: string;
  ownerId: string;
}

export class ReceptionService {
  static async getById(id: string): Promise<Reception | null> {
    try {
      const data = await apiFetch<{ success: boolean; reception: Reception }>(`/receptions/${id}`);
      if (data.success) {
        return data.reception;
      }
      return null;
    } catch (error) {
      console.error(`[ReceptionService] Failed to fetch reception ${id}:`, error);
      return null;
    }
  }
}
