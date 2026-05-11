import { apiFetch } from "../client";

export interface GlobalAlert {
  id: string | null;
  active: boolean;
  type: "INFO" | "WARNING" | "NEW" | "SUCCESS" | "MARKETING";
  title: string;
  message: string;
  imageUrl: string | null;
  expiresAt: string | null;
}

export interface SocialConfig {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  supportEmail?: string;
}

export interface AppLinks {
  playStore?: string;
  appStore?: string;
  apkDownload?: string;
}

export interface PublicConfig {
  globalAlert: GlobalAlert;
  maintenanceMode?: boolean;
  social?: SocialConfig;
  appLinks?: AppLinks;
}

export class SystemService {
  static async getConfig(): Promise<PublicConfig | null> {
    try {
      const data = await apiFetch<{ success: boolean; config: PublicConfig }>("/config");
      if (data.success) {
        return data.config;
      }
      return null;
    } catch (error) {
      console.error("[SystemService] Failed to fetch config:", error);
      return null;
    }
  }

  static async registerBetaTester(email: string): Promise<boolean> {
    try {
      const data = await apiFetch<{ success: boolean }>("/config/beta-tester", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      return data.success;
    } catch (error) {
      console.error("[SystemService] Failed to register beta tester:", error);
      return false;
    }
  }
}
