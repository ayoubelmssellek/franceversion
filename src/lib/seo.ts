import type { Metadata } from "next";
import { getFamilyPlanPrice, getPlans } from "@/lib/plan-pricing";
import { PACK_OWNED_PLAN_IDS } from "@/data/packs";
import { getReviewStats, reviews } from "@/data/reviews";

export const siteConfig = {
  name: "MeilleurIPTVFrance",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.meilleuresiptvfrance.shop").replace(/\/$/, ""),
  locale: "fr_FR",
  language: "fr-FR",
  country: "France",
  defaultTitle: "IPTV France — MeilleurIPTVFrance | chaînes FR, sport et VOD",
  defaultDescription:
    "IPTV France avec MeilleurIPTVFrance : chaînes FR, Ligue 1, VOD et forfaits de 1 à 3 connexions. Essai 24 h, installation guidée et support en français.",
  /** Absolute URL for default social / Open Graph image (1200×630-class). */
  ogImage: "/meilleuriptvfrance-image-open-graph.jpg",
};

function absoluteOgImage(): string {
  return new URL(siteConfig.ogImage, siteConfig.url).toString();
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
};

/** Unique absolute title + per-URL canonical/OG. Avoids title-template doubling. */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
}: BuildMetadataInput): Metadata {
  const pageTitle = title.includes("MeilleurIPTVFrance") ? title : `${title} | MeilleurIPTVFrance`;
  const canonical =
    !path || path === "/"
      ? siteConfig.url
      : `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImageUrl = image
    ? image.startsWith("http")
      ? image
      : new URL(image, siteConfig.url).toString()
    : absoluteOgImage();

  return {
    title: { absolute: pageTitle },
    description,
    alternates: {
      canonical,
      languages: { "fr-FR": canonical },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — IPTV France`,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const logo = absoluteOgImage();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo,
    image: logo,
    description: siteConfig.defaultDescription,
    email: "support@meilleuresiptvfrance.shop",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@meilleuresiptvfrance.shop",
      contactType: "customer support",
      availableLanguage: ["French"],
      areaServed: "FR",
    },
  };
}

/** WebSite without fake SearchAction (no on-site search UI). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.defaultDescription,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/**
 * Aggregate offer prices derived from live plan env/defaults — never hardcode fake floors.
 * Do NOT nest review / aggregateRating here: Google Review snippets do not support Service
 * (only Product, SoftwareApplication, etc.) — that triggered GSC "Invalid object type".
 */
export function serviceJsonLd() {
  const { one, two } = getPlans();
  const allPrices = [...one, ...two, { price: getFamilyPlanPrice() }].map((p) => p.price);
  const lowPrice = Math.min(...allPrices);
  const highPrice = Math.max(...allPrices);
  const offerCount = one.length + two.length + 1;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Service IPTV France — MeilleurIPTVFrance",
    serviceType: "Abonnement IPTV France",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    description:
      "Service IPTV en France avec chaînes en direct, sport, VOD et qualité jusqu'en 4K. Essai gratuit de 24 heures sur demande. Forfaits mensuels et annuels avec activation après confirmation du paiement.",
    url: `${siteConfig.url}/tarifs`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: String(Math.round(lowPrice)),
      highPrice: String(Math.round(highPrice)),
      offerCount,
      url: `${siteConfig.url}/tarifs`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

/** Plain text for FAQ schema (strip [label](url) markdown used in UI). */
function faqAnswerPlain(text: string) {
  return text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)]+)\)/g, "$1");
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerPlain(faq.a),
      },
    })),
  };
}

type OfferPlan = {
  id: string;
  label: string;
  price: number;
};

/** Visible + schema fact: 24h free trial on request (not a €0 purchasable SKU). */
function freeTrialPropertyJsonLd() {
  return {
    "@type": "PropertyValue",
    name: "Essai gratuit",
    value: "24 heures sur demande",
  };
}

/** Matches /politique-de-remboursement — garantie de satisfaction de 7 jours. */
function merchantReturnPolicyJsonLd() {
  return {
    "@type": "MerchantReturnPolicy",
    "@id": `${siteConfig.url}/politique-de-remboursement#policy`,
    applicableCountry: "FR",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
    url: `${siteConfig.url}/politique-de-remboursement`,
  };
}

/**
 * Nest only under Product (Google-supported Review snippet types — not Service).
 * Use includeIndividualReviews only on pages that show the review text (e.g. /avis).
 */
function productReviewsJsonLd(options?: { includeIndividualReviews?: boolean }) {
  const stats = getReviewStats();
  if (stats.reviewCount === 0) return {};

  const fields: Record<string, unknown> = {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(stats.ratingValue),
      reviewCount: stats.reviewCount,
      bestRating: String(stats.bestRating),
      worstRating: String(stats.worstRating),
    },
  };

  if (options?.includeIndividualReviews) {
    fields.review = reviews.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.author,
      },
      datePublished: item.date,
      reviewBody: item.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(item.rating),
        bestRating: "5",
        worstRating: "1",
      },
    }));
  }

  return fields;
}

