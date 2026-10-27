import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Clapperboard,
  Film,
  Flag,
  Globe2,
  Headphones,
  Heart,
  Newspaper,
  Sparkles,
  Trophy,
  Tv,
  Zap,
} from "lucide-react";

export type ChannelCategory = {
  title: string;
  /** Short label only — no unverified numeric counts. */
  label?: string;
  description: string;
  icon: LucideIcon;
};

export type LibraryFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ChannelStat = {
  value: string;
  label: string;
};

export type SportHighlight = {
  title: string;
  description: string;
};

export type SportAuthorityBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ChannelFaq = {
  q: string;
  a: string;
};

/** Categories that matter to viewers in France — not a world map. */
export const channelCategories: ChannelCategory[] = [
  {
    title: "Télévision française",
    label: "FR",
    description: "Les chaînes françaises que les familles regardent tous les jours, dont Canal+.",
    icon: Flag,
  },
  {
    title: "Sport FR",
    label: "Sport",
    description: "Ligue 1, Canal+ et les soirées européennes — confirmez le catalogue actif dans le lecteur.",
    icon: Trophy,
  },
  {
    title: "Films et séries",
    label: "140K+",
    description: "Cinéma et séries à la demande (VOD) dans le même service que les chaînes en direct.",
    icon: Clapperboard,
  },
  {
    title: "Divertissement",
    label: "Loisirs",
    description: "Téléréalité, fiction et chaînes de loisirs pour le quotidien en France.",
    icon: Sparkles,
  },
  {
    title: "Info",
    label: "Info",
    description: "Chaînes d’information françaises et internationales pour suivre l’actualité.",
    icon: Newspaper,
  },
  {
    title: "Jeunesse",
    label: "Famille",
    description: "Contenus pour les enfants et les familles — confirmez les catégories dans le lecteur.",
    icon: Baby,
  },
  {
    title: "Documentaires",
    label: "Docs",
    description: "Nature, histoire et découverte pour qui aime apprendre.",
    icon: Film,
  },
  {
    title: "Musique",
    label: "Musique",
    description: "Concerts, clips et chaînes musicales pour tous les âges.",
    icon: Headphones,
  },
  {
    title: "Art de vivre",
    label: "Art de vivre",
    description: "Cuisine, maison et bien-être au rythme de la vie en France.",
    icon: Heart,
  },
  {
    title: "Chaînes internationales",
    label: "Extra",
    description: "Des options hors de France en complément, pour les foyers multilingues.",
    icon: Globe2,
  },
];

export const frenchSports: SportHighlight[] = [
  {
    title: "Ligue 1",
    description:
      "Suivez la Ligue 1 en direct sur le grand écran — journées, classiques et course au titre, avec une qualité stable quand le réseau tient le HD/FHD.",
  },
  {
    title: "Canal+",
    description:
      "Canal+ au catalogue pour les matchs, les plateaux et la couverture que les foyers français attendent les soirs de championnat et de coupe d’Europe.",
  },
  {
    title: "Chaînes de clubs",
    description:
      "Chaînes de clubs au catalogue, lorsqu’elles sont disponibles, pour les entraînements, les matchs et les contenus de l’équipe sans changer de service.",
  },
  {
    title: "Ligue des champions",
    description:
      "Soirées européennes avec le même accès Xtream — épinglez les chaînes de sport dans les favoris avant le coup d’envoi.",
  },
  {
    title: "Premier League et plus",
    description:
      "Football anglais et autres championnats pour qui va au-delà de la Ligue 1 — utile dans les foyers aux goûts variés.",
  },
  {
    title: "Formule 1, UFC et événements",
    description:
      "Moteur, combat et événements ponctuels en HD/4K selon la connexion. Aux heures de pointe, préférez un FHD stable plutôt que de forcer l’Ultra HD.",
  },
];

/** Bump when refreshing seasonal Canal+ / Ligue 1 / rights notes. */
export const sportContentReviewed = "2026-07-20";

