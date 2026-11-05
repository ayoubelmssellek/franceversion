import { NextResponse } from "next/server";
import { resolvePlan } from "@/data/plans";
import { shellSuccessReturnUrl } from "@/lib/pay-handoff";
import { isMailConfigured, sendOrderEmails } from "@/lib/mail";
import {
  createPaycontrolCheckout,
  getDedicatedLinkId,
  getFlexLinkId,
  getOpenShareUrl,
  isPaycontrolConfigured,
  resolvePlanPayMode,
  toPaycontrolBuyerId,
} from "@/lib/paycontrol";

type Body = {
  orderId?: string;
  plan?: string;
  connections?: string | number;
  email?: string;
  name?: string;
  whatsapp?: string;
  country?: string;
  /** Buyer-entered amount (EUR) for flex/open plans without a fixed link. */
  amount?: string | number;
};

function parseAmount(raw: unknown, fallback: number): number {
  if (raw == null || raw === "") return fallback;
  const n = typeof raw === "number" ? raw : Number(String(raw).replace(",", ".").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return Math.round(n * 100) / 100;
}

/** Old method: order created → local /merci (WhatsApp payment), not Stripe. */
function manualMerciResponse(input: {
  orderId: string;
  mailSent: boolean;
  planId: string;
  connections: number;
  email: string;
  name: string;
  whatsapp?: string;
  country?: string;
  reason?: string;
}) {
  const q = new URLSearchParams({
    order: input.orderId,
    plan: input.planId,
    connections: String(input.connections),
    email: input.email,
    name: input.name,
  });
  if (input.whatsapp) q.set("whatsapp", input.whatsapp);
  if (input.country) q.set("country", input.country);

  if (input.reason) {
    console.error("[paycontrol/checkout] fallback manual", input.reason);
  }

  return NextResponse.json({
    ok: true,
    orderId: input.orderId,
    mailSent: input.mailSent,
    mode: "manual",
    redirectTo: `/merci?${q.toString()}`,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const name = String(body.name || "").trim();

    if (!email || !email.includes("@") || !name) {
      return NextResponse.json({ ok: false, error: "Le nom et l'email sont obligatoires." }, { status: 400 });
    }

    const plan = resolvePlan(body.plan, body.connections == null ? null : String(body.connections));
    const orderId = String(body.orderId || `${Date.now()}-${Math.floor(Math.random() * 9000 + 1000)}`);
    const mode = resolvePlanPayMode(plan.id);

    const order = {
      orderId,
      planId: plan.id,
      planLabel: plan.label,
      productName: plan.productName,
      price: plan.price,
      connections: plan.connections,
      email,
      name,
      whatsapp: String(body.whatsapp || "").trim(),
      country: String(body.country || "").trim(),
    };

    // Do NOT email on Stripe open — only after PayControl webhook (paid),
    // or on manual/merci fallback (WhatsApp order flow).
    let mailSent = false;

    async function sendManualOrderMail() {
      if (!isMailConfigured()) return;
      try {
        const result = await sendOrderEmails(order);
        mailSent = result.sent;
      } catch (err) {
        console.error("[paycontrol/checkout] mail", err);
      }
    }

    const returnUrl = shellSuccessReturnUrl();

    const manual = async (reason?: string) => {
      await sendManualOrderMail();
      return manualMerciResponse({
        orderId,
        mailSent,
        planId: plan.id,
        connections: plan.connections,
        email,
        name,
        whatsapp: order.whatsapp,
        country: order.country,
        reason,
      });
    };

    if (!isPaycontrolConfigured() || mode === "manual") {
      return await manual();
    }

    // Fixed product link for this plan.
    const dedicatedId = getDedicatedLinkId(plan.id);
    if (dedicatedId) {
      try {
        const created = await createPaycontrolCheckout({
          linkId: dedicatedId,
          buyerId: toPaycontrolBuyerId(email, orderId),
          orderId,
          amountEuros: plan.price,
          email,
          name,
          returnUrl,
        });

        if (!created.ok || !created.data.url) {
          return await manual(
            created.ok === false
              ? created.body.reason || "fixed checkout failed"
              : "fixed checkout missing url",
          );
        }

        return NextResponse.json({
          ok: true,
          orderId,
          mailSent: false,
          mode: "fixed",
          checkoutId: created.data.id,
          paymentUrl: created.data.url,
        });
      } catch (err) {
        return await manual(err instanceof Error ? err.message : "fixed checkout threw");
      }
    }

    // No dedicated link: buyer confirms/enters amount, then flex API link or open share URL.
    const amount = parseAmount(body.amount, plan.price);
    if (amount < 1 || amount > 5000) {
      return NextResponse.json(
        { ok: false, error: "Indiquez un montant valide en euros (entre 1 et 5000)." },
        { status: 400 },
      );
    }

    const flexId = getFlexLinkId();
    if (flexId) {
      try {
        const created = await createPaycontrolCheckout({
          linkId: flexId,
          buyerId: toPaycontrolBuyerId(email, orderId),
          orderId,
          amountEuros: amount,
          email,
          name,
          returnUrl,
        });

        if (!created.ok || !created.data.url) {
          return await manual(
            created.ok === false
              ? created.body.reason || "flex checkout failed"
              : "flex checkout missing url",
          );
        }

        return NextResponse.json({
          ok: true,
          orderId,
          mailSent: false,
          mode: "flex",
          amount,
          checkoutId: created.data.id,
          paymentUrl: created.data.url,
        });
      } catch (err) {
        return await manual(err instanceof Error ? err.message : "flex checkout threw");
      }
    }

    const openUrl = getOpenShareUrl();
    if (openUrl) {
      return NextResponse.json({
        ok: true,
        orderId,
        mailSent: false,
        mode: "open",
        amount,
        expectedAmount: plan.price,
        paymentUrl: openUrl,
        openAmountHint: `Sur l'écran suivant, saisissez exactement ${amount.toFixed(2)} EUR.`,
      });
    }

    return await manual("no payment link configured");
  } catch (error) {
    console.error("[paycontrol/checkout]", error);
    return NextResponse.json(
      { ok: false, error: "Impossible de démarrer le paiement. Réessayez ou contactez le support." },
      { status: 500 },
    );
  }
}
