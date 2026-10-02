export interface AgentData {
  id: string;
  name: string;
  role: string;
  category: string; // The top pill badge (e.g. "Estimation immobilière", "Qualification & Suivi", "Génération de Mandats", etc.)
  avatar: string;
  bgColor: string; // Exact background color matching screenshot
  headline: string; // The H2 headline inside the card (e.g. "Agent IA pour l'estimation", "Agent IA pour les acquéreurs", "Agent IA pour la prospection", etc.)
  description: string; // The precise description
  tags: string[]; // The 3 pill tags
  sampleQuestion: string;
  sampleAnswer1: string;
  sampleAnswer2: string;
  agentReply1: string;
  agentReply2: string;
  ctaText: string;
  badge: string;
}

export const AGENTS_LIST: AgentData[] = [
  {
    id: "estimation",
    name: "Estimation",
    role: "Agent IA pour l'estimation",
    category: "Estimation immobilière",
    avatar:
      "https://assets.cdn.filesafe.space/mRhnldj04dyIPr70WDAp/media/6a858eec28f4cf1be5861628.png",
    bgColor: "#c8671b", // Warm terracotta / ochre
    headline: "Agent IA pour l'estimation",
    description:
      "Il réalise des estimations instantanées et précises de la valeur d'un bien en croisant les données du marché en temps réel. Il engage les vendeurs et transforme chaque estimation en opportunité de mandat.",
    tags: ["Estimation instantanée", "Données marché en direct", "Conversion en mandat"],
    sampleQuestion:
      "Bonjour ! J'estime gratuitement votre bien en moins de 2 minutes. Quelle est la surface de votre appartement ou maison ?",
    sampleAnswer1: "70 m² environ.",
    sampleAnswer2: "Je ne sais pas exactement.",
    agentReply1:
      "Parfait ! 70 m² est une surface très recherchée sur votre secteur. Quel est le nombre de pièces principales ?",
    agentReply2:
      "Aucun problème ! Nous pouvons l'évaluer ensemble en quelques questions ou lors d'une estimation offerte sur place.",
    ctaText: "Estimer un bien",
    badge: "Estimation immobilière",
  },
  {
    id: "acquereurs",
    name: "Acquéreurs",
    role: "Agent IA pour les acquéreurs",
    category: "Qualification & Suivi",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/612ef4f0-36de-46cb-bfc1-cbd80b332577.png",
    bgColor: "#5c00f2", // Vibrant electric purple/violet
    headline: "Agent IA pour les acquéreurs",
    description:
      "Il contacte chaque lead entrant en moins de 3 minutes via WhatsApp, SMS ou email. Il évalue le niveau d'intention d'achat, le budget et l'urgence avant de vous transférer les dossiers chauds.",
    tags: ["Contact en <3 min", "Qualification du budget", "Transfert leads chauds"],
    sampleQuestion:
      "Bonjour ! L'appartement est toujours disponible. Avez-vous déjà validé votre financement avec une banque ou un courtier ?",
    sampleAnswer1: "Oui, j'ai un accord.",
    sampleAnswer2: "Non, pas encore.",
    agentReply1:
      "Excellent profil ! Nous avons 2 biens hors-marché qui correspondent pile à votre recherche. Souhaitez-vous une visite prioritaire ?",
    agentReply2:
      "Aucun problème ! Nous pouvons vous mettre en relation avec notre courtier partenaire pour accélérer votre dossier.",
    ctaText: "Gérer mes acquéreurs",
    badge: "Qualification & Suivi",
  },
  {
    id: "prospection",
    name: "Prospection",
    role: "Agent IA pour la prospection",
    category: "Génération de Mandats",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/43df24f6-013c-4c87-9445-816f5e680f19.png",
    bgColor: "#3d00b8", // Deep royal indigo/purple
    headline: "Agent IA pour la prospection",
    description:
      "Il scanne toutes les sources immobilières en temps réel. Il identifie les vendeurs potentiels et les contacte automatiquement avec des messages ultra-personnalisés pour décrocher des mandats.",
    tags: ["Veille 24/7", "Messages personnalisés", "Prise de contact auto"],
    sampleQuestion:
      "Bonjour ! J'ai des acquéreurs en recherche active sur votre secteur. Avez-vous déjà des visites prévues ?",
    sampleAnswer1: "Oui, quelques unes.",
    sampleAnswer2: "Non, pas encore.",
    agentReply1:
      "Très bien ! Si vos acquéreurs n'ont pas encore formulé d'offre, j'ai 2 familles finançables prêtes à visiter dès ce week-end.",
    agentReply2:
      "C'est l'occasion idéale : notre fichier acquéreur compte 4 demandes fermes sur votre quartier. Puis-je vous transmettre leurs critères ?",
    ctaText: "Lancer ma prospection",
    badge: "Génération de Mandats",
  },
  {
    id: "reactivation",
    name: "Réactivation",
    role: "Agent IA de réactivation",
    category: "Valorisation Base de Données",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/c63a9af9-e434-459b-901d-36a511b2d2b4.png",
    bgColor: "#7c00f0", // Bright neon violet
    headline: "Agent IA de réactivation de base dormante",
    description:
      "Votre CRM regorge de contacts inactifs. L'agent IA reprend contact de façon humaine, détecte les projets qui ont mûri et ranime les prospects sans que vous ayez à passer un seul appel dans le vide.",
    tags: ["CRM Mining", "Relances multicanales", "ROI immédiat"],
    sampleQuestion:
      "Bonjour ! Nous avions échangé il y a 6 mois. Votre projet immobilier est-il toujours d'actualité ?",
    sampleAnswer1: "Oui, je cherche toujours.",
    sampleAnswer2: "J'ai mis en pause.",
    agentReply1:
      "Ravi de vous retrouver ! Le marché a évolué et nous venons de rentrer une nouveauté exclusive qui pourrait vous séduire. Je vous l'envoie ?",
    agentReply2:
      "C'est bien noté ! Je programme un rappel discret dans 3 mois pour faire un point avec vous sur les opportunités.",
    ctaText: "Installer cet agent",
    badge: "Valorisation Base de Données",
  },
  {
    id: "sloty",
    name: "Sloty",
    role: "Sloty by Usekaiz",
    category: "Agenda & RDV Automatisés",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/75825d14-fe72-46c1-a098-93dc4485ae6e.png",
    bgColor: "#084931", // Deep forest emerald green
    headline: "Sloty : L'agent de prise de rendez-vous synchronisé",
    description:
      "Fini les allers-retours d'emails. Sloty négocie le créneau optimal avec le prospect sur WhatsApp ou SMS, l'inscrit dans votre Google Calendar / Outlook et envoie rappels et confirmations par SMS pour éviter les no-shows.",
    tags: ["Zéro No-Show", "Synchro Google/Outlook", "Rappels WhatsApp"],
    sampleQuestion:
      "Bonjour ! Je m'occupe de l'agenda. Ce jeudi, j'ai des disponibilités à 14h30 ou 16h00. Quel horaire vous convient ?",
    sampleAnswer1: "14h30 me convient.",
    sampleAnswer2: "Un autre jour ?",
    agentReply1:
      "C'est réservé ! Vous recevez l'invitation dans votre agenda et un SMS de confirmation avec l'adresse précise.",
    agentReply2: "Parfait, créneau vendredi à 10h00 ou lundi à 11h00 vous conviendrait-il mieux ?",
    ctaText: "Découvrir Sloty by Usekaiz",
    badge: "Agenda & RDV",
  },
  {
    id: "recrutement",
    name: "Recrutement",
    role: "Agent IA pour le recrutement",
    category: "Expansion d'Équipe",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/5bb6f88a-d20b-4808-8fe0-01f513216d8f.png",
    bgColor: "#4577F4", // Royal Blue
    headline: "Agent IA pour le recrutement de négociateurs",
    description:
      "Attirez et pré-qualifiez les meilleurs talents et mandataires pour votre réseau. L'IA présente votre modèle de rémunération, répond aux interrogations et prépare l'entretien avec le directeur d'agence.",
    tags: ["Chasse mandataires", "Pre-screening CV", "Onboarding fluide"],
    sampleQuestion:
      "Bonjour ! Notre réseau recrute des mandataires sur votre secteur avec des commissions jusqu'à 85%. Êtes-vous ouvert à une opportunité ?",
    sampleAnswer1: "Oui, j'aimerais en savoir plus.",
    sampleAnswer2: "Je suis déjà en poste.",
    agentReply1:
      "Formidable ! Découvrons ensemble comment nos agents IA doublent les ventes de nos conseillers. Un échange de 15 minutes vous convient ?",
    agentReply2:
      "Très bien, restons en contact ! Je peux vous transmettre notre barème d'honoraires pour votre information.",
    ctaText: "Recruter avec l'IA",
    badge: "Expansion d'Équipe",
  },
  {
    id: "avis-google",
    name: "Avis Google",
    role: "Agent IA pour vos avis Google",
    category: "E-Réputation & Notoriété",
    avatar:
      "https://vibe.filesafe.space/1774851885328190062/attachments/6072c278-da1d-4d3e-bc20-7e19385e8b01.png",
    bgColor: "#00B387", // Emerald Teal
    headline: "Agent IA de réputation & avis 5 étoiles",
    description:
      "Collectez automatiquement des avis vérifiés auprès des clients satisfaits juste après la signature ou la visite. L'IA rédige également des réponses intelligentes et professionnelles à chaque avis déposé.",
    tags: ["20+ avis 5★ / mois", "Réponse auto personnalisée", "SEO local Google"],
    sampleQuestion:
      "Bonjour ! Félicitations pour la vente de votre bien. Pourriez-vous nous laisser un court avis 5 étoiles sur Google ?",
    sampleAnswer1: "Avec plaisir, donnez-moi le lien !",
    sampleAnswer2: "Je le ferai plus tard.",
    agentReply1:
      "Quel plaisir ! Voici votre lien direct en 1 clic : g.page/r/usekaiz/review. Merci infiniment !",
    agentReply2:
      "C'est noté avec plaisir ! Je vous laisse le lien à portée de main dès que vous aurez 30 secondes.",
    ctaText: "Booster mes Avis Google",
    badge: "E-Réputation & Notoriété",
  },
];

