import nodemailer from "nodemailer";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export type OrderPayload = {
  orderId: string;
  planId: string;
  planLabel: string;
  productName: string;
  price: number;
  connections: number;
  email: string;
  name: string;
  whatsapp?: string;
  country?: string;
};

export type ReviewSubmissionPayload = {
  name: string;
  email: string;
  location: string;
  rating: number;
  comment: string;
};

function buildOrderWhatsAppUrl(order: OrderPayload) {
  const connectionLabel =
    order.connections === 1 ? "1 connexion" : `${order.connections} connexions`;
  const message = [
    `Bonjour MeilleurIPTVFrance 👋`,
    ``,
    `Je viens de passer une commande sur le site.`,
    `• Commande : #${order.orderId}`,
    `• Forfait : ${order.productName}`,
    `• Connexions : ${connectionLabel}`,
    `• Prix : ${money(order.price)}`,
    order.name ? `• Nom : ${order.name}` : null,
    order.email ? `• E-mail : ${order.email}` : null,
    ``,
    `Merci de m'envoyer le lien de paiement et les détails d'activation.`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

function requiredEnv(key: string): string {
  const value = process.env[key]?.trim();
  if (!value) {
    throw new Error(`Variable d'environnement e-mail manquante : ${key}`);
  }
  return value;
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.SMTP_FROM?.trim() &&
      process.env.ORDER_NOTIFY_EMAIL?.trim(),
  );
}

export function createMailTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true, // 465 = SSL
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });
}

function money(amount: number) {
  return `€${Math.round(amount)}`;
}

function customerHtml(order: OrderPayload) {
  const whatsappUrl = buildOrderWhatsAppUrl(order);
  const greetingName = escapeHtml(order.name || "client");

  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Merci pour votre commande !</h1>
    <p>Bonjour ${greetingName},</p>
    <p>Nous avons bien reçu votre commande MeilleurIPTVFrance <strong>#${escapeHtml(order.orderId)}</strong>.</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Forfait</td><td style="padding:6px 0;text-align:right"><strong>${escapeHtml(order.productName)}</strong></td></tr>
      <tr><td style="padding:6px 0">Connexions</td><td style="padding:6px 0;text-align:right">${order.connections}</td></tr>
      <tr><td style="padding:6px 0">Total</td><td style="padding:6px 0;text-align:right"><strong>${money(order.price)}</strong></td></tr>
    </table>
    <p><strong>Prochaines étapes</strong></p>
    <ol>
      <li>
        Si vous avez WhatsApp, contactez-nous depuis la page de remerciement ou cliquez sur le bouton ci-dessous pour recevoir le lien de paiement plus rapidement.
        <div style="margin:14px 0 8px">
          <a href="${whatsappUrl}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 18px;border-radius:4px">
            Ouvrir le chat WhatsApp
          </a>
        </div>
        <p style="margin:0 0 8px;font-size:13px;color:#555;word-break:break-all">
          Ou copiez ce lien : <a href="${whatsappUrl}" style="color:#25D366">${escapeHtml(whatsappUrl)}</a>
        </p>
      </li>
      <li>Si vous n'avez pas WhatsApp, répondez à cet e-mail ou patientez — nous vous enverrons votre <strong>lien de paiement sécurisé</strong> ici.</li>
      <li>Après le paiement, nous activons votre compte et nous vous aidons pour l'installation.</li>
    </ol>
    <p style="color:#555;font-size:13px">MeilleurIPTVFrance · support@meilleuresiptvfrance.shop</p>
  </div>`;
}

function adminHtml(order: OrderPayload) {
  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Nouvelle commande #${escapeHtml(order.orderId)}</h1>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Nom</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.name)}</td></tr>
      <tr><td style="padding:6px 0">E-mail</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.email)}</td></tr>
      <tr><td style="padding:6px 0">WhatsApp</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.whatsapp || "—")}</td></tr>
      <tr><td style="padding:6px 0">Pays</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.country || "—")}</td></tr>
      <tr><td style="padding:6px 0">Forfait</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.productName)}</td></tr>
      <tr><td style="padding:6px 0">ID du forfait</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.planId)}</td></tr>
      <tr><td style="padding:6px 0">Connexions</td><td style="padding:6px 0;text-align:right">${order.connections}</td></tr>
      <tr><td style="padding:6px 0">Total</td><td style="padding:6px 0;text-align:right"><strong>${money(order.price)}</strong></td></tr>
    </table>
    <p>Envoyez au client le lien de paiement par WhatsApp ou par e-mail.</p>
  </div>`;
}

