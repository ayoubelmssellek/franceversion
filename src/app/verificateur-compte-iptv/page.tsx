import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vérificateur de compte IPTV — validité et état",
  description:
    "Comment vérifier si votre compte IPTV France est actif : date d'expiration dans le lecteur, renouvellement et contact avec le support MeilleurIPTVFrance.",
  path: "/verificateur-compte-iptv",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Comment savoir si mon compte IPTV a expiré ?",
    a: "Dans le lecteur (par exemple Smarters), ouvrez la section compte / abonnement. Si le catalogue est vide, [renouvelez](/renouveler) ou contactez le support par [WhatsApp](/iptv-france-whatsapp).",
  },
  {
    q: "Pourquoi n'y a-t-il pas de « vérificateur » automatique avec mot de passe ?",
    a: "Par sécurité : nous ne demandons pas le mot de passe Xtream dans un formulaire public. La vérification se fait dans le lecteur ou avec le support. Accès : [Xtream Codes](/blog/xtream-codes-france).",
  },
  {
    q: "Que faire si le compte est actif mais n'ouvre pas les chaînes ?",
    a: "Mettez à jour la liste ([mettre à jour la liste M3U](/mettre-a-jour-liste-m3u)), consultez [chaînes manquantes](/blog/iptv-chaines-manquantes) et [l'EPG ne charge pas](/blog/epg-ne-charge-pas).",
  },
];

export default function VerificateurComptePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Vérificateur de compte", path: "/verificateur-compte-iptv" },
          ]}
        />
        <p className="label">Outil · IPTV France</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Vérificateur de compte IPTV — comment confirmer l&apos;état
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Les recherches « vérificateur compte IPTV » veulent connaître la date d&apos;expiration sans risque. Voici la méthode
          sûre pour les clients de MeilleurIPTVFrance — sans demander le mot de passe sur un site ouvert. Vous n&apos;êtes pas encore client ?
          Comparez les{" "}
          <Link href="/tarifs" className={linkClass}>
            tarifs
          </Link>{" "}
          ou demandez l&apos;{" "}
          <Link href="/blog/essai-iptv-france" className={linkClass}>
            essai de 24 heures
          </Link>
          .
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">1) Dans le lecteur (le plus rapide)</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Ouvrez IPTV Smarters (ou votre lecteur) sur l&apos;appareil principal.</li>
            <li>Allez dans réglages / compte / abonnement.</li>
            <li>Vérifiez la date d&apos;expiration et si l&apos;accès répond encore.</li>
          </ol>
          <p>
            Accès :{" "}
            <Link href="/blog/iptv-smarters-pro-france" className={linkClass}>
              guide Smarters / Xtream
            </Link>{" "}
            · champs :{" "}
            <Link href="/blog/xtream-codes-france" className={linkClass}>
              Xtream Codes France
            </Link>
            . Applications :{" "}
            <Link href="/applications" className={linkClass}>
              applications
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">2) Renouveler si la date approche</h2>
          <p>
            Utilisez{" "}
            <Link href="/renouveler" className={linkClass}>
              Renouveler l&apos;abonnement
            </Link>{" "}
            avec l&apos;e-mail de l&apos;achat ou l&apos;identifiant Xtream. Vous évitez ainsi la coupure à la mi-temps.
            Alternative :{" "}
            <Link href="/mettre-a-jour-liste-m3u" className={linkClass}>
              mettre à jour la liste / migrer l&apos;accès
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">3) Compte actif mais catalogue étrange</h2>
          <p>
            Suivez{" "}
            <Link href="/blog/iptv-chaines-manquantes" className={linkClass}>
              chaînes manquantes
            </Link>
            ,{" "}
            <Link href="/blog/epg-ne-charge-pas" className={linkClass}>
              l&apos;EPG ne charge pas
            </Link>{" "}
            et{" "}
            <Link href="/blog/iptv-ne-fonctionne-pas-france" className={linkClass}>
              l&apos;IPTV ne fonctionne pas
            </Link>
            . Confirmez vos attentes dans{" "}
            <Link href="/chaines" className={linkClass}>
              Chaînes
            </Link>
            . Support :{" "}
            <Link href="/iptv-france-whatsapp" className={linkClass}>
              WhatsApp
            </Link>{" "}
            ou{" "}
            <Link href="/questions-frequentes" className={linkClass}>
              questions fréquentes
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
            { href: "/renouveler", label: "Renouveler maintenant", description: "Prolonger le compte existant." },
            { href: "/mettre-a-jour-liste-m3u", label: "Mettre à jour la liste / migrer", description: "Lecteur ou URL." },
            { href: "/questions-frequentes", label: "Questions fréquentes IPTV France", description: "Accès, essai et support." },
            { href: "/iptv-france-whatsapp", label: "WhatsApp MeilleurIPTVFrance", description: "Parler au support." },
            { href: "/convertisseur-m3u-xtream", label: "M3U ↔ Xtream", description: "Comprendre les formats." },
            { href: "/tarifs", label: "Tarifs", description: "Nouvel achat ou extension." },
          ]}
        />
      </div>
    </>
  );
}
