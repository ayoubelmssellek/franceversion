import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedContent from "@/components/RelatedContent";
import { posts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog IPTV France — guides et conseils",
  description:
    "Blog IPTV France : comment choisir un service, meilleures applications, streaming en direct et installation sur iPhone et Apple TV.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
        ]}
      />
      <p className="label">Guides et conseils</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Blog IPTV France
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Guides d'installation, meilleures applications IPTV et conseils pour Smart TV, Android et Apple TV.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="img-frame relative aspect-[16/9]">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                title={post.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <p className="mt-4 text-[13px] text-muted">
              {post.date} · {post.minutes} min de lecture
            </p>
            <h2 className="mt-2 text-[24px] text-white group-hover:text-slate">{post.title}</h2>
            <p className="mt-2 text-[14px] text-slate">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/tarifs" className="btn btn-solid" aria-label="Voir les forfaits IPTV">
          Voir les forfaits
        </Link>
        <Link href="/guides-installation" className="btn btn-ghost">
          Guides d'installation
        </Link>
      </div>
      <RelatedContent
        title="Contenu associé"
        links={[
          {
            href: "/guides-installation",
            label: "Hub d'installation",
            description: "Tutoriels par appareil.",
          },
          {
            href: "/tarifs",
            label: "Acheter l'IPTV",
            description: "Forfaits et tarifs.",
          },
          {
            href: "/chaines",
            label: "Chaînes IPTV France",
            description: "Ce que vous pouvez regarder en direct.",
          },
          {
            href: "/a-propos",
            label: "Pourquoi MeilleurIPTVFrance",
            description: "Ce qui distingue le service.",
          },
        ]}
      />
    </div>
  );
}
