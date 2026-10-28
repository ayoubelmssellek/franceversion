"use client";

import Link from "next/link";
import { useState } from "react";
import { planFeatures, plans } from "@/data/content";
import { getFamilyPlanCompare, getFamilyPlanPrice } from "@/lib/plan-pricing";

export type PricingPlan = (typeof plans.one)[number] | (typeof plans.two)[number];

function checkoutHref(planId: string, connections: number) {
  return `/checkout?plan=${encodeURIComponent(planId)}&connections=${connections}`;
}

type PricingProps = {
  /** Override feature bullets (e.g. `/tarifs` verified list). Defaults keep other surfaces unchanged. */
  features?: string[];
};

export default function Pricing({ features = planFeatures }: PricingProps) {
  const [connections, setConnections] = useState<1 | 2>(1);
  const list = connections === 1 ? plans.one : plans.two;
  const familyPrice = getFamilyPlanPrice();
  const familyCompare = getFamilyPlanCompare();

  return (
    <div id="forfaits">
      <div className="mb-12 max-w-2xl">
        <p className="label">IPTV : paiement unique</p>
        <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          Choisissez votre forfait IPTV France
        </h2>
        <p className="mt-4 text-[16px] leading-[1.4] text-slate">
          Comparez les tarifs et les connexions, puis achetez l&apos;IPTV en ligne avec des chaînes françaises, la Ligue 1, Canal+ et le streaming 4K. Chaque forfait inclut la
          bibliothèque complète pour le nombre de connexions : idéal pour l&apos;IPTV en France.
        </p>
        <div className="mt-6 inline-flex border border-line">
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setConnections(n)}
              className={`px-5 py-2.5 text-[14px] font-semibold tracking-[-0.16px] transition ${
                connections === n ? "bg-white text-black" : "bg-transparent text-slate hover:text-white"
              }`}
            >
              {n} {n > 1 ? "connexions" : "connexion"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {list.map((plan) => (
          <PlanCard key={plan.id} plan={plan} connections={connections} features={features} />
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-between gap-6 border border-line bg-surface p-6 md:flex-row md:items-start md:p-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-[24px] tracking-normal text-white">IPTV Premium pour la France : 3 connexions</h3>
          <p className="mt-2 max-w-xl text-[14px] text-slate">
            Trois flux en même temps pour la famille ou les amis. Le meilleur rapport annuel pour acheter l&apos;IPTV avec plus
            de connexions.
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-[28px] tracking-[-0.6px] text-white">€{familyPrice}</span>
            <span className="text-[14px] text-muted line-through">€{familyCompare}</span>
            <span className="text-[12px] text-muted">/ an</span>
          </div>
          <p className="mt-1 text-[12px] text-muted">Tarif IPTV · paiement unique</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="text-[13px] leading-[1.35] text-slate">
                <span className="mr-2 text-white">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={checkoutHref("3conn", 3)}
          className="btn btn-solid shrink-0 self-start md:self-center"
          aria-label="Choisir le forfait IPTV familial à 3 connexions"
        >
          Acheter maintenant
        </Link>
      </div>
    </div>
  );
}

/** Same pricing card used on `/tarifs` — optional primary price symbol for USD payment routes. */
export function PlanCard({
  plan,
  connections,
  features,
  priceSymbol = "€",
  showCompare = true,
}: {
  plan: PricingPlan;
  connections: number;
  features: string[];
  /** Primary price symbol only. Defaults to €; USD routes pass `$`. */
  priceSymbol?: "€" | "$";
  /** Crossed-out offer price. Defaults on for EUR pages; USD routes pass `false`. */
  showCompare?: boolean;
}) {
  const featured = Boolean(plan.highlight || plan.popular);
  const badgeLabel = "badge" in plan && plan.badge ? plan.badge : plan.popular ? "Le plus vendu" : null;

  return (
    <article
      className={`relative flex flex-col border p-6 pt-8 ${
        featured ? "border-pt-red/50 bg-surface shadow-[0_0_0_1px_rgba(239,65,53,0.25)]" : "border-line bg-black"
      }`}
    >
      {badgeLabel ? (
        <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-sm bg-pt-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white shadow-[0_4px_14px_rgba(239,65,53,0.35)]">
          {badgeLabel}
        </span>
      ) : (
        <span className="mb-3 block h-[22px]" aria-hidden="true" />
      )}

      <h3 className="text-[24px] text-white">{plan.label}</h3>
      <p className="mt-1 text-[13px] text-mid">
        Pour {connections} {connections > 1 ? "connexions" : "connexion"}
      </p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-[40px] tracking-[-1px] text-white">
          {priceSymbol}
          {plan.price}
        </span>
        {showCompare ? (
          <span className="text-[14px] text-muted line-through">€{plan.compare}</span>
        ) : null}
      </div>
      <p className="mt-1 text-[12px] text-muted">Tarif IPTV · paiement unique</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="text-[13px] leading-[1.35] text-slate">
            <span className="mr-2 text-white">—</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={checkoutHref(plan.id, connections)}
        aria-label={`Acheter IPTV ${plan.label}`}
        className={`btn mt-8 w-full ${featured ? "btn-solid" : "btn-ghost"}`}
      >
        Acheter maintenant
      </Link>
    </article>
  );
}