function reviewAdminHtml(review: ReviewSubmissionPayload) {
  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Nouvel avis sur le site</h1>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Nom</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.name)}</td></tr>
      <tr><td style="padding:6px 0">E-mail</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.email)}</td></tr>
      <tr><td style="padding:6px 0">Ville</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.location || "—")}</td></tr>
      <tr><td style="padding:6px 0">Note</td><td style="padding:6px 0;text-align:right"><strong>${review.rating}/5</strong></td></tr>
    </table>
    <p style="white-space:pre-wrap;border-top:1px solid #eee;padding-top:12px">${escapeHtml(review.comment)}</p>
    <p style="color:#555;font-size:13px">Relisez et, si vous validez, ajoutez l'avis dans src/data/client-reviews.json</p>
  </div>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Envoie la confirmation de commande au client et une copie dans votre boîte de réception. */
export async function sendOrderEmails(order: OrderPayload) {
  if (!isMailConfigured()) {
    return { sent: false as const, reason: "SMTP non configuré" };
  }

  const transporter = createMailTransport();
  const from = requiredEnv("SMTP_FROM");
  const notifyTo = requiredEnv("ORDER_NOTIFY_EMAIL");

  const whatsappUrl = buildOrderWhatsAppUrl(order);

  await transporter.sendMail({
    from,
    to: order.email,
    subject: `MeilleurIPTVFrance commande #${order.orderId} — prochaines étapes`,
    html: customerHtml(order),
    text: [
      `Merci pour votre commande #${order.orderId}.`,
      `Forfait : ${order.productName}`,
      `Connexions : ${order.connections}`,
      `Total : ${money(order.price)}`,
      ``,
      `Prochaines étapes :`,
      `1) Si vous avez WhatsApp, contactez-nous depuis la page de remerciement ou ouvrez ce lien pour un paiement plus rapide :`,
      whatsappUrl,
      `2) Si vous n'avez pas WhatsApp, répondez à cet e-mail ou patientez — nous vous enverrons le lien de paiement sécurisé ici.`,
      `3) Après le paiement, nous activons votre compte et nous vous aidons pour l'installation.`,
      ``,
      `MeilleurIPTVFrance · support@meilleuresiptvfrance.shop`,
    ].join("\n"),
  });

  await transporter.sendMail({
    from,
    to: notifyTo,
    replyTo: order.email,
    subject: `[Commande] #${order.orderId} — ${order.productName} — ${money(order.price)}`,
    html: adminHtml(order),
    text: [
      `Nouvelle commande #${order.orderId}`,
      `Nom : ${order.name}`,
      `E-mail : ${order.email}`,
      `WhatsApp : ${order.whatsapp || "—"}`,
      `Pays : ${order.country || "—"}`,
      `Forfait : ${order.productName}`,
      `Connexions : ${order.connections}`,
      `Total : ${money(order.price)}`,
    ].join("\n"),
  });

  return { sent: true as const };
}

/** Avertit votre boîte de réception lorsqu'un visiteur envoie un avis sur /avis. */
export async function sendReviewSubmissionEmail(review: ReviewSubmissionPayload) {
  if (!isMailConfigured()) {
    return { sent: false as const, reason: "SMTP non configuré" };
  }

  const transporter = createMailTransport();
  const from = requiredEnv("SMTP_FROM");
  const notifyTo = requiredEnv("ORDER_NOTIFY_EMAIL");

  await transporter.sendMail({
    from,
    to: notifyTo,
    replyTo: review.email,
    subject: `[Avis] ${review.rating}/5 — ${review.name}`,
    html: reviewAdminHtml(review),
    text: [
      `Nouvel avis sur le site`,
      `Nom : ${review.name}`,
      `E-mail : ${review.email}`,
      `Ville : ${review.location || "—"}`,
      `Note : ${review.rating}/5`,
      ``,
      review.comment,
    ].join("\n"),
  });

  return { sent: true as const };
}
