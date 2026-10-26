import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getGuide, guides } from "@/data/guides";
import { buildMetadata, faqJsonLd, itemListJsonLd } from "@/lib/seo";

/** Visible answer may wrap “politique de remboursement”; schema uses the plain `pageFaqs` strings. */
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
  title: "Guides d’installation IPTV — Smart TV, Fire Stick, Android…",
  description:
    "Guides d’installation IPTV par appareil : Smart TV, Fire Stick, Android, iPhone, MAG et PC. Pas à pas après avoir choisi l’application dans le hub MeilleurIPTVFrance.",
  path: "/guides-installation",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Applications", path: "/applications" },
  { name: "Guides d’installation", path: "/guides-installation" },
];

const pageFaqs = [
  {
    q: "Où trouver le guide de mon appareil ?",
    a: "Sur cette page : choisissez Smart TV, Android, Fire Stick, iPhone/iPad, MAG ou Windows/PC et ouvrez le guide correspondant. Le pas à pas détaillé est dans chaque tutoriel.",
  },
  {
    q: "Faut-il choisir une application avant d’installer ?",
    a: "Oui — le lecteur est un logiciel tiers. Utilisez le hub des applications pour comprendre appareil et application ; revenez ensuite ici et ouvrez le guide de l’appareil.",
  },
  {
    q: "Quelle méthode d’accès utiliser ?",
    a: "Sur la plupart des lecteurs, la méthode recommandée est Xtream Codes (URL, utilisateur et mot de passe). Sur les box MAG, utilisez portail + MAC. M3U seulement quand l’assistance l’indique.",
  },
  {
    q: "Quelle est la différence entre Xtream et M3U ?",
    a: "Xtream Codes est la connexion habituelle avec trois champs. M3U est une liste par URL — utilisez-la seulement si l’assistance vous envoie cette méthode. Ne mélangez pas les deux types de connexion sur le même écran.",
  },
  {
    q: "Comment fonctionne la configuration sur une MAG ?",
    a: "MAG et beaucoup de STB utilisent l’URL d’un portail et l’adresse MAC — pas l’interface Xtream des applications du mobile. Suivez le guide MAG et demandez de l’aide à l’assistance si vous avez besoin du bon portail.",
  },
  {
    q: "Puis-je utiliser l’essai de 24 heures ?",
    a: "Oui. Vous pouvez demander l’essai de 24 heures à l’assistance pour valider l’appareil et le réseau avant de payer. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
  },
  {
    q: "Combien de connexions puis-je utiliser ?",
    a: "Les forfaits proposent 1, 2 ou 3 connexions — des écrans qui lisent en même temps. Chaque flux compte. Comparez sur Tarifs avant d’installer sur plusieurs appareils.",
  },
  {
    q: "Quelle est la différence entre Applications et ces guides ?",
    a: "Le hub des applications explique les appareils et les lecteurs. Cette page est l’index des tutoriels pas à pas. Chaque guide d’appareil a l’installation détaillée.",
  },
];

/** Hub card copy — slugs must exist in guides.ts. */
const deviceCards = [
  {
    slug: "smart-tv",
    label: "Smart TV",
    body: "Samsung, LG et Android TV / Google TV. Lecteur courant : application de la boutique TV (par exemple IPTV Smarters ou équivalent). Connexion : Xtream Codes lorsque l’application le permet. La disponibilité exacte dans la boutique varie selon le modèle.",
    login: "Xtream Codes (ou méthode de l’application de la boutique)",
    cta: "Ouvrir le guide Smart TV",
  },
  {
    slug: "android",
    label: "Android",
    body: "Mobile, tablette, Android TV et Google TV. Lecteur courant : IPTV Smarters sur le Play Store. Le même type de connexion Xtream sert sur le mobile et sur la TV.",
    login: "Xtream Codes",
    cta: "Ouvrir le guide Android",
  },
  {
    slug: "firestick",
    label: "Fire Stick",
    body: "Fire Stick / Fire TV et box Android en HDMI. Lecteurs courants : IPTV Smarters ou TiviMate. Préférez l’Amazon Appstore ; le guide n’est pas un hub d’APK.",
    login: "Xtream Codes",
    cta: "Ouvrir le guide Fire Stick",
  },
  {
    slug: "ios",
    label: "iPhone et iPad",
    body: "App Store avec un lecteur compatible Xtream (par exemple IPTV Smarters). Apple TV seulement lorsqu’un lecteur adapté existe dans votre région — sinon, utilisez un Stick / Android TV au salon.",
    login: "Xtream Codes",
    cta: "Ouvrir le guide iPhone et iPad",
  },
  {
    slug: "mag",
    label: "MAG",
    body: "Box MAG et STB compatibles. Parcours distinct des applications mobiles : URL de portail + adresse MAC.",
    login: "Portail + MAC",
    cta: "Ouvrir le guide MAG",
  },
  {
    slug: "windows",
    label: "Windows / PC",
    body: "Ordinateur Windows ou macOS. Préférez un lecteur avec Xtream ; VLC seulement en alternative si l’assistance vous envoie une M3U. Le PC compte comme une connexion.",
    login: "Xtream Codes (M3U si indiqué)",
    cta: "Ouvrir le guide Windows / PC",
  },
] as const;

