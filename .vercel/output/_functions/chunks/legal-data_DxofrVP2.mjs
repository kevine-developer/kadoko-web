import { c as createComponent } from './astro-component_eOF6crK8.mjs';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, o as renderSlot } from './entrypoint_DMt6HwzZ.mjs';
import { $ as $$Layout, c as APP_ICON_URL, d as LINK_YVES_NARSON_KEVINE, e as LINK_DEV_EN_GALERE } from './Layout_BOyzyozE.mjs';

const $$LegalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LegalLayout;
  const { title, metaTitle, description, subtitle, lastUpdated } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle || title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-bonesilk text-deepblack selection:bg-brushedgold/10"> <div class="max-w-4xl mx-auto px-6 pt-10 pb-12"> <!-- Navigation de retour --> <div class="mb-12"> <a href="/" class="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-coolgrey hover:text-brushedgold transition-all group"> <div class="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm group-hover:border-brushedgold/30 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"></path></svg> </div> <span>Retour</span> </a> </div> <!-- En-tête de Document --> <header class="relative flex flex-col items-center text-center"> <!-- Logo en Sceau --> <div class="mb-8 relative group cursor-pointer"> <div class="w-20 h-20 flex items-center justify-center bg-white border border-black/5 rounded-full shadow-sm transition-transform duration-500 group-hover:scale-105"> <img${addAttribute(APP_ICON_URL, "src")} alt="Kadô-Kou" class="w-10 h-10 object-contain grayscale transition-all duration-500 group-hover:grayscale-0"> </div> <!-- Cercle décoratif fin --> <div class="absolute inset-[-10px] border border-brushedgold/20 rounded-full transition-transform duration-700 group-hover:rotate-12"></div> </div> <!-- Titre et sous-titre --> <div class="space-y-6 max-w-2xl"> <span class="inline-block text-xs font-bold text-brushedgold tracking-[0.4em] uppercase mb-2"> ${subtitle} </span> <h1 class="text-2xl md:text-4xl font-serif italic text-deepblack leading-tight tracking-tight px-4 mb-0">${unescapeHTML(title)}</h1> <div class="flex items-center justify-center gap-6 pt-6"> <div class="h-px w-12 bg-brushedgold/20"></div> ${lastUpdated && renderTemplate`<p class="text-xs uppercase tracking-[0.3em] text-coolgrey/80 font-bold">
Révision ${lastUpdated} </p>`} <div class="h-px w-12 bg-brushedgold/20"></div> </div> </div> </header> <!-- Zone de Contenu --> <!-- On applique des styles via des sélecteurs Tailwind v4 sur le parent pour remplacer le plugin prose --> <article class="max-w-3xl mx-auto
        [&_h2]:font-serif [&_h2]:italic [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-4 [&_h2]:border-b [&_h2]:border-black/5 [&_h2]:text-deepblack
        [&_h3]:font-bold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-deepblack [&_h3]:tracking-wide [&_h3]:uppercase [&_h3]:text-xs
        [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-coolgrey [&_p]:mb-6 [&_p]:font-light [&_p]:whitespace-pre-line
        [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-4 [&_ul]:my-8
        [&_li]:pl-6 [&_li]:relative [&_li]:text-[15px] [&_li]:text-coolgrey [&_li]:font-light
        [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2.5 [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:bg-brushedgold [&_li]:before:rounded-full
        [&_strong]:text-deepblack [&_strong]:font-bold
        [&_a]:text-deepblack [&_a]:font-medium [&_a]:underline [&_a]:decoration-brushedgold/30 [&_a]:underline-offset-4 [&_a]:transition-all hover:[&_a]:text-brushedgold hover:[&_a]:decoration-brushedgold"> ${renderSlot($$result2, $$slots["default"])} </article> </div> </main> ` })}`;
}, "E:/www/kadoko/apps/web-kadokou/src/layouts/LegalLayout.astro", void 0);

const LEGAL_CONTENT = {
  mentions: {
    sections: [
      {
        title: "1. Éditeur de l'Application",
        body: `L'application Kadô-Kou (ci-après l'« Application ») est actuellement en phase de test.

À ce titre, elle est éditée par :

