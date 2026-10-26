import {
  getFamilyPlanCompare,
  getFamilyPlanPrice,
  getPlans,
} from "@/lib/plan-pricing";
import { planFeatures } from "@/data/content";

export type PackSlug = "trimestral" | "basico" | "premium" | "familia";

export type PackDefinition = {
  slug: PackSlug;
  path: `/${string}`;
  /** Checkout plan id accepted by resolvePlan */
  planId: string;
  connections: 1 | 2 | 3;
  name: string;
  shortName: string;
  /** SEO title without brand suffix (buildMetadata adds | MeilleurIPTVFrance when needed) */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  durationLabel: string;
  pricePeriodLabel: string;
  intro: string;
  forWhom: string;
  /** Extra H2 sections for SEO depth (title + body). */
  depthSections?: { title: string; body: string }[];
  valuePoints: string[];
  faqs: { q: string; a: string }[];
  getPrice: () => number;
  getCompare: () => number | null;
  monthlyApprox: () => string;
};

function onePlan(id: string) {
  return getPlans().one.find((p) => p.id === id)!;
}

function twoPlan(id: string) {
  return getPlans().two.find((p) => p.id === id)!;
}

/** Shared catalogue bullets — same verified list as Pricing / checkout. */
export const packIncludes = planFeatures;

/**
 * P1 pack → live SKU map (Phase 4 locked).
 * Prices always read from plan-pricing helpers (env-overridable).
 */
