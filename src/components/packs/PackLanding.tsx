import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import {
  checkoutHrefForPack,
  getPack,
  packIncludes,
  siblingPacks,
  type PackSlug,
} from "@/data/packs";
import { site } from "@/data/content";
import { formatRatingLabel, getReviewStats } from "@/data/reviews";
import { faqJsonLd, packProductJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

/** Visible copy may wrap “politique de remboursement”; schema keeps the plain strings. */
function withRefundPolicyLink(text: string) {
  const marker = "politique de remboursement";
  const index = text.toLowerCase().indexOf(marker);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
        {text.slice(index, index + marker.length)}
      </Link>
      {text.slice(index + marker.length)}
    </>
  );
}

export default function PackLanding({ slug }: { slug: PackSlug }) {
  const pack = getPack(slug);
  const price = pack.getPrice();
  const compare = pack.getCompare();
  const checkout = checkoutHrefForPack(pack);
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    `Bonjour MeilleurIPTVFrance — je souhaite le ${pack.name} IPTV France (€${price}, ${pack.connections} ${
      pack.connections > 1 ? "connexions" : "connexion"
    }).`,
  )}`;
  const siblings = siblingPacks(slug);
  const reviewStats = getReviewStats();

  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Tarifs", path: "/tarifs" },
    { name: pack.name, path: pack.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          packProductJsonLd({
            path: pack.path,
            planId: pack.planId,
            name: pack.name,
            description: pack.seoDescription,
            price,
            connections: pack.connections,
            durationLabel: pack.durationLabel,
          }),
          faqJsonLd(pack.faqs),
        ]}
      />

      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs items={crumbs} />

        <p className="label mt-8">{pack.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          {pack.h1}
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-3">
          <span className="text-[40px] tracking-[-1px] text-white">€{price}</span>
          {compare != null ? (
            <span className="text-[16px] text-muted line-through">€{compare}</span>
          ) : null}
          <span className="text-[14px] text-muted">{pack.pricePeriodLabel}</span>
        </div>
        <p className="mt-2 text-[14px] text-slate">
          ≈ €{pack.monthlyApprox()}/mois · {pack.connections}{" "}
          {pack.connections > 1 ? "connexions" : "connexion"} · paiement unique
          {reviewStats.reviewCount > 0 ? (
            <>
              {" "}
              ·{" "}
              <Link href="/avis" className="text-slate hover:text-white">
                {formatRatingLabel(reviewStats)}
              </Link>
            </>
          ) : null}
        </p>

        <p className="mt-6 max-w-2xl text-[16px] leading-[1.55] text-slate">{pack.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={checkout} className="btn btn-solid" aria-label={`Commander ${pack.name}`}>
            Commander ce forfait
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Demander l&apos;essai 24 h (WhatsApp)
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Voir tous les tarifs
          </Link>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-[24px] text-white">Ce que comprend le {pack.name}</h2>
          <p className="mt-3 text-[15px] text-slate">
            Les inclusions sont les mêmes que celles des autres forfaits payants de MeilleurIPTVFrance ; la différence de ce pack est{" "}
            <strong className="text-white">
              {pack.durationLabel} · {pack.connections}{" "}
              {pack.connections > 1 ? "connexions" : "connexion"}
            </strong>
            .
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {packIncludes.map((item) => (
              <li key={item} className="text-[14px] text-slate">
                <span className="mr-2 text-white">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl space-y-4">
          <h2 className="text-[24px] text-white">À qui s&apos;adresse ce forfait</h2>
          <p className="text-[15px] leading-[1.6] text-slate">{pack.forWhom}</p>
          <ul className="space-y-2">
            {pack.valuePoints.map((point) => (
              <li key={point} className="text-[14px] text-slate">
                <span className="mr-2 text-white">—</span>
                {withRefundPolicyLink(point)}
              </li>
            ))}
          </ul>
        </section>

        {pack.depthSections?.map((section) => (
          <section key={section.title} className="mt-14 max-w-3xl space-y-3">
            <h2 className="text-[24px] text-white">{section.title}</h2>
            <p className="text-[15px] leading-[1.6] text-slate">{section.body}</p>
          </section>
        ))}

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Questions sur le {pack.name}</h2>
          <FAQ items={pack.faqs} />
        </section>

        <section className="mt-16">
          <h2 className="text-[24px] text-white">Autres forfaits</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-slate">
            Comparez les packs voisins ou ouvrez le{" "}
            <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
              tableau complet des tarifs
            </Link>{" "}
            (mensuel, 6 mois et le reste des combinaisons).
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {siblings.map((sib) => (
              <li key={sib.slug}>
                <Link
                  href={sib.path}
                  className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
                >
                  <span className="text-[16px] text-white">{sib.name}</span>
                  <span className="mt-2 block text-[14px] text-muted">
                    €{sib.getPrice()}
                    {sib.pricePeriodLabel} · {sib.connections}{" "}
                    {sib.connections > 1 ? "connexions" : "connexion"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <RelatedContent
          title="Avant ou après l'achat"
          links={[
            {
              href: "/tarifs",
              label: "Tous les tarifs et connexions",
              description: "Hub commercial : comparez la grille complète.",
            },
            {
              href: "/applications",
              label: "Applications et appareils",
              description: "Smart TV, Android, Fire Stick, iOS.",
            },
            {
              href: "/chaines",
              label: "Chaînes et sport",
              description: "Confirmez le catalogue français.",
            },
            {
              href: "/questions-frequentes",
              label: "Questions fréquentes",
              description: "Installation, paiement et support.",
            },
            {
              href: "/guides-installation",
              label: "Guides d'installation",
              description: "Pas à pas par appareil après l'achat.",
            },
            {
              href: "/politique-de-remboursement",
              label: "Politique de remboursement",
              description: "Conditions de la garantie de 7 jours.",
            },
            {
              href: "/blog/essai-iptv-france",
              label: "Comment fonctionne l'essai de 24 h",
              description: "À demander au support ; ce n'est pas un IPTV gratuit illimité.",
            },
            {
              href: "/pack-trimestriel",
              label: "Pack trimestriel IPTV",
              description: "3 mois · 1 connexion : engagement court.",
            },
            {
              href: "/pack-premium",
              label: "Pack Premium IPTV",
              description: "1 an · 2 connexions : salon + autre écran.",
            },
          ].filter((link) => link.href !== pack.path)}
        />

        <div className="mt-16 flex flex-col justify-between gap-6 border border-line bg-surface px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[28px]">Prêt pour le {pack.name} ?</h2>
            <p className="mt-2 max-w-xl text-[14px] text-slate">
              €{price}
              {pack.pricePeriodLabel} · écrivez à {site.email} si vous avez besoin d&apos;aide pour le paiement.
            </p>
          </div>
          <Link href={checkout} className="btn btn-solid shrink-0" aria-label={`Commander ${pack.name}`}>
            Aller au paiement
          </Link>
        </div>
      </div>
    </>
  );
}
