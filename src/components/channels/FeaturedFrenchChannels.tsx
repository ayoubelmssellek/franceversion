import Image from "next/image";
import type { FrenchChannelSlot } from "@/data/media";
import Reveal from "@/components/channels/Reveal";

type FeaturedFrenchChannelsProps = {
  slots: FrenchChannelSlot[];
};

export default function FeaturedFrenchChannels({ slots }: FeaturedFrenchChannelsProps) {
  if (slots.length === 0) return null;

  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label">Catalogue en direct</p>
          <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            Chaînes françaises
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] text-slate">
            TF1, France 2, France 3, M6, Canal+, beIN Sports, Eurosport, L&apos;Équipe, BFM TV, France Info et Arte
            Info. Le catalogue exact se confirme dans le lecteur après connexion.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {slots.map((slot, index) => (
            <Reveal key={slot.id} delayMs={(index % 4) * 60}>
              <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <div className="relative mx-auto h-16 w-full max-w-[140px] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={slot.src}
                    alt={slot.alt}
                    title={`${slot.label} IPTV France`}
                    fill
                    className="object-contain p-2"
                    sizes="140px"
                  />
                </div>
                <h3 className="mt-5 text-center text-[16px] text-white">{slot.label}</h3>
                <p className="mt-1 text-center text-[12px] text-muted">
                  {slot.category} · IPTV France
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
