#!/usr/bin/env node
/**
 * Phase 6 — match GSC query export to keywords.json + seo-page-map.
 *
 * Usage:
 *   node scripts/seo-match-gsc.mjs
 *   node scripts/seo-match-gsc.mjs path/to/gsc-queries.csv
 *
 * GSC CSV: Performance → Queries → Export (columns usually include
 * Top queries / Query, Clicks, Impressions, CTR, Position).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** Doorway-ish lista/m3u spam — exclude our approved explainer queries. */
function isAvoidIntentQuery(query) {
  const q = String(query || "")
    .toLowerCase()
    .trim();
  if (
    q === "liste iptv france gratuite" ||
    q === "listes iptv m3u france" ||
    q === "liste iptv france"
  ) {
    return false;
  }
  return /gratuit|\bfree\b|github|reddit|aliexpress|liste définitive 2021|\bm3u\b|playlist|listes?\b|apk\b|daily iptv list/i.test(
    q,
  );
}

/** @type {{ keyword: string; path: string; priority: string; note?: string }[]} */
const PAGE_MAP = [
  ["liste iptv france gratuite", "/blog/liste-iptv-france-gratuite", "A"],
  ["listes iptv m3u france", "/blog/liste-iptv-france-gratuite", "A"],
  ["liste iptv france", "/blog/liste-iptv-france-gratuite", "A"],
  ["iptv android france", "/guides-installation/android", "A"],
  ["iptv smart tv france", "/guides-installation/smart-tv", "A"],
  ["smart tv iptv france", "/guides-installation/smart-tv", "A"],
  ["iptv smarters pro france", "/blog/iptv-smarters-pro-france", "A"],
  ["iptv smarters france", "/blog/iptv-smarters-pro-france", "A"],
  ["acheter iptv france", "/tarifs", "A"],
  ["iptv france prix", "/tarifs", "A"],
  ["abonnement iptv france", "/tarifs", "A"],
  ["essai iptv france", "/blog/essai-iptv-france", "A"],
  ["meilleur iptv france", "/blog/meilleur-iptv-france-2026", "A"],
  ["meilleur iptv france 2026", "/blog/meilleur-iptv-france-2026", "A"],
  ["iptv 4k france", "/blog/iptv-4k-france", "A"],
  ["meilleure app iptv france", "/blog/meilleure-app-iptv-france", "A"],
  ["box iptv france", "/blog/box-iptv-france", "A"],
  ["iptv sport france", "/blog/iptv-sport-france", "B"],
  ["ligue 1 iptv", "/blog/iptv-ligue-1-france", "B"],
  ["chaînes iptv france", "/chaines", "B"],
  ["iptv légal france", "/blog/liste-iptv-france-gratuite", "C"],
  ["iptv pas cher france", "/blog/iptv-pas-cher-france", "A"],
  ["qu'est-ce que l'iptv", "/quest-ce-que-iptv", "A"],
  ["iptv france", "/", "C"],
  ["meilleur iptv en france", "/", "C"],
].map(([keyword, p, priority]) => ({ keyword, path: p, priority }));

function loadKeywords() {
  const raw = JSON.parse(fs.readFileSync(path.join(root, "keywords.json"), "utf8"));
  return raw.map((r) => ({
    keyword: String(r.Keyword || "").toLowerCase().trim(),
    volume: Number(r.Volume) || 0,
    kd: Number(r["Keyword Difficulty"]) || 0,
  }));
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const split = (line) => {
    const out = [];
    let cur = "";
    let q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        q = !q;
        continue;
      }
      if (c === "," && !q) {
        out.push(cur.trim());
        cur = "";
        continue;
      }
      cur += c;
    }
    out.push(cur.trim());
    return out;
  };
  const headers = split(lines[0]).map((h) => h.toLowerCase());
  const idx = (names) => headers.findIndex((h) => names.some((n) => h.includes(n)));
  const qi = idx(["top queries", "query", "consultas", "consulta"]);
  const cli = idx(["clicks", "cliques"]);
  const impi = idx(["impressions", "impressões", "impressoes"]);
  const posi = idx(["position", "posição", "posicao"]);
  if (qi < 0) {
    console.error("Could not find Query column. Headers:", headers.join(" | "));
    process.exit(1);
  }
  return lines.slice(1).map((line) => {
    const cols = split(line);
    return {
      query: (cols[qi] || "").toLowerCase().trim(),
      clicks: Number((cols[cli] || "0").replace("%", "").replace(",", ".")) || 0,
      impressions: Number((cols[impi] || "0").replace("%", "").replace(",", ".")) || 0,
      position: Number((cols[posi] || "0").replace(",", ".")) || 0,
    };
  });
}

