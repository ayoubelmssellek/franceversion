import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Conditions du service",
  description:
    "Conditions du service de MeilleurIPTVFrance : usage du site, abonnements IPTV France, paiements et contact.",
  path: "/conditions",
});

const sections = [
  {
    title: "1. Objet",
    body: `Les présentes conditions régissent l'usage du site et des services fournis par ${site.name}, y compris les abonnements, le support et les fonctionnalités associées.`,
  },
  {
    title: "2. Conditions d'usage",
    body: "En utilisant nos services, vous déclarez que :",
    list: [
      "Vous avez au moins 18 ans ;",
      "Vous fournissez des informations exactes et à jour ;",
      "Vous utilisez le service conformément au droit applicable.",
    ],
    footer:
      "Nous nous réservons le droit de refuser ou de suspendre le service si ces conditions ne sont pas respectées.",
  },
  {
    title: "3. Abonnements et accès au service",
    body: `${site.name} propose différents forfaits d'abonnement IPTV France. Après confirmation du paiement, vous recevez les identifiants d'accès par e-mail. L'accès est personnel et incessible, sauf mention expresse sur les forfaits multi-appareils.`,
  },
  {
    title: "4. Usage acceptable",
    body: "Vous vous engagez à ne pas :",
    list: [
      "Utiliser le service à des fins illégales ;",
      "Partager les identifiants de façon abusive ;",
      "Tenter d'accéder aux systèmes techniques ou de les perturber ;",
      "Copier, redistribuer ou exploiter commercialement le service sans autorisation.",
    ],
    footer:
      "Toute infraction peut entraîner la suspension immédiate du compte, sans droit au remboursement.",
  },
  {
    title: "5. Paiements",
    body: "Les paiements passent par des plateformes externes sécurisées. Les prix affichés sur le site peuvent changer à tout moment sans préavis, sans affecter les commandes déjà confirmées. Le renouvellement automatique n'a lieu que lorsqu'il est indiqué expressément au moment de l'achat.",
  },
  {
    title: "6. Résiliation",
    body: (
      <>
        Vous pouvez résilier l&apos;abonnement à tout moment. La résiliation empêche les renouvellements futurs, mais
        n&apos;implique pas le remboursement des périodes déjà payées, sauf disposition contraire de la{" "}
        <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
          politique de remboursement
        </Link>
        .
      </>
    ),
  },
  {
    title: "7. Disponibilité du service",
    body: `${site.name} s'efforce d'assurer la meilleure stabilité possible. Toutefois :`,
    list: [
      "Nous ne garantissons pas une disponibilité ininterrompue ;",
      "Des opérations de maintenance technique peuvent être nécessaires ;",
      "Des interruptions temporaires indépendantes de notre volonté peuvent survenir.",
    ],
    footer:
      "Nous ne sommes pas responsables des pannes liées à la connexion internet de l'utilisateur ou de tiers.",
  },
  {
    title: "8. Évolution du service",
    body: "Nous nous réservons le droit de :",
    list: [
      "Modifier des fonctionnalités ;",
      "Mettre à jour les systèmes ;",
      "Modifier ou retirer des contenus ;",
      "Suspendre ou interrompre des parties du service.",
    ],
  },
  {
    title: "9. Propriété intellectuelle",
    body: `Tous les éléments de ce site, y compris le design, les textes, la structure et la marque, appartiennent à ${site.name} ou à leurs titulaires respectifs. Toute reproduction, modification ou usage commercial sans autorisation préalable est interdit.`,
  },
  {
    title: "10. Limitation de responsabilité",
    body: "Dans la mesure permise par la loi :",
    list: [
      "Nous ne garantissons pas que le service soit exempt d'erreurs ;",
      "Nous ne sommes pas responsables des pertes indirectes ni des dommages consécutifs ;",
      "Nous ne sommes pas responsables des pannes temporaires ou de l'indisponibilité.",
    ],
    footer:
      "Vous acceptez d'utiliser le service sous votre responsabilité, sans préjudice des droits que le Code de la consommation vous reconnaît et auxquels il ne peut être renoncé.",
  },
  {
    title: "11. Liens externes",
    body: "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leur contenu ni de leurs pratiques.",
  },
  {
    title: "12. Protection des données",
    body: (
      <>
        Le traitement des données personnelles est décrit dans notre{" "}
        <Link href="/politique-de-confidentialite" className="text-white underline-offset-4 hover:underline">
          politique de confidentialité
        </Link>
        . Nous vous recommandons de la lire pour comprendre comment les données sont collectées et utilisées.
      </>
    ),
  },
  {
    title: "13. Modification des conditions",
    body: `${site.name} peut mettre à jour ces conditions à tout moment. L'usage continu du site après les changements vaut acceptation des conditions mises à jour.`,
  },
  {
    title: "14. Droit applicable et juridiction",
    body: "Les présentes conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents en France, sans préjudice du for du consommateur prévu par le Code de la consommation.",
  },
  {
    title: "15. Contact",
    body: "Pour toute question sur ces conditions du service :",
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Conditions du service", path: "/conditions" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Mentions</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Conditions du service</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          Bienvenue sur {site.name}. En accédant au site{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>{" "}
          et aux services fournis, vous déclarez avoir lu, compris et accepté ces conditions
          du service.
        </p>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          Si vous n&apos;acceptez pas ces conditions, vous devez cesser immédiatement d&apos;utiliser le site et les services.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">{section.title}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.6] text-slate">
              {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
              {section.list ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.footer ? <p>{section.footer}</p> : null}
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
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
