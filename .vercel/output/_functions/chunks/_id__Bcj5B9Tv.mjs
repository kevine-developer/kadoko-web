import { c as createComponent } from './astro-component_eOF6crK8.mjs';
import { n as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_DMt6HwzZ.mjs';
import { a as apiFetch, S as SystemService, L as LINK_APP_ANDROID, $ as $$Layout, r as renderScript, b as $$StoreBadges } from './Layout_BOyzyozE.mjs';

class WishlistService {
  static async getById(id) {
    try {
      const data = await apiFetch(`/wishlists/${id}`);
      if (data.success) {
        return data.wishlist;
      }
      return null;
    } catch (error) {
      console.error(`[WishlistService] Failed to fetch wishlist ${id}:`, error);
      return null;
    }
  }
  static async getByUserId(userId) {
    try {
      const data = await apiFetch(`/wishlists/user/${userId}`);
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

class GiftService {
  static async getById(id) {
    try {
      const data = await apiFetch(`/gifts/${id}`);
      if (data.success) {
        return data.gift;
      }
      return null;
    } catch (error) {
      console.error(`[GiftService] Failed to fetch gift ${id}:`, error);
      return null;
    }
  }
  static async getByWishlistId(wishlistId) {
    try {
      const data = await apiFetch(`/wishlists/${wishlistId}/gifts`);
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

class ReceptionService {
  static async getById(id) {
    try {
      const data = await apiFetch(`/receptions/${id}`);
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

class UserService {
  static async getById(id) {
    try {
      const data = await apiFetch(`/users/${id}`);
      if (data.success) {
        return data.user;
      }
      return null;
    } catch (error) {
      console.error(`[UserService] Failed to fetch user ${id}:`, error);
      return null;
    }
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { type, id } = Astro2.params;
  let dynamicTitle = "";
  let dynamicDescription = "";
  let dynamicImage = "";
  let deepLinkPath = "";
  let isPublic = false;
  const config = await SystemService.getConfig();
  const playStoreUrl = config?.appLinks?.playStore || LINK_APP_ANDROID;
  try {
    if (type === "p") {
      const user = await UserService.getById(id);
      if (user) {
        dynamicTitle = `Profil de ${user.name} (@${user.username}) — Kadô-kou`;
        dynamicDescription = user.description || `Découvrez la liste de cadeaux et les envies de ${user.name} sur Kadô-kou, l'application gratuite de wishlist.`;
        dynamicImage = user.image || "";
        isPublic = true;
      } else {
        dynamicTitle = "Profil Kadô-kou (Kadokou)";
        dynamicDescription = "Découvrez ce profil sur l'application Kadô-kou.";
      }
      deepLinkPath = `profile/friend/${id}`;
    } else if (type === "g") {
      const gift = await GiftService.getById(id);
      if (gift) {
        dynamicTitle = `${gift.name} — Idée Cadeau sur Kadô-kou`;
        dynamicDescription = gift.description || `Découvrez ${gift.name} sur Kadô-kou. Ajoutez des idées cadeaux à votre propre wishlist gratuitement.`;
        dynamicImage = gift.imageUrl || "";
        isPublic = true;
      } else {
        dynamicTitle = "Cadeau Kadô-kou (Kadokou)";
        dynamicDescription = "Découvrez ce cadeau sur l'application Kadô-kou.";
      }
      deepLinkPath = `wishlist/gifts/${id}`;
    } else if (type === "w") {
      const wishlist = await WishlistService.getById(id);
      if (wishlist) {
        dynamicTitle = `${wishlist.title} — Liste de Cadeaux Kadô-kou`;
        dynamicDescription = wishlist.description || `Consultez la liste de cadeaux "${wishlist.title}" sur Kadô-kou. Créez votre propre liste de mariage, naissance ou anniversaire.`;
        isPublic = wishlist.visibility === "PUBLIC";
      } else {
        dynamicTitle = "Liste de Cadeaux Kadô-kou (Kadokou)";
        dynamicDescription = "Découvrez cette wishlist sur l'application Kadô-kou.";
      }
      deepLinkPath = `wishlist/wishlists/${id}`;
    } else {
      const reception = await ReceptionService.getById(id);
      if (reception) {
        dynamicTitle = `${reception.title} — Invitation Kadô-kou`;
        dynamicDescription = reception.description || `Vous êtes invité à la réception "${reception.title}". Retrouvez tous les détails et la liste de cadeaux sur l'application.`;
        isPublic = false;
      } else {
        dynamicTitle = "Réception Kadô-kou (Kadokou)";
        dynamicDescription = "Consultez cette réception sur l'application Kadô-kou.";
      }
      deepLinkPath = `reception/${id}`;
    }
  } catch (error) {
    console.error("[SharePage] Error fetching data:", error);
    dynamicTitle = "Kadô-kou — Partage";
    dynamicDescription = "Ouvrez l'application Kadô-kou pour voir ce contenu.";
  }
  const appScheme = `kadokou://${deepLinkPath}`;
  const noindex = !isPublic;
  const jsonLd = [];
  if (type === "p") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": dynamicTitle.split(" — ")[0].replace("Profil de ", ""),
        "description": dynamicDescription,
        "image": dynamicImage,
        "identifier": id
      }
    });
  } else if (type === "g") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": dynamicTitle.split(" — ")[0],
      "description": dynamicDescription,
      "image": dynamicImage,
      "brand": {
        "@type": "Brand",
        "name": "Kadô-kou"
      }
    });
  } else if (type === "w" || type === "r") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": dynamicTitle.split(" — ")[0],
      "description": dynamicDescription,
      "startDate": (/* @__PURE__ */ new Date()).toISOString(),
      // Fallback
      "location": {
        "@type": "VirtualLocation",
        "url": Astro2.url.href
      },
      "organizer": {
        "@type": "Organization",
        "name": "Kadô-kou"
      }
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": dynamicTitle, "description": dynamicDescription, "image": dynamicImage, "noindex": noindex, "data-astro-cid-pcc7dzpg": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", '<main class="min-h-screen bg-bonesilk flex items-center justify-center p-6 text-deepblack selection:bg-brushedgold selection:text-white" data-astro-cid-pcc7dzpg> <!-- Carte Centrale --> <div class="w-full max-w-md bg-white border border-hairline shadow-2xl shadow-deepblack/5 overflow-hidden animate-fade-in-up" data-astro-cid-pcc7dzpg> <!-- Logo Header --> <div class="pt-12 pb-8 text-center border-b border-hairline bg-white relative" data-astro-cid-pcc7dzpg> <div class="absolute top-0 left-0 w-full h-1 bg-brushedgold/20" data-astro-cid-pcc7dzpg></div> <span class="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-deepblack" data-astro-cid-pcc7dzpg>\nKadô-Kou (Kadokou)\n</span> </div> <!-- Contenu Principal --> <div class="p-10 flex flex-col items-center text-center" data-astro-cid-pcc7dzpg> <!-- Icône dynamique (Cercle Bijou) --> <div class="w-20 h-20 rounded-full border border-brushedgold/20 flex items-center justify-center mb-8 bg-bonesilk relative group" data-astro-cid-pcc7dzpg> <div class="absolute inset-0 rounded-full border border-brushedgold/10 scale-110 group-hover:scale-125 transition-transform duration-700" data-astro-cid-pcc7dzpg></div> ', ' </div> <h1 class="text-3xl font-serif text-deepblack mb-4" data-astro-cid-pcc7dzpg> ', ` </h1> <div class="w-12 h-px bg-brushedgold mb-6 opacity-60" data-astro-cid-pcc7dzpg></div> <p class="font-sans text-sm text-coolgrey leading-relaxed mb-8 max-w-xs mx-auto font-light" data-astro-cid-pcc7dzpg>
Pour accéder à ce contenu exclusif et confirmer votre présence,
          veuillez ouvrir l'application mobile.
</p> <!-- Action Principale --> <button id="openAppBtn"`, ` class="w-full bg-deepblack text-white py-4 px-6 text-xs font-bold tracking-widest uppercase hover:bg-black transition-all duration-300 shadow-lg shadow-deepblack/10 active:scale-[0.98] mb-8 group" data-astro-cid-pcc7dzpg> <span class="flex items-center justify-center gap-3" data-astro-cid-pcc7dzpg>
Ouvrir l'Application
<svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-pcc7dzpg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-pcc7dzpg></path></svg> </span> </button> <!-- Séparateur "Ou" --> <div class="relative w-full flex items-center justify-center mb-8" data-astro-cid-pcc7dzpg> <div class="absolute inset-0 flex items-center" data-astro-cid-pcc7dzpg> <div class="w-full border-t border-hairline" data-astro-cid-pcc7dzpg></div> </div> <span class="relative bg-white px-4 text-[10px] uppercase tracking-widest text-coolgrey/60 font-bold" data-astro-cid-pcc7dzpg>
Première visite ?
</span> </div> <!-- Liens Stores --> <div class="w-full flex flex-col items-center gap-4 mb-10" data-astro-cid-pcc7dzpg> <a`, ' target="_blank" class="transition-transform duration-300 hover:scale-105 active:scale-95" aria-label="Télécharger sur Google Play" data-astro-cid-pcc7dzpg> ', ` </a> <div class="opacity-40 grayscale cursor-not-allowed transition-all duration-300" title="Bientôt disponible sur l'App Store" data-astro-cid-pcc7dzpg> `, ` </div> </div> <!-- Section Bêta-Testeur --> <div class="relative w-full flex items-center justify-center mb-6" data-astro-cid-pcc7dzpg> <div class="absolute inset-0 flex items-center" data-astro-cid-pcc7dzpg> <div class="w-full border-t border-hairline border-dashed" data-astro-cid-pcc7dzpg></div> </div> <span class="relative bg-white px-4 text-[9px] uppercase tracking-widest text-brushedgold font-black" data-astro-cid-pcc7dzpg>
Accès Bêta Privé
</span> </div> <form id="share-beta-form" class="w-full space-y-3" data-astro-cid-pcc7dzpg> <!-- Honeypot --> <div class="sr-only opacity-0 absolute -z-10 h-0 overflow-hidden" aria-hidden="true" data-astro-cid-pcc7dzpg> <input type="text" name="website" id="share-beta-website" tabindex="-1" autocomplete="off" data-astro-cid-pcc7dzpg> </div> <input type="email" id="share-beta-email" placeholder="Votre email pour la bêta..." required class="w-full h-12 px-6 bg-bonesilk/50 border border-hairline rounded-xl outline-none focus:border-brushedgold/50 text-sm text-center font-medium placeholder:text-coolgrey/40" data-astro-cid-pcc7dzpg> <button type="submit" id="share-beta-submit" class="w-full h-12 bg-brushedgold text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-deepblack transition-all duration-500 active:scale-[0.98] shadow-lg shadow-brushedgold/10" data-astro-cid-pcc7dzpg>
Devenir Bêta-Testeur
</button> <p id="share-beta-success" class="hidden text-emerald-600 text-[10px] font-black uppercase tracking-widest mt-4 animate-in fade-in slide-in-from-top-1" data-astro-cid-pcc7dzpg>
✨ Inscription réussie !
</p> <p id="share-beta-error" class="hidden text-rose-500 text-[10px] font-black uppercase tracking-widest mt-4 animate-in fade-in slide-in-from-top-1" data-astro-cid-pcc7dzpg>
Une erreur est survenue.
</p> </form> </div> <!-- Footer Carte --> <div class="bg-bonesilk border-t border-hairline py-4 px-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-coolgrey/60 uppercase" data-astro-cid-pcc7dzpg> <span data-astro-cid-pcc7dzpg>© 2026 Kadô-Kou</span> <span data-astro-cid-pcc7dzpg>L'Art d'Offrir</span> </div> </div> </main> `])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), type === "p" ? (
    // Icône Profil (User)
    renderTemplate`<svg class="w-8 h-8 text-brushedgold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pcc7dzpg> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-pcc7dzpg></path> <circle cx="12" cy="7" r="4" data-astro-cid-pcc7dzpg></circle> </svg>`
  ) : type === "g" ? (
    // Icône Cadeau (Gift)
    renderTemplate`<svg class="w-8 h-8 text-brushedgold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pcc7dzpg> <polyline points="20 12 20 22 4 22 4 12" data-astro-cid-pcc7dzpg></polyline> <rect x="2" y="7" width="20" height="5" data-astro-cid-pcc7dzpg></rect> <line x1="12" y1="22" x2="12" y2="7" data-astro-cid-pcc7dzpg></line> <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" data-astro-cid-pcc7dzpg></path> <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" data-astro-cid-pcc7dzpg></path> </svg>`
  ) : (
    // Icône Réception (Invitation)
    renderTemplate`<svg class="w-8 h-8 text-brushedgold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pcc7dzpg> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-pcc7dzpg></path> <polyline points="22,6 12,13 2,6" data-astro-cid-pcc7dzpg></polyline> </svg>`
  ), type === "p" ? "Profil Membre" : type === "g" ? "Cadeau Exclusif" : "Invitation Privée", addAttribute(appScheme, "data-scheme"), addAttribute(playStoreUrl, "href"), renderComponent($$result2, "StoreBadges", $$StoreBadges, { "store": "play", "data-astro-cid-pcc7dzpg": true }), renderComponent($$result2, "StoreBadges", $$StoreBadges, { "store": "apple", "data-astro-cid-pcc7dzpg": true })) })} ${renderScript($$result, "E:/www/kadoko/apps/web-kadokou/src/pages/share/[type]/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/www/kadoko/apps/web-kadokou/src/pages/share/[type]/[id].astro", void 0);

const $$file = "E:/www/kadoko/apps/web-kadokou/src/pages/share/[type]/[id].astro";
const $$url = "/share/[type]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
