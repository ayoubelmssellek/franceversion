import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getPost, postCoverSrc, posts } from "@/data/blog";
import { articleJsonLd, buildMetadata, faqJsonLd, siteConfig } from "@/lib/seo";
import { buildTestWhatsAppUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  const cover = postCoverSrc(post.cover);
  const ogImage = cover.startsWith("http") ? cover : cover;
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: ogImage,
  });
}

/** Friendly anchors for bare `/path` mentions (varied, not over-optimized). */
const INTERNAL_PATH_LABELS: Record<string, string> = {
  "/": "accueil MeilleurIPTVFrance",
  "/tarifs": "Tarifs",
  "/chaines": "Chaînes",
  "/questions-frequentes": "questions fréquentes",
  "/applications": "Applications",
  "/a-propos": "À propos",
  "/renouveler": "renouveler",
  "/politique-de-remboursement": "Politique de remboursement",
  "/conditions": "Conditions",
  "/politique-de-confidentialite": "Confidentialité",
  "/quest-ce-que-iptv": "qu'est-ce que l'IPTV",
  "/guides-installation": "guides d'installation",
  "/pack-trimestriel": "Pack trimestriel",
  "/pack-basique": "Pack basique",
  "/pack-premium": "Pack Premium",
  "/pack-famille": "Pack Famille",
  "/convertisseur-m3u-xtream": "convertisseur M3U ↔ Xtream",
  "/verificateur-compte-iptv": "vérificateur de compte",
  "/mettre-a-jour-liste-m3u": "mettre à jour la liste M3U",
  "/iptv-france-whatsapp": "WhatsApp MeilleurIPTVFrance",
  "/revendeurs": "Revendeurs",
  "/blog": "blog",
  "/blog/essai-iptv-france": "essai IPTV France",
  "/blog/meilleur-iptv-france-2026": "meilleur IPTV France 2026",
  "/blog/liste-iptv-france-gratuite": "liste IPTV France gratuite",
  "/blog/iptv-smarters-pro-france": "IPTV Smarters Pro",
  "/blog/iptv-ne-fonctionne-pas-france": "guide du buffering",
  "/blog/iptv-france-prix-forfaits": "lire le tarif IPTV",
  "/blog/iptv-sport-france": "Canal+ en IPTV",
  "/blog/iptv-ligue-1-france": "Ligue 1 et IPTV",
  "/blog/iptv-vs-tv-payante-france": "IPTV et TV payante",
  "/blog/iptv-pas-cher-france": "IPTV pas cher en France",
  "/blog/voir-tv-francaise-a-letranger": "TV française à l'étranger",
  "/blog/iptv-france-en-belgique": "IPTV France en Belgique",
  "/blog/iptv-france-en-suisse": "IPTV France en Suisse",
  "/blog/iptv-plusieurs-appareils-france": "IPTV sur plusieurs appareils",
  "/blog/coupe-du-monde-2026-iptv-france": "Coupe du monde 2026 IPTV",
  "/blog/internet-pour-iptv": "internet pour l'IPTV",
  "/blog/voir-football-iptv-france": "voir le football en IPTV",
  "/blog/iptv-pour-familles-france": "IPTV pour les familles",
  "/blog/iptv-chaines-manquantes": "chaînes manquantes",
  "/blog/epg-ne-charge-pas": "l'EPG ne charge pas",
  "/blog/quest-ce-que-m3u": "qu'est-ce que le M3U",
  "/blog/xtream-codes-france": "Xtream Codes",
  "/blog/tivimate-france": "TiviMate France",
  "/blog/tivimate-vs-iptv-smarters-pro": "TiviMate vs Smarters",
  "/blog/iptv-francais-guide": "guide IPTV français",
  "/blog/vpn-iptv-france": "VPN pour l'IPTV",
  "/blog/avantages-iptv-france": "avantages de l'IPTV",
  "/blog/glossaire-iptv-france": "glossaire IPTV",
  "/blog/iptv-4k-france": "IPTV 4K France",
  "/blog/box-iptv-france": "box IPTV France",
  "/blog/meilleure-app-iptv-france": "meilleure app IPTV",
  "/blog/checklist-iptv-france": "checklist IPTV",
  "/blog/iptv-en-direct-france": "IPTV en direct",
  "/blog/iptv-france-iphone-ipad": "IPTV iPhone et iPad",
  "/blog/iptv-android-france-installation": "IPTV Android France",
  "/guides-installation/android": "guide Android",
  "/guides-installation/firestick": "guide Fire Stick",
  "/guides-installation/smart-tv": "guide Smart TV",
  "/guides-installation/ios": "guide iPhone et Apple TV",
};

