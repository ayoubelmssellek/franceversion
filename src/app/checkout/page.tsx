"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useEffect, useMemo, useState } from "react";
import { Check, Lock, ShieldCheck } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { checkoutBenefits, formatMoney, resolvePlan } from "@/data/plans";
import { payHandoffUrl, successHandoffUrl } from "@/lib/pay-handoff";

type PayMode = "fixed" | "flex" | "open" | "manual";

function CheckoutForm() {
  const params = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<PayMode>("manual");
  const [customAmount, setCustomAmount] = useState("");
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );

  const needsAmountInput = mode === "flex" || mode === "open";

  useEffect(() => {
    setCustomAmount(String(plan.price));
    let cancelled = false;
    (async () => {
      try {
        const q = new URLSearchParams({
          plan: plan.id,
          connections: String(plan.connections),
        });
        const res = await fetch(`/api/paycontrol/mode?${q.toString()}`);
        const data = (await res.json()) as { mode?: PayMode };
        if (!cancelled && data.mode) setMode(data.mode);
      } catch {
        if (!cancelled) setMode("manual");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [plan.id, plan.connections, plan.price]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const orderId = `${Date.now()}-${Math.floor(Math.random() * 9000 + 1000)}`;
    const payload: Record<string, string | number> = {
      orderId,
      plan: plan.id,
      connections: plan.connections,
      email: String(form.get("email") || ""),
      name: String(form.get("firstName") || ""),
      whatsapp: String(form.get("whatsapp") || ""),
      country: String(form.get("country") || ""),
    };

    if (needsAmountInput) {
      payload.amount = String(form.get("amount") || customAmount || plan.price);
    }

    try {
      const res = await fetch("/api/paycontrol/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        orderId?: string;
        error?: string;
        paymentUrl?: string;
        redirectTo?: string;
        mode?: PayMode;
        openAmountHint?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Impossible de finaliser la commande.");
      }

      if (data.paymentUrl) {
        try {
          window.location.replace(
            payHandoffUrl(data.paymentUrl, {
              orderId: data.orderId || orderId,
              plan: plan.id,
              connections: plan.connections,
              email: String(payload.email),
              name: String(payload.name),
            }),
          );
          return;
        } catch {
          // continue to old thank-you below
        }
      }

      const q = new URLSearchParams({
        order: data.orderId || orderId,
        plan: plan.id,
        connections: String(plan.connections),
        email: String(payload.email),
        name: String(payload.name),
        whatsapp: String(payload.whatsapp),
        country: String(payload.country),
      });

      // Old method: order created → local /merci (WhatsApp), not the payment shell.
      if (data.mode === "manual" && data.redirectTo) {
        window.location.replace(data.redirectTo);
        return;
      }

      if (data.redirectTo) {
        const qs = data.redirectTo.includes("?")
          ? data.redirectTo.slice(data.redirectTo.indexOf("?") + 1)
          : q.toString();
        window.location.replace(successHandoffUrl(new URLSearchParams(qs)));
        return;
      }

      window.location.replace(`/merci?${q.toString()}`);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur s'est produite. Réessayez.",
      );
      setSubmitting(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-[4px] border border-line bg-transparent px-3 py-2.5 text-[15px] text-white outline-none focus:border-white/50";

  const connectionLabel =
    plan.connections === 1 ? "1 connexion" : `${plan.connections} connexions`;

  const payLabel = needsAmountInput
    ? submitting
      ? "Traitement…"
      : `Continuer pour payer ${formatMoney(Number(customAmount) || plan.price)}`
    : submitting
      ? "Traitement…"
      : `Payer ${formatMoney(plan.price)}`;

  const payButton = (formAttr?: boolean) => (
    <button
      type="submit"
      form={formAttr ? "checkout-form" : undefined}
      disabled={submitting}
      className="btn btn-solid w-full py-3.5 text-[15px] disabled:opacity-60"
    >
      <Lock size={14} />
      {payLabel}
    </button>
  );

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={1} />

      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-10">
        <form id="checkout-form" onSubmit={onSubmit} className="min-w-0 space-y-4">
          <div>
            <h1 className="text-[26px] tracking-[-0.6px] text-white md:text-[30px]">Finaliser la commande</h1>
            <p className="mt-1 text-[13px] text-muted">Remplissez vos informations pour continuer vers le paiement.</p>
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
                {["France", "Belgique", "Suisse", "Portugal", "Espagne", "Maroc", "Autre"].map((c) => (
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

          {needsAmountInput ? (
            <div className="rounded-[8px] border border-amber-500/35 bg-amber-500/10 px-4 py-3 text-[13px] leading-[1.5] text-amber-50">
              <p className="font-semibold text-white">Prix du forfait : {formatMoney(plan.price)}</p>
              <p className="mt-1.5 text-amber-100/90">
                Sur l'écran suivant, saisissez exactement ce montant.
              </p>
              <label className="mt-3 block text-[13px] text-amber-50">
                Montant (EUR) <span className="text-white">*</span>
                <input
                  required
                  type="number"
                  name="amount"
                  min={1}
                  max={5000}
                  step="0.01"
                  value={customAmount}
                  onChange={(ev) => setCustomAmount(ev.target.value)}
                  className={`${field} border-amber-500/40`}
                />
              </label>
            </div>
          ) : null}

          {error ? (
            <p className="rounded-[6px] border border-red-500/40 bg-red-500/10 px-3 py-2 text-[13px] text-red-200">
              {error}
            </p>
          ) : null}

          <div className="space-y-2 pt-1 lg:hidden">
            {payButton()}
            <p className="flex items-center justify-center gap-1.5 text-[12px] text-muted">
              <ShieldCheck size={13} className="text-white/70" />
              Paiement sécurisé · garantie 7 jours
            </p>
          </div>

          <p className="text-[12px] text-muted lg:pt-1">
            <Link href="/tarifs" className="underline-offset-2 hover:text-white hover:underline">
              Retour aux tarifs
            </Link>
          </p>
        </form>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-[10px] border border-line bg-surface p-5">
            <h2 className="text-[15px] font-semibold text-white">Récapitulatif</h2>

            <div className="mt-4 flex items-start justify-between gap-3 border-b border-line pb-4">
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-white">{plan.productName}</p>
                <p className="mt-0.5 text-[12px] text-muted">{connectionLabel}</p>
              </div>
              <p className="shrink-0 text-[16px] font-semibold text-white">
                {formatMoney(needsAmountInput ? Number(customAmount) || plan.price : plan.price)}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-[15px]">
              <span className="text-slate">Total</span>
              <span className="text-[20px] font-semibold text-white">
                {formatMoney(needsAmountInput ? Number(customAmount) || plan.price : plan.price)}
              </span>
            </div>

            <div className="mt-5 hidden space-y-2 lg:block">
              {payButton(true)}
              <p className="flex items-center justify-center gap-1.5 text-[12px] text-muted">
                <ShieldCheck size={13} className="text-white/70" />
                Paiement sécurisé · garantie 7 jours
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
