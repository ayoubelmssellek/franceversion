import { NextResponse } from "next/server";
import { resolvePlan } from "@/data/plans";
import { isMailConfigured, sendOrderEmails } from "@/lib/mail";

type Body = {
  orderId?: string;
  plan?: string;
  connections?: string | number;
  email?: string;
  name?: string;
  whatsapp?: string;
  country?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const name = String(body.name || "").trim();

    if (!email || !email.includes("@") || !name) {
      return NextResponse.json({ ok: false, error: "Le nom et l'e-mail sont obligatoires." }, { status: 400 });
    }

    const plan = resolvePlan(body.plan, body.connections == null ? null : String(body.connections));
    const orderId = String(body.orderId || 4000 + Math.floor(Math.random() * 5000));

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

    if (!isMailConfigured()) {
      // Allow checkout to continue in local/dev before SMTP keys are set
      return NextResponse.json({
        ok: true,
        orderId,
        mailSent: false,
        warning: "SMTP pas encore configuré. Commande conservée uniquement dans le parcours.",
      });
    }

    const result = await sendOrderEmails(order);
    return NextResponse.json({ ok: true, orderId, mailSent: result.sent });
  } catch (error) {
    console.error("[orders]", error);
    return NextResponse.json(
      { ok: false, error: "Impossible de traiter l'e-mail de la commande. Réessayez ou contactez le support." },
      { status: 500 },
    );
  }
}
