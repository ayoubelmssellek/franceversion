"use client";

import { PlanCard } from "@/components/Pricing";
import { planFeatures, plans } from "@/data/content";
import { getPaiementUsdPlan, type PaiementUsdSlug } from "@/data/paiement-usd";

/**
 * Renders the exact same pricing card as `/tarifs`, with only the primary
 * price shown in USD (hard-coded commercial amount).
 */
export default function PaiementUsdLanding({ slug }: { slug: PaiementUsdSlug }) {
  const usd = getPaiementUsdPlan(slug);
  const base = plans.one.find((p) => p.id === usd.planId);
  if (!base) {
    throw new Error(`Missing 1-connection plan for ${usd.planId}`);
  }

  const plan = { ...base, price: usd.usdPrice };

  return (
    <div className="section-shell py-16 md:py-24">
      <div className="mx-auto w-full max-w-sm">
        <PlanCard
          plan={plan}
          connections={1}
          features={planFeatures}
          priceSymbol="$"
          showCompare={false}
        />
      </div>
    </div>
  );
}
