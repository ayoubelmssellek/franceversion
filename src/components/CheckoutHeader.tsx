import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/brand/meilleur-iptv-france-logo-navbar.jpeg";

export default function CheckoutHeader({ step }: { step: 1 | 2 }) {
  return (
    <header className="border-b border-line bg-black">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex shrink-0" aria-label="MeilleurIPTVFrance — accueil">
          <Image
            src={brandLogo}
            alt="MeilleurIPTVFrance — logo IPTV France"
            title="MeilleurIPTVFrance"
            height={40}
            width={135}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 text-[14px]">
          <div className={`flex items-center gap-2 ${step === 1 ? "text-white" : "text-slate"}`}>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                step === 1 ? "border-white bg-white text-black" : "border-line"
              }`}
            >
              1
            </span>
            <span className="hidden sm:inline">Coordonnées</span>
          </div>
          <span className="h-px w-10 bg-line" />
          <div className={`flex items-center gap-2 ${step === 2 ? "text-white" : "text-slate"}`}>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                step === 2 ? "border-white bg-white text-black" : "border-line"
              }`}
            >
              2
            </span>
            <span className="hidden sm:inline">Payer</span>
          </div>
        </div>
      </div>
    </header>
  );
}
