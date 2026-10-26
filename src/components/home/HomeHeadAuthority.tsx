import Link from "next/link";

const hubs = [
  {
    href: "/quest-ce-que-iptv",
    label: "Qu'est-ce que l'IPTV",
    detail: "Définition et fonctionnement",
  },
  {
    href: "/chaines",
    label: "Chaînes et sport",
    detail: "TF1, France 2, Canal+, Ligue 1",
  },
  {
    href: "/applications",
    label: "Applications",
    detail: "Smart TV, Fire Stick, Android, iOS",
  },
  {
    href: "/guides-installation",
    label: "Guides d'installation",
    detail: "Pas à pas par appareil",
  },
  {
    href: "/tarifs",
    label: "Acheter / forfaits",
    detail: "Prix, connexions et paiement",
  },
  {
    href: "/questions-frequentes",
    label: "Questions fréquentes",
    detail: "Installation, essai et support",
  },
  {
    href: "/blog/meilleur-iptv-france-2026",
    label: "Meilleur IPTV France 2026",
    detail: "Critères concrets avant de vous abonner",
  },
  {
    href: "/blog/essai-iptv-france",
    label: "Essai IPTV France",
    detail: "24 heures sur demande auprès du support",
  },
  {
    href: "/blog/iptv-sport-france",
    label: "Canal+ IPTV France",
    detail: "Sport et favoris dans le lecteur",
  },
];

/** Compact hub strip — no long essay (deep copy lives on linked pages). */
export default function HomeHeadAuthority() {
  return (
    <section className="border-t border-line bg-surface py-16 md:py-20" aria-labelledby="iptv-france-hubs">
      <div className="section-shell">
        <p className="label">Explorer</p>
        <h2
          id="iptv-france-hubs"
          className="mt-4 max-w-3xl text-[28px] tracking-[-0.6px] text-white md:text-[36px] md:tracking-[-0.9px]"
        >
          Pages utiles d&apos;IPTV France
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Raccourcis vers l&apos;essentiel : catalogue, installation, forfaits et guides. Le domaine meilleuriptvfrance.shop
          identifie ce service.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => (
            <li key={hub.href}>
              <Link
                href={hub.href}
                className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
              >
                <span className="text-[16px] text-white">{hub.label}</span>
                <span className="mt-2 block text-[13px] text-muted">{hub.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
