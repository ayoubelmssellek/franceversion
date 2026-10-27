import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { aboutPageJsonLd, buildMetadata } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

const pageDescription =
  "À propos de MeilleurIPTVFrance : qui nous sommes, ce que nous proposons et comment nous accompagnons les clients en France — assistance 24h/24, large catalogue, essai de 24 heures et garantie de 7 jours.";

export const metadata: Metadata = buildMetadata({
  title: "MeilleurIPTVFrance — à propos du service IPTV France",
  description: pageDescription,
  path: "/a-propos",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
];

function supportWhatsAppHref(): string {
  const message = [
    "Bonjour MeilleurIPTVFrance,",
    "",
    "Je souhaite une précision sur le service / demander l’essai de 24 heures.",
  ].join("\n");
  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

export default function AProposPage() {
  const wa = supportWhatsAppHref();

  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          aboutPageJsonLd({
            name: "À propos de MeilleurIPTVFrance",
            description: pageDescription,
            path: "/a-propos",
          }),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">À propos de MeilleurIPTVFrance</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Qui nous sommes — MeilleurIPTVFrance
      </h1>
      <p className="mt-4 max-w-3xl text-[16px] leading-[1.55] text-slate">
        {site.name} est un service IPTV payant pensé pour qui, en France, veut des chaînes en direct, du sport et du VOD
        sur l’appareil qu’il a déjà — avec des forfaits publics, une installation guidée et une assistance en français
        quand quelque chose bloque.
      </p>
      <p className="mt-4 max-w-3xl text-[16px] leading-[1.55] text-slate">
        Cette page explique comment nous fonctionnons, ce qui est inclus, quel type d’assistance vous pouvez attendre et
        comment réduire le risque avant de vous abonner. Nous ne vous demandons pas une confiance aveugle : nous montrons
        le modèle de service et nous renvoyons au catalogue, aux tarifs et aux vrais tutoriels du site.
      </p>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Notre approche</h2>
        <p>
          Beaucoup de gens cherchent l’IPTV après s’être heurtés à des bouquets rigides, des engagements ou des « listes »
          partagées qui changent d’adresse d’une semaine à l’autre. Notre position est simple : vendre l’accès à un
          service avec une activation claire, un nombre de connexions défini et quelqu’un qui répond en français quand la
          connexion ou le réseau lâche.
        </p>
        <p>
          Nous préférons expliquer ce qui est inclus — et ce qui dépend de votre Internet ou de votre appareil — plutôt
          que de promettre des miracles. Les forfaits sont sur{" "}
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Tarifs
          </Link>
          ; le catalogue et le sport, sur{" "}
          <Link href="/chaines" className="text-white underline-offset-4 hover:underline">
            Chaînes
          </Link>
          ; l’installation, dans{" "}
          <Link href="/applications" className="text-white underline-offset-4 hover:underline">
            Applications
          </Link>{" "}
          et dans les{" "}
          <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
            guides par appareil
          </Link>
          .
        </p>
        <p>
          Sur le nom : « MeilleurIPTVFrance » et le domaine meilleuresiptvfrance.shop identifient ce service. Des noms
          proches sur d’autres boutiques ou réseaux ne sont pas ce site — vérifiez toujours le site et l’e-mail
          d’assistance ({site.email}) avant de payer.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="a-propos-chiffres-heading">
        <h2 id="a-propos-chiffres-heading" className="text-[24px] text-white">
          MeilleurIPTVFrance en chiffres
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-[1.55] text-slate">
          Chiffres du service que vous pouvez confronter au tableau des forfaits et au catalogue. La disponibilité de
          chaque chaîne ou titre au quotidien dépend du forfait actif et des mises à jour du catalogue.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "+45 000", d: "Chaînes en direct" },
            { t: "+200 000", d: "Films en VOD" },
            { t: "+40 000", d: "Séries en VOD" },
            { t: "99,9 %", d: "Disponibilité" },
            { t: "24/7", d: "Assistance" },
            { t: "1 · 2 · 3", d: "Connexions par forfait" },
          ].map((item) => (
            <li key={item.d} className="border border-line bg-deep px-5 py-6">
              <p className="text-[28px] tracking-[-0.6px] text-white">{item.t}</p>
              <p className="mt-2 text-[14px] text-slate">{item.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-[14px] text-slate">
          Dans les packs principaux :{" "}
          <Link href="/pack-trimestriel" className="text-white underline-offset-4 hover:underline">
            Trimestriel 25 €
          </Link>
          ,{" "}
          <Link href="/pack-basique" className="text-white underline-offset-4 hover:underline">
            Basique 45 €
          </Link>
          ,{" "}
          <Link href="/pack-premium" className="text-white underline-offset-4 hover:underline">
            Premium 89 €
          </Link>{" "}
          et{" "}
          <Link href="/pack-famille" className="text-white underline-offset-4 hover:underline">
            Famille 104 €
          </Link>
          . Comparez le tableau complet sur{" "}
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Tarifs
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Ce que nous proposons</h2>
        <p>
          Le service réunit la télévision en direct et la bibliothèque à la demande dans un seul accès, avec une
          connexion dans le lecteur (en général Xtream Codes) après l’activation du forfait.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Chaînes en direct (+45 000)</strong> — avec un focus sur les contenus français
            et le sport, selon le catalogue actif de votre compte.
          </li>
          <li>
            <strong className="text-white">VOD</strong> — +200 000 films et +40 000 séries, à regarder quand vous voulez,
            en plus du direct.
          </li>
          <li>
            <strong className="text-white">Qualité</strong> — flux en HD / FHD et jusqu’en 4K lorsque la source,
            l’appareil et votre connexion Internet le permettent.
          </li>
          <li>
            <strong className="text-white">EPG et replay</strong> — guide des programmes et reprise des émissions
            lorsqu’ils font partie du service et du lecteur.
          </li>
          <li>
            <strong className="text-white">Appareils</strong> — Smart TV, Android, Fire Stick, iOS, MAG et PC, avec des
            tutoriels dédiés.
          </li>
          <li>
            <strong className="text-white">Connexions</strong> — forfaits de 1, 2 ou 3 flux simultanés, pour s’adapter à
            votre foyer sans prétendre à un « illimité ».
          </li>
        </ul>
        <p>
          Vous voulez comprendre la technologie en général ? Lisez{" "}
          <Link href="/quest-ce-que-iptv" className="text-white underline-offset-4 hover:underline">
            qu’est-ce que l’IPTV
          </Link>
          . Vous voulez des exemples de chaînes et de sport ? Ouvrez{" "}
          <Link href="/chaines" className="text-white underline-offset-4 hover:underline">
            Chaînes IPTV France
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-6 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Pourquoi choisir MeilleurIPTVFrance</h2>
        <div>
          <h3 className="text-[18px] text-white">Un focus sur les habitudes françaises</h3>
          <p className="mt-2">
            Nous priorisons le quotidien en France : info, divertissement et sport (dont Canal+ et les compétitions
            pertinentes lorsqu’elles font partie du catalogue, comme la Ligue 1). Le service convient à qui veut un écran
            principal à la maison — et aussi à qui a besoin d’un mobile ou d’une tablette comme second écran, dans la
            limite de connexions du forfait.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Une installation guidée, pas « débrouillez-vous »</h3>
          <p className="mt-2">
            Après le paiement, vous recevez les identifiants et vous suivez le guide de votre appareil. La plupart des
            problèmes apparaissent à la première connexion (URL, mot de passe, type de compte dans le lecteur) — c’est là
            que l’assistance et les tutoriels font la différence. Commencez par le hub des{" "}
            <Link href="/applications" className="text-white underline-offset-4 hover:underline">
              applications
            </Link>{" "}
            ou par l’{" "}
            <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
              index d’installation
            </Link>
            .
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Des connexions honnêtes</h3>
          <p className="mt-2">
            Un écran qui lit compte comme une connexion. Si le salon et la chambre regardent le match en même temps, il
            vous faut deux connexions — pas un argumentaire d’« écrans illimités ». Les packs et le tableau des tarifs
            rendent ce choix explicite.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">De la continuité les soirs de match</h3>
          <p className="mt-2">
            Nous visons une expérience stable pour l’usage quotidien et les pics d’audience (disponibilité de 99,9 %).
            Même ainsi, la qualité sur votre canapé dépend aussi du Wi‑Fi, de la box et du débit de la chaîne. Dans les{" "}
            <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
              questions fréquentes
            </Link>{" "}
            et sur le blog, vous trouverez des checklists pour quand l’image se coupe.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">De vraies personnes à l’assistance</h3>
          <p className="mt-2">
            Écrivez-nous sur WhatsApp (depuis le site) et par e-mail — pas à un chatbot générique qui ne connaît pas votre
            forfait. Le détail de ce que vous pouvez attendre est dans la section suivante.
          </p>
        </div>
      </section>

      <section className="mt-16 max-w-3xl border border-line bg-surface p-6 md:p-8">
        <h2 className="text-[24px] text-white">Une vraie assistance en français</h2>
        <p className="mt-3 text-[15px] leading-[1.55] text-slate">
          Assistance 24h/24 pour les demandes urgentes de connexion et d’activation. Aux pics (soirs de match,
          week-ends), les questions plus complexes peuvent prendre plus de temps — mais le canal existe et répond en
          français.
        </p>
        <ul className="mt-6 space-y-3 text-[14px] text-slate">
          <li>
            <span className="text-white">Canaux :</span> WhatsApp (bouton / lien sur le site) et e-mail{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <span className="text-white">Première réponse habituelle :</span> de quelques minutes à quelques heures sur
            WhatsApp ; par e-mail, le jour ouvré dans la plupart des cas
          </li>
          <li>
            <span className="text-white">Nous vous aidons pour :</span> les identifiants, le choix du lecteur (par
            exemple IPTV Smarters), le renouvellement, le nombre de connexions et les erreurs de configuration fréquentes
          </li>
          <li>
            <span className="text-white">Nous ne faisons pas :</span> l’envoi de listes M3U gratuites anonymes ni
            l’assistance pour des playlists tierces trouvées sur des forums
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
            Écrire sur WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            Envoyer un e-mail
          </a>
        </div>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">À qui s’adresse le service</h2>
        <p>Il convient surtout si vous vous reconnaissez dans l’un de ces profils :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Un écran principal</strong> — Smart TV ou Fire Stick au salon, forfait à 1
            connexion (par exemple pack basique ou trimestriel).
          </li>
          <li>
            <strong className="text-white">Un foyer avec plusieurs écrans</strong> — salon + chambre ou tablette en même
            temps : 2 connexions (premium) ou 3 (famille).
          </li>
          <li>
            <strong className="text-white">Le sport</strong> — qui veut organiser ses favoris Canal+ / Ligue 1 et a
            besoin d’un réseau et de connexions à la hauteur le soir du match.
          </li>
          <li>
            <strong className="text-white">Le quotidien et le VOD</strong> — info et divertissement français en semaine ;
            films et séries quand le direct ne suffit pas.
          </li>
          <li>
            <strong className="text-white">Qui veut valider avant de payer l’année</strong> — commencez par l’essai de
            24 heures et, si cela a du sens, par l’engagement le plus court avant l’annuel.
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Essai, garantie et confiance</h2>
        <p>
          Vous pouvez demander un <strong className="text-white">essai de 24 heures</strong> à l’assistance avant de
          payer, pour valider la Smart TV, le Fire Stick ou le mobile sur votre réseau. Ce n’est pas de l’IPTV gratuit
          permanent : cela sert à réduire le risque.
        </p>
        <p>
          Après l’achat, la <strong className="text-white">garantie de satisfaction de 7 jours</strong> s’applique selon
          les termes de la{" "}
          <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
            politique de remboursement
          </Link>
          . Lisez aussi les{" "}
          <Link href="/conditions" className="text-white underline-offset-4 hover:underline">
            conditions d’utilisation
          </Link>{" "}
          et la{" "}
          <Link href="/politique-de-confidentialite" className="text-white underline-offset-4 hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
        <p>
          Plus de détail sur le déroulement de l’essai :{" "}
          <Link href="/blog/essai-iptv-france" className="text-white underline-offset-4 hover:underline">
            Essai IPTV France
          </Link>
          . Sur les listes gratuites et les risques :{" "}
          <Link href="/blog/liste-iptv-france-gratuite" className="text-white underline-offset-4 hover:underline">
            Liste IPTV France gratuite — risques
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Engagements de service</h2>
        <p>
          Nous ne publions pas d’avis inventés ni de noms de clients fictifs en guise de preuve. À la place, voici les
          engagements sur lesquels vous pouvez compter dans le fonctionnement :
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-white">Activation après le paiement</strong> — nous envoyons les accès et nous vous
            aidons si la première connexion échoue.
          </li>
          <li>
            <strong className="text-white">Tarifs et connexions visibles</strong> — packs dès 25 € (trimestriel), 45 €
            (basique), 89 € (premium) et 104 € (famille), avec 1, 2 ou 3 connexions selon le forfait.
          </li>
          <li>
            <strong className="text-white">Assistance 24h/24</strong> — e-mail et WhatsApp pour l’installation, le
            renouvellement et les problèmes de configuration.
          </li>
          <li>
            <strong className="text-white">Transparence sur l’essai et la garantie</strong> — 24 heures sur demande ; 7
            jours de garantie selon les termes publiés.
          </li>
          <li>
            <strong className="text-white">Large catalogue</strong> — direct et VOD dans les dimensions indiquées, avec
            une qualité jusqu’en 4K lorsque toute la chaîne (source, réseau, appareil) le permet.
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl border border-line bg-deep p-6 md:p-8">
        <h2 className="text-[24px] text-white">Contact</h2>
        <ul className="mt-4 space-y-3 text-[14px] text-slate">
          <li>
            E-mail :{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            WhatsApp :{" "}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
              envoyer un message depuis le site
            </a>{" "}
            (le numéro n’est pas publié en clair sur le site)
          </li>
          <li>
            Site :{" "}
            <Link href="/" className="text-white underline-offset-4 hover:underline">
              Page d’accueil
            </Link>
          </li>
        </ul>
      </section>

      <RelatedContent
        title="Continuer"
        links={[
          {
            href: "/tarifs",
            label: "Forfaits et tarifs",
            description: "Tableau complet et packs avec 1, 2 ou 3 connexions.",
          },
          {
            href: "/chaines",
            label: "Chaînes et sport",
            description: "Catalogue français, Canal+ et catégories.",
          },
          {
            href: "/applications",
            label: "Applications et appareils",
            description: "Lecteurs et vue d’ensemble de l’installation.",
          },
          {
            href: "/questions-frequentes",
            label: "Questions fréquentes",
            description: "Installation, paiement, essai et assistance.",
          },
          {
            href: "/quest-ce-que-iptv",
            label: "Qu’est-ce que l’IPTV",
            description: "Comment fonctionne la technologie et quels sont les prérequis.",
          },
          {
            href: "/renouveler",
            label: "Renouveler l’abonnement",
            description: "Vous êtes déjà client ? Prolongez votre accès.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Prêt pour l’étape suivante ?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Comparez les forfaits ou demandez l’essai de 24 heures à l’assistance pour valider votre réseau et votre
          appareil principal.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tarifs" className="btn btn-solid">
            Voir les forfaits
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Demander l’essai de 24 heures
          </a>
          <Link href="/chaines" className="btn btn-ghost">
            Voir les chaînes
          </Link>
        </div>
      </section>
    </div>
  );
}
