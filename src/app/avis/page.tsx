import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewStars from "@/components/reviews/ReviewStars";
import { formatRatingLabel, getReviewStats, reviews } from "@/data/reviews";
import { buildMetadata, reviewsProductJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Avis IPTV France — clients MeilleurIPTVFrance",
  description:
    "Avis clients de MeilleurIPTVFrance en France : installation, chaînes, sport et support. Lisez les avis et laissez le vôtre.",
  path: "/avis",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Avis", path: "/avis" },
];

export default function ValoracionesPage() {
  const stats = getReviewStats();

  return (
    <>
      <JsonLd data={reviewsProductJsonLd()} />
      <section className="section-shell pb-10 pt-24 md:pb-12 md:pt-28">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="animate-rise mt-6 label text-white/70">Avis clients</p>
        <h1 className="animate-rise-delay-1 mt-4 max-w-3xl text-[36px] tracking-[-1px] text-white md:text-[48px]">
          Avis MeilleurIPTVFrance
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
          Moyenne <strong className="text-white">{stats.ratingValue.toFixed(1).replace(".", ",")}/5</strong> avec{" "}
          <strong className="text-white">{stats.reviewCount}</strong> avis publiés (
          {formatRatingLabel(stats)}). Les nouveaux envois sont vérifiés avant d&apos;apparaître ici.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#envoyer-avis" className="btn btn-solid">
            Laisser un avis
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Voir les forfaits
          </Link>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20" aria-labelledby="lista-avaliacoes">
        <h2 id="lista-avaliacoes" className="text-[24px] text-white md:text-[28px]">
          Tous les avis
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.id} className="border-t border-line pt-5">
              <ReviewStars rating={review.rating} />
              <p className="mt-3 text-[14px] leading-[1.55] text-slate">&ldquo;{review.comment}&rdquo;</p>
              <p className="mt-4 text-[13px] text-white">
                {review.author}
                <span className="text-muted"> · {review.location}</span>
              </p>
              <time className="mt-1 block text-[12px] text-muted" dateTime={review.date}>
                {new Date(review.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell pb-20 md:pb-28" aria-labelledby="envoyer-avis">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="label">Partagez votre expérience</p>
            <h2 className="mt-3 text-[24px] text-white md:text-[28px]">Vous voulez apparaître ici ?</h2>
            <p className="mt-3 text-[15px] leading-[1.55] text-slate">
              Remplissez le formulaire. Nous recevons l&apos;avis par e-mail, filtrons le spam et ne publions que ce qui est
              utile aux autres clients en France.
            </p>
            <p className="mt-4 text-[13px] text-muted">
              Vous êtes déjà client ? Mentionnez l&apos;appareil (Smart TV, Fire Stick…) et si vous utilisez le sport ou la VOD — cela aide ceux qui
              choisissent un forfait.
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>
    </>
  );
}
