import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RenewForm from "@/components/RenewForm";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Renouveler l'abonnement IPTV France",
  description:
    "Renouveler IPTV France : prolongez votre abonnement MeilleurIPTVFrance sans perdre l'accès. E-mail ou identifiant — forfaits et connexions supplémentaires à part.",
  path: "/renouveler",
});

export default function RenewPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Renouveler IPTV", path: "/renouveler" },
        ]}
      />
      <p className="label">Clients existants</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Renouveler l&apos;abonnement IPTV France
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Cette page est réservée à ceux qui ont déjà un compte MeilleurIPTVFrance et veulent prolonger l&apos;accès. Si vous n&apos;êtes pas encore
        client, allez sur{" "}
        <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
          Acheter IPTV France
        </Link>{" "}
        — les forfaits et tarifs du premier achat sont là, pas ici.
      </p>

      <section className="mt-10 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
        <h2 className="text-[20px] text-white">Ce qui se passe au renouvellement</h2>
        <p>
          En renouvelant, vous conservez en principe le même identifiant et la même configuration dans le lecteur (Smarters, Smart
          TV, Fire Stick). Il n&apos;est pas nécessaire de tout réinstaller — il suffit de vérifier que la période reste active. Si vous voulez{" "}
          <strong className="text-white">plus de connexions</strong> (passer de 1 à 2, par exemple), indiquez-le dans la
          demande ou choisissez le forfait adapté sur la page des tarifs et parlez-en au support pour ajuster le compte.
        </p>
        <p>
          Renouveler à temps évite le classique « ça coupe à la mi-temps ». Si la date de fin approche, utilisez
          le formulaire ci-dessous avec l&apos;e-mail de l&apos;achat ou l&apos;identifiant Xtream.
        </p>
      </section>

      <RenewForm />

      <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
        <h2 className="text-[20px] text-white">Renouveler ou racheter</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Renouveler :</strong> vous avez déjà l&apos;accès — vous prolongez le même accès.
          </li>
          <li>
            <strong className="text-white">Acheter un nouveau forfait :</strong> première fois, ou vous voulez changer la
            durée ou les connexions via le paiement sur /tarifs.
          </li>
        </ul>
        <p>
          Des questions sur le prix ?{" "}
          <Link href="/blog/iptv-france-prix-forfaits" className="text-white underline-offset-4 hover:underline">
            IPTV France : prix et forfaits
          </Link>
          . Un problème technique après le renouvellement ?{" "}
          <Link
            href="/blog/iptv-ne-fonctionne-pas-france"
            className="text-white underline-offset-4 hover:underline"
          >
            Checklist si l&apos;IPTV ne fonctionne pas
          </Link>
          .
        </p>
      </section>

      <RelatedContent
        title="Aide supplémentaire"
        links={[
          {
            href: "/tarifs",
            label: "Voir les forfaits (nouvel achat)",
            description: "Durées et nombre de connexions.",
          },
          {
            href: "/guides-installation",
            label: "Reconfigurer le lecteur",
            description: "Si l'accès a changé ou si l'application demande un redémarrage.",
          },
          {
            href: "/politique-de-remboursement",
            label: "Politique de remboursement",
            description: "Essai de 24 h et garantie de 7 jours.",
          },
          {
            href: "/a-propos",
            label: "À propos du service",
            description: "Support et engagements.",
          },
        ]}
      />
    </div>
  );
}
