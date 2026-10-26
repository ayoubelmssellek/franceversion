import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import RelatedContent from "@/components/RelatedContent";
import { plans } from "@/data/content";
import { packList } from "@/data/packs";
import {
  tarifsConnectionCompare,
  tarifsFaqs,
  tarifsIncludedFeatures,
  tarifsPlanFeatures,
} from "@/data/tarifs-content";
import { formatRatingLabel, getReviewStats } from "@/data/reviews";
import { getFamilyPlanPrice } from "@/lib/plan-pricing";
import { buildMetadata, faqJsonLd, productOffersJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Acheter un IPTV France — forfaits et tarifs",
  description:
    "Acheter un IPTV France : tableau des forfaits, tarif et 1–3 connexions. Page commerciale officielle — activation après le paiement, essai de 24 h et garantie de 7 jours.",
  path: "/tarifs",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Acheter un IPTV", path: "/tarifs" },
];

export default function TarifsPage() {
  const offerPlans = [
    ...plans.one,
    ...plans.two,
    { id: "3conn", label: "1 an · 3 connexions", price: getFamilyPlanPrice() },
  ];
  const reviewStats = getReviewStats();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(),
          ...productOffersJsonLd(offerPlans),
          faqJsonLd(tarifsFaqs),
        ]}
      />

      <section className="section-shell pb-10 pt-24 md:pb-12 md:pt-28">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="animate-rise mt-6 label text-white/70">Abonnement · tarifs · connexions</p>
        <h1 className="animate-rise-delay-1 mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
          Acheter un IPTV France
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
          Comparez les forfaits par durée et nombre de connexions (1, 2 ou 3). Packs mis en avant à 25 €, 45 €, 89 € et
          104 € — paiement unique, activation après la confirmation du paiement et assistance 24h/24 en français.
        </p>
        <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
          <a href="#forfaits" className="btn btn-solid" aria-label="Voir les forfaits IPTV France">
            Voir les forfaits et les tarifs
          </a>
          <Link href="/chaines" className="btn btn-ghost" aria-label="Voir les chaînes IPTV France">
            Voir les chaînes FR
          </Link>
        </div>
        <p className="mt-6 text-[13px] text-muted">
          Essai de 24 heures sur demande · garantie de 7 jours · disponibilité 99,9 % (engagement de service)
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
      </section>

      <div className="section-shell py-16 md:py-24">
        <div id="forfaits">
          <Pricing features={tarifsPlanFeatures} />
        </div>

        <section className="mt-16 max-w-3xl" aria-labelledby="lire-tarifs-heading">
          <h2 id="lire-tarifs-heading" className="text-[24px] text-white md:text-[28px]">
            Comment lire les tarifs et les forfaits
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate">
            Le rapport est en général plus intéressant sur les forfaits longs (6 mois, 1 an) parce que vous payez en une
            fois et vous évitez d’oublier les renouvellements mensuels. Le nombre de connexions n’est pas « illimité » :
            chaque écran qui lit en même temps consomme une connexion du forfait.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-slate">
            S’il ne vous faut que le salon, commencez avec 1 connexion. Si la maison a deux habitudes de visionnage, 2
            connexions sont souvent le bon équilibre. Pour trois écrans en même temps, choisissez le pack à 3 connexions.
            Sur cette page, vous trouvez les tarifs à jour et le paiement ; pour la logique durée × connexions sans le
            tableau, lisez le guide{" "}
            <Link href="/blog/iptv-france-prix-forfaits" className="text-white underline-offset-4 hover:underline">
              comment lire le tarif IPTV
            </Link>
            . Critères pratiques au-delà du tarif :{" "}
            <Link href="/blog/meilleur-iptv-france-2026" className="text-white underline-offset-4 hover:underline">
              Meilleur IPTV France 2026
            </Link>
            .
          </p>
        </section>

        <section className="mt-14" aria-labelledby="connexions-heading">
          <h2 id="connexions-heading" className="text-[24px] text-white md:text-[28px]">
            1, 2 ou 3 connexions
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Mal choisir le nombre de connexions est la cause n° 1 de « l’IPTV a planté » dans les foyers à plusieurs
            écrans — souvent ce n’est pas une panne du lecteur, c’est la limite du forfait.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tarifsConnectionCompare.map((item) => (
              <article key={item.title} className="border border-line bg-deep p-6">
                <h3 className="text-[18px] text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.5] text-slate">{item.body}</p>
                <p className="mt-4 text-[13px] text-muted">Idéal pour : {item.bestFor}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-line bg-surface p-8 md:p-10" aria-labelledby="inclus-heading">
          <h2 id="inclus-heading" className="text-[24px] text-white md:text-[28px]">
            Inclus dans tous les forfaits
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Ce que vous recevez avec l’abonnement MeilleurIPTVFrance — avec le résultat attendu au quotidien, pas seulement
            des noms de fonctions.
          </p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {tarifsIncludedFeatures.map((item) => (
              <li key={item.title}>
                <h3 className="text-[17px] text-white">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-slate">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-[14px]">
            <Link href="/blog/essai-iptv-france" className="text-slate hover:text-white">
              Comment fonctionne l’essai IPTV →
            </Link>
            <Link href="/renouveler" className="text-slate hover:text-white">
              Renouveler l’abonnement →
            </Link>
            <Link href="/applications" className="text-slate hover:text-white">
              Voir les applications compatibles →
            </Link>
            <Link href="/questions-frequentes" className="text-slate hover:text-white">
              Questions fréquentes — tarifs et assistance →
            </Link>
            <Link href="/a-propos" className="text-slate hover:text-white">
              Pourquoi MeilleurIPTVFrance →
            </Link>
          </div>
        </section>

        <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-7 text-slate" aria-labelledby="comment-acheter-heading">
          <h2 id="comment-acheter-heading" className="text-[24px] text-white md:text-[28px]">
            Comment acheter — du forfait à l’écran
          </h2>
          <p>
            Le parcours est direct : choisissez le forfait sur cette page, terminez le paiement et, après confirmation,
            recevez les identifiants. Installez ensuite un lecteur compatible sur l’écran que vous avez déjà, saisissez
            les accès (en règle générale Xtream Codes) et commencez à regarder. Nous ne vendons pas de listes partagées
            sur des forums — nous vendons l’accès au service MeilleurIPTVFrance avec une assistance en français.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Choisir la durée et le nombre de connexions",
              "Terminer le paiement",
              "Recevoir les identifiants après confirmation",
              "Configurer le lecteur et commencer à regarder",
            ].map((step, i) => (
              <li key={step} className="border-t border-line pt-4 text-[14px] text-slate">
                <span className="micro text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-white">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            Guides par appareil :{" "}
            <Link href="/applications" className="text-white underline-offset-4 hover:underline">
              applications
            </Link>{" "}
            et{" "}
            <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
              installation pas à pas
            </Link>
            . Vous êtes déjà client et vous voulez seulement prolonger ? Utilisez{" "}
            <Link href="/renouveler" className="text-white underline-offset-4 hover:underline">
              Renouveler
            </Link>
            .
          </p>
        </section>

        <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-7 text-slate" aria-labelledby="qualite-heading">
          <h2 id="qualite-heading" className="text-[24px] text-white md:text-[28px]">
            Qualité 4K et votre réseau
          </h2>
          <p>
            Les forfaits incluent une qualité jusqu’en 4K lorsque le catalogue et votre réseau le permettent. Cela ne
            veut pas dire que toutes les chaînes sont en Ultra HD en permanence : en sport, un Full HD stable est souvent
            le meilleur choix sur un Wi‑Fi domestique. Pour les exigences de fibre, de lecteur et d’attentes réelles,
            lisez{" "}
            <Link href="/blog/iptv-4k-france" className="text-white underline-offset-4 hover:underline">
              IPTV 4K France
            </Link>
            .
          </p>
          <p>
            Deux flux 4K en même temps demandent un forfait de 2 connexions ou plus et de la marge sur Internet. S’il n’y
            a qu’un écran principal à la maison, commencez avec 1 connexion et validez l’image — vous pouvez demander
            l’essai de 24 heures à l’assistance avant de décider.
          </p>
        </section>

        <section className="mt-16 border border-line bg-deep px-6 py-10 md:px-10" aria-labelledby="garantie-heading">
          <p className="label">Avant et après l’achat</p>
          <h2 id="garantie-heading" className="mt-4 text-[24px] text-white md:text-[32px] md:tracking-[-0.6px]">
            Essai de 24 heures et garantie de 7 jours
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[18px] text-white">Essai de 24 heures</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Demandez à l’assistance un essai de 24 heures avant de payer — pour valider l’appareil, l’application et
                votre réseau à la maison. C’est une fenêtre contrôlée pour décider en connaissance de cause, pas une
                période « gratuite » illimitée.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] text-white">Garantie de 7 jours</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Après l’achat, la garantie de 7 jours s’applique conformément à notre{" "}
                <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
                  politique de remboursement
                </Link>
                . Vous réduisez ainsi le risque si quelque chose ne se passe pas comme prévu les premiers jours.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#forfaits" className="btn btn-solid">
              Voir les forfaits
            </a>
            <Link href="/blog/essai-iptv-france" className="btn btn-ghost">
              Comment fonctionne l’essai
            </Link>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="packs-heading">
          <h2 id="packs-heading" className="text-[24px] text-white md:text-[28px]">
            Packs mis en avant
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Quatre forfaits avec une page dédiée — 25 €, 45 €, 89 € et 104 € selon la durée et les connexions. Le
            tableau du haut reste la matrice complète (autres durées incluses).
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {packList.map((pack) => {
              const price = pack.getPrice();
              return (
                <li key={pack.path}>
                  <Link
                    href={pack.path}
                    className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
                  >
                    <span className="text-[16px] text-white">{pack.shortName}</span>
                    <span className="mt-2 block text-[13px] text-muted">
                      {pack.durationLabel} · {pack.connections}{" "}
                      {pack.connections === 1 ? "connexion" : "connexions"}
                    </span>
                    <span className="mt-4 block text-[22px] tracking-[-0.4px] text-white">
                      €{price}
                      <span className="ml-1 text-[13px] font-normal text-slate">{pack.pricePeriodLabel}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="faq-tarifs-heading">
          <h2 id="faq-tarifs-heading" className="mb-8 text-[24px] text-white md:text-[28px]">
            Questions fréquentes — achat, tarif et abonnement
          </h2>
          <FAQ items={tarifsFaqs} />
          <p className="mt-8 text-[14px] text-slate">
            Plus de réponses dans les{" "}
            <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
              questions fréquentes complètes
            </Link>
            .
          </p>
        </section>

        <RelatedContent
          title="Avant de décider"
          links={[
            {
              href: "/blog/meilleur-iptv-france-2026",
              label: "Meilleur IPTV France 2026",
              description: "Critères pratiques avant de vous abonner.",
            },
            {
              href: "/blog/iptv-france-prix-forfaits",
              label: "Comment lire le tarif IPTV",
              description: "Durée, connexions et coût équivalent.",
            },
            {
              href: "/blog/essai-iptv-france",
              label: "Essai IPTV France",
              description: "24 heures et garantie de 7 jours expliquées.",
            },
            {
              href: "/chaines",
              label: "Chaînes de sport et FR",
              description: "Confirmez le catalogue.",
            },
            {
              href: "/applications",
              label: "Applications IPTV",
              description: "Appareils et installation.",
            },
            {
              href: "/quest-ce-que-iptv",
              label: "Qu’est-ce que l’IPTV",
              description: "Comment fonctionne la technologie.",
            },
            {
              href: "/blog/iptv-4k-france",
              label: "IPTV 4K France",
              description: "Réseau et qualité réelle.",
            },
            {
              href: "/a-propos",
              label: "À propos de MeilleurIPTVFrance",
              description: "Comment nous fonctionnons et l’assistance.",
            },
          ]}
        />

        <div className="mt-16 border border-line bg-surface px-6 py-10 text-center md:px-10">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[36px] md:tracking-[-0.9px]">
            Prêt à choisir le forfait ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-slate">
            Comparez les tarifs (25 €, 45 €, 89 € ou 104 € dans les packs mis en avant), demandez l’essai de 24 heures si
            vous voulez valider le réseau et comptez sur la garantie de 7 jours après l’achat.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#forfaits" className="btn btn-solid" aria-label="Voir les forfaits et les tarifs">
              Voir les forfaits et les tarifs
            </a>
            <Link href="/chaines" className="btn btn-ghost">
              Voir les chaînes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
