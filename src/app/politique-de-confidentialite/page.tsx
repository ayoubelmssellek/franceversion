import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de MeilleurIPTVFrance : comment nous collectons, utilisons et protégeons les données personnelles (RGPD) pour les clients en France.",
  path: "/politique-de-confidentialite",
});

const sections = [
  {
    title: "1. Responsable du traitement",
    body: "Le responsable du traitement des données personnelles est :",
    contact: true,
    footer:
      "Pour toute question relative à la protection des données ou pour exercer vos droits au titre du Règlement général sur la protection des données (RGPD) et de la loi Informatique et Libertés, vous pouvez nous écrire à l'adresse indiquée ci-dessus.",
  },
  {
    title: "2. Données personnelles collectées",
    body: "Nous pouvons collecter les données personnelles suivantes :",
    list: [
      "Nom (lorsqu'il est fourni par l'utilisateur)",
      "Adresse e-mail",
      "Numéro de téléphone (le cas échéant)",
      "Données de paiement (traitées par des tiers)",
    ],
    footer:
      "Nous ne collectons que les données strictement nécessaires pour fournir nos services et améliorer l'expérience.",
  },
  {
    title: "3. Finalités du traitement",
    body: "Les données personnelles collectées servent à :",
    list: [
      "Traiter les abonnements et les commandes.",
      "Envoyer les identifiants d'accès au service.",
      "Assurer le support client.",
      "Améliorer les performances et les fonctionnalités du site.",
      "Respecter les obligations légales et fiscales.",
      "Prévenir la fraude et les usages abusifs du service.",
    ],
    footer:
      "Nous n'utilisons pas les données à des fins non autorisées ou incompatibles avec celles décrites ci-dessus.",
  },
  {
    title: "4. Base juridique du traitement",
    body: "Le traitement des données personnelles repose sur les bases suivantes :",
    list: [
      "Exécution d'un contrat (fourniture du service demandé)",
      "Consentement de l'utilisateur",
      "Respect d'obligations légales",
      "Intérêt légitime dans la gestion et l'amélioration du service.",
    ],
  },
  {
    title: "5. Traitement des paiements",
    body: `Les paiements sont traités par des plateformes externes sécurisées. ${site.name} ne conserve pas les données complètes des cartes bancaires. Les prestataires de paiement traitent les données selon leurs propres politiques de confidentialité et règles de sécurité.`,
  },
  {
    title: "6. Communication des données à des tiers",
    body: "Les données peuvent être communiquées à :",
    list: [
      "Hébergeurs et prestataires d'infrastructure technique",
      "Prestataires de paiement",
      "Services d'e-mail ou de support",
      "Autorités et organismes lorsque la loi l'exige.",
    ],
    footer: "Nous ne vendons, ne louons ni ne commercialisons les données personnelles auprès de tiers.",
  },
  {
    title: "7. Cookies et technologies similaires",
    body:
      "Selon l'inventaire actuel de l'application (code du site), nous n'utilisons pas de cookies d'analyse ni de pixels marketing tiers. Le traitement se limite à ce qui est nécessaire pour faire fonctionner le site :",
    list: [
      "Cookies ou stockage technique essentiel, lorsque l'hébergement ou le parcours de paiement les définit (session, sécurité, fonctionnement).",
      "Préférences techniques strictement nécessaires au service, le cas échéant.",
    ],
    footer:
      "Il n'existe pas de page cookies dédiée car, dans l'inventaire actuel, il n'y a pas de cookies non essentiels d'analyse ou de marketing à recenser (recommandations de la CNIL sur les traceurs). Si nous ajoutons des cookies tiers pour des statistiques ou de la publicité, nous mettrons cette section à jour et, si besoin, publierons une politique cookies avec information et gestion du consentement. Vous pouvez gérer ou bloquer les cookies dans les réglages de votre navigateur.",
  },
  {
    title: "8. Conservation des données",
    body: "Les données personnelles sont conservées uniquement le temps nécessaire pour :",
    list: [
      "Remplir les finalités décrites",
      "Respecter les obligations légales",
      "Résoudre d'éventuels litiges",
    ],
    footer: "Passé ce délai, les données sont supprimées de façon sécurisée ou anonymisées.",
  },
  {
    title: "9. Droits des personnes",
    body: "Conformément au RGPD, vous avez le droit de :",
    list: [
      "Accéder à vos données personnelles",
      "Demander la rectification de données inexactes",
      "Demander l'effacement des données",
      "Demander la limitation du traitement",
      "Demander la portabilité des données",
      "Vous opposer au traitement",
      "Retirer votre consentement à tout moment",
    ],
    footer: (
      <>
        Pour exercer un droit, contactez-nous à :{" "}
        <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
          {site.email}
        </a>
        . Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
        Commission nationale de l&apos;informatique et des libertés (CNIL).
      </>
    ),
  },
  {
    title: "10. Sécurité des données",
    body: "Nous avons mis en place des mesures techniques et organisationnelles adaptées pour protéger les données personnelles contre :",
    list: [
      "L'accès non autorisé",
      "La perte, la destruction ou l'altération",
      "La divulgation abusive",
    ],
    footer:
      "Malgré ces mesures, aucun système en ligne ne peut garantir une sécurité absolue.",
  },
  {
    title: "11. Liens vers des sites externes",
    body: "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leurs politiques de confidentialité ni de leur contenu. Consultez leurs politiques avant de communiquer des données personnelles.",
  },
  {
    title: "12. Modifications de la politique de confidentialité",
    body: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les changements prennent effet dès leur publication sur le site. Nous vous recommandons de consulter cette page régulièrement.",
  },
  {
    title: "13. Contact",
    body: "Pour toute question sur cette politique de confidentialité ou sur le traitement des données personnelles, vous pouvez contacter :",
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Mentions</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Politique de confidentialité</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          Cette politique de confidentialité décrit comment {site.name}, via le site{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>
          , collecte, utilise, conserve et protège les données personnelles de ses utilisateurs en France.
        </p>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          En utilisant ce site, vous déclarez avoir lu, compris et accepté les termes de cette
          politique de confidentialité.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">{section.title}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.6] text-slate">
              {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
              {section.contact ? (
                <ul className="space-y-2">
                  <li>
                    <strong className="text-white">{site.name}</strong>
                  </li>
                  <li>
                    Site :{" "}
                    <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
                      {siteConfig.url}
                    </a>
                  </li>
                  <li>
                    E-mail :{" "}
                    <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  </li>
                </ul>
              ) : null}
              {section.list ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.footer ? (
                typeof section.footer === "string" ? <p>{section.footer}</p> : section.footer
              ) : null}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
