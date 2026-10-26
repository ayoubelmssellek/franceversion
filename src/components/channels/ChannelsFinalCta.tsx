import Link from "next/link";
import Reveal from "@/components/channels/Reveal";

const trustBadges = ["Essai de 24 heures sur demande", "Garantie de 7 jours", "Support 24/7", "Paiement sécurisé"];

export default function ChannelsFinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.10), transparent 65%), linear-gradient(180deg, #030303 0%, #0a0a0a 100%)",
        }}
      />
      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-md md:px-12 md:py-16">
            <p className="label text-white/60">Acheter IPTV France</p>
            <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[48px]">
              Prêt à regarder les chaînes françaises sur votre écran ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] text-slate">
              Choisissez un forfait MeilleurIPTVFrance, configurez un lecteur sur l&apos;appareil que vous avez déjà et commencez à regarder
              la télévision française, le sport et la VOD. Vous pouvez demander l&apos;essai de 24 heures au support ; après l&apos;achat,
              vous disposez de la garantie de 7 jours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits IPTV France">
                Voir les forfaits
              </Link>
              <Link href="/applications" className="btn btn-ghost" aria-label="Voir les applications compatibles">
                Voir les applications
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <li key={badge} className="text-[12px] uppercase tracking-[0.35px] text-muted">
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
