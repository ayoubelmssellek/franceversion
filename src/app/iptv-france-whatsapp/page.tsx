import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "IPTV France WhatsApp — support MeilleurIPTVFrance",
  description:
    "Contactez MeilleurIPTVFrance par WhatsApp : essai de 24 h, forfaits, installation et renouvellement. Support IPTV France en français.",
  path: "/iptv-france-whatsapp",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "WhatsApp remplace-t-il l'achat sur le site ?",
    a: "Non. Les forfaits publics sont dans [Tarifs](/tarifs). WhatsApp sert à l'essai, à l'installation et au renouvellement — pas aux listes M3U gratuites ([risques](/blog/liste-iptv-france-gratuite)).",
  },
  {
    q: "Que dois-je écrire dans le premier message ?",
    a: "Votre objectif (essai de 24 h, accès, renouvellement), l'appareil et l'e-mail de l'achat si vous êtes déjà client. Guide de l'essai : [essai IPTV France](/blog/essai-iptv-france).",
  },
  {
    q: "Je suis revendeur — est-ce le même WhatsApp ?",
    a: "Oui, indiquez « revendeur » dans le message. Page du programme : [Revendeurs](/revendeurs).",
  },
];

export default function IptvFranceWhatsappPage() {
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    "Bonjour MeilleurIPTVFrance — j'ai besoin d'aide IPTV France (essai / installation / renouvellement).",
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "WhatsApp IPTV France", path: "/iptv-france-whatsapp" },
          ]}
        />
        <p className="label">Contact · IPTV France</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          IPTV France WhatsApp — parlez avec MeilleurIPTVFrance
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Support en français pour l&apos;{" "}
          <Link href="/blog/essai-iptv-france" className={linkClass}>
            essai de 24 heures
          </Link>
          , l&apos;installation, les forfaits et le renouvellement. Nous n&apos;envoyons pas de listes gratuites — consultez les{" "}
          <Link href="/blog/liste-iptv-france-gratuite" className={linkClass}>
            risques des listes
          </Link>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa} className="btn btn-solid" target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Voir les forfaits
          </Link>
          <Link href="/blog/essai-iptv-france" className="btn btn-ghost">
            Comment demander l&apos;essai
          </Link>
          <Link href="/revendeurs" className="btn btn-ghost">
            Revendeurs
          </Link>
        </div>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Quand utiliser WhatsApp</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Demander l&apos;{" "}
              <Link href="/blog/essai-iptv-france" className={linkClass}>
                essai de 24 heures
              </Link>{" "}
              avant de payer
            </li>
            <li>
              Aide pour le premier accès{" "}
              <Link href="/blog/xtream-codes-france" className={linkClass}>
                Xtream
              </Link>
            </li>
            <li>
              Confirmer les connexions —{" "}
              <Link href="/blog/iptv-plusieurs-appareils-france" className={linkClass}>
                plusieurs appareils
              </Link>
            </li>
            <li>
              Renouvellement —{" "}
              <Link href="/renouveler" className={linkClass}>
                /renouveler
              </Link>{" "}
              ou{" "}
              <Link href="/verificateur-compte-iptv" className={linkClass}>
                vérifier le compte
              </Link>
            </li>
          </ul>
          <p>
            Vous préférez lire d&apos;abord ?{" "}
            <Link href="/questions-frequentes" className={linkClass}>
              Questions fréquentes IPTV France
            </Link>
            ,{" "}
            <Link href="/guides-installation" className={linkClass}>
              guides d&apos;installation
            </Link>{" "}
            et{" "}
            <Link href="/applications" className={linkClass}>
              Applications
            </Link>
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
            { href: "/tarifs", label: "Acheter IPTV France", description: "Forfaits et paiement." },
            { href: "/blog/essai-iptv-france", label: "Essai IPTV France", description: "Ce qu'il faut valider en 24 h." },
            { href: "/verificateur-compte-iptv", label: "État du compte", description: "Expiration et renouvellement." },
            { href: "/revendeurs", label: "Revendeurs", description: "Programme B2B." },
            { href: "/a-propos", label: "À propos", description: "Comment nous travaillons." },
            { href: "/questions-frequentes", label: "Questions fréquentes", description: "Réponses rapides." },
          ]}
        />
      </div>
    </>
  );
}