/** Full Product + reviews for /avis (reviews are visible on that page). */
export function reviewsProductJsonLd() {
  const image = absoluteOgImage();
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/avis#product`,
    name: "MeilleurIPTVFrance — service IPTV France",
    description:
      "Avis clients du service IPTV France MeilleurIPTVFrance : chaînes, sport, VOD et support.",
    image: [image],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    url: `${siteConfig.url}/avis`,
    ...productReviewsJsonLd({ includeIndividualReviews: true }),
  };
}

/**
 * Product + Offer for non-pack SKUs on /tarifs.
 * Pack-owned SKUs (3m, 1y, 1y2, 3conn) use dedicated Product on /pack-* pages instead.
 */
export function productOffersJsonLd(plans: OfferPlan[]) {
  const image = absoluteOgImage();
  const subscriptionsUrl = `${siteConfig.url}/tarifs`;
  const packOwned = PACK_OWNED_PLAN_IDS;
  const reviewFields = productReviewsJsonLd();

  return plans
    .filter((plan) => !packOwned.has(plan.id))
    .map((plan) => {
      const productId = `${subscriptionsUrl}#plan-${plan.id}`;
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": productId,
        name: `Plan MeilleurIPTVFrance ${plan.label}`,
        description: `Abonnement IPTV France (${plan.label}). Chaînes en direct, sport et streaming jusqu'en 4K selon le réseau. Essai gratuit de 24 heures sur demande. Livraison numérique (identifiants par e-mail).`,
        image: [image],
        sku: `meilleuriptvfrance-${plan.id}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        category: "Abonnement IPTV France",
        url: productId,
        additionalProperty: [freeTrialPropertyJsonLd()],
        ...reviewFields,
        offers: {
          "@type": "Offer",
          url: subscriptionsUrl,
          priceCurrency: "EUR",
          price: String(Math.round(plan.price)),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          areaServed: {
            "@type": "Country",
            name: "France",
          },
          hasMerchantReturnPolicy: merchantReturnPolicyJsonLd(),
          shippingDetails: {
            "@type": "OfferShippingDetails",
            doesNotShip: true,
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "FR",
            },
          },
        },
      };
    });
}

/**
 * Product + Offer on a pack landing — @id/url = pack canonical; Offer points to checkout.
 * Must match visible price and connections on the page.
 */
export function packProductJsonLd(input: {
  path: string;
  planId: string;
  name: string;
  description: string;
  price: number;
  connections: number;
  durationLabel: string;
}) {
  const pageUrl = `${siteConfig.url}${input.path.startsWith("/") ? input.path : `/${input.path}`}`;
  const checkoutUrl = `${siteConfig.url}/checkout?plan=${encodeURIComponent(input.planId)}&connections=${input.connections}`;
  const image = absoluteOgImage();
  const description =
    input.description.includes("essai") || input.description.includes("Essai")
      ? input.description
      : `${input.description} Essai gratuit de 24 heures sur demande.`;
  const reviewFields = productReviewsJsonLd();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: `${input.name} — MeilleurIPTVFrance`,
    description,
    image: [image],
    sku: `meilleuriptvfrance-${input.planId}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: "Abonnement IPTV France",
    url: pageUrl,
    ...reviewFields,
    offers: {
      "@type": "Offer",
      url: checkoutUrl,
      priceCurrency: "EUR",
      price: String(Math.round(input.price)),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      hasMerchantReturnPolicy: merchantReturnPolicyJsonLd(),
      shippingDetails: {
        "@type": "OfferShippingDetails",
        doesNotShip: true,
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "FR",
        },
      },
    },
    additionalProperty: [
      freeTrialPropertyJsonLd(),
      {
        "@type": "PropertyValue",
        name: "Connexions simultanées",
        value: String(input.connections),
      },
      {
        "@type": "PropertyValue",
        name: "Durée",
        value: input.durationLabel,
      },
    ],
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  const image = input.image
    ? input.image.startsWith("http")
      ? input.image
      : new URL(input.image, siteConfig.url).toString()
    : absoluteOgImage();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    inLanguage: siteConfig.language,
    mainEntityOfPage: url,
    image: [image],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteOgImage(),
      },
    },
  };
}

export function howToJsonLd(input: {
  name: string;
  description: string;
  path: string;
  steps: { title: string; body: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    inLanguage: siteConfig.language,
    url: new URL(input.path, siteConfig.url).toString(),
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

/** AboutPage — only when the URL is a real about/trust page with visible factual copy. */
export function aboutPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  const url = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#aboutpage`,
    url,
    name: input.name,
    description: input.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };
}

/**
 * ItemList for a visible on-page named list (e.g. featured channels).
 * Do not use for M3U dumps or implied downloadable playlists.
 */
export function itemListJsonLd(input: {
  name: string;
  description?: string;
  path: string;
  items: { name: string }[];
}) {
  const pageUrl = new URL(input.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    numberOfItems: input.items.length,
    url: pageUrl,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
    })),
  };
}
