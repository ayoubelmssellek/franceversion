import type { Metadata } from "next";
import PaiementUsdLanding from "@/components/paiement-usd/PaiementUsdLanding";
import { getPaiementUsdPlan } from "@/data/paiement-usd";
import { buildMetadata } from "@/lib/seo";

const plan = getPaiementUsdPlan("6-meses");

export const metadata: Metadata = buildMetadata({
  title: plan.seoTitle,
  description: plan.seoDescription,
  path: plan.path,
  noIndex: true,
});

export default function PaiementUsd6MoisPage() {
  return <PaiementUsdLanding slug="6-meses" />;
}
