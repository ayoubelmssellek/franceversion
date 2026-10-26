import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Paiement en USD",
  description: "Pages de paiement en USD de MeilleurIPTVFrance.",
  path: "/paiement-usd",
  noIndex: true,
});

export default function PaiementUsdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
