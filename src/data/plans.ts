import { getPriceForPlan } from "@/lib/plan-pricing";

export type ResolvedPlan = {
  id: string;
  label: string;
  productName: string;
  price: number;
  connections: number;
};

export function resolvePlan(planId?: string | null, connectionsParam?: string | null): ResolvedPlan {
  const connections = Number(connectionsParam) === 2 ? 2 : Number(connectionsParam) === 3 ? 3 : 1;

  if (planId === "3conn" || connections === 3) {
    return {
      id: "3conn",
      label: "1 an",
      productName: "Forfait MeilleurIPTVFrance 1 an · 3 connexions",
      price: getPriceForPlan("3conn", 3),
      connections: 3,
    };
  }

  const map: Record<string, string> = {
    "1m": "1 mois",
    "1m2": "1 mois",
    "3m": "3 mois",
    "3m2": "3 mois",
    "6m": "6 mois",
    "6m2": "6 mois",
    "1y": "1 an",
    "1y2": "1 an",
    "2y": "2 ans",
    "2y2": "2 ans",
  };

  const id = planId || "1y";
  const label = map[id] || map["1y"];
  const conn = (connections === 2 ? 2 : 1) as 1 | 2;

  return {
    id,
    label,
    productName: `Forfait MeilleurIPTVFrance ${label}`,
    price: getPriceForPlan(id, conn),
    connections: conn,
  };
}

export function formatMoney(amount: number) {
  return `€${Math.round(amount)}`;
}

/** Full inclusions for checkout summary (same product promise as pricing cards). */
export const checkoutBenefits = [
  "Chaînes en direct (+45 000)",
  "Films et séries (VOD) (+200 000 films · +40 000 séries)",
  "Tous les événements PPV et le sport premium",
  "Qualité 4K / FHD / HD",
  "Guide TV (EPG) et replay des programmes",
  "Smart TV, application et box",
  "Technologie anti-gel",
  "Disponibilité 99,9 % (engagement de service)",
  "Xtream Codes / M3U / MAG",
  "Activation après confirmation du paiement",
  "Assistance 24h/24",
  "VPN intégrée et protection de la vie privée",
  "Chaînes adultes (en option)",
  "Garantie de 7 jours",
];
