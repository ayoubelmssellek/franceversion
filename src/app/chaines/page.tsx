import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ChannelCategories from "@/components/channels/ChannelCategories";
import ChannelsFinalCta from "@/components/channels/ChannelsFinalCta";
import ChannelsHero from "@/components/channels/ChannelsHero";
import ChannelsSportAuthority from "@/components/channels/ChannelsSportAuthority";
import ChannelsStats from "@/components/channels/ChannelsStats";
import FeaturedFrenchChannels from "@/components/channels/FeaturedFrenchChannels";
import InternationalChannels from "@/components/channels/InternationalChannels";
import FrenchSports from "@/components/channels/FrenchSports";
import StreamingPlatforms from "@/components/channels/StreamingPlatforms";
import WhyLibrary from "@/components/channels/WhyLibrary";
import RelatedContent from "@/components/RelatedContent";
import { chainesPageFaqs } from "@/data/channels-page";
import { entertainmentBrands, frenchChannelSlots, sportsBrands } from "@/data/media";
import { buildMetadata, faqJsonLd, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chaînes IPTV France — catalogue FR, sport et VOD",
  description:
    "Catalogue de chaînes IPTV France : chaînes françaises, sport avec la Ligue 1 et Canal+, EPG, films et séries. Découvrez ce que vous trouverez dans le service MeilleurIPTVFrance et comment commencer.",
  path: "/chaines",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Chaînes IPTV France", path: "/chaines" },
];