export const PARTNER_LOGOS = [
  {
    name: "Partenaire 1",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/4e5e5fd6-d3e5-4469-a2a2-24a29a9f3c03.png",
  },
  {
    name: "Partenaire 2",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/1193a3fa-6334-40bc-a1a1-200530afe01d.png",
  },
  {
    name: "Partenaire 3",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/4855fc55-a299-445d-9b23-cb4d9a3a6863.png",
  },
  {
    name: "Partenaire 4",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/f1fbf76e-6455-4d9b-99e1-de95e8fd2424.png",
  },
  {
    name: "Partenaire 5",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/3bb5b943-0dd5-43ec-b616-a60b5e394cf0.png",
  },
  {
    name: "Partenaire 6",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/4fa10894-498d-46ea-893b-114a7d4dde3c.png",
  },
  {
    name: "Partenaire 7",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/fd5e2d3a-b859-46a9-90a0-fce2d45586cf.png",
  },
  {
    name: "Partenaire 8",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/0540f6f4-424a-4754-8f47-2108de4e29ba.png",
  },
  {
    name: "SAFTI Immobilier",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/17be82af-5557-417d-a248-4e1994ee30e8.png",
  },
];

export const PRESS_LOGOS = [
  {
    name: "RENT",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/5b3ad171-2b10-4beb-9804-9ac6f9938933.png",
  },
  {
    name: "Le Media Immo",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/20455850-4a09-47b7-8c77-0536eb8c1c1c.jpg",
  },
  {
    name: "Les petits génies de l'immobilier",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/d7daa5c5-5a74-441d-ad19-f57376433b58.jpg",
  },
  {
    name: "Trampoleen",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/7fae4539-3c13-4295-8541-326aba3fc483.png",
  },
  {
    name: "Parlons Business",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/ab9608c6-7d53-4916-aa01-c7003e8da027.webp",
  },
  {
    name: "Immo2",
    src: "https://vibe.filesafe.space/1774851885328190062/attachments/c98bb991-ecc9-44a6-8a80-28751f981c6a.png",
  },
];
