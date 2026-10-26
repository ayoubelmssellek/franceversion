import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { guides } from "@/data/guides";
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
  title: "Applications IPTV France — Smart TV, Fire Stick et plus",
  description:
    "Applications IPTV France : choisissez l’appareil, le lecteur compatible et le guide d’installation. Smart TV, Android, Fire Stick, iOS, MAG et PC — MeilleurIPTVFrance.",
  path: "/applications",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Applications", path: "/applications" },
];

const pageFaqs = [
  {
    q: "Quelle est la meilleure application IPTV ?",
    a: "Cela dépend de l’appareil. Sur Android et sur beaucoup de Smart TV, IPTV Smarters (ou un équivalent avec Xtream Codes) est un choix courant. Sur Android TV et Fire Stick, TiviMate est aussi très utilisé. Ce sont des applications tierces — MeilleurIPTVFrance est le service ; le lecteur affiche seulement le catalogue. Suivez le guide de votre appareil.",
  },
  {
    q: "Puis-je regarder sur la Smart TV (Samsung, LG ou Android TV) ?",
    a: "Oui. Installez un lecteur compatible depuis la boutique de la TV (lorsqu’il est disponible) et utilisez les identifiants Xtream. La disponibilité exacte de l’application varie selon le modèle et la région — si la boutique est limitée, un Fire Stick ou une box Android en HDMI est une alternative stable. Le détail est dans le guide Smart TV.",
  },
  {
    q: "Comment configurer le Fire Stick ?",
    a: "Utilisez l’Amazon Appstore (ou la méthode indiquée par l’assistance si l’application n’apparaît pas). Préférez la boutique officielle et évitez les APK de forums. Connectez-vous ensuite avec Xtream et les identifiants de l’e-mail. Pas à pas dans le guide Fire Stick.",
  },
  {
    q: "Xtream Codes ou liste M3U ?",
    a: "Chez MeilleurIPTVFrance, la méthode recommandée est Xtream Codes (URL du serveur, utilisateur et mot de passe). M3U seulement quand l’assistance l’indique explicitement.",
  },
  {
    q: "Comment fonctionne la box MAG ?",
    a: "Les box MAG utilisent en général l’URL d’un portail et l’adresse MAC — pas la même interface de connexion Xtream que les applications mobiles. Suivez le guide MAG et demandez de l’aide à l’assistance si vous avez besoin du bon portail.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Vous pouvez demander un essai de 24 heures à l’assistance avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
  },
  {
    q: "Combien de connexions puis-je utiliser ?",
    a: "Les forfaits proposent 1, 2 ou 3 connexions — le nombre d’écrans qui lisent en même temps. Chaque flux (direct ou VOD) compte. Comparez sur Tarifs.",
  },
  {
    q: "Faut-il un APK de sites inconnus ?",
    a: "Évitez-le. Préférez la boutique officielle de l’appareil (Play Store, App Store, Amazon Appstore ou la boutique de la Smart TV). Les APK de forums augmentent le risque de logiciel malveillant et d’instabilité.",
  },
  {
    q: "Qu’est-ce que l’EPG dans le lecteur ?",
    a: "L’EPG est le guide électronique des programmes du lecteur : il aide à voir ce qui passe maintenant et ce qui vient ensuite, quand la chaîne et le catalogue l’incluent. Nous n’affirmons pas une couverture à 100 % de toutes les chaînes.",
  },
  {
    q: "Où sont les tutoriels d’installation ?",
    a: "Dans le hub des guides d’installation — Smart TV, Android, Fire Stick, iOS, MAG et Windows/PC. Cette page est la vue d’ensemble ; les guides ont le pas à pas.",
  },
];

