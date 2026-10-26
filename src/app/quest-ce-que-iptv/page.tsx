import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Qu’est-ce que l’IPTV — comment ça marche en France",
  description:
    "Qu’est-ce que l’IPTV et comment ça marche : définition, débit Internet, appareils compatibles, IPTV face au câble et au VOD, et usage responsable. Guide MeilleurIPTVFrance en français.",
  path: "/quest-ce-que-iptv",
});

const pageFaqs = [
  {
    q: "Qu’est-ce que l’IPTV ?",
    a: "L’IPTV (Internet Protocol Television) est la télévision et le contenu audiovisuel qui arrivent par Internet jusqu’à un lecteur (application) sur votre appareil, au lieu d’un câble coaxial ou d’un signal satellite classique de l’opérateur.",
  },
  {
    q: "Comment fonctionne l’IPTV ?",
    a: "Avec un forfait actif, vous recevez des identifiants (en général Xtream Codes), vous installez un lecteur compatible, vous vous connectez et vous chargez les chaînes en direct, l’EPG et, lorsqu’il est inclus, le VOD. Chaque écran qui lit compte dans le nombre de connexions du forfait.",
  },
  {
    q: "Quel débit Internet est recommandé ?",
    a: "Pour le Full HD, on recommande en pratique environ 15–20 Mbit/s stables sur l’appareil. Pour le 4K, idéalement 25 Mbit/s ou plus. Le Wi‑Fi 5 GHz ou le câble Ethernet au salon réduisent le buffering — c’est une orientation pratique, pas une garantie absolue.",
  },
  {
    q: "L’IPTV est-il la même chose que Netflix ou le streaming VOD ?",
    a: "Non. Le streaming VOD est surtout un catalogue à la demande. L’IPTV inclut des chaînes en direct (programmation linéaire). MeilleurIPTVFrance réunit chaînes en direct et VOD (plus de 200 000 films et plus de 40 000 séries) dans le même service payant.",
  },
  {
    q: "Quels appareils puis-je utiliser ?",
    a: "Smart TV, Fire Stick, Android / Google TV, mobile et tablette (Android ou iOS), ordinateur et box MAG le cas échéant — avec un lecteur compatible. Consultez les applications et les guides d’installation.",
  },
  {
    q: "Faut-il une application ?",
    a: "Oui. Le service et le lecteur sont deux choses distinctes : le forfait vous donne l’accès ; l’application de l’appareil lit les identifiants et affiche les chaînes, l’EPG et le VOD.",
  },
  {
    q: "Puis-je utiliser une liste M3U gratuite ?",
    a: "Les listes anonymes partagées ne sont pas la même chose qu’un service avec assistance. MeilleurIPTVFrance ne publie pas de listes M3U gratuites : le service repose sur des forfaits, une activation et une assistance en français.",
  },
  {
    q: "L’IPTV est-il légal ?",
    a: "La technologie IPTV, à elle seule, est un protocole de diffusion par Internet. La conformité d’un service précis dépend de l’origine des contenus, des autorisations applicables et de la loi. Nous n’affirmons pas une légalité absolue ; nous ne présentons pas les listes M3U anonymes comme notre modèle. Consultez les conditions et l’article sur les risques des listes gratuites.",
  },
  {
    q: "Combien de connexions puis-je utiliser ?",
    a: "Les forfaits MeilleurIPTVFrance proposent 1, 2 ou 3 connexions — le nombre d’écrans que vous pouvez utiliser en même temps. Choisissez selon votre foyer sur Tarifs.",
  },
  {
    q: "Comment commencer ?",
    a: "Comparez les forfaits sur Tarifs, terminez le paiement, recevez les identifiants et configurez un lecteur sur votre appareil. Les guides d’installation et le hub d’applications vous accompagnent pas à pas ; l’assistance 24h/24 répond si vous en avez besoin.",
  },
  {
    q: "Combien de temps dure l’essai gratuit ?",
    a: "Vous pouvez demander un essai de 24 heures à l’assistance avant de payer, pour valider l’appareil et le réseau. Ce n’est pas une période « gratuite » illimitée.",
  },
  {
    q: "Y a-t-il une garantie ?",
    a: "Oui. Après l’achat, la garantie de 7 jours s’applique selon les termes de la politique de remboursement.",
  },
];

