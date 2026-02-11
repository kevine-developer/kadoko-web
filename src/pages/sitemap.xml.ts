export const prerender = true;

export async function GET({ site }: { site: URL }) {
  const pages = [
    "",
    "/cgu",
    "/confidentialite",
    "/mentions-legales",
    "/centre-aide",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${new URL(page, site).href}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
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
