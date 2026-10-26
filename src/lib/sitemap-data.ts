import { posts } from "@/data/blog";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/seo";

export type SitemapChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  /** Path beginning with `/`, or `""` for the homepage. */
  path: string;
  lastModified: string; // YYYY-MM-DD
  changeFrequency: SitemapChangeFreq;
  priority: number;
};

/** Stable content revision date for static marketing/legal pages. */
const CONTENT_UPDATED = "2026-10-14";

/**
 * Explicit allowlist of indexable routes.
 * Excluded by design: /checkout, /merci, /paiement-usd/*, /api/*, 404, filtered/query URLs.
 */
const STATIC_INDEXABLE: Omit<SitemapEntry, "lastModified">[] = [
  // Money / conversion
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/tarifs", changeFrequency: "weekly", priority: 0.95 },
  { path: "/pack-trimestriel", changeFrequency: "weekly", priority: 0.88 },
  { path: "/pack-basique", changeFrequency: "weekly", priority: 0.88 },
  { path: "/pack-premium", changeFrequency: "weekly", priority: 0.88 },
  { path: "/pack-famille", changeFrequency: "weekly", priority: 0.88 },
  { path: "/chaines", changeFrequency: "weekly", priority: 0.9 },
  { path: "/applications", changeFrequency: "weekly", priority: 0.9 },
  { path: "/quest-ce-que-iptv", changeFrequency: "monthly", priority: 0.85 },
  { path: "/questions-frequentes", changeFrequency: "weekly", priority: 0.85 },
  { path: "/iptv-france-whatsapp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/revendeurs", changeFrequency: "monthly", priority: 0.85 },
  { path: "/convertisseur-m3u-xtream", changeFrequency: "monthly", priority: 0.75 },
  { path: "/verificateur-compte-iptv", changeFrequency: "monthly", priority: 0.75 },
  { path: "/mettre-a-jour-liste-m3u", changeFrequency: "monthly", priority: 0.7 },
  // Trust / retention
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.75 },
  { path: "/avis", changeFrequency: "weekly", priority: 0.75 },
  { path: "/renouveler", changeFrequency: "monthly", priority: 0.7 },
  // Support clusters
  { path: "/guides-installation", changeFrequency: "weekly", priority: 0.85 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  // Legal (indexable, low priority)
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
  { path: "/conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-remboursement", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-dmca", changeFrequency: "yearly", priority: 0.3 },
];

const EXCLUDED_PREFIXES = ["/checkout", "/merci", "/paiement-usd", "/api"];

function isExcluded(path: string): boolean {
  if (!path) return false;
  return EXCLUDED_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized.replace(/\/$/, "")}`;
}

/** All indexable sitemap entries (deduplicated, canonical paths only). */
export function getSitemapEntries(): SitemapEntry[] {
  const byPath = new Map<string, SitemapEntry>();

  for (const page of STATIC_INDEXABLE) {
    if (isExcluded(page.path)) continue;
    byPath.set(page.path, { ...page, lastModified: CONTENT_UPDATED });
  }

  for (const guide of guides) {
    const path = `/guides-installation/${guide.slug}`;
    if (isExcluded(path)) continue;
    byPath.set(path, {
      path,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const post of posts) {
    const path = `/blog/${post.slug}`;
    if (isExcluded(path)) continue;
    byPath.set(path, {
      path,
      lastModified: post.updated || post.date,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return Array.from(byPath.values()).sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return a.path.localeCompare(b.path);
  });
}

export function getSitemapUrls(): string[] {
  return getSitemapEntries().map((entry) => canonicalUrl(entry.path));
}

/** High-priority URLs to submit first via Google Search Console URL Inspection. */
export function getHighPrioritySitemapUrls(): string[] {
  return getSitemapEntries()
    .filter((entry) => entry.priority >= 0.8)
    .map((entry) => canonicalUrl(entry.path));
}

/** Serialize a valid sitemap.xml document (Google Sitemap Protocol). */
export function buildSitemapXml(entries = getSitemapEntries()): string {
  const urls = entries.map((entry) => {
    const loc = canonicalUrl(entry.path);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}
