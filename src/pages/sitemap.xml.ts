import { apiFetch } from "../api/client";

export const prerender = false;

export async function GET({ site }: { site: URL }) {
  const today = new Date().toISOString().split("T")[0];

  // Pages statiques
  const staticPages = [
    { url: "", changefreq: "weekly", priority: "1.0", lastmod: today },
    { url: "/news", changefreq: "daily", priority: "0.9", lastmod: today },
    { url: "/centre-aide", changefreq: "monthly", priority: "0.7", lastmod: today },
    { url: "/cgu", changefreq: "yearly", priority: "0.4", lastmod: today },
    { url: "/confidentialite", changefreq: "yearly", priority: "0.4", lastmod: today },
    { url: "/mentions-legales", changefreq: "yearly", priority: "0.4", lastmod: today },
    { url: "/suppression-compte", changefreq: "yearly", priority: "0.2", lastmod: today },
    { url: "/licences", changefreq: "yearly", priority: "0.3", lastmod: today },
    { url: "/cookies", changefreq: "yearly", priority: "0.3", lastmod: today },
  ];

  const slugify = (title: string | null | undefined, fallbackId: string) => {
    if (!title) return fallbackId;
    const cleanTitle = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return cleanTitle || fallbackId;
  };

  // Pages dynamiques : articles de news publiés
  let newsPages: typeof staticPages = [];
  try {
    const data = await apiFetch<{ success: boolean; news: any[] }>("/news");
    if (data?.success && data.news?.length > 0) {
      newsPages = data.news.map((item) => ({
        url: `/news/${slugify(item.title, item.id)}`,
        changefreq: "monthly",
        priority: "0.7",
        lastmod: item.updatedAt
          ? new Date(item.updatedAt).toISOString().split("T")[0]
          : today,
      }));
    }
  } catch {
    // Si l'API n'est pas joignable, on continue sans les news dynamiques
  }

  const allPages = [...staticPages, ...newsPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      return `
  <url>
    <loc>${new URL(page.url, site).href}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
