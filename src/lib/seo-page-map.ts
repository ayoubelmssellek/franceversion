/**
 * Canonical keyword → URL map for MeilleurIPTVFrance SEO ops (Phase 6).
 * One primary URL per intent — do not invent doorway duplicates.
 */
export type SeoPageMapping = {
  keyword: string;
  path: string;
  priority: "A" | "B" | "C" | "avoid";
  note?: string;
};

/** Priority cheat sheet for the France market (+ Phase 1–5 URLs). */
export const keywordPageMap: SeoPageMapping[] = [
  // Priority A
  // High-impression informational: educate only — never M3U dumps
  {
    keyword: "liste iptv france gratuite",
    path: "/blog/liste-iptv-france-gratuite",
    priority: "A",
    note: "Informational winner; no piracy doorway",
  },
  { keyword: "listes iptv gratuites france", path: "/blog/liste-iptv-france-gratuite", priority: "A" },
  { keyword: "iptv france liste gratuite", path: "/blog/liste-iptv-france-gratuite", priority: "A" },
  { keyword: "liste d'iptv france gratuite", path: "/blog/liste-iptv-france-gratuite", priority: "A" },
  { keyword: "liste gratuite iptv france", path: "/blog/liste-iptv-france-gratuite", priority: "A" },
  {
    keyword: "listes iptv m3u france",
    path: "/blog/liste-iptv-france-gratuite",
    priority: "A",
    note: "same intent cluster — explain M3U risks, do not host lists",
  },
  { keyword: "iptv android france", path: "/guides-installation/android", priority: "A" },
  { keyword: "iptv france android", path: "/guides-installation/android", priority: "A" },
  { keyword: "iptv smart tv france", path: "/guides-installation/smart-tv", priority: "A" },
  { keyword: "smart tv iptv france", path: "/guides-installation/smart-tv", priority: "A" },
  { keyword: "iptv smarters pro france", path: "/blog/iptv-smarters-pro-france", priority: "A" },
  { keyword: "iptv smarters france", path: "/blog/iptv-smarters-pro-france", priority: "A" },
  { keyword: "iptv smarters player france", path: "/blog/iptv-smarters-pro-france", priority: "A" },
  { keyword: "acheter iptv france", path: "/tarifs", priority: "A" },
  {
    keyword: "iptv france prix",
    path: "/tarifs",
    priority: "A",
    note: "Commercial owner per cannibalization matrix; literacy blog supports with hard link to /tarifs",
  },
  { keyword: "abonnement iptv france", path: "/tarifs", priority: "A" },
  {
    keyword: "pack trimestriel iptv",
    path: "/pack-trimestriel",
    priority: "A",
    note: "SKU leaf — 3m × 1; defer buy hub to /tarifs",
  },
  {
    keyword: "pack basique iptv",
    path: "/pack-basique",
    priority: "A",
    note: "SKU leaf — 1y × 1",
  },
  {
    keyword: "pack premium iptv",
    path: "/pack-premium",
    priority: "A",
    note: "SKU leaf — 1y2 × 2; not exclusive 4K tier",
  },
  {
    keyword: "pack famille iptv",
    path: "/pack-famille",
    priority: "A",
    note: "SKU leaf — 3conn × 3",
  },
  { keyword: "applications iptv", path: "/applications", priority: "A" },
  { keyword: "comment installer iptv", path: "/applications", priority: "A", note: "Hub overview; device steps stay on guides" },
  { keyword: "qu'est-ce que l'iptv", path: "/quest-ce-que-iptv", priority: "A" },
  { keyword: "faq iptv france", path: "/questions-frequentes", priority: "A" },
  { keyword: "essai iptv france", path: "/blog/essai-iptv-france", priority: "A" },
  { keyword: "iptv france essai gratuit", path: "/blog/essai-iptv-france", priority: "A" },
  { keyword: "meilleur iptv france", path: "/blog/meilleur-iptv-france-2026", priority: "A" },
  { keyword: "meilleur iptv en france", path: "/blog/meilleur-iptv-france-2026", priority: "A" },
  {
    keyword: "meilleur service iptv france",
    path: "/blog/meilleur-iptv-france-2026",
    priority: "A",
    note: "Community wording — same intent as meilleur IPTV",
  },
  {
    keyword: "meilleur fournisseur iptv france",
    path: "/blog/meilleur-iptv-france-2026",
    priority: "A",
  },
  {
    keyword: "meilleur abonnement iptv france",
    path: "/blog/meilleur-iptv-france-2026",
    priority: "A",
    note: "Commercial compare; buy still closes on /tarifs",
  },
  {
    keyword: "iptv fiable france",
    path: "/blog/meilleur-iptv-france-2026",
    priority: "B",
  },
  {
    keyword: "souscrire iptv france",
    path: "/tarifs",
    priority: "A",
  },
  {
    keyword: "catch up iptv france",
    path: "/questions-frequentes",
    priority: "B",
    note: "FAQ until dedicated post exists",
  },
  {
    keyword: "iptv vs netflix france",
    path: "/questions-frequentes",
    priority: "B",
  },
  { keyword: "iptv 4k france", path: "/blog/iptv-4k-france", priority: "A" },
  { keyword: "iptv france 4k", path: "/blog/iptv-4k-france", priority: "A" },
  { keyword: "lecteur iptv france", path: "/blog/meilleure-app-iptv-france", priority: "A" },
  { keyword: "meilleure app iptv france", path: "/blog/meilleure-app-iptv-france", priority: "A" },
  { keyword: "box iptv france", path: "/blog/box-iptv-france", priority: "A" },
  // Priority B
  { keyword: "iptv canal+ france", path: "/blog/iptv-sport-france", priority: "B" },
  { keyword: "canal+ iptv", path: "/blog/iptv-sport-france", priority: "B" },
  { keyword: "iptv dazn france", path: "/blog/iptv-sport-france", priority: "B" },
  { keyword: "iptv sport france", path: "/blog/iptv-sport-france", priority: "B" },
  { keyword: "chaînes iptv france", path: "/chaines", priority: "B" },
  { keyword: "ligue 1 iptv", path: "/blog/iptv-ligue-1-france", priority: "B", note: "long-tail cluster" },
  // Priority C
  { keyword: "iptv est-il légal en france", path: "/blog/liste-iptv-france-gratuite", priority: "C" },
  { keyword: "iptv france légal", path: "/blog/liste-iptv-france-gratuite", priority: "C" },
  { keyword: "iptv légal france", path: "/blog/liste-iptv-france-gratuite", priority: "C" },
  { keyword: "iptv kodi france", path: "/blog/meilleure-app-iptv-france", priority: "A", note: "careful — no pirate addons" },
  { keyword: "fournisseur iptv france", path: "/tarifs", priority: "A" },
  { keyword: "buy iptv france", path: "/tarifs", priority: "A" },
  { keyword: "iptv chaînes france", path: "/chaines", priority: "B" },
  { keyword: "iptv eurosport france", path: "/blog/iptv-sport-france", priority: "B" },
  { keyword: "iptv pas cher france", path: "/blog/iptv-pas-cher-france", priority: "A" },
  { keyword: "best iptv service france", path: "/blog/meilleur-iptv-france-2026", priority: "A" },
  { keyword: "iptv vs tv payante france", path: "/blog/iptv-vs-tv-payante-france", priority: "A" },
  { keyword: "voir tv française à l'étranger", path: "/blog/voir-tv-francaise-a-letranger", priority: "A" },
  { keyword: "iptv france belgique", path: "/blog/iptv-france-en-belgique", priority: "B" },
  { keyword: "iptv france suisse", path: "/blog/iptv-france-en-suisse", priority: "B" },
  { keyword: "coupe du monde 2026 iptv", path: "/blog/coupe-du-monde-2026-iptv-france", priority: "A" },
  { keyword: "iptv plusieurs appareils", path: "/blog/iptv-plusieurs-appareils-france", priority: "A" },
  { keyword: "iptv france whatsapp", path: "/iptv-france-whatsapp", priority: "A" },
  { keyword: "revendeur iptv france", path: "/revendeurs", priority: "A" },
  { keyword: "revendeurs iptv france", path: "/revendeurs", priority: "A" },
  { keyword: "panel iptv france", path: "/revendeurs", priority: "B", note: "B2B reseller intent" },
  { keyword: "crédits iptv france", path: "/revendeurs", priority: "B" },
  { keyword: "convertisseur m3u xtream", path: "/convertisseur-m3u-xtream", priority: "A" },
  { keyword: "vérificateur compte iptv", path: "/verificateur-compte-iptv", priority: "A" },
  { keyword: "mettre à jour liste m3u", path: "/mettre-a-jour-liste-m3u", priority: "B" },
  { keyword: "iptv chaînes manquantes", path: "/blog/iptv-chaines-manquantes", priority: "A" },
  { keyword: "epg ne charge pas", path: "/blog/epg-ne-charge-pas", priority: "B" },
  { keyword: "internet pour iptv", path: "/blog/internet-pour-iptv", priority: "B" },
  { keyword: "voir football iptv france", path: "/blog/voir-football-iptv-france", priority: "B" },
  { keyword: "tivimate france", path: "/blog/tivimate-france", priority: "B" },
  { keyword: "xtream codes france", path: "/blog/xtream-codes-france", priority: "B" },
  { keyword: "guide iptv france", path: "/blog/iptv-francais-guide", priority: "B" },
  { keyword: "vpn iptv france", path: "/blog/vpn-iptv-france", priority: "C", note: "careful — no VPN upsell required" },
  { keyword: "avantages iptv france", path: "/blog/avantages-iptv-france", priority: "B" },
  { keyword: "glossaire iptv", path: "/blog/glossaire-iptv-france", priority: "C" },
  { keyword: "iptv france", path: "/", priority: "C", note: "head term — only after long-tail foothold" },
  { keyword: "iptv en france", path: "/", priority: "C" },
  { keyword: "france iptv", path: "/", priority: "C" },
  // Avoid as primary money / doorway targets
  { keyword: "iptv france gratuit", path: "/blog/essai-iptv-france", priority: "avoid", note: "explain trial ≠ gratuit forever" },
];

/** Paths that must stay out of sitemap / indexing. */
export const neverIndexPaths = ["/checkout", "/merci", "/paiement-usd", "/api"] as const;

/** Seasonal content owners (human refresh cadence). */
export const seasonalRefreshOwners = [
  {
    path: "/chaines",
    cadence: "each Ligue 1 / Champions season start",
    focus: "Canal+, Ligue 1, DAZN, Eurosport availability notes",
  },
  {
    path: "/blog/iptv-sport-france",
    cadence: "seasonal",
    focus: "rights / catalog wording",
  },
  {
    path: "/blog/iptv-ligue-1-france",
    cadence: "seasonal",
    focus: "club / journée copy",
  },
  {
    path: "/blog/meilleur-iptv-france-2026",
    cadence: "quarterly",
    focus: "year label, checklist, CTAs",
  },
] as const;
