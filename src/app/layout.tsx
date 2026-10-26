import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import AppChrome from "@/components/AppChrome";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ogImage = new URL(siteConfig.ogImage, siteConfig.url).toString();

/** Explicit mobile viewport — checklist item for mobile-friendly pages. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | MeilleurIPTVFrance",
  },
  description: siteConfig.defaultDescription,
  authors: [{ name: "MeilleurIPTVFrance" }],
  creator: "MeilleurIPTVFrance",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "MeilleurIPTVFrance — IPTV France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: ogImage,
        alt: "MeilleurIPTVFrance — IPTV France",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-FR" className={`${dmSans.variable} h-full`}>
      <body className={`${dmSans.className} flex min-h-full flex-col antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
