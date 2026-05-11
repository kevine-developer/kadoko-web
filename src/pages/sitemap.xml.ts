export const prerender = true;

export async function GET({ site }: { site: URL }) {
  const lastmod = "2026-03-15";

  const pages = [
    { url: "", changefreq: "weekly", priority: "1.0", lastmod },
    { url: "/centre-aide", changefreq: "monthly", priority: "0.8", lastmod },
    { url: "/licences", changefreq: "monthly", priority: "0.3", lastmod },
    { url: "/cookies", changefreq: "monthly", priority: "0.3", lastmod },
    { url: "/cgu", changefreq: "yearly", priority: "0.4", lastmod },
    { url: "/confidentialite", changefreq: "yearly", priority: "0.4", lastmod },
    { url: "/mentions-legales", changefreq: "yearly", priority: "0.4", lastmod },
    { url: "/suppression-compte", changefreq: "yearly", priority: "0.2", lastmod },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
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
