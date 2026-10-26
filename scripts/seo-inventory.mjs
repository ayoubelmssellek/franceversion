#!/usr/bin/env node
/**
 * Phase 6 — print indexable URL inventory + never-index prefixes.
 * Usage: node scripts/seo-inventory.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const require = createRequire(import.meta.url);

// blog.ts / guides.ts are TS — parse slugs with light regex from source
function slugsFrom(file, arrayName) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const re = /slug:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push(m[1]);
  return out;
}

const NEVER = ["/checkout", "/merci", "/paiement-usd", "/api"];
const STATIC = [
  "/",
  "/tarifs",
  "/pack-trimestriel",
  "/pack-basique",
  "/pack-premium",
  "/pack-famille",
  "/chaines",
  "/applications",
  "/quest-ce-que-iptv",
  "/questions-frequentes",
  "/iptv-france-whatsapp",
  "/revendeurs",
  "/convertisseur-m3u-xtream",
  "/verificateur-compte-iptv",
  "/mettre-a-jour-liste-m3u",
  "/a-propos",
  "/avis",
  "/renouveler",
  "/guides-installation",
  "/blog",
  "/politique-de-confidentialite",
  "/conditions",
  "/politique-de-remboursement",
  "/politique-dmca",
];

const guides = slugsFrom("src/data/guides.ts", "guides").map((s) => `/guides-installation/${s}`);
const posts = slugsFrom("src/data/blog.ts", "posts").map((s) => `/blog/${s}`);

const all = [...STATIC, ...guides, ...posts];
const unique = [...new Set(all)].sort();

console.log("=== Indexable inventory (expected in sitemap) ===\n");
unique.forEach((u) => console.log(u));
console.log(`\nTotal: ${unique.length}`);

console.log("\n=== Never index (keep out of sitemap) ===");
NEVER.forEach((u) => console.log(u + "/*"));

console.log("\n=== Prune policy ===");
console.log("- Do NOT add doorway pages for every keywords.json row.");
console.log("- If a URL has 0 impressions for 90+ days after indexing, consider:");
console.log("  (a) merge content into a pillar, (b) noindex, or (c) rewrite — never leave thin clones.");
console.log("- Legal/checkout funnels stay noindex forever.");
console.log("- Prefer expanding /chaines or existing blogs over new near-duplicates.");