function findMap(query) {
  const exact = PAGE_MAP.find((m) => m.keyword === query);
  if (exact) return exact;
  return PAGE_MAP.find((m) => query.includes(m.keyword) || m.keyword.includes(query));
}

function main() {
  const csvPath = process.argv[2];
  const keywords = loadKeywords();
  const mid = keywords.filter((k) => k.volume >= 10 && !isAvoidIntentQuery(k.keyword));

  console.log("=== MeilleurIPTVFrance SEO match ===\n");
  console.log(`keywords.json: ${keywords.length} | mid-tail Vol>=10 (filtered): ${mid.length}`);
  console.log(`page map entries: ${PAGE_MAP.length}\n`);

  if (!csvPath) {
    console.log("No GSC CSV provided — showing mid-tail coverage vs page map.\n");
    const uncovered = mid
      .filter((k) => !findMap(k.keyword) && !isAvoidIntentQuery(k.keyword))
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 25);
    console.log("--- Top uncovered mid-tails (consider ONE URL or H2, not 25 pages) ---");
    for (const k of uncovered) {
      console.log(`${String(k.volume).padStart(5)} | KD ${String(k.kd).padStart(2)} | ${k.keyword}`);
    }
    console.log("\nTip: export GSC Queries CSV and re-run:");
    console.log("  npm run seo:match -- ./gsc-queries.csv");
    return;
  }

  const abs = path.isAbsolute(csvPath) ? csvPath : path.join(process.cwd(), csvPath);
  if (!fs.existsSync(abs)) {
    console.error("File not found:", abs);
    process.exit(1);
  }

  const rows = parseCsv(fs.readFileSync(abs, "utf8"));
  console.log(`GSC rows: ${rows.length}\n`);

  const strike = rows
    .filter((r) => r.position >= 4 && r.position <= 15 && r.impressions > 0)
    .sort((a, b) => b.impressions - a.impressions);

  console.log("--- Strike zone (position 4–15) — upgrade content first ---");
  if (!strike.length) console.log("(none yet — normal for a new property)\n");
  for (const r of strike.slice(0, 30)) {
    const mapped = findMap(r.query);
    const kw = keywords.find((k) => k.keyword === r.query);
    console.log(
      `pos ${r.position.toFixed(1).padStart(5)} | imp ${String(r.impressions).padStart(6)} | clk ${String(r.clicks).padStart(4)} | ${r.query}`,
    );
    console.log(
      `         → ${mapped ? `${mapped.path} [${mapped.priority}]` : "NO MAP — assign or ignore"}` +
        (kw ? ` | Vol ${kw.volume}` : ""),
    );
  }

  const avoidHits = rows.filter((r) => isAvoidIntentQuery(r.query)).slice(0, 15);
  console.log("\n--- Avoid-intent queries showing in GSC (do not build lista/m3u doorways) ---");
  if (!avoidHits.length) console.log("(none)\n");
  for (const r of avoidHits) {
    console.log(`imp ${r.impressions} | ${r.query}`);
  }

  const head = rows.filter((r) =>
    ["iptv españa", "mejor iptv españa", "iptv españa precio"].includes(r.query),
  );
  console.log("\n--- Head terms ---");
  for (const r of head) {
    console.log(`pos ${r.position.toFixed(1)} | imp ${r.impressions} | clk ${r.clicks} | ${r.query}`);
  }
  if (!head.length) console.log("(not in export yet)");

  console.log("\nDone.");
}

main();
