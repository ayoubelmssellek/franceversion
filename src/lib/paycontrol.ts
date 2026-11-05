import crypto from "crypto";

/**
 * PayControl API (server only — never import from client components).
 * Docs: https://crm.paygateway.me/api/v1 — Bearer key, JSON.
 */

export const PAYCONTROL_API_BASE =
  process.env.PAYCONTROL_API_BASE?.trim() || "https://crm.paygateway.me/api/v1";

export type PaycontrolCheckout = {
  id: number;
  link_id: number | null;
  link_name?: string | null;
  buyer_id: string;
  order_id: string | null;
  email: string | null;
  name: string | null;
  amount: number;
  currency: string;
  status: string;
  reason?: string | null;
  url: string | null;
  created_at?: string;
  expires_at?: string | null;
  paid_at?: string | null;
};

export type PaycontrolWebhookEvent = {
  id: number;
  at: string;
  type: string;
  checkout: PaycontrolCheckout & {
    payment?: {
      email?: string | null;
      name?: string | null;
      country?: string | null;
      amount_refunded?: number;
    } | null;
  };
};

export type PlanPayMode = "fixed" | "flex" | "open" | "manual";

/** Env key for a dedicated PayControl link id per plan. */
const LINK_ENV_BY_PLAN: Record<string, string> = {
  "1m": "PAYCONTROL_LINK_1M",
  "3m": "PAYCONTROL_LINK_3M",
  "6m": "PAYCONTROL_LINK_6M",
  "1y": "PAYCONTROL_LINK_1Y",
  "1m2": "PAYCONTROL_LINK_1M2",
  "3m2": "PAYCONTROL_LINK_3M2",
  "6m2": "PAYCONTROL_LINK_6M2",
  "1y2": "PAYCONTROL_LINK_1Y2",
  "3conn": "PAYCONTROL_LINK_3CONN",
};

function envTrim(key: string): string {
  return process.env[key]?.trim() || "";
}

export function isPaycontrolConfigured(): boolean {
  return Boolean(envTrim("PAYCONTROL_API_KEY"));
}

export function getDedicatedLinkId(planId: string): number | null {
  const envKey = LINK_ENV_BY_PLAN[planId];
  if (!envKey) return null;
  const raw = envTrim(envKey);
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function getFlexLinkId(): number | null {
  const raw = envTrim("PAYCONTROL_FLEX_LINK_ID");
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function getOpenShareUrl(): string | null {
  const url = envTrim("PAYCONTROL_OPEN_SHARE_URL");
  return url.startsWith("https://") ? url : null;
}

export function resolvePlanPayMode(planId: string): PlanPayMode {
  if (getDedicatedLinkId(planId)) return "fixed";
  if (getFlexLinkId()) return "flex";
  if (getOpenShareUrl()) return "open";
  return "manual";
}

export function formatPaycontrolAmount(euros: number): string {
  return euros.toFixed(2);
}

/**
 * PayControl buyer_id: 1–64 chars, Latin letters, digits, "-" and "_" only.
 * Emails are invalid (@ . + etc), so we sanitize a stable id from email + order.
 */
export function toPaycontrolBuyerId(email: string, orderId?: string): string {
  const base = String(email || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  const suffix = String(orderId || "")
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  let id = base || "buyer";
  if (suffix) {
    const room = 64 - suffix.length - 1;
    id = `${id.slice(0, Math.max(1, room))}_${suffix}`.slice(0, 64);
  } else {
    id = id.slice(0, 64);
  }

  if (!id) id = "buyer";
  return id;
}

type ApiErrorBody = {
  error?: string;
  reason?: string;
  fields?: Record<string, string>;
  details?: unknown;
};

async function paycontrolFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; status: number; body: ApiErrorBody }> {
  const key = envTrim("PAYCONTROL_API_KEY");
  if (!key) {
    return { ok: false, status: 503, body: { error: "unauthorized", reason: "PAYCONTROL_API_KEY missing" } };
  }

  const res = await fetch(`${PAYCONTROL_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { error: "invalid_json", reason: text.slice(0, 200) };
  }

  if (!res.ok) {
    return { ok: false, status: res.status, body: (json || {}) as ApiErrorBody };
  }

  return { ok: true, data: json as T };
}

export type CreateCheckoutInput = {
  linkId: number;
  buyerId: string;
  orderId: string;
  amountEuros: number;
  email: string;
  name: string;
  locale?: string;
  returnUrl?: string;
};

export async function createPaycontrolCheckout(input: CreateCheckoutInput) {
  const body: Record<string, unknown> = {
    link_id: input.linkId,
    buyer_id: input.buyerId,
    order_id: input.orderId,
    amount: formatPaycontrolAmount(input.amountEuros),
    email: input.email,
    name: input.name,
    locale: input.locale || "pt-PT",
  };
  if (input.returnUrl) body.return_url = input.returnUrl;

  return paycontrolFetch<PaycontrolCheckout>("/checkouts", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function getPaycontrolCheckout(id: number) {
  return paycontrolFetch<PaycontrolCheckout>(`/checkouts/${id}`);
}

/** Verify X-Paycontrol-Signature: t=…,v1=… over `${t}.${rawBody}`. */
export function verifyPaycontrolSignature(
  rawBody: string,
  header: string | null,
  secret: string,
): boolean {
  if (!header || !secret) return false;

  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return i === -1 ? [p, ""] : [p.slice(0, i), p.slice(i + 1)];
    }),
  ) as { t?: string; v1?: string };

  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;

  const age = Math.abs(Date.now() / 1000 - Number(t));
  if (!Number.isFinite(age) || age > 300) return false;

  const expected = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");

  if (v1.length !== expected.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(v1, "utf8"), Buffer.from(expected, "utf8"));
  } catch {
    return false;
  }
}