const deviceCards = [
  {
    title: "Smart TV",
    body: "Samsung, LG et les autres avec boutique d’applications. Lecteur courant : IPTV Smarters ou l’équivalent de la boutique, avec connexion Xtream lorsqu’elle est disponible.",
    href: "/guides-installation/smart-tv",
    cta: "Ouvrir le guide Smart TV",
  },
  {
    title: "Android / Android TV / Google TV",
    body: "Mobile, tablette, Android TV et Google TV. Lecteur courant : IPTV Smarters sur le Play Store ; la même connexion Xtream sert sur le mobile et sur la TV.",
    href: "/guides-installation/android",
    cta: "Ouvrir le guide Android",
  },
  {
    title: "Fire Stick / Fire TV",
    body: "Stick sur le HDMI du téléviseur. Lecteurs courants : IPTV Smarters ou TiviMate — installez depuis l’Appstore quand c’est possible et soignez le Wi‑Fi du salon.",
    href: "/guides-installation/firestick",
    cta: "Ouvrir le guide Fire Stick",
  },
  {
    title: "iPhone et iPad",
    body: "Applications compatibles avec Xtream sur l’App Store (par exemple IPTV Smarters). Utile en déplacement ou comme second écran — cela compte dans les connexions du forfait.",
    href: "/guides-installation/ios",
    cta: "Ouvrir le guide iPhone et iPad",
  },
  {
    title: "MAG",
    body: "Pour qui a déjà un STB MAG. Parcours différent : portail + MAC, pas l’interface Xtream typique des applications mobiles.",
    href: "/guides-installation/mag",
    cta: "Ouvrir le guide MAG",
  },
  {
    title: "Windows / PC",
    body: "Regarder sur l’ordinateur avec un lecteur Xtream. Utile pour tester le réseau avant de le fixer sur la Smart TV ; Mac est aussi couvert dans le même guide.",
    href: "/guides-installation/windows",
    cta: "Ouvrir le guide Windows / PC",
  },
];

