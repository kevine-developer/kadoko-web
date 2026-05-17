import { c as createComponent } from './astro-component_eOF6crK8.mjs';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DMt6HwzZ.mjs';
import { $ as $$Layout, A as APP_NAME } from './Layout_BOyzyozE.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `404 - Page Introuvable | ${APP_NAME}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "noindex": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-[80vh] bg-bonesilk text-deepblack flex flex-col items-center justify-center px-6 text-center relative overflow-hidden" data-astro-cid-zetdm5md> <!-- Éléments décoratifs en arrière-plan --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-brushedgold/5 rounded-full pointer-events-none" data-astro-cid-zetdm5md></div> <div class="absolute top-1/4 left-1/4 w-32 h-32 border border-brushedgold/10 rounded-full animate-pulse-slow pointer-events-none" data-astro-cid-zetdm5md></div> <div class="space-y-8 relative z-10" data-astro-cid-zetdm5md> <header class="space-y-4" data-astro-cid-zetdm5md> <span class="text-xs font-bold text-brushedgold tracking-[0.4em] uppercase block animate-fade-in" data-astro-cid-zetdm5md>
Erreur 404
</span> <h1 class="text-6xl md:text-9xl font-serif text-deepblack animate-slide-up-fade" data-astro-cid-zetdm5md>
Égaré.
</h1> <div class="w-12 h-0.5 bg-brushedgold mx-auto animate-expand" data-astro-cid-zetdm5md></div> </header> <p class="text-sm md:text-base text-coolgrey/80 max-w-sm mx-auto leading-relaxed font-light animate-fade-in [animation-delay:400ms]" data-astro-cid-zetdm5md>
Il semble que l'objet de votre quête n'existe pas ou ait été déplacé vers une autre collection.
</p> <div class="pt-8 animate-fade-in [animation-delay:600ms]" data-astro-cid-zetdm5md> <a href="/" class="group relative inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest pb-2 border-b border-deepblack hover:border-brushedgold transition-colors duration-300" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>Retour à l'accueil</span> <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-zetdm5md></path> </svg> </a> </div> </div> </main> ` })}`;
}, "E:/www/kadoko/apps/web-kadokou/src/pages/404.astro", void 0);

const $$file = "E:/www/kadoko/apps/web-kadokou/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
