import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { channelFaqs } from "@/data/channels-page";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

/** Visible answer may wrap “politique de remboursement”; schema uses the plain FAQ strings. */
function withRefundPolicyLink(answer: string) {
  const marker = "politique de remboursement";
  const index = answer.indexOf(marker);
  if (index === -1) return answer;
  return (
    <>
      {answer.slice(0, index)}
      <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
        {marker}
      </Link>
      {answer.slice(index + marker.length)}
    </>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Questions fréquentes IPTV France",
  description:
    "Questions fréquentes IPTV France (MeilleurIPTVFrance) : forfaits, essai de 24 h, installation, Smart TV, Xtream, Internet, sport et assistance en français.",
  path: "/questions-frequentes",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Questions fréquentes", path: "/questions-frequentes" },
];

/** Page-local FAQ hub — do not merge into /applications, /guides-installation or /chaines FAQs. */
const generales = [
  {
    q: "Qu’est-ce que MeilleurIPTVFrance ?",
    a: "C’est un service IPTV en France : vous achetez un forfait, vous recevez les identifiants et vous regardez des chaînes en direct, du sport et du VOD sur un lecteur de l’appareil que vous avez déjà. Pour la définition de la technologie, lisez Qu’est-ce que l’IPTV.",
  },
  {
    q: "Qu’est-ce qui est inclus ?",
    a: "Des chaînes en direct (dont les chaînes françaises et le sport selon le catalogue actif), des films et des séries à la demande, l’EPG lorsque la chaîne le propose et une qualité jusqu’en 4K selon votre réseau et votre appareil. Exemples sur Chaînes.",
  },
  {
    q: "MeilleurIPTVFrance est-il la même chose que l’application ?",
    a: "Non. MeilleurIPTVFrance est le service / l’abonnement. L’application (lecteur) est un logiciel tiers utilisé pour accéder au catalogue — elle n’appartient pas automatiquement à MeilleurIPTVFrance. Le choix de l’appareil et du lecteur est dans Applications.",
  },
  {
    q: "Comment contacter l’assistance ?",
    a: `Par e-mail (${site.email}) ou par WhatsApp depuis le site. Assistance 24h/24 en français pour l’achat, l’installation et le renouvellement.`,
  },
];

const legalite = [
  {
    q: "L’IPTV est-il légal en France ?",
    a: "La technologie IPTV à elle seule ne répond pas à la question : l’origine des contenus, les droits et la façon de l’utiliser comptent. Nous ne garantissons pas la légalité absolue d’un contenu. Lisez l’article sur les listes IPTV gratuites en France et les conditions d’utilisation.",
  },
  {
    q: "Pourquoi n’utilisez-vous pas de listes M3U gratuites ?",
    a: "Nous exploitons un service payant avec des identifiants privés et une assistance. Les listes M3U anonymes ou « gratuites » sont instables et risquées, et elles sont hors de notre modèle. Le contexte est dans l’article sur les listes et les risques.",
  },
  {
    q: "J’ai vu des discussions sur Internet — que dois-je vérifier ?",
    a: "Demandez des tarifs transparents, un essai court, une politique de remboursement, de vrais canaux d’assistance et évitez les listes M3U anonymes. À propos explique comment nous fonctionnons, sans inventer d’avis de tiers.",
  },
];

const forfaits = [
  {
    q: "Combien coûtent les forfaits ?",
    a: "Les packs mis en avant coûtent 25 €, 45 €, 89 € et 104 €, selon la durée et le nombre de connexions (1, 2 ou 3). Comparez-les sur la page Tarifs — paiement unique, sans renouvellement automatique surprise.",
  },
  {
    q: "Comment choisir le nombre de connexions ?",
    a: "1 connexion : un écran à la fois. 2 connexions : deux écrans simultanés (par exemple salon + mobile). 3 connexions : pack famille pour plusieurs TV. Chaque flux (direct ou VOD) compte. Détail sur Tarifs.",
  },
  {
    q: "Y a-t-il un essai ?",
    a: "Oui. Vous pouvez demander un essai de 24 heures à l’assistance avant de payer, pour valider votre appareil et votre réseau. Ce n’est pas de l’IPTV gratuit illimité.",
  },
  {
    q: "L’essai de 24 heures est-il automatique ?",
    a: "Non — il se demande à l’assistance (WhatsApp ou e-mail). Il sert à valider l’appareil et le réseau avant de payer. Pas à pas dans l’article Essai IPTV France.",
  },
  {
    q: "Où demander l’essai IPTV France ?",
    a: "Par le WhatsApp du site ou par e-mail, en indiquant votre appareil principal. L’article Essai IPTV France explique quoi valider pendant les 24 heures et la différence avec la garantie de 7 jours.",
  },
  {
    q: "Y a-t-il une garantie de remboursement ?",
    a: "Après l’achat, la garantie de satisfaction de 7 jours s’applique selon les termes de la politique de remboursement.",
  },
  {
    q: "Comment acheter et recevoir l’accès ?",
    a: "Choisissez le forfait sur Tarifs, terminez le paiement et suivez les instructions après le paiement. Vous recevez les identifiants pour configurer le lecteur. L’assistance vous aide si besoin, sans promettre de délai d’activation fixe.",
  },
  {
    q: "Comment annuler ou renouveler ?",
    a: "Il n’y a pas de renouvellement automatique surprise : l’accès s’arrête à la fin de la période payée. Vous pouvez renouveler sur /renouveler quand vous voulez. Les remboursements des 7 premiers jours suivent la politique de remboursement.",
  },
];

const appareils = [
  {
    q: "Sur quels appareils cela fonctionne-t-il ?",
    a: "Smart TV, Fire Stick, Android (mobile/box), iPhone/iPad, box MAG et PC (Windows ; le guide Windows couvre aussi macOS). Vue d’ensemble dans Applications.",
  },
  {
    q: "Quelle application dois-je utiliser ?",
    a: "Cela dépend de l’appareil. Sur Android et sur beaucoup de Smart TV, IPTV Smarters (ou un équivalent avec Xtream) est le plus courant ; sur Android TV/Fire Stick, TiviMate est aussi très utilisé. Ce sont des applications tierces. Orientation dans Applications.",
  },
  {
    q: "Faut-il un matériel spécial ?",
    a: "Non. Utilisez la Smart TV, le Fire Stick, la box Android, le mobile ou le PC que vous avez déjà. Une connexion stable améliore l’expérience en HD/4K.",
  },
  {
    q: "Quel Internet faut-il pour l’IPTV en France ?",
    a: "Pour le HD, une connexion stable d’environ 10 Mbit/s par écran suffit en général ; pour le 4K, 25 Mbit/s ou plus sur l’appareil où vous regardez aident. Le Wi‑Fi 5 GHz ou le câble Ethernet au salon réduisent le buffering. Checklist dans l’article sur le buffering. Orange, Free, SFR ou Bouygues : c’est le débit réel qui compte.",
  },
  {
    q: "Cela fonctionne-t-il hors de France ?",
    a: "Oui, tant que vous avez un Internet valide et le forfait actif — utile pour qui veut des chaînes françaises à l’étranger. L’expérience dépend du réseau local. Catalogue et attentes sur Chaînes ; l’article Voir la TV française à l’étranger précise le cadre.",
  },
  {
    q: "Faut-il un VPN pour utiliser le service ?",
    a: "Dans la plupart des foyers en France, non. Les VPN lentes ou mal configurées peuvent dégrader le flux. N’utilisez un VPN que si l’assistance vous l’indique. Plus de contexte dans les articles sur le VPN et le buffering.",
  },
];

const installation = [
  {
    q: "Où sont les tutoriels ?",
    a: "Dans le hub des guides d’installation — Smart TV, Android, Fire Stick, iOS, MAG et Windows/PC. Applications résume les appareils et les lecteurs ; les guides ont le pas à pas.",
  },
  {
    q: "Qu’est-ce que Xtream Codes ?",
    a: "C’est la méthode de connexion principale chez MeilleurIPTVFrance : URL du serveur, utilisateur et mot de passe dans le lecteur. Orientation détaillée dans Applications et dans les guides d’installation.",
  },
  {
    q: "Quand utiliser une M3U ?",
    a: "Seulement quand l’assistance l’indique explicitement et vous fournit la liste. La méthode recommandée est Xtream Codes — M3U n’est pas le parcours par défaut.",
  },
  {
    q: "Comment cela fonctionne-t-il avec MAG ?",
    a: "Les box MAG utilisent en général l’URL d’un portail et l’adresse MAC — pas la même interface Xtream que les applications mobiles. Suivez le guide sur /guides-installation/mag.",
  },
  {
    q: "Comment installer après l’achat ?",
    a: "Avec le forfait actif et les identifiants, choisissez le guide de votre appareil, installez un lecteur compatible et saisissez Xtream (ou le portail MAG). Commencez par le hub d’installation.",
  },
];

const catalogue = [
  ...channelFaqs.slice(0, 2),
  {
    q: "Y a-t-il du sport (Ligue 1, Canal+) dans l’IPTV France ?",
    a: "Le catalogue inclut des catégories sport (avec des options comme Canal+ et d’autres chaînes selon la disponibilité active). Confirmez-le sur la page Chaînes et, pour l’usage quotidien, dans l’article sport IPTV France.",
  },
  {
    q: "Qu’est-ce que l’EPG ?",
    a: "C’est le guide électronique des programmes du lecteur : il aide à voir ce qui passe maintenant et ce qui vient ensuite, quand la chaîne et le catalogue l’incluent. Nous n’affirmons pas une couverture à 100 % de toutes les chaînes. Contexte sur Chaînes.",
  },
  {
    q: "Y a-t-il des films et des séries (VOD) ?",
    a: "Oui — le catalogue inclut du VOD (films et séries) en plus des chaînes en direct. La disponibilité exacte dépend du catalogue actif. Exemples et catégories sur Chaînes.",
  },
  {
    q: "Y a-t-il du replay (revoir des programmes) ?",
    a: "Quand la chaîne et le catalogue l’incluent, beaucoup de lecteurs affichent le replay ou la reprise à partir de l’EPG. Nous ne garantissons pas le replay sur 100 % des chaînes — vérifiez dans votre lecteur après la connexion et demandez à l’assistance si une chaîne précise n’a pas l’option.",
  },
  {
    q: "Pourquoi y a-t-il du buffering ?",
    a: "C’est presque toujours le réseau : Wi‑Fi encombré, distance à la box ou trop peu de Mbit/s sur l’écran. Passez en 5 GHz si vous le pouvez, descendez du 4K au FHD et consultez la checklist dans l’article sur le buffering.",
  },
  {
    q: "Connexion invalide ou aucun flux — que faire ?",
    a: "Vérifiez l’URL, l’utilisateur et le mot de passe (sans espace en trop) et que vous êtes bien sur Xtream Codes, pas sur M3U par erreur. Aucun flux peut venir d’un forfait inactif ou de connexions épuisées. La connexion Smarters est sur le blog ; l’installation Android est dans le guide correspondant.",
  },
];

/** Community intents — answer here, deep-dive on owner URLs (no duplicate “meilleur” doorway pages). */
const choisir = [
  {
    q: "Quel est le meilleur IPTV / le meilleur service / le meilleur fournisseur en France ?",
    a: "Il n’existe pas un seul « meilleur » pour tout le monde. Le meilleur IPTV en France (ou le meilleur service / fournisseur / abonnement) est celui qui passe la checklist de votre foyer : réseau, connexions, chaînes françaises, installation et assistance. Critères sans classements fictifs : article Meilleur IPTV France 2026. Pour acheter : Tarifs.",
  },
  {
    q: "Quel est le meilleur IPTV à Paris ?",
    a: "À Paris, le critère est le même que dans le reste du pays : fibre ou Wi‑Fi stable sur l’écran, un forfait avec les bonnes connexions et un catalogue que vous utilisez vraiment. Nous n’avons pas besoin d’une page seulement pour Paris — utilisez le guide Meilleur IPTV France 2026 et validez-le avec l’essai de 24 heures sur votre réseau.",
  },
  {
    q: "Où souscrire un IPTV en France ?",
    a: "Chez MeilleurIPTVFrance, comparez forfaits et connexions sur Tarifs, terminez le paiement sur le site officiel et recevez les identifiants après le paiement. Évitez de payer des profils anonymes sur les réseaux sociaux sans domaine ni assistance clairs.",
  },
  {
    q: "Comment savoir si un fournisseur IPTV est fiable ?",
    a: "Demandez des tarifs publics, un essai court, une politique de remboursement, une vraie assistance en français et un domaine identifiable. Méfiez-vous des listes M3U gratuites et du « n° 1 » sans preuves. Checklist : Meilleur IPTV France 2026 ; fonctionnement : À propos ; essai : Essai IPTV France.",
  },
  {
    q: "L’IPTV a-t-il besoin d’une antenne ?",
    a: "Non. L’IPTV utilise votre connexion Internet et un lecteur sur l’appareil — il ne remplace pas et n’exige pas une antenne TV classique. Il vous faut un réseau stable sur l’écran (le câble Ethernet ou le Wi‑Fi 5 GHz aident).",
  },
  {
    q: "L’IPTV a-t-il besoin d’Internet ? Fonctionne-t-il avec un faible débit ?",
    a: "Oui, il a besoin d’Internet. Le HD demande en général environ 10 Mbit/s stables par écran ; le 4K en demande plus (environ 25 Mbit/s ou plus sur l’appareil). Sur un réseau faible, baissez la qualité du flux. Détail : article Internet pour l’IPTV et checklist du buffering.",
  },
  {
    q: "IPTV ou Netflix — que choisir ?",
    a: "Netflix (et les services proches) est surtout du VOD à la demande. L’IPTV réunit des chaînes en direct (info, Canal+, grille française) et du VOD dans le même service. Beaucoup de gens utilisent les deux ; s’il vous manque le sport et les chaînes françaises en direct, l’IPTV couvre cette part. Catalogue : Chaînes ; forfaits : Tarifs.",
  },
  {
    q: "Quelle est la différence entre des applications IPTV gratuites et un service payant ?",
    a: "L’application (Smarters, TiviMate, etc.) n’est que le lecteur. Sans un service / abonnement avec identifiants, l’application n’a pas votre catalogue. L’« IPTV gratuit » est souvent une liste M3U instable — risques et alternatives dans l’article sur les listes gratuites. Vue des applications : Applications.",
  },
  {
    q: "Où trouver des listes de chaînes IPTV gratuites ?",
    a: "Nous ne publions ni ne recommandons de listes M3U anonymes gratuites. Elles sont instables et risquées. Si vous voulez essayer, demandez l’essai de 24 heures à l’assistance — pas une playlist de forum. Contexte : article liste IPTV France gratuite.",
  },
  {
    q: "Quel appareil acheter pour l’IPTV ?",
    a: "Beaucoup de foyers utilisent la Smart TV ou un Fire Stick / une box Android qu’ils ont déjà. Si vous allez acheter du matériel, l’article Box IPTV France compare les options ; l’installation est dans les guides par appareil.",
  },
];

const allForSchema = [
  ...generales,
  ...legalite,
  ...choisir,
  ...forfaits,
  ...appareils,
  ...installation,
  ...catalogue,
];

function withVisibleLinks(items: { q: string; a: string }[]) {
  return items.map((item) => ({
    q: item.q,
    a: withRefundPolicyLink(item.a) as unknown as string,
  }));
}

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-28">
      <h2 className="text-[24px] text-white">{title}</h2>
      <div className="mt-6">
        <FAQ items={withVisibleLinks(items)} />
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd data={faqJsonLd(allForSchema)} />
      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Aide MeilleurIPTVFrance</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Questions fréquentes IPTV France
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Réponses pratiques sur l’IPTV en France avec MeilleurIPTVFrance : ce qui est inclus, forfaits et connexions, essai
        de 24 heures, installation avec Xtream, Internet, sport et assistance en français. Pour le catalogue, utilisez
        Chaînes ; pour acheter, Tarifs ; pour l’essai, l’article Essai IPTV France.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/blog/essai-iptv-france" className="btn btn-solid">
          Demander / comprendre l’essai de 24 h
        </Link>
        <Link href="/tarifs" className="btn btn-ghost">
          Voir les forfaits et les tarifs
        </Link>
        <Link href="/guides-installation" className="btn btn-ghost">
          Guides d’installation
        </Link>
        <Link href="/applications" className="btn btn-ghost">
          Applications compatibles
        </Link>
        <Link href="/chaines" className="btn btn-ghost">
          Chaînes disponibles
        </Link>
      </div>

      <nav
        aria-label="Sections des questions fréquentes"
        className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-slate"
      >
        <a href="#faq-general" className="underline-offset-4 hover:text-white hover:underline">
          Général
        </a>
        <a href="#faq-legalite" className="underline-offset-4 hover:text-white hover:underline">
          Légalité
        </a>
        <a href="#faq-choisir" className="underline-offset-4 hover:text-white hover:underline">
          Choisir et comparer
        </a>
        <a href="#faq-forfaits" className="underline-offset-4 hover:text-white hover:underline">
          Forfaits et essai
        </a>
        <a href="#faq-appareils" className="underline-offset-4 hover:text-white hover:underline">
          Appareils et Internet
        </a>
        <a href="#faq-installation" className="underline-offset-4 hover:text-white hover:underline">
          Installation
        </a>
        <a href="#faq-catalogue" className="underline-offset-4 hover:text-white hover:underline">
          Catalogue et problèmes
        </a>
      </nav>

      <Section id="faq-general" title="Général et service" items={generales} />
      <Section id="faq-legalite" title="Légalité et transparence" items={legalite} />
      <Section id="faq-choisir" title="Choisir, comparer et idées reçues" items={choisir} />
      <Section id="faq-forfaits" title="Forfaits, essai et garantie" items={forfaits} />
      <Section id="faq-appareils" title="Appareils, Internet et applications" items={appareils} />
      <Section id="faq-installation" title="Installation et identifiants" items={installation} />
      <Section id="faq-catalogue" title="Catalogue et problèmes techniques" items={catalogue} />

      <section className="mt-14 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Essai IPTV France avant de payer</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Si votre question est « puis-je l’essayer ? », le bon chemin est l’essai de 24 heures sur demande — pas une
          liste M3U gratuite. Nous expliquons comment le demander, quoi valider et la garantie de 7 jours après l’achat.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog/essai-iptv-france" className="btn btn-solid">
            Lire : Essai IPTV France
          </Link>
          <Link href="/tarifs" className="btn btn-ghost">
            Comparer les forfaits
          </Link>
        </div>
      </section>

      <RelatedContent
        title="Continuer"
        links={[
          {
            href: "/blog/meilleur-iptv-france-2026",
            label: "Meilleur IPTV France 2026",
            description: "Critères — service, fournisseur, abonnement.",
          },
          {
            href: "/blog/essai-iptv-france",
            label: "Essai IPTV France",
            description: "Comment demander 24 h et quoi valider.",
          },
          {
            href: "/applications",
            label: "Guide des applications",
            description: "Appareils, lecteurs et service face à l’application.",
          },
          {
            href: "/guides-installation",
            label: "Guides d’installation",
            description: "Tutoriels par appareil, pas à pas.",
          },
          {
            href: "/tarifs",
            label: "Forfaits et paiement",
            description: "Tarifs publics et nombre de connexions.",
          },
          {
            href: "/chaines",
            label: "Catalogue de chaînes",
            description: "Chaînes françaises, sport et catégories.",
          },
          {
            href: "/quest-ce-que-iptv",
            label: "Comment fonctionne l’IPTV",
            description: "Définition et prérequis de base.",
          },
          {
            href: "/a-propos",
            label: "À propos de MeilleurIPTVFrance",
            description: "Fonctionnement, assistance et transparence.",
          },
          {
            href: "/blog/iptv-ne-fonctionne-pas-france",
            label: "L’IPTV ne fonctionne pas / buffering",
            description: "Checklist réseau et qualité.",
          },
          {
            href: "/blog/liste-iptv-france-gratuite",
            label: "Listes gratuites et M3U — risques",
            description: "Pourquoi éviter les listes anonymes.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Vous avez encore besoin d’aide ?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Écrivez-nous par e-mail ({site.email}) ou par WhatsApp depuis le site. Découvrez aussi comment nous
          fonctionnons dans{" "}
          <Link href="/a-propos" className="text-white underline-offset-4 hover:underline">
            À propos
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            Envoyer un e-mail
          </a>
          <Link href="/guides-installation" className="btn btn-ghost">
            Ouvrir les guides d’installation
          </Link>
          <Link href="/quest-ce-que-iptv" className="btn btn-ghost">
            Découvrir comment fonctionne l’IPTV
          </Link>
          <Link href="/blog/liste-iptv-france-gratuite" className="btn btn-ghost">
            Listes gratuites et M3U — risques
          </Link>
        </div>
      </section>
    </div>
  );
}
