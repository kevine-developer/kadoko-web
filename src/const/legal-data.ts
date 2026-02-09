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
        body: "L'application Kadô-Kou (ci-après l'« Application ») est actuellement en phase de test.\n\nÀ ce titre, elle est éditée à titre personnel par :\n\nYves Narson Kevine\nStatut juridique : En cours de définition\nSiège social : Toulouse, France\n\nDirecteur de la publication : Yves Narson Kevine\nEmail de contact : yvesnarsonkevine@gmail.com\n\nLes informations légales définitives (statut juridique, immatriculation, numéro de TVA, etc.) seront précisées lors de la mise en production officielle de l’application.",
      },

      {
        title: "2. Hébergement des Données",
        body: "L'infrastructure technique et les bases de données (Prisma) sont hébergées sur les serveurs européens de :\n\nIONOS SE\nElgendorfer Str. 57\n56410 Montabaur, Allemagne\nSite web : www.ionos.fr\nConformité RGPD : Les données sont stockées au sein de l'Union Européenne.",
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
        body: "⚠️ AVERTISSEMENT ESSENTIEL : L'Application est actuellement en phase de test (« Version Bêta »).\n\nEn créant un compte, l'Utilisateur reconnaît expressément que :\n1. L'Application est fournie « en l'état » (AS IS), sans garantie de performance ou de disponibilité continue.\n2. L'Éditeur se réserve le droit absolu et discrétionnaire de supprimer l'intégralité des comptes, listes de souhaits et historiques lors de mises à jour majeures ou lors du passage en version finale, sans préavis ni indemnité.\n3. L'Utilisateur accepte de ne pas stocker de données critiques ou uniques sur l'Application durant cette phase.",
      },
      {
        title: "1. Accès et Authentification",
        body: "L'accès à l'Application nécessite la création d'un compte. L'authentification est gérée via le service tiers BetterAuth.\n\nConnexion Google : En choisissant la connexion via Google, l'Utilisateur accepte que ses informations d'identification de base (email, nom, avatar) soient transmises par Google à l'Application. L'Utilisateur reste responsable de la sécurité de son compte Google.",
      },
      {
        title: "2. Responsabilité sur les Contenus (UGC)",
        body: "L'Utilisateur est seul responsable des contenus qu'il ajoute (textes, images, liens URL). En ajoutant un lien vers un produit (ex: site e-commerce), l'Utilisateur garantit qu'il ne porte pas atteinte aux droits de tiers.\n\nL'Application agit en tant qu'hébergeur de contenu au sens de l'article 6-I-2 de la LCEN. L'Éditeur ne saurait être tenu responsable du contenu des listes créées par les utilisateurs, ni de la conformité des produits vendus sur les sites tiers référencés.",
      },
      {
        title: "3. Comportement et Bannissement",
        body: "Tout usage abusif, frauduleux ou contraire aux lois en vigueur (harcèlement, contenus illicites, tentatives de piratage) entraînera la suppression immédiate et définitive du compte de l'Utilisateur, sans préjudice d'éventuelles poursuites judiciaires.",
      },
      {
        title: "4. Limitation de Responsabilité",
        body: "L'Éditeur ne pourra être tenu responsable :\n- Des dysfonctionnements du réseau Internet.\n- Des pannes inhérentes aux services tiers utilisés (Google Auth, Resend, IONOS).\n- De la perte de données, quelle qu'en soit la cause.\n- Des litiges survenant entre utilisateurs (ex: un cadeau promis mais non offert). L'Application n'est qu'un outil de mise en relation d'intentions.",
      },
      {
        title: "5. Droit Applicable et Juridiction",
        body: "Les présentes CGU sont régies par le droit français. En cas de litige, et après échec de toute tentative de résolution amiable, compétence expresse est attribuée aux tribunaux du ressort de la Cour d'appel de Toulouse.",
      },
    ],
  },
  privacy: {
    title: "Politique de Confidentialité",
    sections: [
      {
        title: "1. Données collectées",
        body: "Pour fournir le service, nous traitons les données suivantes :\n\n- Données d'identification : Nom, Prénom, Email, Avatar (via Google ou upload).\n- Données techniques : Adresse IP, logs de connexion, métadonnées de session (via BetterAuth).\n- Données d'usage : Listes de cadeaux, préférences, interactions entre amis.",
      },
      {
        title: "2. Sous-traitants et Transfert de données",
        body: "L'Éditeur s'engage à ne jamais vendre vos données. Cependant, pour le fonctionnement technique, certaines données sont traitées par nos prestataires de confiance :\n\n- Hébergement BDD : IONOS (Allemagne/UE).\n- Authentification : Google (si utilisé pour la connexion).\n- Emails transactionnels : Resend (USA, conforme Data Privacy Framework). Votre email est transmis à Resend uniquement pour l'envoi des notifications (codes d'accès, invitations).",
      },
      {
        title: "3. Durée de conservation",
        body: "Durant la phase Bêta, les données sont conservées jusqu'à la fin de la période de test ou jusqu'à la suppression du compte par l'Utilisateur. En cas d'inactivité prolongée (12 mois), le compte pourra être supprimé automatiquement.",
      },
      {
        title: "4. Vos droits (RGPD)",
        body: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données. La suppression de votre compte via l'application entraîne l'effacement irréversible de toutes vos données personnelles de nos bases actives.",
      },
      {
        title: "5. Cookies et Traceurs",
        body: "L'application utilise des identifiants de session (tokens) nécessaires au maintien de votre connexion sécurisée. Ces traceurs techniques sont exemptés de consentement préalable.",
      },
    ],
  },
  help: {
    title: "Aide & Support",
    sections: [
      {
        title: "Statut du Service",
        body: "L'application est en développement actif. Les fonctionnalités de partage et de notification par email dépendent de services tiers et peuvent subir des latences.",
      },
      {
        title: "Suppression de compte",
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
};
