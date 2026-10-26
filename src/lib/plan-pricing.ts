/**
 * Subscription prices in EUR (whole euros).
 *
 * SINGLE SOURCE OF TRUTH for every customer-facing price: pricing grids,
 * pack pages, footer, checkout totals and Product/Offer JSON-LD all derive
 * from the tables below.
 *
 * Prices are hard-coded ON PURPOSE. Environment variables must NOT override
 * pricing: server-rendered HTML and the client bundle must always show the
 * exact same values. To change a price, edit this file and redeploy.
 */

export type PlanConfig = {
  id: string;
  label: string;
  price: number;
  compare: number;
  popular?: boolean;
  highlight?: boolean;
  badge?: string;
};

type PriceEntry = { price: number; compare: number };
type Duration = "1M" | "3M" | "6M" | "1Y";

const ONE_CONNECTION: Record<Duration, PriceEntry> = {
  "1M": { price: 11, compare: 19 },
  "3M": { price: 25, compare: 39 },
  "6M": { price: 32, compare: 49 },
  "1Y": { price: 45, compare: 79 },
};

const TWO_CONNECTIONS: Record<Duration, PriceEntry> = {
  "1M": { price: 19, compare: 29 },
  "3M": { price: 39, compare: 55 },
  "6M": { price: 59, compare: 79 },
  "1Y": { price: 89, compare: 119 },
};

const THREE_CONNECTIONS_1Y: PriceEntry = { price: 104, compare: 157 };

/** Legacy 2-year plan ids may still reach checkout resolution. */
const LEGACY_2Y = { one: 104, two: 148 };

/** Builds 1-connection and 2-connection plan lists. */
export function getPlans(): { one: PlanConfig[]; two: PlanConfig[] } {
  return {
    one: [
      {
        id: "1m",
        label: "1 mois",
        price: ONE_CONNECTION["1M"].price,
        compare: ONE_CONNECTION["1M"].compare,
      },
      {
        id: "3m",
        label: "3 mois",
        price: ONE_CONNECTION["3M"].price,
        compare: ONE_CONNECTION["3M"].compare,
      },
      {
        id: "6m",
        label: "6 mois",
        price: ONE_CONNECTION["6M"].price,
        compare: ONE_CONNECTION["6M"].compare,
      },
      {
        id: "1y",
        label: "1 an",
        badge: "Le plus vendu",
        price: ONE_CONNECTION["1Y"].price,
        compare: ONE_CONNECTION["1Y"].compare,
        popular: true,
        highlight: true,
      },
    ],
    two: [
      {
        id: "1m2",
        label: "1 mois",
        price: TWO_CONNECTIONS["1M"].price,
        compare: TWO_CONNECTIONS["1M"].compare,
      },
      {
        id: "3m2",
        label: "3 mois",
        price: TWO_CONNECTIONS["3M"].price,
        compare: TWO_CONNECTIONS["3M"].compare,
      },
      {
        id: "6m2",
        label: "6 mois",
        price: TWO_CONNECTIONS["6M"].price,
        compare: TWO_CONNECTIONS["6M"].compare,
      },
      {
        id: "1y2",
        label: "1 an",
        badge: "Le plus vendu",
        price: TWO_CONNECTIONS["1Y"].price,
        compare: TWO_CONNECTIONS["1Y"].compare,
        popular: true,
        highlight: true,
      },
    ],
  };
}

export function getFamilyPlanPrice(): number {
  return THREE_CONNECTIONS_1Y.price;
}

export function getFamilyPlanCompare(): number {
  return THREE_CONNECTIONS_1Y.compare;
}

/** Price lookup for checkout / thank-you (`resolvePlan`). */
export function getPriceForPlan(planKey: string, connections: 1 | 2 | 3): number {
  if (connections === 3 || planKey === "3conn") {
    return getFamilyPlanPrice();
  }

  const duration = normalizeDuration(planKey);
  if (duration === "2Y") {
    return connections === 2 ? LEGACY_2Y.two : LEGACY_2Y.one;
  }

  const table = connections === 2 ? TWO_CONNECTIONS : ONE_CONNECTION;
  const entry = table[duration as Duration] ?? table["1Y"];
  return entry.price;
}

function normalizeDuration(planId: string): string {
  const id = planId.replace(/2$/, "");
  if (id === "1m" || id === "1m2") return "1M";
  if (id === "3m" || id === "3m2") return "3M";
  if (id === "6m" || id === "6m2") return "6M";
  if (id === "1y" || id === "1y2") return "1Y";
  if (id === "2y" || id === "2y2") return "2Y";
  return "1Y";
}
