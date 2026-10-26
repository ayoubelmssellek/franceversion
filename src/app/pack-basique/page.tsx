import type { Metadata } from "next";
import PackLanding from "@/components/packs/PackLanding";
import { getPack } from "@/data/packs";
import { buildMetadata } from "@/lib/seo";

const pack = getPack("basico");

export const metadata: Metadata = buildMetadata({
  title: pack.seoTitle,
  description: pack.seoDescription,
  path: pack.path,
});

export default function PackBasicoPage() {
  return <PackLanding slug="basico" />;
}