export default function AppsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          faqJsonLd(pageFaqs),
          itemListJsonLd({
            name: "Appareils compatibles MeilleurIPTVFrance",
            description:
              "Familles d’appareils avec un guide d’installation visible sur cette page (ce n’est pas un catalogue logiciel de MeilleurIPTVFrance).",
            path: "/applications",
            items: deviceCards.map((card) => ({ name: card.title })),
          }),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Appareils et lecteurs</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Applications IPTV France — appareils et lecteurs
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Choisissez l’appareil, identifiez un lecteur compatible et ouvrez le guide d’installation. MeilleurIPTVFrance est le{" "}
        <strong className="text-white">service</strong> ; l’application est le{" "}
        <strong className="text-white">lecteur tiers</strong> qui affiche le catalogue après la connexion.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/tarifs" className="btn btn-solid">
          Voir les tarifs
        </Link>
        <Link href="/guides-installation" className="btn btn-ghost">
          Voir les guides d’installation
        </Link>
        <Link href="/chaines" className="btn btn-ghost">
          Voir les chaînes
        </Link>
        <Link href="/questions-frequentes" className="btn btn-ghost">
          FAQ
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">
        Essai de 24 heures sur demande · garantie de 7 jours · assistance 24h/24
      </p>

      <section className="mt-14" aria-labelledby="modelo-heading">
        <h2 id="modelo-heading" className="text-[24px] text-white md:text-[28px]">
          Service, application, appareil et identifiants
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-[1.6] text-slate">
          Quatre pièces distinctes — confondre leurs noms est la cause la plus fréquente d’une installation ratée.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Service MeilleurIPTVFrance",
              b: "L’abonnement : catalogue, assistance et forfait avec 1, 2 ou 3 connexions. Ce n’est pas une application de boutique à notre nom.",
            },
            {
              t: "Lecteur / application",
              b: "Logiciel tiers (par exemple IPTV Smarters ou TiviMate) qui lit les identifiants et affiche les chaînes, l’EPG et le VOD.",
            },
            {
              t: "Appareil",
              b: "Là où tourne le lecteur : Smart TV, Fire Stick, Android, iPhone, MAG ou PC. Chaque écran qui lit compte comme une connexion.",
            },
            {
              t: "Identifiants",
              b: "Ce qui relie le lecteur au service : en général Xtream Codes (URL, utilisateur, mot de passe). Sur MAG : portail + MAC. M3U seulement si l’assistance l’indique.",
            },
          ].map((item) => (
            <article key={item.t} className="border border-line bg-surface p-6">
              <h3 className="text-[18px] text-white">{item.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.45] text-slate">{item.b}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.6] text-slate">
          Pour l’idée générale de la technologie, consultez{" "}
          <Link href="/quest-ce-que-iptv" className="text-white underline-offset-4 hover:underline">
            qu’est-ce que l’IPTV
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="appareils-heading">
        <h2 id="appareils-heading" className="text-[24px] text-white md:text-[28px]">
          Choisissez votre appareil
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Un abonnement MeilleurIPTVFrance fonctionne sur ces appareils via un lecteur compatible. La limite est le nombre de
          connexions simultanées du forfait (1, 2 ou 3). Les tutoriels détaillés sont dans les guides, pas sur cette page.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {deviceCards.map((card) => (
            <article key={card.href} className="flex flex-col border border-line bg-surface p-6">
              <h3 className="text-[20px] text-white">{card.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.45] text-slate">{card.body}</p>
              <Link
                href={card.href}
                className="mt-5 inline-block text-[14px] font-semibold text-white underline-offset-4 hover:underline"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-slate">
          Index complet :{" "}
          <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
            guides d’installation
          </Link>{" "}
          ({guides.length} appareils).
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="smart-tv-heading">
        <h2 id="smart-tv-heading" className="text-[24px] text-white md:text-[28px]">
          Smart TV — Samsung, LG et Android TV
        </h2>
        <p>
          Sur les Smart TV avec boutique d’applications (Samsung, LG, Android TV / Google TV), le parcours habituel est
          d’installer un lecteur compatible et de se connecter avec Xtream grâce aux identifiants de l’e-mail. L’application
          exacte disponible dans la boutique dépend du modèle et de la région — nous n’affirmons pas que tous les appareils
          listent le même lecteur.
        </p>
        <p>
          Si la boutique est limitée, un Fire Stick ou une box Android en HDMI est en général l’alternative la plus stable.
          Le pas à pas est dans le{" "}
          <Link href="/guides-installation/smart-tv" className="text-white underline-offset-4 hover:underline">
            guide Smart TV
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="firestick-heading">
        <h2 id="firestick-heading" className="text-[24px] text-white md:text-[28px]">
          Fire Stick et box Android
        </h2>
        <p>
          Le Fire Stick se branche sur le HDMI du téléviseur et utilise l’Amazon Appstore. IPTV Smarters et TiviMate sont
          des options fréquentes dans cet écosystème. Préférez la boutique officielle ; nous ne tenons pas de hub d’APK à
          télécharger.
        </p>
        <p>
          Détail de l’installation :{" "}
          <Link href="/guides-installation/firestick" className="text-white underline-offset-4 hover:underline">
            guide Fire Stick
          </Link>
          . Comparatif élargi des lecteurs :{" "}
          <Link href="/blog/meilleure-app-iptv-france" className="text-white underline-offset-4 hover:underline">
            meilleures applications IPTV (Fire Stick)
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="android-heading">
        <h2 id="android-heading" className="text-[24px] text-white md:text-[28px]">
          Android — mobile, tablette, Android TV et Google TV
        </h2>
        <p>
          Sur le mobile, la tablette et l’Android TV / Google TV, la connexion Xtream est le même type de parcours :
          installer le lecteur depuis le Play Store (par exemple IPTV Smarters), saisir l’URL, l’utilisateur et le mot de
          passe, puis charger les catégories. Deux écrans en même temps demandent un forfait à deux connexions.
        </p>
        <p>
          <Link href="/guides-installation/android" className="text-white underline-offset-4 hover:underline">
            Ouvrir le guide Android
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="ios-heading">
        <h2 id="ios-heading" className="text-[24px] text-white md:text-[28px]">
          iPhone et iPad
        </h2>
        <p>
          Sur l’App Store, choisissez un lecteur compatible avec Xtream Codes et saisissez les identifiants de l’e-mail.
          Utile en déplacement ou comme second écran — chaque flux compte dans les connexions du forfait.
        </p>
        <p>
          L’Apple TV (tvOS) peut fonctionner lorsqu’un lecteur adapté existe dans l’App Store de votre région ; sinon,
          utilisez un Fire Stick / Android TV au salon ou l’iPhone avec AirPlay en dépannage. Nous ne garantissons pas la
          disponibilité dans tous les pays ou sur tous les modèles.
        </p>
        <p>
          <Link href="/guides-installation/ios" className="text-white underline-offset-4 hover:underline">
            Ouvrir le guide iPhone, iPad et Apple TV
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="mag-heading">
        <h2 id="mag-heading" className="text-[24px] text-white md:text-[28px]">
          MAG et STB
        </h2>
        <p>
          Les box MAG et beaucoup de STB utilisent <strong className="text-white">portail + adresse MAC</strong> — pas la
          même interface « Xtream Codes API » que les applications du mobile. Il vous faut la bonne URL de portail et la
          MAC de l’équipement ; l’assistance vous aide si vous passez d’une application à une MAG.
        </p>
        <p>
          <Link href="/guides-installation/mag" className="text-white underline-offset-4 hover:underline">
            Ouvrir le guide MAG
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="pc-heading">
        <h2 id="pc-heading" className="text-[24px] text-white md:text-[28px]">
          Windows / PC et Mac
        </h2>
        <p>
          Sur l’ordinateur, préférez un lecteur qui prend en charge Xtream Codes. VLC peut servir d’alternative si
          l’assistance vous envoie un lien M3U — l’EPG est en général plus limité que dans un lecteur dédié. Le PC compte
          comme une connexion, au même titre qu’une Smart TV.
        </p>
        <p>
          <Link href="/guides-installation/windows" className="text-white underline-offset-4 hover:underline">
            Ouvrir le guide Windows / PC (macOS inclus)
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="players-heading">
        <h2 id="players-heading" className="text-[24px] text-white md:text-[28px]">
          Lecteurs recommandés (tiers)
        </h2>
        <p>
          Les noms suivants sont des <strong className="text-white">applications tierces</strong>. MeilleurIPTVFrance ne les
          publie pas, ne les possède pas et ne les présente pas comme « l’application officielle de MeilleurIPTVFrance ».
          Elles servent seulement à accéder au service avec vos identifiants.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">IPTV Smarters (Pro)</strong> — choix fréquent sur Android, iOS et plusieurs
            Smart TV ; connexion Xtream Codes.
          </li>
          <li>
            <strong className="text-white">TiviMate</strong> — se distingue sur Android TV et Fire Stick (vérifiez
            l’édition gratuite face à l’édition payante dans la boutique).
          </li>
          <li>
            <strong className="text-white">Lecteurs de la boutique TV</strong> — certains fabricants ont des applications
            compatibles Xtream ou M3U ; l’assistance vous indique l’option si la boutique est limitée.
          </li>
          <li>
            <strong className="text-white">Portail MAG / STB</strong> — parcours propre (portail + MAC), pas l’interface
            de Smarters.
          </li>
        </ul>
        <p>
          Connexion Smarters en détail :{" "}
          <Link href="/blog/iptv-smarters-pro-france" className="text-white underline-offset-4 hover:underline">
            IPTV Smarters Pro France
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="apps-compare-heading">
        <h2 id="apps-compare-heading" className="text-[24px] text-white md:text-[28px]">
          Quelle application choisir ? — comparatif rapide
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Résumé des lecteurs déjà cités dans ce hub. Installez toujours depuis la boutique officielle de l’appareil —
          nous ne publions ni APK ni pages de téléchargement.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[14px]">
            <caption className="border-b border-line bg-surface px-4 py-3 text-left text-[13px] text-slate">
              Comparatif de lecteurs tiers par appareil et méthode de connexion
            </caption>
            <thead>
              <tr className="border-b border-line bg-surface">
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Lecteur
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Idéal pour
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Connexion
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="text-slate">
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  IPTV Smarters (Pro)
                </th>
                <td className="px-4 py-3">Android, iOS, plusieurs Smart TV</td>
                <td className="px-4 py-3">Xtream Codes</td>
                <td className="px-4 py-3">Choix fréquent de l’assistance — application tierce</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  TiviMate
                </th>
                <td className="px-4 py-3">Android TV, Fire Stick</td>
                <td className="px-4 py-3">Xtream Codes</td>
                <td className="px-4 py-3">Vérifiez l’édition gratuite face à l’édition payante dans la boutique</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  Lecteurs de la boutique TV
                </th>
                <td className="px-4 py-3">Samsung, LG et similaires</td>
                <td className="px-4 py-3">Xtream ou M3U (selon l’application)</td>
                <td className="px-4 py-3">La disponibilité varie selon le modèle et la région</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  Portail MAG / STB
                </th>
                <td className="px-4 py-3">Box MAG et STB compatibles</td>
                <td className="px-4 py-3">URL de portail + MAC</td>
                <td className="px-4 py-3">
                  Consultez le{" "}
                  <Link href="/guides-installation/mag" className="text-white underline-offset-4 hover:underline">
                    guide MAG
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-[14px] text-slate">
          Après avoir choisi le lecteur, suivez le{" "}
          <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
            guide de votre appareil
          </Link>
          . Identifiants : après avoir souscrit le forfait sur{" "}
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Tarifs
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="login-heading">
        <h2 id="login-heading" className="text-[24px] text-white md:text-[28px]">
          Xtream Codes, M3U et portail MAG
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Xtream Codes</strong> — méthode recommandée : URL du serveur, utilisateur et
            mot de passe (sans espace en trop).
          </li>
          <li>
            <strong className="text-white">M3U</strong> — seulement quand l’assistance l’indique explicitement.
          </li>
          <li>
            <strong className="text-white">Portail MAG</strong> — URL de portail + MAC de l’équipement ; parcours distinct
            de celui des applications mobiles.
          </li>
        </ul>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="epg-vod-heading">
        <h2 id="epg-vod-heading" className="text-[24px] text-white md:text-[28px]">
          EPG, VOD et connexions
        </h2>
        <p>
          Après la connexion, le lecteur affiche les chaînes en direct, l’<strong className="text-white">EPG</strong>{" "}
          (guide des programmes, lorsqu’il est disponible) et, dans le même service, la bibliothèque{" "}
          <strong className="text-white">VOD</strong> (films et séries à la demande). Confirmez toujours le catalogue
          actif sur votre compte — consultez aussi{" "}
          <Link href="/chaines" className="text-white underline-offset-4 hover:underline">
            Chaînes
          </Link>
          .
        </p>
        <p>
          Les forfaits ont <strong className="text-white">1, 2 ou 3 connexions</strong> : combien d’écrans peuvent lire
          en même temps. Deux flux (par exemple salon + mobile) demandent un forfait à 2 connexions. Détail sur{" "}
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Tarifs
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="commencer-heading">
        <h2 id="commencer-heading" className="text-[24px] text-white md:text-[28px]">
          Comment commencer
        </h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Facultatif : demandez l’<strong className="text-white">essai de 24 heures</strong> à l’assistance pour valider
            l’appareil et le réseau.
          </li>
          <li>
            Choisissez le forfait sur{" "}
            <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
              Tarifs
            </Link>{" "}
            (1, 2 ou 3 connexions) et terminez le paiement.
          </li>
          <li>Recevez les identifiants par e-mail et conservez-les.</li>
          <li>Installez un lecteur compatible depuis la boutique officielle de votre appareil.</li>
          <li>
            Suivez le{" "}
            <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
              guide de l’appareil
            </Link>{" "}
            — Xtream Codes (ou portail MAG, si c’est votre cas).
          </li>
          <li>Chargez les catégories, épinglez vos favoris et commencez à regarder.</li>
        </ol>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="problemas-heading">
        <h2 id="problemas-heading" className="text-[24px] text-white md:text-[28px]">
          Problèmes fréquents
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Invalid details</strong> — erreur en saisissant l’URL ou le mot de passe, ou
            mauvais type de connexion (M3U au lieu de Xtream).
          </li>
          <li>
            <strong className="text-white">Buffering</strong> — presque toujours le réseau ou le Wi‑Fi ; consultez la
            checklist sur le blog.
          </li>
          <li>
            <strong className="text-white">Aucun flux</strong> — forfait inactif ou connexions épuisées (un autre écran
            utilise le compte).
          </li>
          <li>
            <strong className="text-white">APK inconnus</strong> — évitez-les ; préférez la boutique officielle et
            l’assistance.
          </li>
        </ul>
        <p>
          Checklist :{" "}
          <Link href="/blog/iptv-ne-fonctionne-pas-france" className="text-white underline-offset-4 hover:underline">
            L’IPTV ne fonctionne pas / buffering
          </Link>
          . Plus de réponses :{" "}
          <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-apps-heading">
        <h2 id="faq-apps-heading" className="text-[24px] text-white md:text-[28px]">
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
              href: "/guides-installation",
              label: "Guides d’installation",
              description: "Pas à pas pour Smart TV, Android, Fire Stick, iOS et MAG.",
            },
            {
              href: "/tarifs",
              label: "Tarifs et forfaits",
              description: "1, 2 ou 3 connexions — choisissez le forfait adapté.",
            },
            {
              href: "/chaines",
              label: "Catalogue de chaînes",
              description: "Chaînes françaises, sport et VOD.",
            },
            {
              href: "/quest-ce-que-iptv",
              label: "Qu’est-ce que l’IPTV",
              description: "Comment fonctionnent le service et le lecteur.",
            },
            {
              href: "/questions-frequentes",
              label: "FAQ générale",
              description: "Installation, buffering et assistance.",
            },
            {
              href: "/a-propos",
              label: "À propos",
              description: "Fonctionnement, assistance et transparence.",
            },
            {
              href: "/blog/iptv-smarters-pro-france",
              label: "IPTV Smarters Pro France",
              description: "Connexion Xtream et erreurs fréquentes.",
            },
            {
              href: "/blog/meilleure-app-iptv-france",
              label: "Meilleures applications IPTV",
              description: "Comparer les lecteurs sur le Fire Stick.",
            },
            {
              href: "/blog/iptv-ne-fonctionne-pas-france",
              label: "Buffering / l’IPTV ne fonctionne pas",
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

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Prêt à configurer votre appareil ?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Choisissez le forfait avec les bonnes connexions, demandez l’essai de 24 heures si vous voulez valider le réseau
          et suivez le guide de votre appareil. Vous avez une garantie de 7 jours après l’achat et une assistance 24h/24.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tarifs" className="btn btn-solid">
            Voir les forfaits
          </Link>
          <Link href="/guides-installation" className="btn btn-ghost">
            Voir les guides d’installation
          </Link>
        </div>
      </section>
    </div>
  );
}
