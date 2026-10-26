import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getGuide, guides } from "@/data/guides";
import { buildMetadata, faqJsonLd, howToJsonLd } from "@/lib/seo";

/** Visible FAQ may wrap “politique de remboursement”; schema uses plain guide.faqs strings. */
function withRefundPolicyLink(answer: string) {
  const marker = "politique de remboursement";
  const index = answer.indexOf(marker);
  if (index === -1) return answer;
  return (
    <>
      {answer.slice(0, index)}
      <Link href="/politique-de-remboursement" className="text-white underline-offset-4 hover:underline">
        {marker}
      </Link>
      {answer.slice(index + marker.length)}
    </>
  );
}

export function generateStaticParams() {
  return guides.map((g) => ({ device: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) return { title: "Guide d’installation" };
  return buildMetadata({
    title: guide.seoTitle || `${guide.title} — Comment installer l’IPTV`,
    description: guide.seoDescription || guide.short,
    path: `/guides-installation/${guide.slug}`,
  });
}

export default async function DeviceGuidePage({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) notFound();

  const breadcrumbItems = [
    { name: "Accueil", path: "/" },
    { name: "Applications", path: "/applications" },
    { name: "Guides d’installation", path: "/guides-installation" },
    { name: guide.title, path: `/guides-installation/${guide.slug}` },
  ];

  const otherGuides = guides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3)
    .map((g) => ({
      href: `/guides-installation/${g.slug}`,
      label: g.title,
      description: g.short,
    }));

  const relatedBlog =
    guide.slug === "android"
      ? {
          href: "/blog/iptv-android-france-installation",
          label: "IPTV Android — erreurs et diagnostic",
          description: "Invalid details, flux vides et réseau — ce n’est pas le guide d’installation.",
        }
      : guide.slug === "firestick"
        ? {
            href: "/blog/iptv-smarters-pro-france",
            label: "IPTV Smarters Pro — accès et erreurs",
            description: "Xtream et messages du lecteur (l’installation est dans ce guide).",
          }
        : guide.slug === "ios"
          ? {
              href: "/blog/iptv-france-iphone-ipad",
              label: "IPTV sur iPhone et iPad",
              description: "Habitudes et réseau sur iOS.",
            }
          : {
              href: "/blog/iptv-ne-fonctionne-pas-france",
              label: "L’IPTV ne fonctionne pas / buffering",
              description: "Checklist réseau et qualité.",
            };

  const androidExtraLinks =
    guide.slug === "android"
      ? [
          {
            href: "/blog/iptv-smarters-pro-france",
            label: "IPTV Smarters Pro — accès",
            description: "Champs Xtream et erreurs du lecteur.",
          },
          {
            href: "/blog/iptv-ne-fonctionne-pas-france",
            label: "L’IPTV ne fonctionne pas / buffering",
            description: "Checklist réseau et qualité.",
          },
        ]
      : [];

  const jsonLd = [
    howToJsonLd({
      name: `Comment installer l’IPTV — ${guide.title}`,
      description: guide.short,
      path: `/guides-installation/${guide.slug}`,
      steps: guide.steps,
    }),
    ...(guide.faqs && guide.faqs.length > 0 ? [faqJsonLd(guide.faqs)] : []),
  ];

  return (
    <article className="section-shell py-16 md:py-24">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-wrap gap-4 text-[14px]">
        <Link href="/applications" className="text-slate hover:text-white">
          ← Applications IPTV
        </Link>
        <Link href="/guides-installation" className="text-slate hover:text-white">
          Tous les guides
        </Link>
      </div>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">{guide.title}</h1>
      <p className="mt-4 max-w-3xl text-[16px] text-slate">{guide.intro}</p>

      <section className="mt-10 border border-line bg-deep p-6 md:p-8">
        <h2 className="text-[20px] text-white">Avant de commencer</h2>
        <ul className="mt-4 space-y-2 text-[14px] text-slate">
          {guide.needs.map((n) => (
            <li key={n}>— {n}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-[20px] text-white">Étapes pour installer l’IPTV</h2>
        <ol className="mt-4 space-y-4">
          {guide.steps.map((step, i) => (
            <li key={step.title} className="border border-line bg-black p-5">
              <h3 className="text-[16px] font-medium text-white">
                <span className="text-slate">{i + 1}.</span> {step.title}
              </h3>
              <p className="mt-2 text-[14px] text-slate">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {guide.sections?.map((section) => (
        <section key={section.heading} className="mt-10 max-w-3xl">
          <h2 className="text-[20px] text-white">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="mt-3 text-[15px] leading-7 text-slate">
              {p}
            </p>
          ))}
        </section>
      ))}

      <section className="mt-8 border border-line bg-surface p-6">
        <h2 className="text-[20px] text-white">Conseils</h2>
        <ul className="mt-3 space-y-2 text-[14px] text-slate">
          {guide.tips.map((t) => (
            <li key={t}>— {t}</li>
          ))}
        </ul>
      </section>

      {guide.faqs && guide.faqs.length > 0 ? (
        <section className="mt-10 max-w-3xl">
          <h2 className="text-[20px] text-white">Questions fréquentes</h2>
          <div className="mt-4 space-y-4">
            {guide.faqs.map((f) => (
              <div key={f.q} className="border border-line bg-deep p-5">
                <h3 className="text-[16px] font-medium text-white">{f.q}</h3>
                <p className="mt-2 text-[14px] text-slate">{withRefundPolicyLink(f.a)}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits IPTV">
          Voir les forfaits
        </Link>
        <Link href="/chaines" className="btn btn-ghost">
          Chaînes françaises et Canal+
        </Link>
        <Link href="/blog/iptv-ne-fonctionne-pas-france" className="btn btn-ghost">
          De l’IPTV avec du buffering ?
        </Link>
      </div>

      <RelatedContent
        title="Autres guides et achat"
        links={[
          {
            href: "/applications",
            label: "Hub des applications IPTV",
            description: "Vue d’ensemble des appareils et des lecteurs.",
          },
          {
            href: "/guides-installation",
            label: "Tous les guides d’installation",
            description: "Index par appareil.",
          },
          {
            href: "/tarifs",
            label: "Consultez nos forfaits",
            description: "Activation et identifiants après le paiement.",
          },
          {
            href: "/chaines",
            label: "Voir les chaînes françaises",
            description: "Chaînes françaises, Canal+ et sport.",
          },
          relatedBlog,
          ...androidExtraLinks,
          ...otherGuides,
        ]}
      />
    </article>
  );
}
