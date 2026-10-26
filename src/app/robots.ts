import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.url.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/merci", "/paiement-usd/", "/api/", "/docs/"],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
