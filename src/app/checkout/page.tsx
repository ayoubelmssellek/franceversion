"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useMemo, useState } from "react";
import { Check, Lock, ShieldCheck } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { checkoutBenefits, formatMoney, resolvePlan } from "@/data/plans";

function CheckoutForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const orderId = String(4000 + Math.floor(Math.random() * 5000));
    const payload = {
      orderId,
      plan: plan.id,
      connections: plan.connections,
      email: String(form.get("email") || ""),
      name: String(form.get("firstName") || ""),
      whatsapp: String(form.get("whatsapp") || ""),
      country: String(form.get("country") || ""),
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; orderId?: string; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Impossible de finaliser la commande.");
      }

      const q = new URLSearchParams({
        order: data.orderId || orderId,
        plan: plan.id,
        connections: String(plan.connections),
        email: payload.email,
        name: payload.name,
        whatsapp: payload.whatsapp,
        country: payload.country,
      });
      router.push(`/merci?${q.toString()}`);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Un problème est survenu. Réessayez.",
      );
      setSubmitting(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-[4px] border border-line bg-transparent px-3 py-2.5 text-[15px] text-white outline-none focus:border-white/50";

  const connectionLabel =
    plan.connections === 1 ? "1 connexion" : `${plan.connections} connexions`;

  const payButton = (formAttr?: boolean) => (
    <button
      type="submit"
      form={formAttr ? "checkout-form" : undefined}
      disabled={submitting}
      className="btn btn-solid w-full py-3.5 text-[15px] disabled:opacity-60"
    >
      <Lock size={14} />
      {submitting ? "Traitement…" : `Payer ${formatMoney(plan.price)}`}
    </button>
  );

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={1} />

      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-10">
        {/* Left — inputs */}
        <form id="checkout-form" onSubmit={onSubmit} className="min-w-0 space-y-4">
          <div>
            <h1 className="text-[26px] tracking-[-0.6px] text-white md:text-[30px]">Finaliser la commande</h1>
            <p className="mt-1 text-[13px] text-muted">Renseignez vos coordonnées pour continuer le paiement.</p>
          </div>

          <label className="block text-[13px] text-slate">
            Email <span className="text-white">*</span>
            <input
              required
              type="email"
              name="email"
              className={field}
              placeholder="vous@email.com"
              autoComplete="email"
            />
          </label>

          <label className="block text-[13px] text-slate">
            Nom <span className="text-white">*</span>
            <input required name="firstName" className={field} autoComplete="given-name" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-[13px] text-slate">
              Pays <span className="text-white">*</span>
              <select required name="country" defaultValue="France" className={`${field} bg-black`}>
                {["France", "Belgique", "Suisse", "Maroc", "Allemagne", "Autre"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-[13px] text-slate">
              WhatsApp <span className="text-mid">(facultatif)</span>
              <input name="whatsapp" className={field} placeholder="+33…" autoComplete="tel" />
            </label>
          </div>

          {error ? (
            <p className="rounded-[6px] border border-red-500/40 bg-red-500/10 px-3 py-2 text-[13px] text-red-200">
              {error}
            </p>
          ) : null}

          {/* Pay on mobile under the form */}
          <div className="space-y-2 pt-1 lg:hidden">
            {payButton()}
            <p className="flex items-center justify-center gap-1.5 text-[12px] text-muted">
              <ShieldCheck size={13} className="text-white/70" />
              Paiement sécurisé · garantie de 7 jours
            </p>
          </div>

          <p className="text-[12px] text-muted lg:pt-1">
            <Link href="/tarifs" className="underline-offset-2 hover:text-white hover:underline">
              Retour aux tarifs
            </Link>
          </p>
        </form>

        {/* Right — order + what you get (sticky) */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-[10px] border border-line bg-surface p-5">
            <h2 className="text-[15px] font-semibold text-white">Récapitulatif de la commande</h2>

            <div className="mt-4 flex items-start justify-between gap-3 border-b border-line pb-4">
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-white">{plan.productName}</p>
                <p className="mt-0.5 text-[12px] text-muted">{connectionLabel}</p>
              </div>
              <p className="shrink-0 text-[16px] font-semibold text-white">{formatMoney(plan.price)}</p>
            </div>

            <div className="mt-4 flex items-center justify-between text-[15px]">
              <span className="text-slate">Total</span>
              <span className="text-[20px] font-semibold text-white">{formatMoney(plan.price)}</span>
            </div>

            <div className="mt-5 hidden space-y-2 lg:block">
              {payButton(true)}
              <p className="flex items-center justify-center gap-1.5 text-[12px] text-muted">
                <ShieldCheck size={13} className="text-white/70" />
                Paiement sécurisé · garantie de 7 jours
              </p>
            </div>

            <h3 className="mt-5 text-[13px] font-semibold uppercase tracking-[0.06em] text-muted">
              Ce que vous recevez
            </h3>
            <ul className="mt-3 space-y-2">
              {checkoutBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.4] text-slate">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pt-green-bright" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-slate">
          Chargement du paiement…
        </div>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
}
