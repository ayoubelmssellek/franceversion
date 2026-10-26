import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de remboursement",
  description:
    "Politique de remboursement de MeilleurIPTVFrance : conditions, délai de 7 jours et comment demander le remboursement du service IPTV en France.",
  path: "/politique-de-remboursement",
});

export default function RefundPolicyPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Politique de remboursement", path: "/politique-de-remboursement" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Mentions</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Politique de remboursement</h1>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          {site.name} recommande un <strong className="text-white">essai gratuit de 24 heures</strong> (sur
          demande auprès du support) pour vérifier la compatibilité avant de payer. Après l&apos;achat, une{" "}
          <strong className="text-white">garantie de satisfaction de 7 jours</strong> s&apos;applique dans les conditions
          ci-dessous. Ce n&apos;est pas un IPTV gratuit illimité — l&apos;essai et la garantie servent à réduire le risque lors de la
          première expérience.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Politique de remboursement</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Les demandes de remboursement dans la garantie de 7 jours sont examinées au cas par cas. Utiliser l&apos;essai de 24
            heures avant de payer reste le meilleur moyen de valider les appareils et le réseau. Une fois accepté, le montant
            est reversé sur le moyen de paiement d&apos;origine.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">
            Conditions pour demander un remboursement
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Le remboursement peut être envisagé dans les circonstances suivantes :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>
              Défaillance technique grave et documentée du service, impossible à résoudre dans un délai de 72 heures après la
              notification écrite.
            </li>
            <li>Prélèvement en double ou erreur de paiement vérifiée et confirmée.</li>
            <li>
              Annulation demandée dans la garantie de 7 jours après l&apos;activation initiale, sous réserve d&apos;examen et des
              exclusions indiquées plus bas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">
            Situations qui n&apos;ouvrent pas droit au remboursement
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Aucun remboursement n&apos;est accordé dans les cas suivants :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>Changement de préférence personnelle après l&apos;activation du service.</li>
            <li>
              Problèmes de compatibilité avec des appareils non vérifiés pendant la période d&apos;essai gratuit.
            </li>
            <li>
              Débit internet insuffisant chez le client (minimum recommandé : 10 Mbit/s pour la HD, 25 Mbit/s
              pour la 4K).
            </li>
            <li>
              Abonnements hors délai de la garantie de 7 jours ou usage abusif du service (partage massif,
              revente).
            </li>
            <li>Contenu bloqué par des restrictions géographiques locales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Comment demander un remboursement</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Pour demander un remboursement, suivez ces étapes :
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>
              Contactez notre support par WhatsApp ou par e-mail :{" "}
              <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
                {site.email}
              </a>
            </li>
            <li>Indiquez votre nom complet, l&apos;e-mail enregistré et un motif détaillé de votre demande.</li>
            <li>Attendez notre réponse sous 5 jours ouvrés.</li>
            <li>
              S&apos;il est accepté, le remboursement est effectué sur le moyen de paiement d&apos;origine sous 7 à 14 jours ouvrés.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Droits du consommateur en France</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Cette politique s&apos;applique aux clients en France et respecte le Code de la consommation pour les contrats
            conclus à distance. Pour un contenu numérique dont l&apos;exécution commence immédiatement, le consommateur
            reconnaît expressément, conformément à l&apos;article L221-28 du Code de la consommation, qu&apos;il perd son droit de
            rétractation dès que l&apos;exécution a commencé avec son accord préalable exprès et sa reconnaissance de la perte
            de ce droit. La garantie commerciale de 7 jours décrite ici est un engagement de MeilleurIPTVFrance, distinct
            de ce cadre légal.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Contact</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Pour les questions de paiement ou de remboursement, contactez-nous par WhatsApp, disponible sur notre site, ou par
            e-mail à{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
            . Notre support est disponible tous les jours de 10 h à 22 h (heure de Paris).
          </p>
        </section>
      </article>
    </div>
  );
}