function resolveCards() {
  return deviceCards.map((card) => {
    const guide = getGuide(card.slug);
    if (!guide) {
      throw new Error(`Missing guide for hub card: ${card.slug}`);
    }
    return { ...card, href: `/guides-installation/${guide.slug}` };
  });
}

export default function InstallationGuidesPage() {
  const cards = resolveCards();

  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          faqJsonLd(pageFaqs),
          itemListJsonLd({
            name: "Guides d’installation IPTV par appareil",
            description:
              "Index des tutoriels pas à pas de MeilleurIPTVFrance visibles sur cette page (ce n’est pas un guide unique).",
            path: "/guides-installation",
            items: cards.map((card) => ({ name: card.label })),
          }),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Tutoriels par appareil</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Guides d’installation IPTV
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Choisissez votre appareil et ouvrez le tutoriel pas à pas. Pour comprendre la différence entre service,
        application et appareil — et quel lecteur utiliser — commencez par le{" "}
        <Link href="/applications" className="text-white underline-offset-4 hover:underline">
          hub des applications
        </Link>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#appareils" className="btn btn-solid">
          Choisir l’appareil
        </a>
        <Link href="/applications" className="btn btn-ghost">
          Voir les applications
        </Link>
        <Link href="/tarifs" className="btn btn-ghost">
          Voir les tarifs
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">
        Essai de 24 heures sur demande · garantie de 7 jours · assistance 24h/24
      </p>

      <section className="mt-14 max-w-3xl" aria-labelledby="comment-ca-marche-heading">
        <h2 id="comment-ca-marche-heading" className="text-[24px] text-white md:text-[28px]">
          Comment se passe l’installation
        </h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          Vue d’ensemble — le détail de chaque appareil est dans le guide correspondant, pas sur cette page.
        </p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-[15px] leading-[1.6] text-slate">
          <li>Choisissez l’appareil (Smart TV, Fire Stick, Android, iPhone, MAG ou PC).</li>
          <li>
            Installez un lecteur compatible depuis la boutique officielle — voyez les suggestions dans{" "}
            <Link href="/applications" className="text-white underline-offset-4 hover:underline">
              Applications
            </Link>
            .
          </li>
          <li>
            Ayez les identifiants du forfait sous la main (ou demandez l’essai de 24 heures). Obtenez l’accès sur{" "}
            <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
              Tarifs
            </Link>
            .
          </li>
          <li>
            Saisissez les données : dans la plupart des cas <strong className="text-white">Xtream Codes</strong> ; sur
            MAG, utilisez <strong className="text-white">portail + MAC</strong> ;{" "}
            <strong className="text-white">M3U</strong> seulement si l’assistance l’indique.
          </li>
          <li>Attendez le chargement des catégories et épinglez vos favoris.</li>
          <li>Commencez à regarder — respectez le nombre de connexions du forfait (1, 2 ou 3).</li>
        </ol>
      </section>

      <section className="mt-16" id="appareils" aria-labelledby="appareils-heading">
        <h2 id="appareils-heading" className="text-[24px] text-white md:text-[28px]">
          Choisissez votre appareil
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          {guides.length} guides officiels d’installation. Chaque carte ouvre le guide complet — sans listes M3U
          gratuites ni APK de forums.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article key={card.slug} className="flex flex-col border border-line bg-deep p-6">
              <h3 className="text-[20px] text-white">{card.label}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.45] text-slate">{card.body}</p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.35px] text-muted">Connexion : {card.login}</p>
              <Link
                href={card.href}
                className="mt-4 inline-block text-[14px] font-semibold text-white underline-offset-4 hover:underline"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="login-heading">
        <h2 id="login-heading" className="text-[24px] text-white md:text-[28px]">
          Xtream Codes, M3U et portail MAG
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Xtream Codes</strong> — méthode principale : URL du serveur, utilisateur et
            mot de passe. C’est ce qu’utilisent la plupart des lecteurs après l’e-mail d’activation.
          </li>
          <li>
            <strong className="text-white">M3U</strong> — seulement quand l’assistance l’envoie ou l’indique
            explicitement. Ne remplacez pas Xtream par une liste anonyme trouvée sur Internet.
          </li>
          <li>
            <strong className="text-white">Portail MAG</strong> — URL de portail + MAC. Distinct de l’interface « Xtream
            Codes API » des applications.{" "}
            <Link href="/guides-installation/mag" className="text-white underline-offset-4 hover:underline">
              Ouvrir le guide MAG
            </Link>
            .
          </li>
        </ul>
        <p>
          Plus de contexte sur les lecteurs :{" "}
          <Link href="/applications" className="text-white underline-offset-4 hover:underline">
            hub des applications
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="avant-heading">
        <h2 id="avant-heading" className="text-[24px] text-white md:text-[28px]">
          Avant de commencer
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Ayez un forfait actif ou demandez l’<strong className="text-white">essai de 24 heures</strong> à
            l’assistance.
          </li>
          <li>Identifiez votre appareil et ouvrez le bon guide sur cette page.</li>
          <li>Conservez les identifiants de l’e-mail (Xtream ou portail MAG).</li>
          <li>Utilisez une connexion Internet stable — le Wi‑Fi 5 GHz ou le câble Ethernet au salon aident en HD/FHD.</li>
          <li>
            Respectez les <strong className="text-white">1, 2 ou 3 connexions</strong> du forfait si vous utilisez
            plusieurs écrans.
          </li>
          <li>Installez le lecteur depuis la boutique officielle — évitez les APK de sources inconnues.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tarifs" className="btn btn-ghost">
            Voir les tarifs
          </Link>
          <Link href="/applications" className="btn btn-ghost">
            Voir les applications
          </Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="problemes-heading">
        <h2 id="problemes-heading" className="text-[24px] text-white md:text-[28px]">
          Problèmes fréquents
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Données invalides</strong> — erreur de saisie ou connexion M3U et Xtream
            inversées.
          </li>
          <li>
            <strong className="text-white">Buffering</strong> — presque toujours le réseau ; consultez la checklist sur
            le blog.
          </li>
          <li>
            <strong className="text-white">Aucun flux</strong> — forfait inactif ou connexions épuisées.
          </li>
          <li>
            <strong className="text-white">APK inconnus</strong> — évitez-les ; préférez la boutique officielle et
            l’assistance.
          </li>
        </ul>
        <p>
          <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
            FAQ générale
          </Link>
          {" · "}
          <Link href="/blog/iptv-ne-fonctionne-pas-france" className="text-white underline-offset-4 hover:underline">
            Buffering / l’IPTV ne fonctionne pas
          </Link>
          {" · "}
          <Link href="/blog/iptv-smarters-pro-france" className="text-white underline-offset-4 hover:underline">
            Erreurs dans Smarters
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-guides-heading">
        <h2 id="faq-guides-heading" className="text-[24px] text-white md:text-[28px]">
          Questions fréquentes
        </h2>
        <div className="mt-6">
          <FAQ
            items={pageFaqs.map((item) => ({
              q: item.q,
              a: withRefundPolicyLink(item.a) as unknown as string,
            }))}
          />
        </div>
      </section>

      <div className="mt-16">
        <RelatedContent
          title="Continuer"
          links={[
            {
              href: "/applications",
              label: "Hub des applications",
              description: "Appareils, lecteurs et différence service / application.",
            },
            {
              href: "/tarifs",
              label: "Tarifs et forfaits",
              description: "Obtenez les identifiants et choisissez 1, 2 ou 3 connexions.",
            },
            {
              href: "/chaines",
              label: "Catalogue de chaînes",
              description: "Ce que vous pouvez regarder après l’installation.",
            },
            {
              href: "/questions-frequentes",
              label: "FAQ générale",
              description: "Installation, buffering et assistance.",
            },
            {
              href: "/quest-ce-que-iptv",
              label: "Qu’est-ce que l’IPTV",
              description: "Comment fonctionnent le service et le lecteur.",
            },
            {
              href: "/a-propos",
              label: "À propos",
              description: "Fonctionnement et transparence.",
            },
            {
              href: "/blog/iptv-smarters-pro-france",
              label: "IPTV Smarters Pro France",
              description: "Connexion Xtream et erreurs fréquentes.",
            },
            {
              href: "/blog/iptv-android-france-installation",
              label: "IPTV Android France",
              description: "Installer sans APK douteux.",
            },
            {
              href: "/blog/box-iptv-france",
              label: "Box IPTV France",
              description: "Fire Stick et box Android.",
            },
            {
              href: "/blog/iptv-ne-fonctionne-pas-france",
              label: "Buffering / l’IPTV ne fonctionne pas",
              description: "Checklist réseau et lecteur.",
            },
          ]}
        />
      </div>

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Prêt à installer ?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Choisissez le guide de votre appareil plus haut, ou obtenez le forfait et les identifiants sur Tarifs. Vous
          pouvez demander l’essai de 24 heures à l’assistance ; après l’achat, vous avez une garantie de 7 jours et une
          assistance 24h/24.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#appareils" className="btn btn-solid">
            Choisir l’appareil
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Voir les forfaits
          </Link>
          <Link href="/applications" className="btn btn-ghost">
            Voir les applications
          </Link>
        </div>
      </section>
    </div>
  );
}
