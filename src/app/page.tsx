import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import RelatedContent from "@/components/RelatedContent";
import ChannelsShowcase from "@/components/home/ChannelsShowcase";
import ClientReviews from "@/components/home/ClientReviews";
import HomeHeadAuthority from "@/components/home/HomeHeadAuthority";
import {
  homeDeviceExpectations,
  homeFaqs,
} from "@/data/home-content";
import { posts } from "@/data/blog";
import { packList } from "@/data/packs";
import { entertainmentBrands, paymentMethods, posterImages } from "@/data/media";
import { buildMetadata, faqJsonLd, siteConfig } from "@/lib/seo";
import heroImage from "@/assets/images/iptv-france-famille-smart-tv-salon.jpeg";

export const metadata = buildMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
});

const featuredPosts = (
  [
    "meilleur-iptv-france-2026",
    "essai-iptv-france",
    "iptv-smarters-pro-france",
    "iptv-sport-france",
  ]
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is (typeof posts)[number] => Boolean(p))
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* 1) Hero — full-bleed photo, text left (matches placement reference) */}
      <section
        className="relative isolate overflow-hidden bg-black"
        style={{ height: "calc(100svh - var(--site-header-h))" }}
      >
        <Image
          src={heroImage}
          alt="IPTV France famille sur Smart TV — MeilleurIPTVFrance avec chaînes FR, sport et VOD"
          title="IPTV France — famille devant la TV avec MeilleurIPTVFrance"
          fill
          priority
          quality={92}
          className="object-cover object-[68%_42%] sm:object-[72%_40%] lg:object-[75%_38%]"
          sizes="100vw"
        />
        {/* Left readability only — photo stays clear on the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent md:from-black/95 md:via-black/55 md:to-transparent lg:via-black/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25"
          aria-hidden="true"
        />

        <div className="section-shell relative flex h-full items-center py-6">
          <div className="w-full max-w-[36rem] lg:max-w-[38rem]">
            <p className="animate-rise-y label flex items-center gap-3">
              <span className="inline-block h-0.5 w-8 bg-pt-green-bright" aria-hidden="true" />
              MeilleurIPTVFrance
            </p>
            <h1 className="animate-rise-y-delay-1 mt-4 text-[32px] leading-[1.05] tracking-[-1px] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]">
              IPTV France — chaînes FR, sport et VOD
            </h1>
            <p className="animate-rise-y-delay-1 mt-3 max-w-lg text-[16px] leading-[1.35] tracking-[-0.2px] text-white/90 sm:text-[18px] md:text-[20px]">
              Abonnement IPTV France pour Smart TV, Android et Fire Stick, avec la Ligue 1 au catalogue et un support en
              français.
            </p>
            <p className="animate-rise-y-delay-2 mt-4 max-w-md text-[14px] leading-[1.45] text-slate md:text-[15px]">
              Consultez le prix IPTV France, choisissez 1 à 3 connexions et demandez l&apos;essai IPTV France de 24 heures avant
              d&apos;acheter.
            </p>
            <div className="animate-rise-y-delay-2 mt-6 flex flex-wrap gap-3">
              <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les tarifs IPTV France">
                Voir les tarifs IPTV France
              </Link>
              <Link
                href="/blog/essai-iptv-france"
                className="btn btn-ghost"
                aria-label="Comment fonctionne l'essai IPTV France"
              >
                Essai IPTV France 24 h
              </Link>
            </div>
            <p className="mt-4 text-[12px] text-muted md:text-[13px]">
              Garantie 7 jours · activation après le paiement · installation guidée
            </p>
          </div>
        </div>
      </section>

      {/* 2) O que inclui */}
      <section className="border-t border-line bg-surface py-16 md:py-20" aria-labelledby="o-que-inclui-heading">
        <div className="section-shell">
          <p className="label">Le service</p>
          <h2
            id="o-que-inclui-heading"
            className="mt-4 max-w-3xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]"
          >
            Ce que comprend MeilleurIPTVFrance
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Chaînes en direct, VOD, connexions et support — l&apos;essentiel avant de comparer les forfaits dans{" "}
            <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
              Tarifs
            </Link>
            .
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "+45 000 chaînes en direct",
                body: "Chaînes françaises, sport et options internationales dans le même forfait.",
              },
              {
                title: "Films et séries (VOD)",
                body: "Bibliothèque à la demande en plus des chaînes en direct — le détail est dans Chaînes.",
              },
              {
                title: "1, 2 ou 3 connexions",
                body: "Choisissez combien d'écrans vous pouvez utiliser en même temps.",
              },
              {
                title: "Support 24/7",
                body: "Aide en français par e-mail et WhatsApp.",
              },
              {
                title: "Disponibilité 99,9 %",
                body: "Engagement de service ; la fluidité dépend aussi de votre réseau.",
              },
              {
                title: "Essai 24 h · garantie 7 jours",
                body: "Validez avant de payer ; après l'achat, la politique de remboursement s'applique.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="text-[18px] text-white md:text-[20px]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-slate">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3) Pricing first (was too late) */}
      <section className="section-shell py-16 md:py-24">
        <Pricing />
      </section>

      <ClientReviews />

      <section className="section-shell pb-12 md:pb-16" aria-labelledby="home-packs-heading">
        <p className="label">Packs mis en avant</p>
        <h2
          id="home-packs-heading"
          className="mt-4 max-w-3xl text-[28px] tracking-[-0.6px] text-white md:text-[36px]"
        >
          Quatre forfaits avec leur propre page
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packList.map((pack) => {
            const price = pack.getPrice();
            const isTopSeller = pack.slug === "basico";
            return (
              <li key={pack.path}>
                <Link
                  href={pack.path}
                  className={`relative block h-full border bg-deep p-5 pt-7 transition hover:border-white/25 ${
                    isTopSeller ? "border-pt-red/50" : "border-line"
                  }`}
                >
                  {isTopSeller ? (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-pt-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
                      Le plus vendu
                    </span>
                  ) : null}
                  <h3 className="text-[18px] text-white">{pack.shortName}</h3>
                  <p className="mt-2 text-[13px] text-muted">
                    {pack.durationLabel} · {pack.connections}{" "}
                    {pack.connections === 1 ? "connexion" : "connexions"}
                  </p>
                  <p className="mt-4 text-[22px] tracking-[-0.4px] text-white">
                    €{price}
                    <span className="ml-1 text-[13px] font-normal text-slate">{pack.pricePeriodLabel}</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-[14px] text-slate">
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Voir tous les forfaits
          </Link>
        </p>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <p className="label text-center">Paiements</p>
        <ul
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
          aria-label="Moyens de paiement"
        >
          {paymentMethods.map((method) => (
            <li key={method.entity} className="relative h-9 w-[72px] sm:h-10 sm:w-20">
              <Image
                src={method.src}
                alt={method.alt}
                title={method.title}
                fill
                className="object-contain"
                sizes="80px"
              />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[13px] text-muted">
          Cartes et portefeuilles numériques · accès après confirmation du paiement
        </p>
      </section>

      {/* 4) One chaînes / sport block */}
      <ChannelsShowcase />

      {/* On demand / VOD */}
      <section className="border-t border-line py-20 md:py-28" aria-labelledby="vod-heading">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">On demand</p>
              <h2
                id="vod-heading"
                className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[40px]"
              >
                Films et séries à regarder quand vous voulez
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
                VOD dans le même service que les chaînes en direct : plus de 200&nbsp;000 films et plus de 40&nbsp;000 séries. Idéal pour
                les soirées sans grille fixe — vous commencez à regarder après l&apos;activation.
              </p>
            </div>
            <Link href="/chaines" className="btn btn-ghost">
              Voir les chaînes
            </Link>
          </div>
          <div
            className="relative mt-2 h-[176px] w-full max-w-full overflow-hidden sm:h-[197px] md:h-[224px]"
            role="region"
            aria-label="Catalogue VOD — films et séries mis en avant"
          >
            <div className="animate-vod-marquee absolute top-0 left-0 flex w-max gap-3 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {[...posterImages.slice(0, 10), ...posterImages.slice(0, 10)].map((poster, index) => {
                const isDuplicate = index >= 10;
                return (
                  <Image
                    key={`${poster.entity}-${index}`}
                    src={poster.src}
                    alt={poster.alt}
                    title={isDuplicate ? undefined : poster.title}
                    width={168}
                    height={224}
                    className="img-frame h-[176px] w-[132px] shrink-0 object-cover sm:h-[197px] sm:w-[148px] md:h-[224px] md:w-[168px]"
                    sizes="168px"
                    quality={75}
                    draggable={false}
                    aria-hidden={isDuplicate || undefined}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {entertainmentBrands.map((brand) => (
              <div key={brand.entity} className="relative h-10 w-20">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  title={brand.title}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] text-muted">
            Catalogue mis à jour régulièrement — films et séries à la demande dans le forfait
          </p>
        </div>
      </section>

      {/* 5) Devices */}
      <section className="section-shell py-16 md:py-20" aria-labelledby="devices-heading">
        <p className="label">Compatibilité</p>
        <h2
          id="devices-heading"
          className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]"
        >
          Fonctionne sur les appareils que vous avez déjà
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.5] text-slate">
          Smart TV, Fire Stick, Android, iOS, MAG ou PC — installez un lecteur et saisissez les identifiants après le
          paiement.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {homeDeviceExpectations.map((device) => (
            <div key={device.title}>
              <h3 className="text-[18px] text-white md:text-[20px]">{device.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-slate">{device.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/applications" className="btn btn-ghost">
            Applications
          </Link>
          <Link href="/guides-installation" className="btn btn-ghost">
            Guides d&apos;installation
          </Link>
        </div>
      </section>

      {/* 6) Essai + garantie */}
      <section className="section-shell pb-16 md:pb-20" aria-labelledby="garantie-heading">
        <div className="border border-line bg-surface px-6 py-10 md:px-10 md:py-12">
          <p className="label">Avant et après l&apos;achat</p>
          <h2
            id="garantie-heading"
            className="mt-4 max-w-2xl text-[28px] tracking-[-0.6px] text-white md:text-[36px]"
          >
            Essai de 24 heures et garantie de 7 jours
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[18px] text-white">Essai de 24 heures</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Demandez un essai au support avant de payer — validez l&apos;appareil et le réseau.{" "}
                <Link href="/blog/essai-iptv-france" className="text-white underline-offset-4 hover:underline">
                  Comment demander l&apos;essai
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-[18px] text-white">Garantie de 7 jours</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Après l&apos;achat, selon la{" "}
                <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
                  politique de remboursement
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits">
              Voir les forfaits
            </Link>
            <Link href="/questions-frequentes" className="btn btn-ghost">
              Questions fréquentes
            </Link>
          </div>
        </div>
      </section>

      {/* 7) Compact hubs */}
      <HomeHeadAuthority />

      {/* 8) FAQ */}
      <section id="faq" className="section-shell py-16 md:py-20">
        <p className="label mb-4">Support</p>
        <h2 className="mb-8 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">Questions fréquentes</h2>
        <FAQ items={homeFaqs} />
        <p className="mt-8 text-[14px] text-slate">
          Plus de réponses dans la{" "}
          <Link href="/questions-frequentes" className="text-white hover:underline">
            FAQ complète
          </Link>
          .
        </p>
      </section>

      {/* 9) Comment commencer (short) */}
      <section className="border-t border-line bg-deep py-16 md:py-20" aria-labelledby="como-comecar-heading">
        <div className="section-shell">
          <p className="label">Pas à pas</p>
          <h2
            id="como-comecar-heading"
            className="mt-4 text-[28px] text-white md:text-[36px] md:tracking-[-0.9px]"
          >
            Comment commencer
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Choisir le forfait", b: "Durée et 1 à 3 connexions dans Tarifs." },
              { t: "Payer", b: "Paiement sur le site — paiement unique." },
              { t: "Recevoir l'accès", b: "Identifiants après confirmation." },
              { t: "Installer et regarder", b: "Lecteur + Xtream ; guides si vous en avez besoin." },
            ].map((step, i) => (
              <li key={step.t} className="border-t border-line pt-4">
                <span className="micro text-white">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[16px] text-white">{step.t}</h3>
                <p className="mt-2 text-[13px] leading-[1.45] text-slate">{step.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits">
              Voir les forfaits
            </Link>
            <Link href="/guides-installation" className="btn btn-ghost">
              Guides d&apos;installation
            </Link>
          </div>
        </div>
      </section>

      {/* 10) Blog + links + CTA */}
      <section className="section-shell py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="label">Guides</p>
            <h2 className="mt-4 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">Articles utiles</h2>
          </div>
          <Link href="/blog" className="text-[14px] text-slate hover:text-white">
            Voir le blog
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="img-frame relative aspect-[16/10]">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  title={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="25vw"
                />
              </div>
              <h3 className="mt-4 text-[18px] leading-[1.15] text-white group-hover:text-slate md:text-[20px]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] text-mid">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <RelatedContent
          title="Pages importantes"
          links={[
            {
              href: "/quest-ce-que-iptv",
              label: "Qu'est-ce que l'IPTV",
              description: "Définition et fonctionnement.",
            },
            {
              href: "/chaines",
              label: "Chaînes IPTV France",
              description: "Catalogue FR et sport.",
            },
            {
              href: "/applications",
              label: "Applications IPTV",
              description: "Appareils et installation.",
            },
            {
              href: "/tarifs",
              label: "Acheter IPTV France",
              description: "Forfaits, tarifs et connexions.",
            },
            {
              href: "/questions-frequentes",
              label: "Questions fréquentes",
              description: "Réponses du support.",
            },
            {
              href: "/blog/meilleur-iptv-france-2026",
              label: "Meilleur IPTV France 2026",
              description: "Checklist avant de vous abonner.",
            },
            {
              href: "/blog/iptv-vs-tv-payante-france",
              label: "IPTV vs TV payante",
              description: "Comparaison complète dans le blog.",
            },
            {
              href: "/blog/glossaire-iptv-france",
              label: "Glossaire IPTV",
              description: "EPG, VOD, Xtream, M3U.",
            },
          ]}
        />

        <div className="mt-16 border border-line bg-deep px-6 py-10 text-center md:px-10">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[36px]">Prêt à commencer ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-slate">
            Comparez les forfaits, demandez l&apos;essai de 24 heures si vous voulez valider le réseau, et comptez sur la garantie de 7 jours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits">
              Voir les forfaits
            </Link>
            <Link href="/a-propos" className="btn btn-ghost">
              À propos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
