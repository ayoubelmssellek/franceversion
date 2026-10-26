import { NextResponse } from "next/server";
import { isMailConfigured, sendReviewSubmissionEmail } from "@/lib/mail";

type Body = {
  name?: string;
  email?: string;
  location?: string;
  rating?: number | string;
  comment?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // Honeypot
    if (String(body.website || "").trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const location = String(body.location || "").trim();
    const comment = String(body.comment || "").trim();
    const rating = Number(body.rating);

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Indiquez votre nom." }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Indiquez un e-mail valide." }, { status: 400 });
    }
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ ok: false, error: "Choisissez une note de 1 à 5." }, { status: 400 });
    }
    if (!comment || comment.length < 15) {
      return NextResponse.json(
        { ok: false, error: "Rédigez un commentaire d'au moins 15 caractères." },
        { status: 400 },
      );
    }
    if (comment.length > 800) {
      return NextResponse.json({ ok: false, error: "Le commentaire est trop long." }, { status: 400 });
    }

    const review = {
      name: name.slice(0, 80),
      email: email.slice(0, 120),
      location: location.slice(0, 80),
      rating: Math.round(rating),
      comment: comment.slice(0, 800),
    };

    if (!isMailConfigured()) {
      return NextResponse.json({
        ok: true,
        mailSent: false,
        warning: "SMTP non configuré. Envoi accepté uniquement en développement.",
      });
    }

    const result = await sendReviewSubmissionEmail(review);
    return NextResponse.json({ ok: true, mailSent: result.sent });
  } catch (error) {
    console.error("[reviews]", error);
    return NextResponse.json(
      { ok: false, error: "Impossible d'envoyer l'avis. Réessayez ou contactez le support." },
      { status: 500 },
    );
  }
}
