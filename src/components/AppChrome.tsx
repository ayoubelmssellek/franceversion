"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckoutFlow = pathname.startsWith("/checkout") || pathname.startsWith("/merci");
  const isPayExit = pathname.startsWith("/pay");

  // Blank payment handoff — no chrome, no WhatsApp, no brand.
  if (isPayExit) {
    return <>{children}</>;
  }

  if (isCheckoutFlow) {
    return (
      <>
        {children}
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
