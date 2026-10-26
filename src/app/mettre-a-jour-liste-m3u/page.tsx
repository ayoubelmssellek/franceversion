import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mettre à jour la liste M3U IPTV France",
  description:
    "Comment mettre à jour la liste M3U ou migrer vers Xtream chez MeilleurIPTVFrance : rechargement dans le lecteur, renouvellement et quand demander un nouvel accès au support.",
  path: "/mettre-a-jour-liste-m3u",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Comment mettre à jour la liste M3U dans le lecteur ?",
    a: "Réglages → Liste de lecture → Mettre à jour / Recharger, puis redémarrez l'application. Si vous utilisez Xtream, rechargez le compte — voir [Xtream Codes](/blog/xtream-codes-france).",
  },
  {
    q: "MeilleurIPTVFrance envoie-t-il une M3U publique ?",
    a: "Non. Le modèle principal est Xtream après [Tarifs](/tarifs). Listes anonymes : [risques](/blog/liste-iptv-france-gratuite).",
  },
];

export default function MettreAJourListeM3uPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Mettre à jour la liste M3U", path: "/mettre-a-jour-liste-m3u" },
          ]}
        />
        <p className="label">Outil · IPTV France</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Mettre à jour la liste M3U — ou migrer vers Xtream
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          « Mettre à jour la liste M3U » signifie en général recharger le catalogue ou obtenir un nouvel accès après un renouvellement. Chez
          MeilleurIPTVFrance, le chemin stable est Xtream — pas la recherche d&apos;URL sur les forums. Comprenez les formats avec le{" "}
          <Link href="/convertisseur-m3u-xtream" className={linkClass}>
            convertisseur M3U ↔ Xtream
          </Link>{" "}
          et{" "}
          <Link href="/blog/quest-ce-que-m3u" className={linkClass}>
            qu&apos;est-ce que le M3U
          </Link>
          .
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Rechargement dans le lecteur</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Ouvrez le lecteur sur l&apos;écran principal.</li>
            <li>Mettez à jour la liste / le compte.</li>
            <li>
              Videz le cache si l&apos;EPG échoue —{" "}
              <Link href="/blog/epg-ne-charge-pas" className={linkClass}>
                l&apos;EPG ne charge pas
              </Link>
              .
            </li>
            <li>
              Si le compte a expiré :{" "}
              <Link href="/renouveler" className={linkClass}>
                Renouveler
              </Link>{" "}
              ou confirmez l&apos;état dans le{" "}
              <Link href="/verificateur-compte-iptv" className={linkClass}>
                vérificateur de compte
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Vous avez changé d&apos;appareil ?</h2>
          <p>
            Installez avec le guide d&apos;{" "}
            <Link href="/guides-installation" className={linkClass}>
              installation
            </Link>{" "}
            ou le hub des{" "}
            <Link href="/applications" className={linkClass}>
              applications
            </Link>
            , avec les mêmes identifiants. Chaînes absentes après un changement de TV :{" "}
            <Link href="/blog/iptv-chaines-manquantes" className={linkClass}>
              liste de contrôle
            </Link>
            . Aide :{" "}
            <Link href="/iptv-france-whatsapp" className={linkClass}>
              WhatsApp
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Évitez les « listes mises à jour » anonymes</h2>
          <p>
            Les URL des forums changent et lâchent en plein match. Lisez{" "}
            <Link href="/blog/liste-iptv-france-gratuite" className={linkClass}>
              liste IPTV gratuite / risques
            </Link>
            . Référence publique sur la propriété intellectuelle en France :{" "}
            <a
              href="https://www.culture.gouv.fr/Thematiques/Propriete-intellectuelle"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ministère de la Culture
            </a>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Questions fréquentes</h2>
          <FAQ items={pageFaqs} />
        </section>

        <RelatedContent
          title="Continuer"
          links={[
            { href: "/verificateur-compte-iptv", label: "Vérifier l'état du compte", description: "Expiration et symptômes." },
            { href: "/convertisseur-m3u-xtream", label: "Convertisseur M3U ↔ Xtream", description: "Formats." },
            { href: "/blog/iptv-chaines-manquantes", label: "Chaînes manquantes", description: "Diagnostic et solution." },
            { href: "/tarifs", label: "Acheter / changer de forfait", description: "Nouvelle durée ou connexions." },
            { href: "/renouveler", label: "Renouveler", description: "Clients existants." },
            { href: "/questions-frequentes", label: "Questions fréquentes", description: "Support général." },
          ]}
        />
      </div>
    </>
  );
}
