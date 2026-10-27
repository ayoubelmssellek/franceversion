import Image from "next/image";
import Link from "next/link";
import type { FrenchChannelSlot } from "@/data/media";
import { heroStats } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

type ChannelsHeroProps = {
  slots: FrenchChannelSlot[];
};

export default function ChannelsHero({ slots }: ChannelsHeroProps) {
  const logos = slots.slice(0, 8);

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(ellipse 40% 40% at 90% 20%, rgba(255,255,255,0.05), transparent 50%), radial-gradient(ellipse 35% 35% at 10% 60%, rgba(255,255,255,0.04), transparent 50%)",
        }}
      />

      <div className="section-shell relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="animate-rise label text-white/60">Chaînes IPTV France</p>
            <h1 className="animate-rise-delay-1 mt-5 max-w-2xl text-[40px] tracking-[-1.2px] text-white md:text-[52px] lg:text-[56px]">
              Chaînes IPTV France : télévision nationale et sport
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
              TF1, France 2, France 3, M6, Canal+ et les chaînes de sport et d&apos;info. Films, séries et chaînes
              internationales restent dans le catalogue. Confirmez toujours ce qui est actif dans votre lecteur.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/tarifs" className="btn btn-solid" aria-label="Voir nos forfaits">
                Voir les tarifs
              </Link>
              <Link href="/applications" className="btn btn-ghost" aria-label="Voir les applications compatibles">
                Voir les applications
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-muted">
              Essai de 24 heures sur demande · garantie de 7 jours · assistance 24h/24
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delayMs={i * 60}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.07]">
                    <p className="text-[22px] tracking-[-0.6px] text-white md:text-[24px]">{stat.value}</p>
                    <p className="mt-1 text-[12px] text-mid">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {logos.length > 0 && (
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-white/[0.04] blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {logos.map((slot, index) => (
                <div
                  key={slot.id}
                  className={`animate-float-soft rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md ${
                    index % 2 === 1 ? "sm:translate-y-6" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  <div className="relative mx-auto h-14 w-full overflow-hidden rounded-lg bg-white">
                    <Image
                      src={slot.src}
                      alt={slot.alt}
                      title={`${slot.label} IPTV France`}
                      fill
                      className="object-contain p-1.5"
                      sizes="180px"
                    />
                  </div>
                  <p className="mt-3 text-center text-[12px] text-muted">{slot.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
