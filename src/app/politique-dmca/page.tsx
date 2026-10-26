import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique DMCA",
  description:
    "Politique DMCA de MeilleurIPTVFrance : comment signaler une atteinte aux droits d'auteur et comment les réclamations sont examinées.",
  path: "/politique-dmca",
});

export default function DmcaPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Politique DMCA", path: "/politique-dmca" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Mentions</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Politique DMCA</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          {site.name} respecte la propriété intellectuelle et répond aux notifications valides d&apos;atteinte présumée
          aux droits d&apos;auteur concernant les contenus du site{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>
          . Cette politique s&apos;applique au marché français et au droit de l&apos;Union européenne, en plus des
          principes de la DMCA.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Signaler une atteinte</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Si vous estimez qu&apos;un élément de ce site (texte ou image) porte atteinte à vos droits, envoyez une notification à{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>{" "}
            avec l&apos;identification de l&apos;œuvre, l&apos;URL concernée, vos coordonnées et une déclaration de bonne foi.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Examen des demandes</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Les notifications complètes sont examinées et traitées en priorité — en général sous 24 à 48
            heures.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Déclarations inexactes</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Une présentation sciemment inexacte d&apos;une atteinte peut engager votre responsabilité, y compris les frais
            de conseil, conformément au droit applicable en France.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Contact</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.6] text-slate">
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
        </section>
      </article>
    </div>
  );
}