<a href="${LINK_YVES_NARSON_KEVINE}" target="_blank" class="font-bold text-deepblack hover:text-brushedgold underline decoration-brushedgold/30 underline-offset-4 transition-colors">Yves Narson Kevine</a>
Statut juridique : Entrepreneur Individuel (EI)
SIRET : 94060059600024
Siège social : Toulouse, France

Directeur de la publication : Yves Narson Kevine
Email de contact : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>

L'application est développée par <a href="${LINK_DEV_EN_GALERE}" target="_blank" class="font-medium text-deepblack hover:text-brushedgold transition-colors">Devengalere</a>.`
      },
      {
        title: "2. Hébergement des Données",
        body: `L'infrastructure technique et les bases de données (PostgreSQL) sont hébergées sur les serveurs européens de :

<a href="https://www.ionos.fr" target="_blank" class="font-medium text-deepblack hover:text-brushedgold transition-colors">IONOS SE</a>
Elgendorfer Str. 57
56410 Montabaur, Allemagne
Conformité RGPD : Les données sont stockées au sein de l'Union Européenne.`
      },
      {
        title: "3. Propriété Intellectuelle",
        body: "La marque « Kadô-Kou », le logo, la charte graphique ainsi que l'ensemble du code source sont la propriété exclusive de l'Éditeur."
      }
    ]
  },
  cgu: {
    sections: [
      {
        title: "PRÉAMBULE : VERSION BÊTA & LIMITATION DE GARANTIE",
        body: "AVERTISSEMENT ESSENTIEL : L'Application est actuellement en phase de test (« Version Bêta »).\n\nEn créant un compte, l'Utilisateur reconnaît expressément que :\n1. L'Application est fournie « en l'état » (AS IS), sans garantie de performance ou de disponibilité continue.\n2. L'Éditeur se réserve le droit absolu et discrétionnaire de supprimer l'intégralité des comptes, listes de souhaits et historiques lors de mises à jour majeures ou lors du passage en version finale, sans préavis ni indemnité.\n3. L'Utilisateur accepte de ne pas stocker de données critiques ou uniques sur l'Application durant cette phase."
      },
      {
        title: "1. Accès et Authentification",
        body: `L'accès à l'Application nécessite la création d'un compte. L'authentification est gérée via le service tiers <a href="https://www.better-auth.com/" target="_blank" class="font-medium text-deepblack hover:text-brushedgold transition-colors">BetterAuth</a>.

Connexion Google : En choisissant la connexion via Google, l'Utilisateur accepte que ses informations d'identification de base (email, nom, avatar) soient transmises par Google à l'Application. L'Utilisateur reste responsable de la sécurité de son compte Google.`
      },
      {
        title: "2. Permissions de l'Application",
        body: "Pour offrir ses fonctionnalités, l'Application peut demander l'accès aux fonctionnalités suivantes de votre appareil :\n\n- **Caméra** (android.permission.CAMERA) : Utilisée exclusivement pour permettre à l'Utilisateur de prendre des photos pour ses stories, sa photo de profil, sa photo de couverture ou ses images de cadeaux. Aucune photo n'est prise sans action explicite de l'Utilisateur.\n- **Galerie Photos** (READ_MEDIA_IMAGES / WRITE_EXTERNAL_STORAGE) : Utilisée pour sélectionner des images existantes à associer à un cadeau, un profil ou une story, et pour sauvegarder des cartes QR de partage sur votre appareil.\n- **Accès Internet** (INTERNET) : Nécessaire à la synchronisation des données, l'authentification et le fonctionnement général de l'Application.\n- **Notifications** (POST_NOTIFICATIONS) : Pour vous informer des invitations à des réceptions, des interactions sociales et des rappels d'événements.\n\nL'Utilisateur peut à tout moment révoquer ces permissions depuis les paramètres de son appareil. La révocation de certaines permissions peut limiter les fonctionnalités disponibles."
      },
      {
        title: "3. Responsabilité sur les Contenus (UGC)",
        body: `L'Utilisateur est seul responsable des contenus qu'il ajoute (textes, images, liens URL). En ajoutant un lien vers un produit (ex: site e-commerce), l'Utilisateur garantit qu'il ne porte pas atteinte aux droits de tiers.

L'Application agit en tant qu'hébergeur de contenu au sens de l'article 6-I-2 de la <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164/" target="_blank" class="hover:underline">LCEN</a>. L'Éditeur ne saurait être tenu responsable du contenu des listes créées par les utilisateurs, ni de la conformité des produits vendus sur les sites tiers référencés.`
      },
      {
        title: "4. Comportement et Bannissement",
        body: "Tout usage abusif, frauduleux ou contraire aux lois en vigueur (harcèlement, contenus illicites, tentatives de piratage) entraînera la suppression immédiate et définitive du compte de l'Utilisateur, sans préjudice d'éventuelles poursuites judiciaires."
      },
      {
        title: "5. Limitation de Responsabilité",
        body: `L'Éditeur ne pourra être tenu responsable :
- Des dysfonctionnements du réseau Internet.
- Des pannes inhérentes aux services tiers utilisés (Google Auth, <a href="https://resend.com" target="_blank" class="hover:underline">Resend</a>, <a href="https://www.ionos.fr" target="_blank" class="hover:underline">IONOS</a>).
- De la perte de données, quelle qu'en soit la cause.
- Des litiges survenant entre utilisateurs (ex: un cadeau promis mais non offert). L'Application n'est qu'un outil de mise en relation d'intentions.`
      },
      {
        title: "6. Droit Applicable et Juridiction",
        body: "Les présentes CGU sont régies par le droit français. En cas de litige, et après échec de toute tentative de résolution amiable, compétence expresse est attribuée aux tribunaux du ressort de la Cour d'appel de Toulouse."
      }
    ]
  },
  privacy: {
    sections: [
      {
        title: "1. Responsable du Traitement",
        body: `Le responsable du traitement des données personnelles est :

<a href="${LINK_YVES_NARSON_KEVINE}" target="_blank" class="font-bold text-deepblack hover:text-brushedgold underline decoration-brushedgold/30 underline-offset-4 transition-colors">Yves Narson Kevine</a> — Entrepreneur Individuel (EI)
SIRET : 94060059600024
Siège social : Toulouse, France
Email : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>`
      },
      {
        title: "2. Données Personnelles Collectées",
        body: "Pour fournir le service, nous traitons les catégories de données suivantes :\n\n**Données d'identification :**\n- Nom, Prénom, Email, Avatar (fournis par l'Utilisateur ou via Google OAuth).\n- Photo de profil et photo de couverture (si uploadées par l'Utilisateur).\n\n**Données techniques :**\n- Adresse IP, logs de connexion, métadonnées de session (via BetterAuth).\n- Type d'appareil, système d'exploitation, version de l'application.\n\n**Données d'usage :**\n- Listes de cadeaux (wishlists), préférences de devise et de thème.\n- Interactions sociales (abonnements, cercle proche, réceptions).\n- Stories et contenus multimédia partagés volontairement.\n\n**Données multimédia (via permissions) :**\n- Photos prises avec la caméra de l'appareil pour les stories, profils ou cadeaux.\n- Images sélectionnées depuis la galerie de l'appareil.\n- Ces contenus sont transmis à nos serveurs uniquement sur action explicite de l'Utilisateur."
      },
      {
        title: "3. Utilisation des Permissions de l'Appareil",
        body: "L'Application demande certaines permissions pour fonctionner pleinement. Voici le détail de chaque permission et son utilisation :\n\n**Caméra (android.permission.CAMERA)** :\nPermet à l'Utilisateur de prendre des photos directement depuis l'application pour :\n- Créer et publier des stories dans son cercle proche.\n- Mettre à jour sa photo de profil ou de couverture.\n- Photographier un cadeau pour l'ajouter à sa liste de souhaits.\nAucune photo n'est capturée automatiquement ni en arrière-plan. L'accès à la caméra ne s'active que lorsque l'Utilisateur déclenche explicitement la prise de vue.\n\n**Galerie Photos (READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE)** :\nPermet à l'Utilisateur de sélectionner des images existantes depuis son appareil pour les associer à un cadeau, un profil ou une story.\n\n**Écriture dans la Galerie (WRITE_EXTERNAL_STORAGE)** :\nPermet de sauvegarder des cartes QR de partage (profils, listes de souhaits) sur l'appareil de l'Utilisateur.\n\n**Internet (INTERNET)** :\nNécessaire à la synchronisation des données avec nos serveurs, l'authentification et l'ensemble des fonctionnalités en ligne.\n\n**Notifications (POST_NOTIFICATIONS)** :\nPermet d'envoyer des notifications push pour les invitations, interactions sociales et rappels.\n\n**Important** : L'Utilisateur peut révoquer ces permissions à tout moment dans les paramètres de son appareil (Paramètres > Applications > Kadô-Kou > Autorisations)."
      },
      {
        title: "4. Finalités du Traitement",
        body: "Vos données sont traitées pour les finalités suivantes :\n- Création et gestion de votre compte utilisateur.\n- Fourniture du service de listes de souhaits et de partage de cadeaux.\n- Fonctionnement des réceptions (événements de groupe).\n- Personnalisation de l'expérience utilisateur (thème, devise).\n- Envoi de notifications transactionnelles (invitations, codes d'accès).\n- Fonctionnement du réseau social interne (abonnements, cercle proche, stories).\n- Sécurité et prévention des abus.\n\nBase légale : Exécution du contrat (CGU), consentement pour les permissions optionnelles, intérêt légitime pour la sécurité."
      },
      {
        title: "5. Sous-traitants et Transfert de Données",
        body: `L'Éditeur s'engage à **ne jamais vendre** vos données personnelles. Pour le fonctionnement technique, certaines données sont traitées par nos prestataires de confiance :

- **Hébergement BDD (PostgreSQL)** : <a href="https://www.ionos.fr" target="_blank" class="hover:underline">IONOS</a> (Allemagne/UE) — Données stockées dans l'Union Européenne.
- **Authentification** : Google (si utilisé pour la connexion) — Soumis à la <a href="https://policies.google.com/privacy" target="_blank" class="hover:underline">politique de confidentialité Google</a>.
- **Emails transactionnels** : <a href="https://resend.com" target="_blank" class="hover:underline">Resend</a> (USA, conforme Data Privacy Framework) — Votre email est transmis uniquement pour l'envoi des notifications.

Aucun transfert de données vers des pays tiers ne s'effectue en dehors des garanties prévues par le RGPD (Clauses Contractuelles Types ou Data Privacy Framework).`
      },
      {
        title: "6. Durée de Conservation",
        body: "- **Compte actif** : Les données sont conservées tant que le compte est actif.\n- **Compte inactif** : En cas d'inactivité prolongée (12 mois), le compte et ses données pourront être supprimés automatiquement après notification par email.\n- **Suppression volontaire** : La suppression du compte via l'application (Paramètres > Sécurité > Clôturer le compte) entraîne l'effacement irréversible de toutes les données personnelles dans un délai de 30 jours.\n- **Phase Bêta** : Les données peuvent être réinitialisées lors de mises à jour majeures."
      },
      {
        title: "7. Sécurité des Données",
        body: "Nous mettons en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :\n- Chiffrement des données en transit (HTTPS/TLS).\n- Hachage sécurisé des mots de passe.\n- Gestion des sessions via des tokens sécurisés avec expiration automatique.\n- Accès aux bases de données restreint et protégé.\n- Hébergement sur des serveurs conformes aux normes européennes (IONOS, Allemagne)."
      },
      {
        title: "8. Vos Droits (RGPD)",
        body: `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :

- **Droit d'accès** : Obtenir la confirmation que vos données sont traitées et en recevoir une copie.
- **Droit de rectification** : Corriger vos données inexactes ou incomplètes.
- **Droit à l'effacement** : Demander la suppression de vos données (« droit à l'oubli »).
- **Droit à la portabilité** : Recevoir vos données dans un format structuré et lisible.
- **Droit d'opposition** : Vous opposer au traitement de vos données pour motifs légitimes.
- **Droit à la limitation** : Demander la suspension du traitement dans certains cas.

Pour exercer ces droits, contactez-nous à : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>

Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr/" target="_blank" class="hover:underline">CNIL</a> (Commission Nationale de l'Informatique et des Libertés).`
      },
      {
        title: "9. Protection des Mineurs",
        body: "L'Application n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 13 ans. Si nous découvrons que des données ont été collectées auprès d'un mineur de moins de 13 ans sans consentement parental vérifiable, nous prendrons les mesures nécessaires pour supprimer ces informations dans les plus brefs délais.\n\nLes utilisateurs âgés de 13 à 16 ans doivent obtenir le consentement d'un parent ou tuteur légal avant d'utiliser l'Application."
      },
      {
        title: "10. Cookies et Traceurs",
        body: "L'application utilise des identifiants de session (tokens) nécessaires au maintien de votre connexion sécurisée. Ces traceurs techniques sont exemptés de consentement préalable conformément à la directive ePrivacy.\n\nAucun cookie publicitaire ou de suivi analytique n'est utilisé par l'Application."
      },
      {
        title: "11. Modifications de cette Politique",
        body: "Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. En cas de modification substantielle, les Utilisateurs seront informés via l'Application ou par email. La date de dernière mise à jour est indiquée en haut de ce document.\n\nL'utilisation continue de l'Application après modification vaut acceptation des nouvelles conditions."
      },
      {
        title: "12. Contact",
        body: 'Pour toute question relative à cette Politique de Confidentialité ou à la protection de vos données personnelles, contactez-nous :\n\n**Email** : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>\n**Éditeur** : Yves Narson Kevine — Entrepreneur Individuel\n**Adresse** : Toulouse, France'
      }
    ]
  },
  deletion: {
    sections: [
      {
        title: "1. Suppression partielle de vos données (Conserver le compte)",
        body: `Vous avez la possibilité de supprimer des données spécifiques tout en conservant votre compte actif. Voici comment procéder directement depuis l'application Kadô-Kou :

- **Supprimer un cadeau ou une liste** : Allez sur votre profil, sélectionnez le cadeau ou la liste concernée et choisissez l'option de suppression.
- **Retirer un ami de votre cercle** : Allez dans l'onglet Amis, sélectionnez le contact et cliquez sur 'Retirer du cercle' ou 'Ne plus suivre'.
- **Supprimer une story** : Ouvrez votre story et utilisez le bouton de suppression.
- **Modifier/Supprimer vos informations de profil** : Allez dans Paramètres > Éditer le profil pour effacer votre photo, description ou autres informations non-obligatoires.

*Pour toute demande de suppression de données spécifiques que vous ne parvenez pas à effectuer via l'application, vous pouvez nous contacter à <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>.*`
      },
      {
        title: "2. Suppression totale du compte et des données",
        body: `Si vous souhaitez supprimer intégralement votre compte et toutes les données qui y sont associées, deux méthodes s'offrent à vous :

**Méthode instantanée (Depuis l'Application Mobile)**
- Ouvrez l'application Kadô-Kou.
- Allez sur votre **Profil**.
- Cliquez sur **Paramètres** (icône d'engrenage).
- Sélectionnez **Sécurité**.
- Cliquez sur **Clôturer le compte**.
La suppression est immédiate et irréversible.

**Demande manuelle (Par Email)**
Si vous n'avez plus accès à l'application, vous pouvez formuler une demande :
- Envoyez un email à <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>
- Indiquez comme objet du mail : **"Demande de suppression de compte Kadô-Kou"**.
- Utilisez impérativement **l'adresse email associée à votre compte** Kadô-Kou afin que nous puissions vérifier votre identité.
- Nous traiterons votre demande et supprimerons vos données dans un délai maximum de 30 jours.`
      },
      {
        title: "Que se passe-t-il lors de la suppression totale ?",
        body: "La suppression de votre compte est définitive. Toutes vos données personnelles seront effacées de nos serveurs, y compris :\n- Vos informations de profil (nom, email, avatar).\n- Vos listes de souhaits (wishlists) et tous les cadeaux ajoutés.\n- Vos historiques d'interaction sociale (amis, cercle proche, stories).\n- Vos participations aux événements (réceptions).\n\n*Note : Si vous avez réservé un cadeau sur la liste d'un ami, cette réservation pourra être anonymisée pour ne pas perturber l'organisation de sa liste.*"
      }
    ]
  }
};

export { $$LegalLayout as $, LEGAL_CONTENT as L };