export const sportAuthorityBlocks: SportAuthorityBlock[] = [
  {
    id: "sport-tv",
    title: "Canal+ sur votre écran",
    paragraphs: [
      "Pour regarder les chaînes de sport à la maison sans décodeur classique, utilisez un forfait MeilleurIPTVFrance actif, un lecteur compatible (par exemple IPTV Smarters) et un accès Xtream — pas des listes M3U gratuites partagées sur des forums.",
      "Après l’activation, ouvrez la catégorie sport, épinglez Canal+ dans les favoris et testez le réseau aux heures de pointe. Les soirs de Ligue 1 ou de Ligue des champions, le Wi‑Fi 5 GHz ou le câble Ethernet au salon font plus de différence que mille chaînes de plus dans l’annonce.",
      "Nous ne publions pas de listes M3U Canal+ à télécharger. Si vous voulez un sport stable, utilisez le catalogue du service et les guides d’installation.",
    ],
  },
  {
    id: "liga",
    title: "La Ligue 1 et le sport au quotidien",
    paragraphs: [
      "Pour la plupart des familles, le sport en IPTV veut dire la Ligue 1, les chaînes d’analyse et les événements européens. Organisez les favoris par journée : Canal+, les chaînes françaises pour le débat après le match, et le second écran seulement si le forfait a assez de connexions.",
      "Le buffering à la mi-temps vient presque toujours du réseau ou de deux flux sur une seule connexion — pas d’une « liste manquante ». Consultez la checklist buffering sur le blog et confirmez le nombre de connexions sur Tarifs.",
    ],
  },
  {
    id: "clubes",
    title: "Chaînes de clubs et contenus d’équipe",
    paragraphs: [
      "Les chaînes de clubs entrent dans le catalogue du forfait lorsqu’elles sont disponibles, avec le même accès que le reste des chaînes françaises — pas via des fichiers partagés.",
      "Associez les chaînes de clubs à Canal+ et aux chaînes françaises pour couvrir le match, le débat et l’info sans sauter d’une application à l’autre. Plus de détail dans l’article Ligue 1 du blog.",
    ],
  },
  {
    id: "autres-marques",
    title: "Autres marques de sport",
    paragraphs: [
      "La disponibilité des marques et des droits (par exemple les offres de saison) change avec le calendrier. Ce qui compte, c’est le catalogue actif sur votre compte au moment du match — confirmez-le dans le lecteur après l’activation ou demandez à l’assistance avant une finale importante.",
      "Le principe est le même pour les bouquets sport supplémentaires : service + lecteur + réseau, pas une liste anonyme.",
    ],
  },
];

/**
 * Shared with `/questions-frequentes` via `channelFaqs.slice(0, 2)`.
 * Keep this array stable — do not replace with /chaines-only catalogue FAQs.
 */
export const channelFaqs: ChannelFaq[] = [
  {
    q: "MeilleurIPTVFrance a-t-il Canal+ ?",
    a: "Oui — Canal+ fait partie du groupe sport du catalogue lorsqu’il est actif sur votre forfait. Après la connexion Xtream, cherchez-le dans la catégorie Sport et épinglez-le dans les favoris.",
  },
  {
    q: "Où regarder la Ligue 1 et les chaînes de clubs ?",
    a: "La Ligue 1 apparaît en général via les chaînes de sport (dont Canal+). Les chaînes de clubs apparaissent au catalogue lorsqu’elles sont disponibles. Confirmez dans l’application après l’activation ; l’assistance vérifie si une chaîne précise ne charge pas.",
  },
  {
    q: "Pourquoi ne proposez-vous pas de listes M3U gratuites de Canal+ ?",
    a: "Parce que nous exploitons un service payant avec assistance et identifiants privés. Les pages « liste m3u gratuite » sont instables, risquées et hors de notre modèle. Utilisez le forfait officiel et les guides d’installation.",
  },
  {
    q: "Combien de connexions pour le match au salon et sur le mobile ?",
    a: "Deux flux simultanés demandent un forfait à 2 connexions. Avec 1 connexion, un seul écran à la fois. Comparez sur /tarifs.",
  },
  {
    q: "Le sport arrive-t-il en 4K ?",
    a: "Quand le flux et votre réseau le permettent. Avec un Wi‑Fi faible, choisissez un FHD stable — surtout pour les classiques et la Ligue des champions.",
  },
  {
    q: "Comment installer pour regarder les chaînes IPTV France ?",
    a: "Activez le forfait, recevez l’accès Xtream par e-mail et suivez le guide de votre appareil (Smart TV, Fire Stick, Android, iOS ou MAG).",
  },
];

