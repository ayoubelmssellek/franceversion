export const PAY_HANDOFF_ORIGIN =
  process.env.NEXT_PUBLIC_PAY_HANDOFF_ORIGIN?.replace(/\/$/, "") ||
  "https://www.mindandhearthub.shop";

export const PAY_HANDOFF_LANG = "fr" as const;
export const PAY_HANDOFF_PRICES_PATH = "/tarifs";

export type PayHandoffMeta = {
  orderId?: string;
  plan?: string;
  connections?: string | number;
  email?: string;
  name?: string;
};

export function payHandoffUrl(paymentUrl: string, meta?: PayHandoffMeta): string {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

  const q = new URLSearchParams();
  q.set("to", paymentUrl);
  q.set("lang", PAY_HANDOFF_LANG);
  if (origin) q.set("prices", `${origin}${PAY_HANDOFF_PRICES_PATH}`);
  if (meta?.orderId) q.set("order", meta.orderId);
  if (meta?.plan) q.set("plan", meta.plan);
  if (meta?.connections != null) q.set("connections", String(meta.connections));
  if (meta?.email) q.set("email", meta.email);
  if (meta?.name) q.set("name", meta.name);
  return `${PAY_HANDOFF_ORIGIN}/return?${q.toString()}`;
}

export function successHandoffUrl(query: URLSearchParams): string {
  const q = new URLSearchParams(query);
  q.set("lang", PAY_HANDOFF_LANG);
  return `${PAY_HANDOFF_ORIGIN}/success?${q.toString()}`;
}

export function shellSuccessReturnUrl(): string {
  return `${PAY_HANDOFF_ORIGIN}/success?paid=1`;
}
