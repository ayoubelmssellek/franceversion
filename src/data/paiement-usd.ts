/**
 * USD payment card routes (`/paiement-usd/*`).
 * Reuses the existing Pricing `PlanCard` with hard-coded USD primary prices only.
 */

export type PaiementUsdSlug = "1-mois" | "3-mois" | "6-mois" | "1-an";

export type PaiementUsdPath = `/paiement-usd/${PaiementUsdSlug}`;

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
  "1-mois": {
    slug: "1-mois",
    path: "/paiement-usd/1-mois",
    planId: "1m",
    usdPrice: 12,
    seoTitle: "Paiement en USD · 1 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 1 mois — paiement de 12 $ USD.",
  },
  "3-mois": {
    slug: "3-mois",
    path: "/paiement-usd/3-mois",
    planId: "3m",
    usdPrice: 27,
    seoTitle: "Paiement en USD · 3 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 3 mois — paiement de 27 $ USD.",
  },
  "6-mois": {
    slug: "6-mois",
    path: "/paiement-usd/6-mois",
    planId: "6m",
    usdPrice: 35,
    seoTitle: "Paiement en USD · 6 mois",
    seoDescription: "Forfait MeilleurIPTVFrance 6 mois — paiement de 35 $ USD.",
  },
  "1-an": {
    slug: "1-an",
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
