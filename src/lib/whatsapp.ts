/**
 * Builds a WhatsApp chat link with a prefilled order message for the chosen plan.
 * Number is never shown on the website — only used in wa.me links.
 */
export function getWhatsAppIntl(): string {
  // Internal order number only (not displayed on the site)
  return "212637573773";
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

/** Prefill for the floating button and footer chat link. */
export function buildContactWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    [
      "Bonjour MeilleurIPTVFrance 👋",
      "",
      "Je veux des informations sur IPTV France.",
      "Cela peut être l'essai de 24 heures, un forfait ou de l'aide pour l'installation.",
    ].join("\n"),
  );
}

/** Prefill for 24h trial requests (hero, banner, CTAs). */
export function buildTestWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    [
      "Bonjour MeilleurIPTVFrance 👋",
      "",
      "Je souhaite demander l'essai gratuit de 24 heures.",
      "Appareil principal : (ex. : Smart TV / Fire Stick / Android)",
    ].join("\n"),
  );
}

export function buildPlanWhatsAppUrl(options: {
  planLabel: string;
  price: number;
  connections: number;
}): string {
  const { planLabel, price, connections } = options;
  const connectionLabel =
    connections === 1 ? "1 connexion" : `${connections} connexions`;
  const message = [
    `Bonjour MeilleurIPTVFrance 👋`,
    ``,
    `Je veux acheter le forfait suivant :`,
    `• Forfait : ${planLabel}`,
    `• Connexions : ${connectionLabel}`,
    `• Prix : €${price}`,
    ``,
    `Merci de m'envoyer les détails de paiement et d'activation.`,
  ].join("\n");

  return buildWhatsAppUrl(message);
}

export function openPlanWhatsApp(options: {
  planLabel: string;
  price: number;
  connections: number;
}): void {
  window.open(buildPlanWhatsAppUrl(options), "_blank", "noopener,noreferrer");
}
