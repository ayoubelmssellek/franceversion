/** Canonical marketing routes (France / fr-FR). */

export const routes = {
  home: "/",
  questCeQueIptv: "/quest-ce-que-iptv",
  chaines: "/chaines",
  tarifs: "/tarifs",
  apps: "/applications",
  faq: "/questions-frequentes",
  aPropos: "/a-propos",
  installationGuides: "/guides-installation",
  blog: "/blog",
  renew: "/renouveler",
  checkout: "/checkout",
  packTrimestriel: "/pack-trimestriel",
  packBasique: "/pack-basique",
  packPremium: "/pack-premium",
  packFamille: "/pack-famille",
  privacy: "/politique-de-confidentialite",
  terms: "/conditions",
  refund: "/politique-de-remboursement",
  dmca: "/politique-dmca",
  avis: "/avis",
  merci: "/merci",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