export const packs: Record<PackSlug, PackDefinition> = {
  trimestral: {
    slug: "trimestral",
    path: "/pack-trimestriel",
    planId: "3m",
    connections: 1,
    name: "Pack trimestriel",
    shortName: "Trimestriel",
    seoTitle: "Pack trimestriel IPTV — 3 mois France",
    seoDescription:
      "Pack trimestriel IPTV France : 3 mois, 1 connexion, paiement unique. Testez les chaînes françaises et le sport sans engagement annuel. Essai de 24 h et assistance en français.",
    h1: "Pack trimestriel IPTV — 3 mois · 1 connexion",
    eyebrow: "Pack trimestriel IPTV · engagement court",
    durationLabel: "3 mois",
    pricePeriodLabel: "/ 3 mois",
    intro:
      "Le pack trimestriel IPTV de MeilleurIPTVFrance est l’option d’engagement court : trois mois de service avec une connexion simultanée. Il sert à valider le réseau, le lecteur et le catalogue en France avant un forfait annuel — paiement unique, sans renouvellement automatique surprise.",
    forWhom:
      "Pour qui veut un seul écran principal (Smart TV ou Fire Stick au salon) et préfère payer un trimestre plutôt qu’une année entière. Si plus tard vous avez besoin du salon et de la chambre, comparez le pack premium (2 connexions) ou le tableau complet sur Tarifs.",
    depthSections: [
      {
        title: "Pourquoi choisir le pack trimestriel IPTV",
        body: "C’est le bon choix quand vous ne voulez pas encore vous engager sur un an : assez de temps pour les soirées de sport et la routine quotidienne, avec le même catalogue que les autres forfaits payants. Idéal après l’essai de 24 heures — ou à la place d’un forfait mensuel si vous savez déjà que vous utiliserez le service pendant la saison.",
      },
      {
        title: "Comment le commander et l’activer",
        body: "Comparez le tarif sur cette page, demandez l’essai de 24 h par WhatsApp si vous n’avez pas encore validé le réseau, ou passez au paiement. Après le paiement, vous recevez les identifiants Xtream et vous suivez le guide de votre appareil. Questions générales : questions fréquentes IPTV France ; renouvellement plus tard sur /renouveler ou avec un nouveau paiement.",
      },
    ],
    valuePoints: [
      "Durée : 3 mois — moins d’engagement que le forfait annuel",
      "Connexions : 1 flux simultané",
      "Même catalogue et mêmes fonctions du service (voir la liste plus bas)",
      "Paiement unique de la période — sans renouvellement automatique surprise",
      "Essai de 24 heures sur demande auprès de l’assistance, avant de payer",
      "Garantie de 7 jours conformément à la politique de remboursement",
    ],
    faqs: [
      {
        q: "Qu’est-ce que le pack trimestriel IPTV ?",
        a: "C’est le forfait MeilleurIPTVFrance de 3 mois avec 1 connexion : chaînes en direct, sport et VOD dans le même service que les autres packs, avec un paiement unique du trimestre.",
      },
      {
        q: "Que se passe-t-il à la fin des 3 mois ?",
        a: "L’accès s’arrête à la fin de la période payée. Vous pouvez renouveler ou choisir un autre forfait (par exemple le pack basique annuel) quand vous voulez — il n’y a pas de prélèvement automatique caché.",
      },
      {
        q: "Puis-je passer ensuite à un forfait annuel ?",
        a: "Oui. À la fin du trimestre, ou quand vous préférez, choisissez un forfait annuel sur Tarifs ou dans le pack basique / premium / famille et effectuez un nouveau paiement avec le forfait adapté.",
      },
      {
        q: "1 connexion suffit-elle à la maison ?",
        a: "Si vous ne lisez que sur un écran à la fois, oui. Si le salon et la chambre regardent le football ou le sport en même temps, il vous faut 2 ou 3 connexions — voyez le pack premium ou famille.",
      },
      {
        q: "Le contenu est-il différent de celui du pack annuel ?",
        a: "Non. La différence de ce pack, c’est la durée et le nombre de connexions (ici : 3 mois · 1 connexion). Les fonctions du service sont celles de la liste d’inclusions, commune aux forfaits payants.",
      },
      {
        q: "Puis-je demander un essai avant le pack trimestriel ?",
        a: "Oui. Demandez l’essai de 24 heures à l’assistance (WhatsApp). Le détail est dans l’article essai IPTV France — ce n’est pas de l’IPTV gratuit illimité.",
      },
    ],
    getPrice: () => onePlan("3m").price,
    getCompare: () => onePlan("3m").compare,
    monthlyApprox: () => {
      const p = onePlan("3m").price;
      return (p / 3).toFixed(2).replace(".", ",");
    },
  },
  basico: {
    slug: "basico",
    path: "/pack-basique",
    planId: "1y",
    connections: 1,
    name: "Pack basique",
    shortName: "Basique",
    seoTitle: "Pack basique IPTV — 1 an · 1 connexion",
    seoDescription:
      "Pack basique MeilleurIPTVFrance : 1 an, 1 connexion, le meilleur rapport annuel pour un seul écran. Paiement unique, activation et assistance en français.",
    h1: "Pack basique — 1 an · 1 connexion",
    eyebrow: "Annuel · 1 écran · meilleur €/mois individuel",
    durationLabel: "1 an",
    pricePeriodLabel: "/ an",
    intro:
      "Le pack basique est le forfait annuel d’entrée pour qui regarde un seul écran à la fois. Vous payez l’année d’avance et vous bénéficiez du meilleur coût mensuel équivalent parmi les options à 1 connexion — sans inventer de « qualités » fictives : le catalogue et les fonctions sont ceux du service MeilleurIPTVFrance.",
    forWhom:
      "Idéal pour une personne ou un foyer qui n’utilise que la Smart TV du salon (ou le Fire Stick) à la fois. S’il vous faut deux flux simultanés, le pack premium (2 connexions) convient mieux.",
    valuePoints: [
      "Durée : 12 mois",
      "Connexions : 1 flux simultané",
      "Meilleur rapport annuel pour un usage individuel (1 écran)",
      "Même ensemble de fonctions du service (liste plus bas)",
      "Paiement unique — renouvelez quand vous voulez sur /renouveler",
      "Essai de 24 h sur demande · garantie de 7 jours",
    ],
    faqs: [
      {
        q: "1 connexion suffit-elle si j’utilise aussi le mobile ?",
        a: "Vous pouvez l’installer sur le mobile, mais un second écran qui lit en même temps compte comme une deuxième connexion. Avec le pack basique, un seul flux en direct ou VOD à la fois.",
      },
      {
        q: "Est-ce mieux que le pack trimestriel ?",
        a: "Si vous savez déjà que vous utiliserez le service toute l’année sur un seul écran, le pack basique est en général plus intéressant au coût par mois. Si vous testez encore vos habitudes et votre réseau, le trimestriel réduit l’engagement.",
      },
      {
        q: "Comment renouveler à la fin de l’année ?",
        a: "Utilisez la page Renouveler ou rachetez le forfait adapté. Il n’y a pas de renouvellement automatique surprise à la fin de la période payée.",
      },
      {
        q: "Le pack basique a-t-il moins de chaînes que le premium ?",
        a: "Non. Dans nos forfaits, la vraie différence est durée × connexions × tarif — pas un catalogue « premium » à part, inventé.",
      },
    ],
    getPrice: () => onePlan("1y").price,
    getCompare: () => onePlan("1y").compare,
    monthlyApprox: () => {
      const p = onePlan("1y").price;
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
  premium: {
    slug: "premium",
    path: "/pack-premium",
    planId: "1y2",
    connections: 2,
    name: "Pack premium",
    shortName: "Premium",
    seoTitle: "Pack premium IPTV — 1 an · 2 connexions",
    seoDescription:
      "Pack premium IPTV France : 1 an avec 2 connexions simultanées. Salon + chambre ou TV + tablette, paiement unique, essai de 24 h et assistance en français.",
    h1: "Pack premium IPTV — 1 an · 2 connexions",
    eyebrow: "Pack premium IPTV · 2 écrans simultanés",
    durationLabel: "1 an",
    pricePeriodLabel: "/ an",
    intro:
      "Le pack premium IPTV de MeilleurIPTVFrance couvre les foyers avec deux habitudes de visionnage en même temps — salon et chambre, ou TV et tablette. Ce sont deux connexions simultanées pendant un an, avec le même catalogue que les autres forfaits. La qualité jusqu’en 4K dépend du contenu et de votre réseau ; nous ne vendons pas un « niveau 4K seul » à part.",
    forWhom:
      "Pour les couples ou deux écrans habituels qui ne veulent pas qu’un flux « coupe » l’autre. S’il vous faut trois flux (plusieurs pièces), voyez le pack famille. Si vous n’utilisez qu’un écran, le pack basique suffit et coûte moins.",
    depthSections: [
      {
        title: "Pourquoi le pack premium IPTV (et pas seulement « plus cher »)",
        body: "Le mot premium signifie ici deux connexions — pas un catalogue secret. En France, la frustration typique, c’est que le match du salon se coupe quand quelqu’un ouvre la tablette. Ce pack couvre ce pic d’usage pendant 12 mois, avec un paiement unique et une assistance en français.",
      },
      {
        title: "Comment commander le pack premium",
        body: "Confirmez le tarif sur cette page, demandez l’essai de 24 heures si vous n’avez pas encore validé votre foyer, ou passez au paiement. Après l’activation, utilisez les guides d’installation. Comparez les alternatives sur Tarifs ou dans le pack famille (3 connexions).",
      },
    ],
    valuePoints: [
      "Durée : 12 mois",
      "Connexions : 2 flux simultanés",
      "Usage typique : salon + chambre / TV + tablette",
      "Mêmes fonctions du service que les autres packs payants",
      "Paiement unique de l’année",
      "Essai de 24 h sur demande · garantie de 7 jours",
    ],
    faqs: [
      {
        q: "Qu’est-ce que le pack premium IPTV ?",
        a: "C’est le forfait annuel MeilleurIPTVFrance avec 2 connexions simultanées : idéal pour deux écrans actifs en même temps, avec le même service (chaînes, sport, VOD) que les autres packs.",
      },
      {
        q: "Qu’est-ce qui compte comme une connexion ?",
        a: "Chaque lecture active (chaîne en direct ou VOD) sur un appareil compte dans la limite. Deux écrans qui regardent en même temps = deux connexions.",
      },
      {
        q: "Cela convient-il à deux logements distincts ?",
        a: "La limite porte sur les flux simultanés, pas sur les « domiciles ». En pratique, si deux endroits lisent en même temps, les deux consomment des connexions. Pour trois flux, utilisez le pack famille.",
      },
      {
        q: "Le premium a-t-il un 4K exclusif ?",
        a: "Non. Les forfaits incluent une qualité jusqu’en 4K quand le contenu et votre Internet le permettent. La différence de ce pack, c’est d’avoir 2 connexions — pas un catalogue 4K privé.",
      },
      {
        q: "Puis-je commencer par le basique et changer ensuite ?",
        a: "Vous pouvez choisir un autre forfait au paiement quand il vous faut plus de connexions. Comparez aussi le tableau complet sur Tarifs (mensuel, 6 mois, etc.).",
      },
      {
        q: "Puis-je essayer avant d’acheter le pack premium ?",
        a: "Oui — essai de 24 heures sur demande auprès de l’assistance. Le guide complet est dans l’article essai IPTV France.",
      },
    ],
    getPrice: () => twoPlan("1y2").price,
    getCompare: () => twoPlan("1y2").compare,
    monthlyApprox: () => {
      const p = twoPlan("1y2").price;
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
  familia: {
    slug: "familia",
    path: "/pack-famille",
    planId: "3conn",
    connections: 3,
    name: "Pack famille",
    shortName: "Famille",
    seoTitle: "Pack famille IPTV — 1 an · 3 connexions",
    seoDescription:
      "Pack famille MeilleurIPTVFrance : 1 an avec 3 connexions simultanées pour plusieurs pièces. Paiement unique, activation et assistance en français.",
    h1: "Pack famille — 1 an · 3 connexions",
    eyebrow: "Annuel · foyer avec plusieurs écrans",
    durationLabel: "1 an",
    pricePeriodLabel: "/ an",
    intro:
      "Le pack famille est le forfait annuel avec trois connexions simultanées — pensé pour les foyers avec plusieurs TV ou appareils actifs en même temps. Nous ne promettons pas « quatre appareils » ni des extras inventés : ce sont trois flux, avec le même service et les mêmes inclusions vérifiées que les autres forfaits.",
    forWhom:
      "Pour les familles ou les colocations où trois écrans peuvent regarder en même temps (pièces distinctes, adolescents avec une tablette, etc.). S’il ne vous en faut que deux, le pack premium suffit ; s’il n’en faut qu’un, le pack basique.",
    valuePoints: [
      "Durée : 12 mois",
      "Connexions : 3 flux simultanés",
      "Usage typique : plusieurs pièces / foyers plus grands",
      "Mêmes fonctions du service (liste plus bas)",
      "Paiement unique de l’année",
      "Essai de 24 h sur demande · garantie de 7 jours",
    ],
    faqs: [
      {
        q: "Est-ce 3 ou 4 appareils ?",
        a: "Dans ce service, le pack famille correspond à 3 connexions simultanées — la valeur et le forfait du paiement (3conn). Nous n’annonçons pas un quatrième flux que le forfait n’inclut pas.",
      },
      {
        q: "Les enfants avec une tablette comptent-ils ?",
        a: "Oui, s’ils lisent du contenu en même temps que d’autres écrans. Chaque flux actif consomme une connexion, quel que soit l’âge de la personne.",
      },
      {
        q: "Puis-je l’utiliser dans des lieux différents ?",
        a: "La limite pratique est le nombre de lectures simultanées. Trois flux actifs — même dans des endroits différents — saturent le forfait famille.",
      },
      {
        q: "Où le comparer aux autres packs ?",
        a: "Sur cette même page, dans les packs voisins, ou dans le tableau complet des tarifs si vous voulez des durées mensuelles ou de 6 mois.",
      },
    ],
    getPrice: () => getFamilyPlanPrice(),
    getCompare: () => getFamilyPlanCompare(),
    monthlyApprox: () => {
      const p = getFamilyPlanPrice();
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
};

export const packList: PackDefinition[] = [
  packs.trimestral,
  packs.basico,
  packs.premium,
  packs.familia,
];

export function getPack(slug: PackSlug): PackDefinition {
  return packs[slug];
}

export function checkoutHrefForPack(pack: PackDefinition): string {
  return `/checkout?plan=${encodeURIComponent(pack.planId)}&connections=${pack.connections}`;
}

export function siblingPacks(slug: PackSlug): PackDefinition[] {
  return packList.filter((p) => p.slug !== slug);
}

/** Plan ids that have dedicated pack product pages (avoid duplicate Product on /tarifs). */
export const PACK_OWNED_PLAN_IDS = new Set(["3m", "1y", "1y2", "3conn"]);
