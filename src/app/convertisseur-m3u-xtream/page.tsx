import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import M3uXtreamExplainer from "@/components/tools/M3uXtreamExplainer";

export const metadata: Metadata = buildMetadata({
  title: "Convertisseur M3U ↔ Xtream — IPTV France",
  description:
    "M3U et Xtream Codes en IPTV France : ce qu'est chaque format, quand l'utiliser et comment MeilleurIPTVFrance livre l'accès Xtream — sans listes M3U gratuites.",
  path: "/convertisseur-m3u-xtream",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Qu'est-ce que le M3U en IPTV ?",
    a: "Le M3U (ou M3U8) est un fichier ou une URL de liste de lecture dont les lignes pointent vers des flux. Détail : [qu'est-ce que le M3U](/blog/quest-ce-que-m3u). Référence technique : [Wikipédia — M3U](https://fr.wikipedia.org/wiki/M3U).",
  },
  {
    q: "Que sont les Xtream Codes ?",
    a: "Ce sont trois champs : URL du serveur, identifiant et mot de passe. Guide : [Xtream Codes France](/blog/xtream-codes-france). Accès dans le lecteur : [IPTV Smarters Pro](/blog/iptv-smarters-pro-france).",
  },
  {
    q: "Ce convertisseur fournit-il des listes IPTV gratuites ?",
    a: "Non. Nous expliquons les formats de votre liste. Nous ne publions pas de catalogues. Risques : [liste IPTV gratuite](/blog/liste-iptv-france-gratuite).",
  },
  {
    q: "Comment obtenir Xtream chez MeilleurIPTVFrance ?",
    a: "Après le paiement dans [Tarifs](/tarifs), vous recevez les identifiants par e-mail. Installez avec le guide d'[installation](/guides-installation).",
  },
];

export default function ConvertisseurM3uXtreamPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Convertisseur M3U ↔ Xtream", path: "/convertisseur-m3u-xtream" },
          ]}
        />
        <p className="label">Outil · IPTV France</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Convertisseur M3U ↔ Xtream — comprendre les formats
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Qui cherche « convertisseur M3U Xtream » veut brancher le lecteur sans erreur. Ici, la différence est expliquée
          et un lecteur simple analyse <strong className="text-white">votre</strong> liste — ce n&apos;est pas un dépôt de listes
          gratuites. Consultez aussi{" "}
          <Link href="/blog/quest-ce-que-m3u" className={linkClass}>
            qu&apos;est-ce que le M3U
          </Link>{" "}
          et{" "}
          <Link href="/blog/xtream-codes-france" className={linkClass}>
            Xtream Codes
          </Link>
          .
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">M3U et Xtream Codes</h2>
          <p>
            <strong className="text-white">M3U :</strong> une URL ou un fichier avec des entrées de chaînes. Format décrit sur{" "}
            <a href="https://fr.wikipedia.org/wiki/M3U" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Wikipédia (M3U)
            </a>
            . Utile lorsque le support vous envoie un lien HTTPS privé.
          </p>
          <p>
            <strong className="text-white">Xtream :</strong> un accès à trois champs. C&apos;est le parcours standard de MeilleurIPTVFrance —
            tutoriel{" "}
            <Link href="/blog/iptv-smarters-pro-france" className={linkClass}>
              IPTV Smarters Pro
            </Link>{" "}
            et{" "}
            <Link href="/blog/xtream-codes-france" className={linkClass}>
              Xtream Codes France
            </Link>
            .
          </p>
          <p>
            Risques des listes publiques :{" "}
            <Link href="/blog/liste-iptv-france-gratuite" className={linkClass}>
              liste IPTV gratuite
            </Link>
            . En France, pour la propriété intellectuelle dans l&apos;environnement numérique, consultez le{" "}
            <a
              href="https://www.culture.gouv.fr/Thematiques/Propriete-intellectuelle"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              ministère de la Culture (propriété intellectuelle)
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[24px] text-white">Lecteur pédagogique (collez votre liste)</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-slate">
            Collez des lignes M3U qui vous appartiennent déjà (par exemple une exportation du lecteur). L&apos;outil compte les
            entrées et indique si cela ressemble à une liste — tout se passe dans votre navigateur, sans rien envoyer à notre serveur. Après
            une mise à jour :{" "}
            <Link href="/mettre-a-jour-liste-m3u" className={linkClass}>
              mettre à jour la liste M3U
            </Link>
            .
          </p>
          <div className="mt-6">
            <M3uXtreamExplainer />
          </div>
        </section>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Comment MeilleurIPTVFrance livre l&apos;accès</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Choisissez le forfait dans{" "}
              <Link href="/tarifs" className={linkClass}>
                Tarifs
              </Link>{" "}
              (ou le{" "}
              <Link href="/pack-trimestriel" className={linkClass}>
                pack trimestriel
              </Link>
              ).
            </li>
            <li>Recevez les identifiants Xtream par e-mail après le paiement.</li>
            <li>
              Installez avec le guide d&apos;{" "}
              <Link href="/guides-installation" className={linkClass}>
                installation
              </Link>{" "}
              ou le hub des{" "}
              <Link href="/applications" className={linkClass}>
                applications
              </Link>
              .
            </li>
            <li>
              Si le compte échoue ensuite :{" "}
              <Link href="/verificateur-compte-iptv" className={linkClass}>
                vérifier le compte
              </Link>{" "}
              ou{" "}
              <Link href="/iptv-france-whatsapp" className={linkClass}>
                WhatsApp
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Questions fréquentes</h2>
          <FAQ items={pageFaqs} />
        </section>

        <RelatedContent
          title="Continuer"
          links={[
            { href: "/tarifs", label: "Acheter IPTV France", description: "Forfaits et paiement." },
            { href: "/verificateur-compte-iptv", label: "Vérifier le compte / l'expiration", description: "État du forfait." },
            { href: "/blog/quest-ce-que-m3u", label: "Qu'est-ce que le M3U", description: "Explication du format." },
            { href: "/mettre-a-jour-liste-m3u", label: "Mettre à jour la liste M3U", description: "Rechargement et renouvellement." },
            { href: "/blog/xtream-codes-france", label: "Xtream Codes", description: "Les 3 champs." },
            { href: "/questions-frequentes", label: "Questions fréquentes IPTV France", description: "Questions générales." },
          ]}
        />
      </div>
    </>
  );
}
