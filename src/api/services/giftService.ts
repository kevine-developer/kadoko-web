import { apiFetch } from "../client";

export interface Gift {
  id: string;
  name: string;
  description?: string;
  price?: number;
  currency?: string;
  imageUrl?: string;
  link?: string;
  status: "AVAILABLE" | "RESERVED" | "BOUGHT";
  wishlistId: string;
}

export class GiftService {
  static async getById(id: string): Promise<Gift | null> {
    try {
      const data = await apiFetch<{ success: boolean; gift: Gift }>(`/gifts/${id}`);
      if (data.success) {
        return data.gift;
      }
      return null;
    } catch (error) {
      console.error(`[GiftService] Failed to fetch gift ${id}:`, error);
      return null;
    }
  }

  static async getByWishlistId(wishlistId: string): Promise<Gift[]> {
    try {
      const data = await apiFetch<{ success: boolean; gifts: Gift[] }>(`/wishlists/${wishlistId}/gifts`);
      if (data.success) {
        return data.gifts;
      }
      return [];
    } catch (error) {
      console.error(`[GiftService] Failed to fetch gifts for wishlist ${wishlistId}:`, error);
      return [];
    }
  }
}
