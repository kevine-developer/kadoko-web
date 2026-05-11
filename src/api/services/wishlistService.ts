import { apiFetch } from "../client";

export interface Wishlist {
  id: string;
  title: string;
  description?: string;
  eventDate?: string;
  visibility: string;
  eventType?: string;
  isCollaborative: boolean;
  isSurprise: boolean;
  ownerId: string;
  owner?: {
    id: string;
    name: string;
    username: string;
    avatarUrl?: string;
  };
}

export class WishlistService {
  static async getById(id: string): Promise<Wishlist | null> {
    try {
      const data = await apiFetch<{ success: boolean; wishlist: Wishlist }>(`/wishlists/${id}`);
      if (data.success) {
        return data.wishlist;
      }
      return null;
    } catch (error) {
      console.error(`[WishlistService] Failed to fetch wishlist ${id}:`, error);
      return null;
    }
  }

  static async getByUserId(userId: string): Promise<Wishlist[]> {
    try {
      const data = await apiFetch<{ success: boolean; wishlists: Wishlist[] }>(`/wishlists/user/${userId}`);
      if (data.success) {
        return data.wishlists;
      }
      return [];
    } catch (error) {
      console.error(`[WishlistService] Failed to fetch wishlists for user ${userId}:`, error);
      return [];
    }
  }
}
