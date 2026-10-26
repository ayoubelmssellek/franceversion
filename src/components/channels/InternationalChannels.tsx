import { Globe2, Languages, Users } from "lucide-react";
import Reveal from "@/components/channels/Reveal";

const points = [
  {
    icon: Languages,
    title: "Foyers multilingues",
    description:
      "Chaînes d'Europe et d'Amérique en complément : idéal pour les familles en France qui regardent aussi du contenu international.",
  },
  {
    icon: Globe2,
    title: "Avantage en plus",
    description:
      "Le cœur du service est l'IPTV français. Les packs internationaux élargissent les options, sans remplacer la TV française.",
  },
  {
    icon: Users,
    title: "Conçu pour qui vit en France",
    description:
      "Tout ce qu'il vous faut dans un IPTV pour la France : les chaînes locales d'abord, l'international quand vous le souhaitez.",
  },
];

export default function InternationalChannels() {
  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Extra</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          Inclut aussi des chaînes internationales
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          En plus des chaînes IPTV France, le catalogue propose des options internationales pour qui vit en France : un
          complément, pas le produit principal. Pas de chiffres de pays inventés : confirmez dans le lecteur ce qui
          est actif.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[18px] text-white">{point.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-slate">{point.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