const compareRows = [
  {
    topic: "Arrivée du signal",
    iptv: "Par Internet (IP) jusqu’au lecteur",
    cable: "Réseau / câble de l’opérateur",
    satellite: "Antenne et satellite",
  },
  {
    topic: "Dépendance au réseau",
    iptv: "Dépend de votre connexion et de votre Wi‑Fi",
    cable: "Infrastructure de l’opérateur",
    satellite: "Signal satellite + installation",
  },
  {
    topic: "Matériel",
    iptv: "L’appareil que vous avez déjà + une application",
    cable: "Décodeur / box de l’opérateur",
    satellite: "Antenne + récepteur",
  },
  {
    topic: "Souplesse des écrans",
    iptv: "Smart TV, Fire Stick, mobile, etc.",
    cable: "Plus centré sur le décodeur",
    satellite: "En général une TV avec récepteur",
  },
  {
    topic: "Mobilité",
    iptv: "Possible sur d’autres écrans avec des connexions",
    cable: "Limitée au pack du foyer",
    satellite: "Installation fixe",
  },
  {
    topic: "Contenu typique",
    iptv: "Chaînes en direct + VOD dans le forfait",
    cable: "Chaînes du bouquet souscrit",
    satellite: "Chaînes du bouquet",
  },
];

export default function QuestCeQueIptvPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Qu’est-ce que l’IPTV", path: "/quest-ce-que-iptv" },
        ]}
      />

      <p className="label">Guide essentiel</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Qu’est-ce que l’IPTV — explication claire
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Ce guide explique ce qu’est l’IPTV, comment il fonctionne au quotidien, ce qu’il vous faut à la maison, les
        différences avec le câble, le satellite et le streaming VOD, et comment MeilleurIPTVFrance s’inscrit dans ce modèle
        — sans jargon inutile.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/chaines" className="btn btn-ghost">
          Voir les chaînes disponibles
        </Link>
        <Link href="/applications" className="btn btn-ghost">
          Voir les applications compatibles
        </Link>
        <Link href="/tarifs" className="btn btn-solid">
          Consulter nos forfaits
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">
        Essai de 24 heures sur demande · assistance 24h/24 · garantie de 7 jours après l’achat
      </p>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="definition-heading">
        <h2 id="definition-heading" className="text-[24px] text-white md:text-[28px]">
          Qu’est-ce que l’IPTV ?
        </h2>
        <p>
          IPTV signifie <strong className="text-white">Internet Protocol Television</strong> : la télévision et le contenu
          audiovisuel livrés via Internet (protocole IP). Au lieu que le signal arrive surtout par câble coaxial ou par
          satellite de l’opérateur classique, les données arrivent à votre box Internet puis, de là, à un lecteur
          (application) sur le téléviseur, la box, le mobile ou l’ordinateur.
        </p>
        <p>
          En pratique, l’IPTV permet de regarder des <strong className="text-white">chaînes en direct</strong> — la
          programmation linéaire à laquelle vous êtes habitué (info, sport, généralistes). Beaucoup de services modernes,
          dont MeilleurIPTVFrance, associent ces chaînes à une bibliothèque <strong className="text-white">VOD</strong>{" "}
          (films et séries à la demande) dans le même forfait.
        </p>
        <p>
          Il faut distinguer la <strong className="text-white">technologie</strong> (diffusion par IP) du{" "}
          <strong className="text-white">modèle de service</strong> précis. Le mot « IPTV » décrit le mode de diffusion ;
          ce qui dit si un service est adapté et responsable, c’est l’origine des contenus et les conditions du
          fournisseur. Nous n’affirmons pas une légalité absolue seulement parce que le terme IPTV est utilisé.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="comment-ca-marche-heading">
        <h2 id="comment-ca-marche-heading" className="text-[24px] text-white md:text-[28px]">
          Comment fonctionne l’IPTV ?
        </h2>
        <p>
          Le service et le lecteur sont deux choses distinctes. Le forfait vous donne l’accès (identifiants).
          L’application de l’appareil lit ces identifiants et affiche les chaînes, le guide TV et le VOD. Chez
          MeilleurIPTVFrance, la méthode habituelle est <strong className="text-white">Xtream Codes</strong> (URL du
          serveur, utilisateur et mot de passe).
        </p>
        <ol className="mt-6 space-y-4">
          {[
            {
              t: "Choisir un forfait",
              b: "Comparez la durée et le nombre de connexions (1, 2 ou 3) sur Tarifs, selon le nombre d’écrans que vous voulez utiliser en même temps.",
            },
            {
              t: "Recevoir les identifiants",
              b: "Après la confirmation du paiement, vous recevez les accès par des canaux privés (par exemple l’e-mail).",
            },
            {
              t: "Configurer un lecteur compatible",
              b: "Installez une application adaptée sur votre appareil, de préférence depuis la boutique officielle.",
            },
            {
              t: "Se connecter et charger le service",
              b: "Saisissez Xtream Codes (ou la méthode indiquée pour MAG). Le lecteur télécharge les catégories et le guide.",
            },
            {
              t: "Chaînes, EPG et VOD",
              b: "Parcourez les chaînes en direct, l’EPG (grille des programmes) et, lorsqu’elle est incluse dans le forfait, la bibliothèque VOD.",
            },
            {
              t: "Respecter les connexions du forfait",
              b: "Chaque écran qui lit compte dans la limite de 1, 2 ou 3 connexions. Dépasser cette limite dégrade l’expérience.",
            },
          ].map((step, i) => (
            <li key={step.t} className="border-t border-line pt-4">
              <p className="micro text-white">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[17px] text-white">{step.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-slate">{step.b}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          Détail par appareil :{" "}
          <Link href="/applications" className="text-white underline-offset-4 hover:underline">
            applications IPTV
          </Link>{" "}
          et{" "}
          <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
            guides d’installation
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="necessaire-heading">
        <h2 id="necessaire-heading" className="text-[24px] text-white md:text-[28px]">
          De quoi avez-vous besoin pour utiliser l’IPTV ?
        </h2>
        <p>
          Quatre éléments pratiques : un Internet stable, un appareil compatible, une application / un lecteur et un
          forfait actif. La qualité à l’écran dépend du service, mais aussi de votre réseau, du Wi‑Fi, des performances
          de l’appareil et de la résolution choisie.
        </p>
        <h3 className="pt-2 text-[18px] text-white">Connexion Internet</h3>
        <p>
          Une connexion stable est le facteur qui pèse le plus sur la fluidité. Pour le Full HD, on recommande en
          pratique environ 15–20 Mbit/s stables sur l’appareil ; pour le 4K, idéalement 25 Mbit/s ou plus. C’est une
          orientation utile — pas une garantie absolue pour toutes les maisons. Évitez de saturer le Wi‑Fi avec de gros
          téléchargements pendant le match. Orange, Free, SFR ou Bouygues : ce qui compte, c’est le débit réel sur
          l’écran, pas le nom de la box.
        </p>
        <h3 className="text-[18px] text-white">Appareil compatible</h3>
        <p>
          Smart TV, Fire Stick, box Android, mobile, tablette ou ordinateur — ce que vous avez déjà à la maison suffit
          en général. Il n’est pas obligatoire d’acheter du matériel neuf pour commencer.
        </p>
        <h3 className="text-[18px] text-white">Application / lecteur IPTV</h3>
        <p>
          Il vous faut un lecteur qui accepte les identifiants du service. Sans lecteur configuré, les identifiants seuls
          n’affichent pas la télévision à l’écran.
        </p>
        <h3 className="text-[18px] text-white">Compte / forfait actif</h3>
        <p>
          Les identifiants appartiennent au forfait. Les partager au-delà des connexions souscrites (1, 2 ou 3) peut
          enfreindre les conditions et dégrade l’expérience sur tous les écrans.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="appareils-heading">
        <h2 id="appareils-heading" className="text-[24px] text-white md:text-[28px]">
          Appareils et applications
        </h2>
        <p>
          L’écosystème courant en France comprend la Smart TV (Samsung, LG et les autres avec boutique d’applications),
          l’Amazon Fire Stick / Fire TV, Android TV et Google TV, les mobiles et tablettes Android ou iOS, les
          ordinateurs et les box MAG lorsque votre configuration l’exige.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Smart TV — installez le lecteur depuis la boutique du téléviseur</li>
          <li>Fire Stick et box Android — application + connexion Xtream</li>
          <li>iOS / Android (mobile et tablette) — utile à la maison ou en déplacement, en comptant dans les connexions</li>
          <li>PC — lecteur compatible sur l’ordinateur</li>
          <li>MAG — accès par portail lorsque l’assistance l’indique</li>
        </ul>
        <p>
          Cette page ne remplace pas le hub complet : consultez le tableau et les recommandations dans{" "}
          <Link href="/applications" className="text-white underline-offset-4 hover:underline">
            applications IPTV
          </Link>{" "}
          et les étapes dans les{" "}
          <Link href="/guides-installation" className="text-white underline-offset-4 hover:underline">
            guides d’installation
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="comparer-heading">
        <h2 id="comparer-heading" className="max-w-3xl text-[24px] text-white md:text-[28px]">
          IPTV, câble et satellite
        </h2>
        <p className="max-w-3xl">
          Trois chemins courants pour regarder la télévision en France. Aucun n’est « toujours meilleur » — cela dépend
          de votre logement, de votre réseau et de ce que vous valorisez (souplesse des écrans, installation, mobilité).
          Nous ne comparons pas ici les tarifs des opérateurs.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-[13px] md:text-[14px]">
            <caption className="border-b border-line bg-surface px-4 py-3 text-left text-[13px] text-slate">
              Comparaison factuelle : IPTV, télévision par câble et satellite
            </caption>
            <thead>
              <tr className="border-b border-line bg-surface">
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Sujet
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  IPTV
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Câble
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Satellite
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.topic} className="border-b border-line last:border-b-0">
                  <th scope="row" className="px-4 py-3 align-top font-medium text-white">
                    {row.topic}
                  </th>
                  <td className="px-4 py-3 align-top text-slate">{row.iptv}</td>
                  <td className="px-4 py-3 align-top text-slate">{row.cable}</td>
                  <td className="px-4 py-3 align-top text-slate">{row.satellite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-3xl pt-2">
          En résumé : l’IPTV gagne en souplesse d’appareils et en combinaison direct + VOD dans un forfait payant ; il
          perd si votre Internet ou votre Wi‑Fi est instable. Le câble et le satellite dépendent moins de votre fibre à
          la maison, mais ils sont en général moins libres côté écrans et matériel.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="vs-vod-heading">
        <h2 id="vs-vod-heading" className="text-[24px] text-white md:text-[28px]">
          IPTV et streaming VOD
        </h2>
        <p>
          Beaucoup de gens demandent si l’IPTV est « la même chose que Netflix ». Non. Les plateformes de streaming
          classiques sont surtout du <strong className="text-white">VOD</strong> — vous choisissez le titre et vous le
          regardez quand vous voulez. L’<strong className="text-white">IPTV</strong> inclut des{" "}
          <strong className="text-white">chaînes en direct</strong> : la grille défile à heures fixes (journal, match,
          téléréalité).
        </p>
        <p>
          Un service IPTV complet peut réunir les deux : le linéaire en direct et la bibliothèque à la demande. Chez
          MeilleurIPTVFrance, le catalogue comprend plus de 45 000 chaînes en direct, plus de 200 000 films et plus de
          40 000 séries — toujours soumis au forfait actif et aux mises à jour du catalogue ; aucun titre ni aucune chaîne
          n’est garanti pour toujours.
        </p>
        <p>
          Exemples de ce que vous trouvez dans le service :{" "}
          <Link href="/chaines" className="text-white underline-offset-4 hover:underline">
            chaînes et sport
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="avantages-heading">
        <h2 id="avantages-heading" className="text-[24px] text-white md:text-[28px]">
          Avantages et limites
        </h2>
        <p>
          Un bon guide montre les deux faces. Ce n’est pas une page d’« avantages » isolée — c’est l’équilibre pour
          décider en connaissance de cause.
        </p>
        <h3 className="text-[18px] text-white">Avantages habituels</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Chaînes en direct et VOD dans le même service payant</li>
          <li>Usage sur plusieurs types d’appareils avec le même type de connexion</li>
          <li>Forfaits de 1, 2 ou 3 connexions pour s’adapter à votre foyer</li>
          <li>EPG (guide TV) dans le lecteur</li>
          <li>Catalogue large (+45 000 chaînes · +200 000 films · +40 000 séries)</li>
          <li>Assistance 24h/24 en français</li>
        </ul>
        <h3 className="text-[18px] text-white">Limites honnêtes</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Un Wi‑Fi faible ou partagé provoque du buffering — souvent c’est le réseau, pas un « manque de chaînes »</li>
          <li>Le 4K ne fonctionne que lorsque la source, l’appareil et la connexion tiennent</li>
          <li>Le catalogue peut changer ; confirmez les chaînes importantes sur le service actif</li>
          <li>
            Une disponibilité de 99,9 % est un engagement du service — cela ne veut pas dire que votre réseau local n’aura
            jamais de souci
          </li>
          <li>La qualité du lecteur et de l’appareil compte aussi</li>
        </ul>
        <p>
          Problèmes de chargement ? Consultez la{" "}
          <Link href="/blog/iptv-ne-fonctionne-pas-france" className="text-white underline-offset-4 hover:underline">
            checklist du buffering
          </Link>{" "}
          et les{" "}
          <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
            questions fréquentes
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="pratique-heading">
        <h2 id="pratique-heading" className="text-[24px] text-white md:text-[28px]">
          MeilleurIPTVFrance en pratique
        </h2>
        <p>
          MeilleurIPTVFrance est un <strong className="text-white">service IPTV payant</strong> — pas un dépôt de listes
          M3U gratuites. Vous choisissez le forfait, vous recevez les identifiants, vous configurez un lecteur et vous
          regardez des chaînes françaises, du sport et du VOD avec une assistance en français.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { t: "+45 000", d: "Chaînes en direct" },
            { t: "+200 000", d: "Films (VOD)" },
            { t: "+40 000", d: "Séries (VOD)" },
            { t: "99,9 %", d: "Disponibilité" },
            { t: "24/7", d: "Assistance" },
            { t: "1 · 2 · 3", d: "Connexions" },
          ].map((item) => (
            <li key={item.d} className="border border-line bg-deep px-5 py-5">
              <p className="text-[24px] tracking-[-0.4px] text-white">{item.t}</p>
              <p className="mt-1 text-[13px] text-slate">{item.d}</p>
            </li>
          ))}
        </ul>
        <p>
          Packs mis en avant à 25 €, 45 €, 89 € et 104 € selon la durée et les connexions — tableau complet sur{" "}
          <Link href="/tarifs" className="text-white underline-offset-4 hover:underline">
            Tarifs
          </Link>
          . Vous pouvez demander l’<strong className="text-white">essai de 24 heures</strong> à l’assistance avant de
          payer ; après l’achat, la <strong className="text-white">garantie de 7 jours</strong> s’applique conformément à
          la{" "}
          <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
            politique de remboursement
          </Link>
          . Qui nous sommes et comment nous fonctionnons :{" "}
          <Link href="/a-propos" className="text-white underline-offset-4 hover:underline">
            À propos
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="legal-heading">
        <h2 id="legal-heading" className="text-[24px] text-white md:text-[28px]">
          Usage responsable et légalité
        </h2>
        <p>
          L’IPTV est une technologie de diffusion de contenus par Internet. La conformité d’un service précis dépend de
          l’origine des contenus, des autorisations applicables et de la loi en vigueur — pas du simple usage du mot
          « IPTV ».
        </p>
        <p>
          C’est pourquoi nous n’écrivons pas « 100 % légal » et nous ne donnons pas de garanties absolues. Notre position
          est claire : nous ne publions pas de listes IPTV France gratuites ni de fichiers M3U anonymes ; nous travaillons
          avec des forfaits, une activation et une assistance. Pour le contexte sur les risques des listes partagées,
          lisez l’{" "}
          <Link href="/blog/liste-iptv-france-gratuite" className="text-white underline-offset-4 hover:underline">
            article sur les listes gratuites
          </Link>{" "}
          et les{" "}
          <Link href="/conditions" className="text-white underline-offset-4 hover:underline">
            conditions d’utilisation
          </Link>
          . Questions pratiques :{" "}
          <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
            questions fréquentes
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-[24px] text-white md:text-[28px]">
          Questions fréquentes
        </h2>
        <div className="mt-6">
          <FAQ items={pageFaqs} />
        </div>
        <p className="mt-6 text-[14px] text-slate">
          Plus de réponses dans les{" "}
          <Link href="/questions-frequentes" className="text-white underline-offset-4 hover:underline">
            questions fréquentes
          </Link>
          .
        </p>
      </section>

      <RelatedContent
        title="Continuer"
        links={[
          {
            href: "/chaines",
            label: "Voir les chaînes disponibles",
            description: "Catalogue français et sport dans le service.",
          },
          {
            href: "/applications",
            label: "Voir les applications compatibles",
            description: "Appareils et vue d’ensemble de l’installation.",
          },
          {
            href: "/tarifs",
            label: "Consulter nos forfaits",
            description: "Tarifs et connexions simultanées.",
          },
          {
            href: "/questions-frequentes",
            label: "Consulter les questions fréquentes",
            description: "Installation, essai et assistance.",
          },
          {
            href: "/guides-installation",
            label: "Guides d’installation",
            description: "Pas à pas par appareil.",
          },
          {
            href: "/a-propos",
            label: "À propos de MeilleurIPTVFrance",
            description: "Qui nous sommes et comment nous accompagnons les clients.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface px-6 py-10 md:px-10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-[24px] text-white md:text-[32px] md:tracking-[-0.6px]">
          Prêt pour l’étape suivante ?
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Vous connaissez l’essentiel de l’IPTV. Explorez le catalogue, préparez votre appareil et choisissez le forfait
          avec 1, 2 ou 3 connexions. Vous pouvez demander l’essai de 24 heures à l’assistance avant de payer ; après
          l’achat, vous avez la garantie de 7 jours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tarifs" className="btn btn-solid">
            Voir les forfaits
          </Link>
          <Link href="/chaines" className="btn btn-ghost">
            Voir les chaînes
          </Link>
          <Link href="/applications" className="btn btn-ghost">
            Découvrir les applications
          </Link>
        </div>
        <p className="mt-6 text-[13px] text-muted">
          Essai de 24 heures sur demande · garantie de 7 jours · assistance 24h/24
        </p>
      </section>
    </div>
  );
}