const linkClass = "text-white underline-offset-4 hover:underline";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function renderInline(text: string) {
  const parts: ReactNode[] = [];
  // [anchor](https://…|/internal) OR bare /internal-path
  const re =
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[a-zA-Z0-9][a-zA-Z0-9\-\/#]*)\)|(\/(?:[a-z0-9]+(?:-[a-z0-9]+)*)(?:\/(?:[a-z0-9]+(?:-[a-z0-9]+)*))*(?:#[a-z0-9\-]+)?)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    if (match[1] && match[2]) {
      const label = match[1];
      const href = match[2];
      if (isExternalHref(href)) {
        parts.push(
          <a key={`a-${key++}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>,
        );
      } else {
        parts.push(
          <Link key={`a-${key++}`} href={href} className={linkClass}>
            {label}
          </Link>,
        );
      }
    } else if (match[3]) {
      const href = match[3];
      const base = href.split("#")[0] || href;
      const label = INTERNAL_PATH_LABELS[base] || INTERNAL_PATH_LABELS[href] || href.replace(/^\//, "");
      parts.push(
        <Link key={`a-${key++}`} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

function BlogBodyBlock({ block }: { block: string }) {
  if (block.startsWith("### ")) {
    return (
      <h3 className="pt-2 text-[22px] tracking-[-0.4px] text-white md:text-[24px]">{block.slice(4)}</h3>
    );
  }
  if (block.startsWith("## ")) {
    return (
      <h2 className="pt-4 text-[28px] tracking-[-0.6px] text-white md:text-[32px]">{block.slice(3)}</h2>
    );
  }
  return <p>{renderInline(block)}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const hubLinks = [
    {
      href: "/",
      label: "IPTV France — accueil",
      description: "MeilleurIPTVFrance : offre et comment commencer.",
    },
    {
      href: "/tarifs",
      label: "Acheter l'IPTV France",
      description: "Forfaits, tarif et connexions.",
    },
    {
      href: "/chaines",
      label: "Chaînes IPTV France",
      description: "Chaînes françaises, Canal+ et sport. La grille exacte se confirme dans le lecteur.",
    },
  ];

  const relatedMap = new Map<string, { href: string; label: string; description?: string }>();
  for (const link of [...hubLinks, ...(post.relatedPaths || [])]) {
    if (!relatedMap.has(link.href)) relatedMap.set(link.href, link);
  }
  const related = Array.from(relatedMap.values()).slice(0, 6);

  const coverSrc = postCoverSrc(post.cover);

  return (
    <article className="section-shell py-16 md:py-24">
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
          image: coverSrc.startsWith("http") ? coverSrc : new URL(coverSrc, siteConfig.url).toString(),
        })}
      />
      {post.faqs && post.faqs.length > 0 ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Link href="/blog" className="text-[14px] text-slate hover:text-white">
        ← Retour au blog
      </Link>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        {post.title}
      </h1>
      <p className="mt-3 text-[13px] text-muted">
        <time dateTime={post.date}>{post.date}</time>
        {post.updated ? (
          <>
            {" "}
            · mis à jour <time dateTime={post.updated}>{post.updated}</time>
          </>
        ) : null}{" "}
        · {post.minutes} min de lecture · MeilleurIPTVFrance
      </p>
      {slug === "essai-iptv-france" ? (
        <div className="mt-8 max-w-3xl border border-line bg-surface px-5 py-6 md:px-8 md:py-7">
          <p className="text-[13px] font-medium uppercase tracking-[0.04em] text-muted">Commande rapide</p>
          <h2 className="mt-2 text-[22px] tracking-[-0.4px] text-white md:text-[26px]">
            Vous savez déjà en quoi consiste l'essai ? Demandez-le sur WhatsApp
          </h2>
          <p className="mt-3 text-[15px] leading-[1.5] text-slate">
            24 heures sur demande — validez la Smart TV, l'application et le réseau. Ce n'est pas de l'IPTV gratuit
            illimité. Lisez le guide ci-dessous et, lorsque vous le souhaitez, ouvrez WhatsApp avec le message déjà
            préparé.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={buildTestWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              aria-label="Demander l'essai de 24 heures sur WhatsApp"
            >
              Demander l'essai sur WhatsApp
            </a>
            <Link href="/tarifs" className="btn btn-ghost">
              Voir les forfaits
            </Link>
          </div>
        </div>
      ) : null}
      <div className="img-frame relative mt-8 aspect-[21/9]">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          title={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
        />
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-[1.55] text-slate">
        {post.content.map((block) => (
          <BlogBodyBlock key={block.slice(0, 48)} block={block} />
        ))}
      </div>
      {post.faqs && post.faqs.length > 0 ? (
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[32px]">FAQ</h2>
          {post.faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-[18px] text-white">{faq.q}</h3>
              <p className="mt-2 text-[16px] leading-[1.55] text-slate">{renderInline(faq.a)}</p>
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/tarifs" className="btn btn-solid" aria-label="Acheter l'IPTV maintenant">
          Voir les forfaits
        </Link>
        <Link href="/guides-installation" className="btn btn-ghost">
          Guides d'installation
        </Link>
        {slug === "essai-iptv-france" ? (
          <a
            href={buildTestWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="Demander l'essai de 24 heures sur WhatsApp"
          >
            Demander l'essai sur WhatsApp
          </a>
        ) : (
          <Link href="/blog/essai-iptv-france" className="btn btn-ghost">
            Demander l'essai 24 h
          </Link>
        )}
      </div>
      <RelatedContent title="Lectures et pages associées" links={related} />
    </article>
  );
}
