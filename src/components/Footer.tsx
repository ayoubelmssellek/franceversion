import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/content";
import { packList } from "@/data/packs";
import { buildContactWhatsAppUrl } from "@/lib/whatsapp";
import brandLogo from "@/assets/brand/meilleur-iptv-france-logo-navbar.jpeg";

function footerPackLabel(pack: (typeof packList)[number]): string {
  const price = pack.getPrice();
  const period =
    pack.slug === "trimestral"
      ? "/3 mois"
      : "/an";
  return `${pack.name} · €${price}${period}`;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = buildContactWhatsAppUrl();

  return (
    <footer className="mt-auto border-t border-line bg-deep">
      <div className="pt-flag-rail" aria-hidden="true" />
      <div className="section-shell grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex shrink-0" aria-label="MeilleurIPTVFrance — accueil">
            <Image
              src={brandLogo}
              alt="MeilleurIPTVFrance — logo IPTV France"
              title="MeilleurIPTVFrance"
              height={44}
              width={148}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-[13px] leading-[1.4] tracking-[-0.16px] text-slate">
            Service IPTV pour la France : chaînes nationales, sport et VOD, avec installation guidée et support continu.
          </p>
        </div>

        <div>
          <p className="label mb-4">Explorer</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/quest-ce-que-iptv" className="hover:text-white">
                Qu&apos;est-ce que l&apos;IPTV
              </Link>
            </li>
            <li>
              <Link href="/chaines" className="hover:text-white">
                Chaînes
              </Link>
            </li>
            <li>
              <Link href="/applications" className="hover:text-white">
                Applications
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-white">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/questions-frequentes" className="hover:text-white">
                Questions fréquentes
              </Link>
            </li>
            <li>
              <Link href="/avis" className="hover:text-white">
                Avis
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-white">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/revendeurs" className="hover:text-white">
                Revendeurs
              </Link>
            </li>
            <li>
              <Link href="/iptv-france-whatsapp" className="hover:text-white">
                WhatsApp IPTV France
              </Link>
            </li>
            <li>
              <Link href="/convertisseur-m3u-xtream" className="hover:text-white">
                Convertisseur M3U ↔ Xtream
              </Link>
            </li>
            <li>
              <Link href="/verificateur-compte-iptv" className="hover:text-white">
                Vérificateur de compte
              </Link>
            </li>
            <li>
              <Link href="/mettre-a-jour-liste-m3u" className="hover:text-white">
                Mettre à jour la liste M3U
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Forfaits</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/tarifs" className="hover:text-white">
                Forfaits et tarifs
              </Link>
            </li>
            {packList.map((pack) => (
              <li key={pack.path}>
                <Link href={pack.path} className="hover:text-white">
                  {footerPackLabel(pack)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/renouveler" className="hover:text-white">
                Renouveler
              </Link>
            </li>
            <li>
              <Link href="/guides-installation" className="hover:text-white">
                Guides d&apos;installation
              </Link>
            </li>
          </ul>
          <p className="label mb-4 mt-10">Legal</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/politique-de-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/conditions" className="hover:text-white">
                Conditions
              </Link>
            </li>
            <li>
              <Link href="/politique-de-remboursement" className="hover:text-white">
                Remboursements
              </Link>
            </li>
            <li>
              <Link href="/politique-dmca" className="hover:text-white">
                DMCA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Contact</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp (chat direct)
              </a>
            </li>
            <li>
              <Link href="/iptv-france-whatsapp" className="hover:text-white">
                Guide WhatsApp MeilleurIPTVFrance
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-white">
                Qui nous sommes et comment nous vous aidons
              </Link>
            </li>
          </ul>
          <Link href="/tarifs" className="btn btn-ghost mt-6" aria-label="Voir les forfaits MeilleurIPTVFrance">
            Voir les forfaits
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="section-shell flex flex-col gap-2 py-5 text-[13px] text-footer sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>Activation après le paiement · garantie 7 jours · essai de 24 heures sur demande</p>
        </div>
      </div>
    </footer>
  );
}