export default function ChannelsPage() {
  return (
    <main>
      <JsonLd
        data={[
          faqJsonLd(chainesPageFaqs),
          ...(frenchChannelSlots.length
            ? [
                itemListJsonLd({
                  name: "Emplacements chaînes françaises",
                  description:
                    "Emplacements réservés aux chaînes françaises sur cette page. Les logos seront ajoutés ensuite. Ce n'est pas une liste M3U à télécharger.",
                  path: "/chaines",
                  items: frenchChannelSlots.map((slot) => ({ name: slot.label })),
                }),
              ]
            : []),
        ]}
      />

      <div className="section-shell pt-8 md:pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* 1. Hero */}
      <ChannelsHero slots={frenchChannelSlots.slice(0, 8)} />

      {/* 2. Comment fonctionne le catalogue */}
      <section className="section-shell py-16 md:py-20" aria-labelledby="catalogue-heading">
        <p className="label">Comment ça marche</p>
        <h2 id="catalogue-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Comment fonctionne le catalogue de MeilleurIPTVFrance
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            MeilleurIPTVFrance est un <strong className="text-white">service IPTV payant</strong> : après l’achat, vous
            recevez des identifiants privés et vous chargez le catalogue dans un lecteur compatible (méthode habituelle :
            Xtream Codes). Les chaînes et le VOD sont rangés par catégories dans l’application — ce n’est pas une liste
            M3U anonyme partagée sur des forums.
          </p>
          <p>
            La disponibilité des chaînes et des titres peut changer. Confirmez toujours le catalogue actif dans le
            lecteur avec votre compte. Pour comprendre la technologie, lisez{" "}
            <Link href="/quest-ce-que-iptv" className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
              qu’est-ce que l’IPTV
            </Link>
            ; pour choisir le lecteur, consultez les{" "}
            <Link href="/applications" className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
              applications compatibles
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3. Catégories */}
      <ChannelCategories />

      {/* 4. Chaînes françaises mises en avant */}
      <FeaturedFrenchChannels slots={frenchChannelSlots} />

      {/* 5. Sport */}
      <FrenchSports sportsLogos={sportsBrands} />
      <ChannelsSportAuthority />

      {/* 6. Info, jeunesse et divertissement */}
      <section className="section-shell py-16 md:py-20" aria-labelledby="au-dela-heading">
        <p className="label">Au-delà du sport</p>
        <h2 id="au-dela-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Info, jeunesse et divertissement
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            Le catalogue ne se limite pas au football. Côté info et généralistes, vous y trouvez des chaînes françaises
            pour le quotidien, aux côtés de Canal+. Il y a aussi des catégories de divertissement et de contenus jeunesse
            pour les familles ; confirmez les noms exacts dans le lecteur après la connexion. La grille de cette page
            reste des emplacements (Chaîne française 1, et la suite) en attendant les logos.
          </p>
          <p>
            Utilisez les favoris et les catégories du lecteur pour organiser ce qui compte à la maison : l’info le
            matin, le sport le soir, la jeunesse le week-end. Pas de chiffres inventés — ce qui compte, c’est ce qui est
            actif sur votre compte.
          </p>
        </div>
      </section>

      {/* 7. Films, séries et VOD */}
      <section id="vod" className="section-shell scroll-mt-24 pb-8 md:pb-10" aria-labelledby="vod-heading">
        <p className="label">En direct et à la demande</p>
        <h2 id="vod-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Films, séries et VOD
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            <strong className="text-white">La TV en direct</strong> suit la grille linéaire (info, sport, généralistes).{" "}
            <strong className="text-white">Le VOD</strong> (vidéo à la demande) regroupe films et séries à la carte, dans
            le même service et avec le même accès. Le service compte plus de 200 000 films et plus de 40 000 séries ;
            sur cette page, nous utilisons aussi le cadre 140K+ VOD là où la découverte visuelle a du sens.
          </p>
          <p>
            Les logos de plateformes ci-dessous sont une référence visuelle du style de contenu — ils ne signifient pas
            des abonnements officiels à Netflix, Disney+, HBO Max ou équivalents inclus dans le forfait.
          </p>
        </div>
      </section>
      <StreamingPlatforms platforms={entertainmentBrands} />

      {/* 8. EPG */}
      <section className="border-y border-line bg-deep py-16 md:py-20" aria-labelledby="epg-heading">
        <div className="section-shell max-w-3xl">
          <p className="label">Guide TV</p>
          <h2 id="epg-heading" className="mt-4 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
            EPG — guide électronique des programmes
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.6] text-slate">
            <p>
              L’<strong className="text-white">EPG</strong> (Electronic Programme Guide) est la grille des horaires et
              des programmes dans le lecteur : il vous aide à voir ce qui passe maintenant, ce qui vient ensuite, et à
              naviguer plus facilement.
            </p>
            <p>
              L’accès à l’EPG se fait via l’application compatible, quand la chaîne et le catalogue l’incluent. Nous
              n’affirmons pas une couverture à 100 % de toutes les chaînes — confirmez-le sur votre appareil après la
              connexion.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Internationales */}
      <InternationalChannels />

      {/* 10. Appareils */}
      <section className="section-shell py-16 md:py-20" aria-labelledby="appareils-heading">
        <p className="label">Où regarder</p>
        <h2 id="appareils-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Appareils et applications
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            Le catalogue apparaît dans le <strong className="text-white">lecteur</strong> — l’application que vous
            installez sur l’appareil. Types d’appareils déjà couverts : Smart TV, Fire Stick, Android, iOS, MAG et PC.
            Choisissez la bonne application et configurez Xtream (ou la méthode indiquée pour MAG).
          </p>
          <p>
            Cette page explique le catalogue ; l’installation pas à pas est dans les guides. Nous ne remplaçons pas ici
            un guide complet.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/applications" className="btn btn-solid" aria-label="Voir les applications compatibles">
            Voir les applications
          </Link>
          <Link href="/guides-installation" className="btn btn-ghost" aria-label="Voir les guides d’installation">
            Guides d’installation
          </Link>
        </div>
      </section>

      {/* 11. Chiffres du service */}
      <ChannelsStats />
      <WhyLibrary />

      {/* 12. FAQ */}
      <section className="section-shell py-16 md:py-24" aria-labelledby="faq-chaines-heading">
        <h2 id="faq-chaines-heading" className="mb-8 text-[24px] text-white md:text-[36px] md:tracking-[-0.9px]">
          Questions fréquentes sur le catalogue
        </h2>
        <FAQ items={chainesPageFaqs} />
      </section>

      {/* 13. Continuer */}
      <div className="section-shell pb-16 md:pb-24">
        <RelatedContent
          title="Continuer"
          links={[
            {
              href: "/tarifs",
              label: "Tarifs et forfaits",
              description: "1, 2 ou 3 connexions — choisissez le forfait adapté.",
            },
            {
              href: "/applications",
              label: "Applications compatibles",
              description: "Smart TV, Fire Stick, Android, iOS, MAG et PC.",
            },
            {
              href: "/quest-ce-que-iptv",
              label: "Qu’est-ce que l’IPTV",
              description: "Comment fonctionnent le service et le lecteur.",
            },
            {
              href: "/guides-installation",
              label: "Guides d’installation",
              description: "Configurez le lecteur sur votre appareil.",
            },
            {
              href: "/questions-frequentes",
              label: "Questions fréquentes",
              description: "Installation, buffering et assistance.",
            },
            {
              href: "/a-propos",
              label: "À propos",
              description: "Qui nous sommes et comment nous travaillons.",
            },
            {
              href: "/blog/iptv-sport-france",
              label: "IPTV sport France",
              description: "Comment suivre le sport avec un forfait et un lecteur.",
            },
            {
              href: "/blog/iptv-ligue-1-france",
              label: "Ligue 1 et chaînes de clubs",
              description: "Sport de clubs et journées de championnat.",
            },
            {
              href: "/blog/iptv-ne-fonctionne-pas-france",
              label: "Du buffering pendant le match ?",
              description: "Checklist réseau et lecteur.",
            },
            {
              href: "/blog/liste-iptv-france-gratuite",
              label: "IPTV et listes gratuites en France",
              description: "Un contexte utile avant de décider.",
            },
          ]}
        />
      </div>

      {/* 14. Closing CTA */}
      <ChannelsFinalCta />
    </main>
  );
}
