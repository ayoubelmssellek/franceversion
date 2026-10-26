import type { Metadata } from "next";
import PackLanding from "@/components/packs/PackLanding";
import { getPack } from "@/data/packs";
import { buildMetadata } from "@/lib/seo";

const pack = getPack("familia");

export const metadata: Metadata = buildMetadata({
  title: pack.seoTitle,
  description: pack.seoDescription,
  path: pack.path,
});

export default function PackFamiliaPage() {
  return <PackLanding slug="familia" />;
}
