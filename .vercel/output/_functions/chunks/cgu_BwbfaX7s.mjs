import { c as createComponent } from './astro-component_eOF6crK8.mjs';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_DMt6HwzZ.mjs';
import { L as LEGAL_CONTENT, $ as $$LegalLayout } from './legal-data_DxofrVP2.mjs';
import { marked } from 'marked';

const $$Cgu = createComponent(async ($$result, $$props, $$slots) => {
  const apiUrl = "https://api.gastsar.fr/api";
  const response = await fetch(`${apiUrl}/api/config/legal/CGU`).catch(() => null);
  const data = response ? await response.json().catch(() => null) : null;
  const title = `Conditions Générales <span class="italic text-coolgrey">d'Utilisation.</span>`;
  const metaTitle = `Conditions Générales d'Utilisation | Kadô-kou`;
  const description = "Conditions générales d'utilisation de Kadô-kou, l'application gratuite de wishlist et liste de cadeaux. Découvrez les règles d'utilisation, permissions de l'application, vos droits et obligations.";
  let contentHtml = "";
  let lastUpdated = "08 Mai 2026";
  if (data?.success && data?.document) {
    contentHtml = await marked.parse(data.document.content);
    const date = new Date(data.document.updatedAt);
    lastUpdated = date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  } else {
    const fallback = LEGAL_CONTENT.cgu;
    contentHtml = fallback.sections.map(
      (section, idx) => `<h2>${section.title || ""}</h2>
<p>${section.body}</p>`
    ).join("\n\n");
  }
  return renderTemplate`${renderComponent($$result, "LegalLayout", $$LegalLayout, { "title": title, "metaTitle": metaTitle, "description": description, "subtitle": "Contrat d'Usage", "lastUpdated": lastUpdated }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-sm md:prose-base prose-gray max-w-none text-deepblack legal-content">${unescapeHTML(contentHtml)}</div> ` })}`;
}, "E:/www/kadoko/apps/web-kadokou/src/pages/cgu.astro", void 0);
const $$file = "E:/www/kadoko/apps/web-kadokou/src/pages/cgu.astro";
const $$url = "/cgu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cgu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
