import { NextResponse } from "next/server";
import { createMailTransport, isMailConfigured } from "@/lib/mail";
import type { PaycontrolWebhookEvent } from "@/lib/paycontrol";
import { verifyPaycontrolSignature } from "@/lib/paycontrol";

function notifyEmail(): string {
  return process.env.ORDER_NOTIFY_EMAIL?.trim() || "";
}

function webhookSecret(): string {
  return process.env.PAYCONTROL_WEBHOOK_SECRET?.trim() || "";
}

/**
 * PayControl → your system.
 * Set in PayControl Notifications:
 *   https://www.portugaliptvpro.shop/api/paycontrol/webhook
 * On first save, copy the secret into PAYCONTROL_WEBHOOK_SECRET.
 */
export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature =
    request.headers.get("x-paycontrol-signature") || request.headers.get("X-Paycontrol-Signature");
  const secret = webhookSecret();

  if (!secret) {
    console.error("[paycontrol/webhook] PAYCONTROL_WEBHOOK_SECRET missing");
    return NextResponse.json({ ok: false, error: "misconfigured" }, { status: 503 });
  }

  if (!verifyPaycontrolSignature(rawBody, signature, secret)) {
    return NextResponse.json({ ok: false, error: "invalid_signature" }, { status: 401 });
  }

  let event: PaycontrolWebhookEvent;
  try {
    event = JSON.parse(rawBody) as PaycontrolWebhookEvent;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  try {
    await handleEvent(event);
  } catch (err) {
    console.error("[paycontrol/webhook] handler", event?.id, event?.type, err);
  }

  return NextResponse.json({ ok: true });
}

async function handleEvent(event: PaycontrolWebhookEvent) {
  const checkout = event.checkout;
  if (!checkout) return;

  console.info("[paycontrol/webhook]", {
    eventId: event.id,
    type: event.type,
    checkoutId: checkout.id,
    orderId: checkout.order_id,
    status: checkout.status,
    amount: checkout.amount,
  });

  if (event.type !== "checkout.paid" && checkout.status !== "paid") {
    return;
  }

  const to = notifyEmail();
  if (!to || !isMailConfigured()) return;

  const transporter = createMailTransport();
  const from = process.env.SMTP_FROM?.trim();
  if (!from) return;

  const euros = (checkout.amount / 100).toFixed(2);
  const subject = `PayControl pago · encomenda ${checkout.order_id || checkout.id}`;
  const text = [
    `Pagamento confirmado (PayControl).`,
    ``,
    `Evento: ${event.type} (#${event.id})`,
    `Checkout: ${checkout.id}`,
    `Order: ${checkout.order_id || "—"}`,
    `Estado: ${checkout.status}`,
    `Valor: ${euros} ${checkout.currency}`,
    `Email: ${checkout.payment?.email || checkout.email || "—"}`,
    `Nome: ${checkout.payment?.name || checkout.name || "—"}`,
    `Link: ${checkout.link_name || checkout.link_id || "—"}`,
    `Pago em: ${checkout.paid_at || event.at}`,
  ].join("\n");

  await transporter.sendMail({ from, to, subject, text });
}
