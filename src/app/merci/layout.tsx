import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Merci pour votre commande",
  description: "Confirmation de commande MeilleurIPTVFrance.",
  path: "/merci",
  noIndex: true,
});

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
