import { c as createComponent } from './astro-component_eOF6crK8.mjs';
import { p as createRenderInstruction, r as renderTemplate, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, n as renderComponent, q as renderHead, o as renderSlot } from './entrypoint_DMt6HwzZ.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const APP_NAME = "Kadô-kou";
const SITE_URL = "https://kado-kou.fr";
const SEO = {
  defaultTitle: `Kadô-kou (Kadokou) — Application Wishlist & Liste de Cadeaux Gratuite`,
  defaultDescription: "Kadô-kou (aussi appelé Kadokou, Kado-kou) est l'application gratuite de wishlist et liste de cadeaux. Créez votre liste de mariage, de naissance ou d'anniversaire, partagez vos idées cadeaux avec vos proches et organisez vos réceptions en toute simplicité.",
  defaultImage: "/android-chrome-512x512.png",
  keywords: [
    // ═══ Nom de l'app — Toutes les variantes orthographiques ═══
    "kadokou",
    "kado kou",
    "kadôkou",
    "kadô-kou",
    "kado-kou",
    "kadô kou",
    "kadokou app",
    "kadokou application",
    "kado-kou application",
    "kadokou liste de cadeaux",
    "kado-kou wishlist",
    "kadokou wishlist",
    "application kadokou",
    "application kado-kou",
    "telecharger kadokou",
    "télécharger kadokou",
    "télécharger kado-kou",
    "kadokou gratuit",
    "kado-kou gratuit",
    "kadokou avis",
    "kadokou android",
    // ═══ Recherches application / wishlist ═══
    "application wishlist",
    "application liste de cadeaux",
    "application de cadeaux",
    "app wishlist",
    "app liste de cadeaux",
    "meilleure application wishlist",
    "meilleure application liste de cadeaux",
    "meilleure app cadeaux",
    "application gratuite wishlist",
    "application gratuite liste de cadeaux",
    "wishlist application gratuite",
    "wishlist app",
    "wishlist en ligne",
    "wishlist en ligne gratuite",
    "créer une wishlist",
    "créer sa wishlist",
    "ma wishlist",
    "wishlist cadeau",
    "wishlist",
    // ═══ Liste de cadeaux ═══
    "liste de cadeaux",
    "liste de cadeaux en ligne",
    "créer une liste de cadeaux",
    "créer ma liste de cadeaux",
    "faire une liste de cadeaux",
    "liste de cadeaux gratuite",
    "collection de cadeaux",
    "registre de cadeaux",
    "partager sa liste de cadeaux",
    "gestion cadeaux",
    "cadeau en ligne",
    "liste de souhaits",
    "liste de souhaits en ligne",
    "liste d'envies",
    // ═══ Événements spécifiques ═══
    "liste de mariage",
    "liste de mariage en ligne",
    "liste de mariage gratuite",
    "cadeau de mariage",
    "liste de naissance",
    "liste de naissance en ligne",
    "liste de naissance gratuite",
    "cadeau de naissance",
    "cadeau anniversaire",
    "liste d'anniversaire",
    "idées de cadeaux d'anniversaire",
    "baby shower liste",
    "cagnotte en ligne",
    "organiser un événement",
    "organiser une réception",
    "liste cadeau noël",
    "liste de noël en ligne",
    // ═══ Idées cadeaux ═══
    "idée cadeau",
    "idées cadeaux",
    "trouver une idée cadeau",
    "idée cadeau original",
    "idée cadeau femme",
    "idée cadeau homme",
    "quel cadeau offrir",
    // ═══ Éditeur / Créateur ═══
    "devengalere",
    "dev en galere",
    "yves narson kevine"
  ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title = SEO.defaultTitle,
    description = SEO.defaultDescription,
    image = SEO.defaultImage,
    canonical,
    noindex = false,
    type = "website",
    keywords = SEO.keywords
  } = Astro2.props;
  const rawCanonicalURL = canonical ? new URL(canonical, SITE_URL) : new URL(Astro2.url.pathname, SITE_URL);
  const canonicalURL = rawCanonicalURL.href.endsWith("/") && rawCanonicalURL.pathname !== "/" ? rawCanonicalURL.href.slice(0, -1) : rawCanonicalURL.href;
  const socialImageURL = new URL(image, SITE_URL);
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Yves Narson Kevine — Devengalere"><link rel="publisher"', '><meta name="publisher" content="Devengalere"><meta name="robots"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="Kadô-kou — Liste de Cadeaux"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Fonts Preload (Performance) --><!-- Georgia est une police système safe, mais si on utilise une webfont : --><!-- <link rel="preload" href="/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin /> --><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(SITE_URL, "href"), addAttribute(noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1", "content"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(title, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), unescapeHTML(JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kadô-kou",
      alternateName: [
        "Kadokou",
        "Kado-kou",
        "Kado kou",
        "Kadôkou",
        "Liste de cadeaux Kadô-kou",
        "Application wishlist Kadô-kou"
      ],
      url: SITE_URL,
      description,
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title.split("|")[0].trim(),
          item: canonicalURL
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kadô-kou — Application Wishlist & Liste de Cadeaux",
      alternateName: ["Kadokou", "Kado-kou", "Kado kou", "Kadô-kou wishlist"],
      operatingSystem: "Android, iOS",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Wishlist & Liste de cadeaux",
      description: "Kadô-kou est l'application gratuite de wishlist et liste de cadeaux. Créez votre liste de mariage, liste de naissance ou d'anniversaire, partagez vos idées cadeaux avec vos proches et organisez vos réceptions.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock"
      },
      image: socialImageURL,
      keywords: "wishlist, application wishlist, liste de cadeaux, liste de mariage, liste de naissance, app cadeaux, wishlist en ligne, cadeau anniversaire",
      featureList: [
        "Wishlist et liste de cadeaux en ligne",
        "Création de listes de mariage et de naissance",
        "Collections de cadeaux curatées",
        "Gestion d'événements et réceptions",
        "Partage sécurisé avec code d'accès",
        "Réseau social privé pour les proches",
        "Application gratuite sans publicité"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment créer une liste de cadeaux sur Kadô-kou ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour créer une liste de cadeaux, téléchargez l'application Kadô-kou sur Google Play ou l'App Store, créez un compte gratuitement, puis cliquez sur 'Nouvelle Liste'. Vous pourrez ensuite ajouter tous vos cadeaux favoris."
          }
        },
        {
          "@type": "Question",
          name: "Est-ce que Kadô-kou est gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Kadô-kou est une application 100% gratuite, sans publicité et sans frais cachés pour la création et le partage de vos wishlists."
          }
        },
        {
          "@type": "Question",
          name: "Puis-je créer une liste de mariage ou de naissance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Kadô-kou propose des modèles dédiés pour les listes de mariage, de naissance, de baby shower et d'anniversaire avec une gestion simplifiée des convives."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Devengalere — Dev en galère",
      url: SITE_URL,
      logo: new URL("/apple-touch-icon.png", SITE_URL).toString(),
      description: "Devengalere, par Yves Narson Kevine, éditeur de Kadô-kou — l'application de liste de cadeaux et de gestion d'événements.",
      sameAs: [
        "https://www.instagram.com/kadokou_app",
        "https://x.com/kadokou",
        "https://www.linkedin.com/company/kadokou"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "yvesnarsonkevine@gmail.com",
        contactType: "customer service",
        availableLanguage: "French"
      }
    }
  ])));
}, "E:/www/kadoko/apps/web-kadokou/src/components/SEOHead.astro", void 0);

