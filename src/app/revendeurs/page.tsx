import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "Revendeur IPTV France — panel et crédits",
  description:
    "Devenez revendeur IPTV en France avec MeilleurIPTVFrance : crédits, activation pour vos clients et support en français. Demandez les conditions de revente par WhatsApp.",
  path: "/revendeurs",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Que signifie être revendeur IPTV en France ?",
    a: "C'est un modèle B2B : des crédits ou des lignes pour activer des clients finaux, avec une marge pour vous. C'est distinct du forfait domestique de [Tarifs](/tarifs).",
  },
  {
    q: "Les tarifs de revente sont-ils sur le site ?",
    a: "Ils sont communiqués sur demande, selon le volume et le type de lignes. Écrivez-nous par [WhatsApp](/iptv-france-whatsapp) ou par e-mail en indiquant votre zone en France et le volume estimé.",
  },
  {
    q: "Puis-je revendre le forfait acheté dans Tarifs ?",
    a: "Non. Les forfaits de [Tarifs](/tarifs) sont à usage domestique. La revente passe par ce programme. Consultez aussi les [conditions](/conditions).",
  },
  {
    q: "Y a-t-il un support pour mes clients ?",
    a: "Nous vous aidons pour l'activation technique. Vous restez le contact commercial. Guides utiles pour vos clients : [Applications](/applications) et [Installation](/guides-installation).",
  },
];

export default function RevendeursPage() {
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    [
      "Bonjour MeilleurIPTVFrance — je souhaite des informations sur le programme REVENDEUR IPTV France.",
      "",
      "• Zone / ville :",
      "• Volume estimé (clients/mois) :",
      "• J'ai déjà revendu ? (oui/non)",
    ].join("\n"),
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Revendeurs", path: "/revendeurs" },
          ]}
        />
        <p className="label">B2B · IPTV France</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Revendeur IPTV France — MeilleurIPTVFrance
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Programme pour qui veut revendre l&apos;IPTV en France : crédits, activation et accompagnement en français. Marché
          français : nous ne sommes pas un portail de listes M3U gratuites (
          <Link href="/blog/liste-iptv-france-gratuite" className={linkClass}>
            risques des listes
          </Link>
          ). Vous êtes un client final ? Allez sur{" "}
          <Link href="/tarifs" className={linkClass}>
            Tarifs
          </Link>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa} className="btn btn-solid" target="_blank" rel="noopener noreferrer">
            Demander les conditions par WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Revendeur IPTV France")}`}
            className="btn btn-ghost"
          >
            E-mail {site.email}
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Je suis client final — voir les tarifs
          </Link>
          <Link href="/iptv-france-whatsapp" className="btn btn-ghost">
            Page WhatsApp
          </Link>
        </div>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">À qui s&apos;adresse le programme</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Magasins et techniciens qui installent Smart TV et Fire Stick — voir{" "}
              <Link href="/applications" className={linkClass}>
                Applications
              </Link>{" "}
              et les{" "}
              <Link href="/guides-installation" className={linkClass}>
                guides
              </Link>
            </li>
            <li>Revendeurs qui veulent des crédits avec un support en français</li>
            <li>Ceux qui ont besoin d&apos;une activation stable, pas de la « liste du jour »</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Ce que nous demandons au premier contact</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Zone en France (ou francophones à l&apos;étranger intéressés par la TV française — guide :{" "}
              <Link href="/blog/voir-tv-francaise-a-letranger" className={linkClass}>
                TV française à l&apos;étranger
              </Link>
              )
            </li>
            <li>Volume estimé d&apos;activations par mois</li>
            <li>Si vous utilisez déjà un panel ou des crédits chez un autre fournisseur</li>
            <li>Appareils que vous installez le plus (Stick, Samsung, LG…)</li>
          </ol>
          <p>
            Avec cela, nous vous envoyons les conditions. Clients finaux :{" "}
            <Link href="/tarifs" className={linkClass}>
              Tarifs
            </Link>
            ,{" "}
            <Link href="/questions-frequentes" className={linkClass}>
              FAQ
            </Link>{" "}
            et{" "}
            <Link href="/chaines" className={linkClass}>
              Chaînes
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Revente et forfait domestique</h2>
          <p>
            <strong className="text-white">Forfait dans Tarifs :</strong> une maison, 1 à 3 connexions — voir aussi le{" "}
            <Link href="/pack-famille" className={linkClass}>
              Pack Famille
            </Link>
            .
          </p>
          <p>
            <strong className="text-white">Revendeur :</strong> des crédits pour plusieurs clients, avec une marge pour vous.
            Partager un accès domestique n&apos;est pas de la revente et contrevient aux{" "}
            <Link href="/conditions" className={linkClass}>
              conditions
            </Link>{" "}
            et à la{" "}
            <Link href="/politique-de-remboursement" className={linkClass}>
              politique de remboursement
            </Link>
            . Contexte :{" "}
            <Link href="/a-propos" className={linkClass}>
              À propos
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Questions des revendeurs</h2>
          <FAQ items={pageFaqs} />
        </section>

        <div className="mt-14 flex flex-col justify-between gap-6 border border-line bg-surface px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[28px]">Prêt à revendre ?</h2>
            <p className="mt-2 max-w-xl text-[14px] text-slate">
              Écrivez-nous sur WhatsApp avec « revendeur » dans le message, ou utilisez la page{" "}
              <Link href="/iptv-france-whatsapp" className={linkClass}>
                IPTV France WhatsApp
              </Link>
              .
            </p>
          </div>
          <a href={wa} className="btn btn-solid shrink-0" target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
        </div>

        <RelatedContent
          title="Utile aussi"
          links={[
            { href: "/iptv-france-whatsapp", label: "WhatsApp IPTV France", description: "Contact général." },
            { href: "/applications", label: "Applications et appareils", description: "Ce que les clients installent." },
            { href: "/guides-installation", label: "Guides d'installation", description: "Pas à pas." },
            { href: "/a-propos", label: "À propos de MeilleurIPTVFrance", description: "Comment nous travaillons." },
            { href: "/tarifs", label: "Tarifs client final", description: "Ce n'est pas un tarif B2B." },
            { href: "/questions-frequentes", label: "FAQ", description: "Questions générales." },
          ]}
        />
      </div>
    </>
  );
}
