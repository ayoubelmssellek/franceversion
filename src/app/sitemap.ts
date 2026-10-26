import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-data";
import { siteConfig } from "@/lib/seo";

/**
 * Dynamic /sitemap.xml — single source of truth for indexable URLs.
 * Excludes noindex funnels (/checkout, /merci) and /api/*.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const entries = getSitemapEntries();
  const seen = new Set<string>();

  return entries.flatMap((entry) => {
    const url = !entry.path || entry.path === "/" ? base : `${base}${entry.path}`;
    if (seen.has(url)) return [];
    seen.add(url);
    return [
      {
        url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
      },
    ];
  });
}