const APP_ICON_URL = "/android-chrome-192x192.png";
const LINK_APP_ANDROID = "https://play.google.com/store/apps/details?id=com.kadokou.app";
const LINK_APP_IOS = "";
const LINK_DEV_EN_GALERE = "https://devengalere.fr/";
const LINK_YVES_NARSON_KEVINE = "https://www.yves-narsonkevine.fr/";
const SOCIAL_LINKS = {
  github: "https://github.com/kevine-developer",
  linkedin: "https://www.linkedin.com/in/yvesnarsonkevine/",
  facebook: "https://www.facebook.com/kadokou",
  instagram: "https://www.instagram.com/kadokou_app/"
};

const $$StoreBadges = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StoreBadges;
  const { store, className = "" } = Astro2.props;
  return renderTemplate`${store === "play" ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`inline-block ${className}`, "class")}><div class="h-12 px-6 bg-black rounded-xl flex items-center gap-3 border border-white/10"><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-widest text-white/60">Disponible sur</span><span class="text-sm font-black uppercase tracking-tight text-white">Google Play</span></div></div></div>` : renderTemplate`<div${addAttribute(`inline-block ${className}`, "class")}><div class="h-12 px-6 bg-black rounded-xl flex items-center gap-3 border border-white/10"><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-widest text-white/60">Télécharger sur l'</span><span class="text-sm font-black uppercase tracking-tight text-white">App Store</span></div></div></div>`}`;
}, "E:/www/kadoko/apps/web-kadokou/src/components/StoreBadges.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { config } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const playStoreUrl = config?.appLinks?.playStore || LINK_APP_ANDROID;
  const appStoreUrl = config?.appLinks?.appStore || LINK_APP_IOS;
  const instagramUrl = config?.social?.instagram || SOCIAL_LINKS.instagram;
  const facebookUrl = config?.social?.facebook || SOCIAL_LINKS.facebook;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-deepblack text-bonesilk py-16 md:py-24 px-6 md:px-20 relative overflow-hidden" data-astro-cid-sz7xmlte> <div class="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay noise-overlay" data-astro-cid-sz7xmlte></div> <div class="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center md:items-start md:flex-row md:justify-between gap-12 mb-12" data-astro-cid-sz7xmlte> <div class="flex flex-col items-center md:items-start space-y-6 max-w-sm" data-astro-cid-sz7xmlte> <div class="flex flex-col" data-astro-cid-sz7xmlte> <span class="text-xl md:text-2xl font-serif italic tracking-tight mb-2" data-astro-cid-sz7xmlte>Kadô-Kou</span> <span class="text-xs font-medium text-brushedgold tracking-[0.2em] uppercase leading-none" data-astro-cid-sz7xmlte>L'Art d'Offrir</span> </div> <p class="text-sm font-light text-bonesilk/60 text-center md:text-left leading-relaxed" data-astro-cid-sz7xmlte>
Réinventez l'art d'offrir et de recevoir avec une application conçue
        pour l'élégance et la simplicité.
</p> <div class="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4" data-astro-cid-sz7xmlte> <a${addAttribute(SOCIAL_LINKS.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="text-[10px] font-black uppercase tracking-widest text-bonesilk/40 hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>
LinkedIn
</a> <a${addAttribute(facebookUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-[10px] font-black uppercase tracking-widest text-bonesilk/40 hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>
Facebook
</a> <a${addAttribute(instagramUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-[10px] font-black uppercase tracking-widest text-bonesilk/40 hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>
Instagram
</a> <a${addAttribute(SOCIAL_LINKS.github, "href")} target="_blank" rel="noopener noreferrer" class="text-[10px] font-black uppercase tracking-widest text-bonesilk/40 hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>
GitHub
</a> </div> </div> <nav class="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 md:gap-x-20 text-center md:text-left" aria-label="Liens du pied de page" data-astro-cid-sz7xmlte> <div class="space-y-5" data-astro-cid-sz7xmlte> <h3 class="text-xs font-bold tracking-[0.2em] uppercase text-bonesilk/40" data-astro-cid-sz7xmlte>
Navigation
</h3> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/#receptions" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Réceptions</a> </li> <li data-astro-cid-sz7xmlte> <a href="/#fonctionnalites" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Fonctionnalités</a> </li> <li data-astro-cid-sz7xmlte> <a href="/#manifesto" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Le Manifeste</a> </li> </ul> </div> <div class="space-y-5" data-astro-cid-sz7xmlte> <h3 class="text-xs font-bold tracking-[0.2em] uppercase text-bonesilk/40" data-astro-cid-sz7xmlte>
Légal
</h3> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/mentions-legales" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Mentions légales</a> </li> <li data-astro-cid-sz7xmlte> <a href="/cgu" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Conditions d'utilisation</a> </li> <li data-astro-cid-sz7xmlte> <a href="/confidentialite" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Politique de confidentialité</a> </li> <li data-astro-cid-sz7xmlte> <a href="/suppression-compte" class="text-sm text-bonesilk/80 hover:text-brushedgold transition-all duration-300" data-astro-cid-sz7xmlte>Suppression de compte</a> </li> </ul> </div> <div class="space-y-5 col-span-2 md:col-span-1" data-astro-cid-sz7xmlte> <h3 class="text-xs font-bold tracking-[0.2em] uppercase text-bonesilk/40" data-astro-cid-sz7xmlte>
Disponibilité
</h3> <div class="flex flex-col gap-4" data-astro-cid-sz7xmlte> <a${addAttribute(playStoreUrl, "href")} target="_blank" rel="noopener noreferrer" class="transition-transform duration-300 hover:scale-105 active:scale-95 self-center md:self-start" aria-label="Télécharger sur Google Play" data-astro-cid-sz7xmlte> ${renderComponent($$result, "StoreBadges", $$StoreBadges, { "store": "play", "className": "h-10", "data-astro-cid-sz7xmlte": true })} </a> ${appStoreUrl ? renderTemplate`<a${addAttribute(appStoreUrl, "href")} target="_blank" rel="noopener noreferrer" class="transition-transform duration-300 hover:scale-105 active:scale-95 self-center md:self-start" aria-label="Télécharger sur l'App Store" data-astro-cid-sz7xmlte> ${renderComponent($$result, "StoreBadges", $$StoreBadges, { "store": "apple", "className": "h-10", "data-astro-cid-sz7xmlte": true })} </a>` : renderTemplate`<div class="opacity-40 grayscale cursor-not-allowed transition-all duration-300 self-center md:self-start" title="Bientôt disponible sur l'App Store" data-astro-cid-sz7xmlte> ${renderComponent($$result, "StoreBadges", $$StoreBadges, { "store": "apple", "className": "h-10", "data-astro-cid-sz7xmlte": true })} </div>`} </div> </div> </nav> </div> <div class="max-w-[1400px] mx-auto pt-8 border-t border-bonesilk/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10" data-astro-cid-sz7xmlte> <div class="flex items-center gap-4" data-astro-cid-sz7xmlte> <div class="flex items-center gap-2" data-astro-cid-sz7xmlte> <span class="w-1 h-1 rounded-full bg-brushedgold/40" data-astro-cid-sz7xmlte></span> <p class="text-xs tracking-[0.3em] uppercase text-bonesilk/60" data-astro-cid-sz7xmlte>
Toulouse • France
</p> </div> <span class="text-[9px] px-2 py-0.5 rounded-full border border-bonesilk/10 text-bonesilk/40 font-bold tracking-widest uppercase" data-astro-cid-sz7xmlte>Beta</span> </div> <p class="text-xs tracking-widest text-bonesilk/40 text-center" data-astro-cid-sz7xmlte>
&copy; ${currentYear} — <a${addAttribute(LINK_YVES_NARSON_KEVINE, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>Yves Narson Kevine</a> par <a${addAttribute(LINK_DEV_EN_GALERE, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-brushedgold transition-colors duration-300" data-astro-cid-sz7xmlte>Devengalere</a>. Tous droits réservés.
</p> </div> </footer>`;
}, "E:/www/kadoko/apps/web-kadokou/src/components/Footer.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "E:/www/kadoko/apps/web-kadokou/node_modules/.pnpm/astro@6.2.1_@netlify+blobs@_87e0dbc930d3e37ee22eeee70b21eaef/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/www/kadoko/apps/web-kadokou/node_modules/.pnpm/astro@6.2.1_@netlify+blobs@_87e0dbc930d3e37ee22eeee70b21eaef/node_modules/astro/components/ClientRouter.astro", void 0);

