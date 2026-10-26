"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { site } from "@/data/content";
import { formatMoney, resolvePlan } from "@/data/plans";
import { getWhatsAppIntl } from "@/lib/whatsapp";

function ThankYouContent() {
  const params = useSearchParams();
  const order = params.get("order") || "4453";
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const customerWhatsapp = params.get("whatsapp") || "";
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );

  const connectionLabel =
    plan.connections === 1 ? "1 connexion" : `${plan.connections} connexions`;

  const whatsappMessage = [
    `Bonjour MeilleurIPTVFrance 👋`,
    ``,
    `Je viens de passer une commande sur le site.`,
    `• Commande : #${order}`,
    `• Forfait : ${plan.productName}`,
    `• Connexions : ${plan.connections}`,
    `• Prix : ${formatMoney(plan.price)}`,
    name ? `• Nom : ${name}` : null,
    email ? `• E-mail : ${email}` : null,
    customerWhatsapp ? `• WhatsApp : ${customerWhatsapp}` : null,
    ``,
    `Merci de m'envoyer le lien de paiement et les détails d'activation.`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={2} />

      <div className="mx-auto w-full max-w-lg px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="text-[26px] tracking-[-0.6px] text-white md:text-[30px]">
          Commande #{order} reçue
        </h1>
        <p className="mt-2 text-[14px] leading-[1.45] text-slate">
          Ouvrez WhatsApp pour recevoir le lien de paiement et activer le service — nous sommes en ligne 24h/24.
        </p>

        <div className="mt-5 rounded-[8px] border border-line bg-surface px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-white">{plan.productName}</p>
              <p className="mt-0.5 text-[12px] text-muted">{connectionLabel}</p>
            </div>
            <p className="shrink-0 text-[18px] font-semibold text-white">{formatMoney(plan.price)}</p>
          </div>
          {email ? (
            <p className="mt-2 truncate text-[12px] text-muted">
              E-mail de la commande : <span className="text-slate">{email}</span>
            </p>
          ) : null}
        </div>

        <Link
          href={`https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center rounded-[4px] bg-[#25D366] py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#20BD5A]"
        >
          Payer par WhatsApp
        </Link>

        <div className="mt-4 rounded-[8px] border border-line px-4 py-3 text-[13px] leading-[1.5] text-slate">
          <p className="font-medium text-white">Vous n&apos;avez pas WhatsApp ?</p>
          <p className="mt-1">
            Pas de problème — nous vous contactons par e-mail
            {email ? (
              <>
                {" "}
                à <span className="text-white">{email}</span>
              </>
            ) : (
              " à l'adresse indiquée lors du paiement"
            )}
            , avec le lien de paiement et l&apos;activation. Vous pouvez aussi écrire à{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-2 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-center text-[12px] text-muted">
          <Link href="/" className="underline-offset-2 hover:text-white hover:underline">
            Retour à l&apos;accueil
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-slate">Chargement…</div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
