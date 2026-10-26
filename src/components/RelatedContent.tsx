import Link from "next/link";

export type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

/** Contextual internal links for topic clusters (pillar ↔ supporting). */
export default function RelatedContent({
  title = "Continuer",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;

  return (
    <section className="mt-14 border-t border-line pt-10" aria-labelledby="related-content-heading">
      <h2 id="related-content-heading" className="text-[20px] text-white md:text-[24px]">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block border border-line bg-deep px-4 py-3 transition hover:border-white/30"
            >
              <span className="text-[15px] font-medium text-white">{link.label}</span>
              {link.description ? (
                <span className="mt-1 block text-[13px] leading-[1.4] text-slate">{link.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
