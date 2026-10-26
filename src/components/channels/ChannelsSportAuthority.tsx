import Link from "next/link";
import { sportAuthorityBlocks, sportContentReviewed } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

export default function ChannelsSportAuthority() {
  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label">Sport dans le catalogue</p>
          <h2 className="mt-4 max-w-3xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            Sport dans le catalogue : Ligue 1, Canal+ et plus
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.5] text-slate">
            Ce que vous trouverez dans le service MeilleurIPTVFrance, sans listes M3U partagées. Pour le pas à pas de{" "}
            <em className="text-slate">comment regarder</em> Canal+ (lecteur, favoris, connexion), utilisez le guide du
            blog. Catalogue revu en {sportContentReviewed} ; il est mis à jour à chaque saison sportive.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sportAuthorityBlocks.map((block, index) => (
            <Reveal key={block.id} delayMs={(index % 3) * 40}>
              <article id={block.id} className="max-w-3xl scroll-mt-28">
                <h3 className="text-[22px] text-white md:text-[24px]">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[15px] leading-7 text-slate">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap gap-3">
          <Link href="/blog/iptv-sport-france" className="btn btn-ghost">
            Comment regarder Canal+ (guide)
          </Link>
          <Link href="/blog/iptv-ligue-1-france" className="btn btn-ghost">
            Ligue 1 et football en direct
          </Link>
          <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits sport">
            Voir les forfaits
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
