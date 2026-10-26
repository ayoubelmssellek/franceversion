"use client";

import { FormEvent, useState } from "react";

export default function ReviewForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [rating, setRating] = useState(5);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    // Honeypot — bots fill this; humans leave empty
    if (String(form.get("website") || "").trim()) {
      setDone(true);
      setSubmitting(false);
      return;
    }

    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      location: String(form.get("location") || "").trim(),
      rating,
      comment: String(form.get("comment") || "").trim(),
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Impossible d'envoyer l'avis.");
      }
      setDone(true);
      e.currentTarget.reset();
      setRating(5);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Un problème est survenu. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-[4px] border border-line bg-transparent px-3 py-2.5 text-[15px] text-white outline-none focus:border-white/50";

  if (done) {
    return (
      <div className="rounded-[8px] border border-line bg-surface px-5 py-6">
        <p className="text-[16px] font-medium text-white">Merci pour votre avis</p>
        <p className="mt-2 text-[14px] leading-[1.5] text-slate">
          Nous avons reçu votre message par e-mail. Après vérification, nous pourrons le publier sur cette page.
        </p>
        <button
          type="button"
          className="btn btn-ghost mt-4"
          onClick={() => setDone(false)}
        >
          En envoyer un autre
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[8px] border border-line bg-surface p-5 md:p-6">
      <div>
        <h2 id="envoyer-avis" className="text-[20px] text-white md:text-[22px]">
          Laissez votre avis
        </h2>
        <p className="mt-1 text-[13px] text-muted">
          Racontez-nous votre expérience : nous la recevons par e-mail et la publions après vérification.
        </p>
      </div>

      <label className="block text-[13px] text-slate">
        Nom <span className="text-white">*</span>
        <input required name="name" className={field} autoComplete="name" maxLength={80} />
      </label>

      <label className="block text-[13px] text-slate">
        Email <span className="text-white">*</span>
        <input
          required
          type="email"
          name="email"
          className={field}
          autoComplete="email"
          maxLength={120}
        />
      </label>

      <label className="block text-[13px] text-slate">
        Ville <span className="text-mid">(facultatif)</span>
        <input name="location" className={field} placeholder="Paris, Lyon…" maxLength={80} />
      </label>

      <fieldset>
        <legend className="text-[13px] text-slate">
          Note <span className="text-white">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className={`min-w-10 rounded-[4px] border px-3 py-2 text-[14px] transition ${
                rating === value
                  ? "border-pt-gold bg-pt-gold/15 text-pt-gold"
                  : "border-line text-slate hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={rating === value}
              aria-label={`${value} ${value === 1 ? "étoile" : "étoiles"}`}
            >
              {value}★
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block text-[13px] text-slate">
        Commentaire <span className="text-white">*</span>
        <textarea
          required
          name="comment"
          rows={4}
          className={field}
          maxLength={800}
          placeholder="L'installation, les chaînes, le sport, le support…"
        />
      </label>

      {/* Honeypot */}
      <label className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {error ? (
        <p className="rounded-[6px] border border-red-500/40 bg-red-500/10 px-3 py-2 text-[13px] text-red-200">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={submitting} className="btn btn-solid w-full py-3 disabled:opacity-60">
        {submitting ? "Envoi…" : "Envoyer l'avis"}
      </button>
    </form>
  );
}
