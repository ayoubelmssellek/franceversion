/**
 * USD payment card routes (`/paiement-usd/*`).
 * Reuses the existing Pricing `PlanCard` with hard-coded USD primary prices only.
 */

export type PaiementUsdSlug = "1-mes" | "3-meses" | "6-meses" | "1-ano";

export type PaiementUsdPath =
  | "/paiement-usd/1-mois"
  | "/paiement-usd/3-mois"
  | "/paiement-usd/6-mois"
  | "/paiement-usd/1-an";

export type PaiementUsdPlan = {
  slug: PaiementUsdSlug;
  path: PaiementUsdPath;
  /** Matches `plans.one` id */
  planId: "1m" | "3m" | "6m" | "1y";
  usdPrice: number;
  seoTitle: string;
  seoDescription: string;
};

export const paiementUsdPlans: Record<PaiementUsdSlug, PaiementUsdPlan> = {
  "1-mes": {
    slug: "1-mes",
    path: "/paiement-usd/1-mois",
    planId: "1m",
    usdPrice: 12,
    seoTitle: "Paiement en USD · 1 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 1 mois — paiement de 12 $ USD.",
  },
  "3-meses": {
    slug: "3-meses",
    path: "/paiement-usd/3-mois",
    planId: "3m",
    usdPrice: 27,
    seoTitle: "Paiement en USD · 3 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 3 mois — paiement de 27 $ USD.",
  },
  "6-meses": {
    slug: "6-meses",
    path: "/paiement-usd/6-mois",
    planId: "6m",
    usdPrice: 35,
    seoTitle: "Paiement en USD · 6 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 6 mois — paiement de 35 $ USD.",
  },
  "1-ano": {
    slug: "1-ano",
    path: "/paiement-usd/1-an",
    planId: "1y",
    usdPrice: 50,
    seoTitle: "Paiement en USD · 1 an",
    seoDescription: "Forfait MeilleurIPTVFrance 1 an — paiement de 50 $ USD.",
  },
};

export function getPaiementUsdPlan(slug: PaiementUsdSlug): PaiementUsdPlan {
  return paiementUsdPlans[slug];
}
