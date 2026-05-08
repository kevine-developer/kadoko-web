import { LINK_DEV_EN_GALERE, LINK_YVES_NARSON_KEVINE } from "./constant";

export type ContentSection = {
  title?: string;
  body: string;
};

export type LegalPageContent = {
  title: string;
  sections: ContentSection[];
};

export const LEGAL_CONTENT: Record<string, LegalPageContent> = {
  mentions: {
    title: "Mentions Légales",
    sections: [
      {
        title: "1. Éditeur de l'Application",
        body: `L'application Kadô-Kou (ci-après l'« Application ») est actuellement en phase de test.\n\nÀ ce titre, elle est éditée par :\n\n<a href="${LINK_YVES_NARSON_KEVINE}" target="_blank" class="font-bold text-deepblack hover:text-brushedgold underline decoration-brushedgold/30 underline-offset-4 transition-colors">Yves Narson Kevine</a>\nStatut juridique : Entrepreneur Individuel (EI)\nSIRET : 94060059600024\nSiège social : Toulouse, France\n\nDirecteur de la publication : Yves Narson Kevine\nEmail de contact : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>\n\nL'application est développée par <a href="${LINK_DEV_EN_GALERE}" target="_blank" class="font-medium text-deepblack hover:text-brushedgold transition-colors">Devengalere</a>.`,
      },

      {
        title: "2. Hébergement des Données",
        body: 'L\'infrastructure technique et les bases de données (PostgreSQL) sont hébergées sur les serveurs européens de :\n\n<a href="https://www.ionos.fr" target="_blank" class="font-medium text-deepblack hover:text-brushedgold transition-colors">IONOS SE</a>\nElgendorfer Str. 57\n56410 Montabaur, Allemagne\nConformité RGPD : Les données sont stockées au sein de l\'Union Européenne.',
      },
      {
        title: "3. Propriété Intellectuelle",
        body: "La marque « Kadô-Kou », le logo, la charte graphique ainsi que l'ensemble du code source sont la propriété exclusive de l'Éditeur.",
      },
    ],
  },
  cgu: {
    title: "Conditions Générales d'Utilisation",
    sections: [
      {
        title: "PRÉAMBULE : VERSION BÊTA & LIMITATION DE GARANTIE",
        body: "AVERTISSEMENT ESSENTIEL : L'Application est actuellement en phase de test (« Version Bêta »).\n\nEn créant un compte, l'Utilisateur reconnaît expressément que :\n1. L'Application est fournie « en l'état » (AS IS), sans garantie de performance ou de disponibilité continue.\n2. L'Éditeur se réserve le droit absolu et discrétionnaire de supprimer l'intégralité des comptes, listes de souhaits et historiques lors de mises à jour majeures ou lors du passage en version finale, sans préavis ni indemnité.\n3. L'Utilisateur accepte de ne pas stocker de données critiques ou uniques sur l'Application durant cette phase.",
      },
      {
        title: "1. Accès et Authentification",
        body: "L'accès à l'Application nécessite la création d'un compte. L'authentification est gérée via le service tiers <a href=\"https://www.better-auth.com/\" target=\"_blank\" class=\"font-medium text-deepblack hover:text-brushedgold transition-colors\">BetterAuth</a>.\n\nConnexion Google : En choisissant la connexion via Google, l'Utilisateur accepte que ses informations d'identification de base (email, nom, avatar) soient transmises par Google à l'Application. L'Utilisateur reste responsable de la sécurité de son compte Google.",
      },
      {
        title: "2. Permissions de l'Application",
        body: "Pour offrir ses fonctionnalités, l'Application peut demander l'accès aux fonctionnalités suivantes de votre appareil :\n\n- **Caméra** (android.permission.CAMERA) : Utilisée exclusivement pour permettre à l'Utilisateur de prendre des photos pour ses stories, sa photo de profil, sa photo de couverture ou ses images de cadeaux. Aucune photo n'est prise sans action explicite de l'Utilisateur.\n- **Galerie Photos** (READ_MEDIA_IMAGES / WRITE_EXTERNAL_STORAGE) : Utilisée pour sélectionner des images existantes à associer à un cadeau, un profil ou une story, et pour sauvegarder des cartes QR de partage sur votre appareil.\n- **Accès Internet** (INTERNET) : Nécessaire à la synchronisation des données, l'authentification et le fonctionnement général de l'Application.\n- **Notifications** (POST_NOTIFICATIONS) : Pour vous informer des invitations à des réceptions, des interactions sociales et des rappels d'événements.\n\nL'Utilisateur peut à tout moment révoquer ces permissions depuis les paramètres de son appareil. La révocation de certaines permissions peut limiter les fonctionnalités disponibles.",
      },
      {
        title: "3. Responsabilité sur les Contenus (UGC)",
        body: "L'Utilisateur est seul responsable des contenus qu'il ajoute (textes, images, liens URL). En ajoutant un lien vers un produit (ex: site e-commerce), l'Utilisateur garantit qu'il ne porte pas atteinte aux droits de tiers.\n\nL'Application agit en tant qu'hébergeur de contenu au sens de l'article 6-I-2 de la <a href=\"https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164/\" target=\"_blank\" class=\"hover:underline\">LCEN</a>. L'Éditeur ne saurait être tenu responsable du contenu des listes créées par les utilisateurs, ni de la conformité des produits vendus sur les sites tiers référencés.",
      },
      {
        title: "4. Comportement et Bannissement",
        body: "Tout usage abusif, frauduleux ou contraire aux lois en vigueur (harcèlement, contenus illicites, tentatives de piratage) entraînera la suppression immédiate et définitive du compte de l'Utilisateur, sans préjudice d'éventuelles poursuites judiciaires.",
      },
      {
        title: "5. Limitation de Responsabilité",
        body: 'L\'Éditeur ne pourra être tenu responsable :\n- Des dysfonctionnements du réseau Internet.\n- Des pannes inhérentes aux services tiers utilisés (Google Auth, <a href="https://resend.com" target="_blank" class="hover:underline">Resend</a>, <a href="https://www.ionos.fr" target="_blank" class="hover:underline">IONOS</a>).\n- De la perte de données, quelle qu\'en soit la cause.\n- Des litiges survenant entre utilisateurs (ex: un cadeau promis mais non offert). L\'Application n\'est qu\'un outil de mise en relation d\'intentions.',
      },
      {
        title: "6. Droit Applicable et Juridiction",
        body: "Les présentes CGU sont régies par le droit français. En cas de litige, et après échec de toute tentative de résolution amiable, compétence expresse est attribuée aux tribunaux du ressort de la Cour d'appel de Toulouse.",
      },
    ],
  },
  privacy: {
    title: "Politique de Confidentialité",
    sections: [
      {
        title: "1. Responsable du Traitement",
        body: `Le responsable du traitement des données personnelles est :\n\n<a href="${LINK_YVES_NARSON_KEVINE}" target="_blank" class="font-bold text-deepblack hover:text-brushedgold underline decoration-brushedgold/30 underline-offset-4 transition-colors">Yves Narson Kevine</a> — Entrepreneur Individuel (EI)\nSIRET : 94060059600024\nSiège social : Toulouse, France\nEmail : <a href="mailto:yvesnarsonkevine@gmail.com" class="text-brushedgold hover:underline">yvesnarsonkevine@gmail.com</a>`,
      },
      {
        title: "2. Données Personnelles Collectées",
        body: "Pour fournir le service, nous traitons les catégories de données suivantes :\n\n**Données d'identification :**\n- Nom, Prénom, Email, Avatar (fournis par l'Utilisateur ou via Google OAuth).\n- Photo de profil et photo de couverture (si uploadées par l'Utilisateur).\n\n**Données techniques :**\n- Adresse IP, logs de connexion, métadonnées de session (via BetterAuth).\n- Type d'appareil, système d'exploitation, version de l'application.\n\n**Données d'usage :**\n- Listes de cadeaux (wishlists), préférences de devise et de thème.\n- Interactions sociales (abonnements, cercle proche, réceptions).\n- Stories et contenus multimédia partagés volontairement.\n\n**Données multimédia (via permissions) :**\n- Photos prises avec la caméra de l'appareil pour les stories, profils ou cadeaux.\n- Images sélectionnées depuis la galerie de l'appareil.\n- Ces contenus sont transmis à nos serveurs uniquement sur action explicite de l'Utilisateur.",
      },
      {
        title: "3. Utilisation des Permissions de l'Appareil",
        body: "L'Application demande certaines permissions pour fonctionner pleinement. Voici le détail de chaque permission et son utilisation :\n\n**Caméra (android.permission.CAMERA)** :\nPermet à l'Utilisateur de prendre des photos directement depuis l'application pour :\n- Créer et publier des stories dans son cercle proche.\n- Mettre à jour sa photo de profil ou de couverture.\n- Photographier un cadeau pour l'ajouter à sa liste de souhaits.\nAucune photo n'est capturée automatiquement ni en arrière-plan. L'accès à la caméra ne s'active que lorsque l'Utilisateur déclenche explicitement la prise de vue.\n\n**Galerie Photos (READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE)** :\nPermet à l'Utilisateur de sélectionner des images existantes depuis son appareil pour les associer à un cadeau, un profil ou une story.\n\n**Écriture dans la Galerie (WRITE_EXTERNAL_STORAGE)** :\nPermet de sauvegarder des cartes QR de partage (profils, listes de souhaits) sur l'appareil de l'Utilisateur.\n\n**Internet (INTERNET)** :\nNécessaire à la synchronisation des données avec nos serveurs, l'authentification et l'ensemble des fonctionnalités en ligne.\n\n**Notifications (POST_NOTIFICATIONS)** :\nPermet d'envoyer des notifications push pour les invitations, interactions sociales et rappels.\n\n**Important** : L'Utilisateur peut révoquer ces permissions à tout moment dans les paramètres de son appareil (Paramètres > Applications > Kadô-Kou > Autorisations).",
      },
      {
        title: "4. Finalités du Traitement",
        body: "Vos données sont traitées pour les finalités suivantes :\n- Création et gestion de votre compte utilisateur.\n- Fourniture du service de listes de souhaits et de partage de cadeaux.\n- Fonctionnement des réceptions (événements de groupe).\n- Personnalisation de l'expérience utilisateur (thème, devise).\n- Envoi de notifications transactionnelles (invitations, codes d'accès).\n- Fonctionnement du réseau social interne (abonnements, cercle proche, stories).\n- Sécurité et prévention des abus.\n\nBase légale : Exécution du contrat (CGU), consentement pour les permissions optionnelles, intérêt légitime pour la sécurité.",
      },
      {
        title: "5. Sous-traitants et Transfert de Données",
        body: 'L\'Éditeur s\'engage à **ne jamais vendre** vos données personnelles. Pour le fonctionnement technique, certaines données sont traitées par nos prestataires de confiance :\n\n- **Hébergement BDD (PostgreSQL)** : <a href="https://www.ionos.fr" target="_blank" class="hover:underline">IONOS</a> (Allemagne/UE) — Données stockées dans l\'Union Européenne.\n- **Authentification** : Google (si utilisé pour la connexion) — Soumis à la <a href="https://policies.google.com/privacy" target="_blank" class="hover:underline">politique de confidentialité Google</a>.\n- **Emails transactionnels** : <a href="https://resend.com" target="_blank" class="hover:underline">Resend</a> (USA, conforme Data Privacy Framework) — Votre email est transmis uniquement pour l\'envoi des notifications.\n\nAucun transfert de données vers des pays tiers ne s\'effectue en dehors des garanties prévues par le RGPD (Clauses Contractuelles Types ou Data Privacy Framework).',
      },
      {
        title: "6. Durée de Conservation",
        body: "- **Compte actif** : Les données sont conservées tant que le compte est actif.\n- **Compte inactif** : En cas d'inactivité prolongée (12 mois), le compte et ses données pourront être supprimés automatiquement après notification par email.\n- **Suppression volontaire** : La suppression du compte via l'application (Paramètres > Sécurité > Clôturer le compte) entraîne l'effacement irréversible de toutes les données personnelles dans un délai de 30 jours.\n- **Phase Bêta** : Les données peuvent être réinitialisées lors de mises à jour majeures.",
      },
      {
        title: "7. Sécurité des Données",
        body: "Nous mettons en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :\n- Chiffrement des données en transit (HTTPS/TLS).\n- Hachage sécurisé des mots de passe.\n- Gestion des sessions via des tokens sécurisés avec expiration automatique.\n- Accès aux bases de données restreint et protégé.\n- Hébergement sur des serveurs conformes aux normes européennes (IONOS, Allemagne).",
      },
      {
        title: "8. Vos Droits (RGPD)",
        body: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :\n\n- **Droit d'accès** : Obtenir la confirmation que vos données sont traitées et en recevoir une copie.\n- **Droit de rectification** : Corriger vos données inexactes ou incomplètes.\n- **Droit à l'effacement** : Demander la suppression de vos données (« droit à l'oubli »).\n- **Droit à la portabilité** : Recevoir vos données dans un format structuré et lisible.\n- **Droit d'opposition** : Vous opposer au traitement de vos données pour motifs légitimes.\n- **Droit à la limitation** : Demander la suspension du traitement dans certains cas.\n\nPour exercer ces droits, contactez-nous à : <a href=\"mailto:yvesnarsonkevine@gmail.com\" class=\"text-brushedgold hover:underline\">yvesnarsonkevine@gmail.com</a>\n\nVous pouvez également introduire une réclamation auprès de la <a href=\"https://www.cnil.fr/\" target=\"_blank\" class=\"hover:underline\">CNIL</a> (Commission Nationale de l'Informatique et des Libertés).",
      },
      {
        title: "9. Protection des Mineurs",
        body: "L'Application n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 13 ans. Si nous découvrons que des données ont été collectées auprès d'un mineur de moins de 13 ans sans consentement parental vérifiable, nous prendrons les mesures nécessaires pour supprimer ces informations dans les plus brefs délais.\n\nLes utilisateurs âgés de 13 à 16 ans doivent obtenir le consentement d'un parent ou tuteur légal avant d'utiliser l'Application.",
      },
      {
        title: "10. Cookies et Traceurs",
        body: "L'application utilise des identifiants de session (tokens) nécessaires au maintien de votre connexion sécurisée. Ces traceurs techniques sont exemptés de consentement préalable conformément à la directive ePrivacy.\n\nAucun cookie publicitaire ou de suivi analytique n'est utilisé par l'Application.",
      },
      {
        title: "11. Modifications de cette Politique",
        body: "Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. En cas de modification substantielle, les Utilisateurs seront informés via l'Application ou par email. La date de dernière mise à jour est indiquée en haut de ce document.\n\nL'utilisation continue de l'Application après modification vaut acceptation des nouvelles conditions.",
      },
      {
        title: "12. Contact",
        body: "Pour toute question relative à cette Politique de Confidentialité ou à la protection de vos données personnelles, contactez-nous :\n\n**Email** : <a href=\"mailto:yvesnarsonkevine@gmail.com\" class=\"text-brushedgold hover:underline\">yvesnarsonkevine@gmail.com</a>\n**Éditeur** : Yves Narson Kevine — Entrepreneur Individuel\n**Adresse** : Toulouse, France",
      },
    ],
  },
  help: {
    title: "Aide & Support",
    sections: [
      {
        title: "1. Stories & Cercle Proche",
        body: "Les stories sur Kadô-Kou sont privées. Elles ne sont visibles que par votre 'Cercle Proche' (vos amis favoris). C'est un espace intime pour partager vos moments sans pression.\nPour ajouter un ami à votre cercle, allez sur son profil ou recherche et clicker sur  ajouter à votre cercle'.",
      },
      {
        title: "2. Ajouter un Cadeau",
        body: "Vous avez deux options pour ajouter un souhait :\n- **Manuelle** : Remplissez le titre, le prix et ajoutez une photo.\n- **Magique** : Collez simplement le lien d'un site (Amazon, Vinted, Etsy...) et cliquez sur l'icone  recherche. L'application remplira les infos automatiquement !",
      },
      {
        title: "3. Créer un Groupe (Réception)",
        body: "Pour organiser un événement (Noël, Anniversaire, Secret Santa) :\n1. Allez dans l'onglet du tab du milieux  'Réceptions' (icône verre de vin).\n2. Cliquez sur '+'.\n3. Invitez vos amis.\nChaque réception possède un 'Chat' dédié et permet de voir les listes de tous les participants en un clin d'œil.",
      },
      {
        title: "4. Statut du Service",
        body: "L'application est en développement actif. Les fonctionnalités de partage et de notification par email dépendent de services tiers et peuvent subir des latences.",
      },
      {
        title: "5. Suppression de compte",
        body: "Vous pouvez supprimer votre compte et toutes vos données instantanément depuis la section : Paramètres > Sécurité > Clôturer le compte.",
      },
    ],
  },
  feedback: {
    title: "Retour Bêta-testeur",
    sections: [
      {
        title: "Amélioration continue",
        body: "Vos retours sont essentiels. Si vous constatez un bug d'affichage ou un problème avec l'envoi d'emails, merci de nous contacter. Votre aide nous permet de fiabiliser la plateforme avant le lancement public.",
      },
    ],
  },
  cookies: {
    title: "Politique de Cookies",
    sections: [
      {
        title: "1. Utilisation des Traceurs",
        body: "Kadô-kou utilise des cookies et technologies similaires uniquement pour assurer le fonctionnement technique de l'application. Ces traceurs sont indispensables à la fourniture du service.",
      },
      {
        title: "2. Cookies de Session & Sécurité",
        body: "Nous utilisons des jetons (tokens) de session pour vous maintenir connecté de manière sécurisée. Ces cookies expirent automatiquement après une période d'inactivité ou lors de votre déconnexion manuelle.",
      },
      {
        title: "3. Préférences d'Affichage",
        body: "Certains réglages locaux (choix du thème sombre/clair, devise d'affichage) sont stockés directement sur votre appareil pour améliorer votre confort de navigation.",
      },
      {
        title: "4. Services Tiers",
        body: "En cas de connexion via Google, ce tiers peut déposer ses propres cookies conformément à sa politique de confidentialité. Nous ne contrôlons pas ces traceurs externes.",
      },
    ],
  },
  licences: {
    title: "Licences Développeur",
    sections: [
      {
        title: "Logiciels Libres & Open Source",
        body: "Kadô-kou est bâti sur une architecture moderne utilisant de nombreux logiciels sous licence libre. Nous tenons à remercier la communauté open-source pour sa contribution inestimable.",
      },
      {
        title: "Composants Principaux",
        body: "L'application utilise notamment les technologies suivantes : React, React Native, Expo, Astro, Next.js, TailwindCSS, Lucide Icons, et BetterAuth. Chaque composant est utilisé selon les termes de sa licence respective (généralement MIT ou Apache 2.0).",
      },
      {
        title: "Propriété Intellectuelle",
        body: "Bien que l'application utilise des composants tiers, l'architecture logicielle, la charte graphique et l'expérience utilisateur globale restent la propriété exclusive de l'Éditeur.",
      },
    ],
  },
  deletion: {
    title: "Suppression de Compte",
    sections: [
      {
        title: "Comment supprimer votre compte et vos données",
        body: "Chez Kadô-Kou, vous avez le contrôle total sur vos données personnelles. Vous pouvez demander la suppression complète de votre compte et de toutes les données associées de deux manières différentes :\n\n**1. Depuis l'Application Mobile (Méthode instantanée)**\nLa méthode la plus rapide est d'utiliser directement l'application :\n- Ouvrez l'application Kadô-Kou.\n- Allez sur votre **Profil**.\n- Cliquez sur **Paramètres** (icône d'engrenage).\n- Sélectionnez **Sécurité**.\n- Cliquez sur **Clôturer le compte**.\nLa suppression est immédiate et irréversible.\n\n**2. Par Email (Demande manuelle)**\nSi vous n'avez plus accès à l'application, vous pouvez formuler une demande de suppression par email :\n- Envoyez un email à <a href=\"mailto:yvesnarsonkevine@gmail.com\" class=\"text-brushedgold hover:underline\">yvesnarsonkevine@gmail.com</a>\n- Indiquez comme objet du mail : **\"Demande de suppression de compte Kadô-Kou\"**.\n- Utilisez impérativement **l'adresse email associée à votre compte** Kadô-Kou afin que nous puissions vérifier votre identité.\n- Nous traiterons votre demande et supprimerons vos données dans un délai maximum de 30 jours.",
      },
      {
        title: "Que se passe-t-il lors de la suppression ?",
        body: "La suppression de votre compte est définitive. Toutes vos données personnelles seront effacées de nos serveurs, y compris :\n- Vos informations de profil (nom, email, avatar).\n- Vos listes de souhaits (wishlists) et tous les cadeaux ajoutés.\n- Vos historiques d'interaction sociale (amis, cercle proche).\n- Vos participations aux événements (réceptions).\n\n*Note : Si vous avez réservé un cadeau sur la liste d'un ami, cette réservation pourra être anonymisée pour ne pas perturber l'organisation de sa liste.*",
      },
    ],
  },
};