/** FAQ visible + schema on `/chaines` only. */
export const chainesPageFaqs: ChannelFaq[] = [
  {
    q: "Quelles chaînes françaises sont disponibles ?",
    a: "La page montre TF1, France 2, France 3, M6, France 5, Canal+, beIN Sports, Eurosport, L'Équipe, BFM TV, France Info et Arte Info. Le catalogue actif se confirme dans l'application après la connexion.",
  },
  {
    q: "Le service inclut-il des chaînes de sport ?",
    a: "Oui. Il y a une catégorie sport dans le lecteur, centrée sur la Ligue 1, Canal+ et les contenus de clubs lorsqu’ils sont disponibles. La couverture exacte dépend du catalogue actif.",
  },
  {
    q: "Puis-je trouver Canal+ ?",
    a: "Canal+ fait partie du catalogue sport lorsqu’il est actif sur votre forfait. Après la connexion Xtream, cherchez-le dans la catégorie Sport et épinglez-le dans les favoris.",
  },
  {
    q: "Comment trouver les chaînes après la connexion ?",
    a: "Dans le lecteur, parcourez les catégories (France, Sport, Info, VOD, etc.), utilisez la recherche de l’application si elle existe et épinglez des favoris. L’assistance vous aide si une chaîne ne charge pas.",
  },
  {
    q: "Qu’est-ce que l’EPG ?",
    a: "L’EPG est le guide électronique des programmes : la grille des horaires et des émissions dans le lecteur. Il aide à voir ce qui passe maintenant et ce qui vient ensuite — quand la chaîne et le catalogue l’incluent.",
  },
  {
    q: "Le catalogue inclut-il des films et des séries ?",
    a: "Oui. En plus des chaînes en direct, il y a du VOD à la demande — plus de 200 000 films et plus de 40 000 séries dans le service (et la page utilise aussi le cadre 140K+ VOD là où c’est pertinent). La disponibilité de chaque titre peut changer.",
  },
  {
    q: "Puis-je utiliser le service sur une Smart TV ?",
    a: "Oui. Smart TV, Fire Stick, Android, iOS, MAG et PC avec un lecteur compatible. Consultez les applications et les guides d’installation.",
  },
  {
    q: "Puis-je utiliser plus d’une connexion ?",
    a: "Les forfaits proposent 1, 2 ou 3 connexions — le nombre d’écrans simultanés. Deux flux demandent un forfait à 2 connexions. Comparez sur Tarifs.",
  },
  {
    q: "Le service fonctionne-t-il avec une M3U gratuite ?",
    a: "Nous n’exploitons pas de listes M3U anonymes gratuites. MeilleurIPTVFrance est un service payant avec des identifiants privés et une assistance. Les listes partagées sont instables et hors de notre modèle.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
  },
  {
    q: "Comment commencer ?",
    a: "Choisissez le forfait sur Tarifs, terminez le paiement, recevez les identifiants et configurez un lecteur. Les guides d’installation et le hub d’applications vous accompagnent pas à pas.",
  },
  {
    q: "Le catalogue peut-il changer ?",
    a: "Oui. Les chaînes et les titres VOD peuvent être mis à jour. Confirmez ce dont vous avez besoin dans le lecteur avec le compte actif ; l’assistance précise la disponibilité du moment.",
  },
];

export const libraryFeatures: LibraryFeature[] = [
  {
    title: "Contenu français",
    description: "Chaînes IPTV France mises en avant — chaînes françaises, Canal+ et le sport du catalogue.",
    icon: Flag,
  },
  {
    title: "Catalogue à jour",
    description: "Le catalogue du service est tenu pour l’usage quotidien — confirmez toujours ce qui est actif sur votre compte.",
    icon: Sparkles,
  },
  {
    title: "HD / FHD / 4K",
    description: "Qualité élevée quand la chaîne, le forfait et votre réseau le permettent.",
    icon: Clapperboard,
  },
  {
    title: "Pensé pour les soirées de match",
    description: "Sport et chaînes françaises avec le même accès — épinglez les favoris et validez le réseau avant le coup d’envoi.",
    icon: Zap,
  },
  {
    title: "Le sport qui compte",
    description: "Ligue 1, Canal+ et les événements que suivent les foyers français, lorsqu’ils sont au catalogue actif.",
    icon: Trophy,
  },
  {
    title: "Divertissement familial",
    description: "Films, séries et catégories jeunesse — du divertissement pour les familles en France.",
    icon: Tv,
  },
];

export const heroStats: ChannelStat[] = [
  { value: "15 000+", label: "Chaînes en direct" },
  { value: "IPTV FR", label: "Focus France" },
  { value: "4K", label: "Quand le réseau le permet" },
  { value: "99,9 %", label: "Disponibilité (engagement)" },
];

export const libraryStats: ChannelStat[] = [
  { value: "15 000+", label: "Chaînes en direct" },
  { value: "140K+", label: "Films et séries (VOD)" },
  { value: "4K", label: "Quand le réseau le permet" },
  { value: "24 h", label: "Essai sur demande" },
  { value: "24/7", label: "Assistance" },
  { value: "7 jours", label: "Garantie" },
];

/** Atmosphere labels for brand logos — not claims of official third-party subscriptions. */
export const platformDescriptions: Record<string, string> = {
  "Prime Video": "Style de catalogue VOD — films et séries à la demande dans le service.",
  "Disney Plus": "Référence visuelle de divertissement familial dans l’univers IPTV France.",
  "HBO Max": "Référence visuelle de séries et de cinéma à la demande.",
  "Apple TV+": "Référence visuelle de productions premium à l’écran.",
  "SkyShowtime": "Référence visuelle de divertissement — ce n’est pas le catalogue des chaînes françaises.",
  DAZN: "Référence visuelle de sport — confirmez les marques dans le catalogue actif.",
  Netflix: "Référence visuelle de séries et de films à la demande.",
};