const API_URL = "https://api.gastsar.fr/api";
async function apiFetch(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${response.status}`);
  }
  return response.json();
}

class SystemService {
  static async getConfig() {
    try {
      const data = await apiFetch("/config");
      if (data.success) {
        return data.config;
      }
      return null;
    } catch (error) {
      console.error("[SystemService] Failed to fetch config:", error);
      return null;
    }
  }
  static async registerBetaTester(email, token) {
    try {
      const data = await apiFetch("/config/beta-tester", {
        method: "POST",
        body: JSON.stringify({ email, token })
      });
      return data.success;
    } catch (error) {
      console.error("[SystemService] Failed to register beta tester:", error);
      return false;
    }
  }
}

const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="fixed bottom-6 right-6 z-10000 max-w-sm w-full px-4 transform translate-y-20 opacity-0 transition-all duration-700 pointer-events-none"> <div class="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col gap-6 pointer-events-auto"> <div class="space-y-3"> <h3 class="text-sm font-black uppercase tracking-[0.2em] text-deepblack">Une visite sur mesure</h3> <p class="text-xs text-gray-500 font-medium leading-relaxed">
Comme chaque attention, votre visite est unique. Nous utilisons quelques cookies pour que votre expérience sur Kadô-kou soit aussi fluide qu'élégante.
</p> </div> <div class="flex gap-3 pt-2"> <button id="cookie-accept" class="flex-1 h-11 bg-deepblack text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brushedgold transition-all duration-300">
Accepter
</button> <button id="cookie-refuse" class="px-5 h-11 bg-gray-100 text-gray-500 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300">
Refuser
</button> </div> <a href="/cookies" class="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest hover:text-brushedgold transition-colors">
En savoir plus sur notre charte
</a> </div> </div> ${renderScript($$result, "E:/www/kadoko/apps/web-kadokou/src/components/CookieBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/www/kadoko/apps/web-kadokou/src/components/CookieBanner.astro", void 0);

const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, noindex, keywords } = Astro2.props;
  const config = await SystemService.getConfig();
  return renderTemplate`<html lang="fr" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "image": image, "noindex": noindex, "keywords": keywords, "data-astro-cid-sckkx6r4": true })}<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"><link rel="shortcut icon" href="/favicon.ico"><!-- PWA Configuration --><link rel="manifest" href="/manifest.webmanifest"><meta name="theme-color" content="#FDFBF7"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Kadô-kou"><meta name="application-name" content="Kadô-kou"><meta name="google-site-verification" content="aCSr8eVty7e25E9BrUjsVImstJ1yGKGmxSOkOzPvSWs">${config?.appLinks?.appleAppId && renderTemplate`<meta name="apple-itunes-app"${addAttribute(`app-id=${config.appLinks.appleAppId}`, "content")}>`}<link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Content Security Policy --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' http://localhost:* https://api.gastsar.fr https://api.cloudinary.com; frame-src 'none'; object-src 'none';">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="min-h-screen selection:bg-brushedgold selection:text-white" data-astro-cid-sckkx6r4> <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-6 focus:py-3 focus:bg-white focus:text-brushedgold focus:border focus:border-brushedgold focus:shadow-xl transition-all" data-astro-cid-sckkx6r4>
Passer au contenu principal
</a> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "config": config, "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "CookieBanner", $$CookieBanner, { "data-astro-cid-sckkx6r4": true })}</body></html>`;
}, "E:/www/kadoko/apps/web-kadokou/src/layouts/Layout.astro", void 0);

export { $$Layout as $, APP_NAME as A, LINK_APP_ANDROID as L, SystemService as S, apiFetch as a, $$StoreBadges as b, APP_ICON_URL as c, LINK_YVES_NARSON_KEVINE as d, LINK_DEV_EN_GALERE as e, renderScript as r };
