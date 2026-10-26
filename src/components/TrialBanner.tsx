import { buildTestWhatsAppUrl } from "@/lib/whatsapp";

export default function TrialBanner() {
  return (
    <div className="border-b border-line bg-pt-green/20 text-center">
      <div className="pt-flag-rail" aria-hidden="true" />
      <div className="section-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-[13px] leading-snug sm:text-[14px]">
        <p className="text-slate">
          <span className="font-semibold text-white">Essai gratuit de 24 heures</span>
          <span className="text-muted"> · </span>
          Vérifiez les chaînes et la connexion avant de vous abonner
          <span className="text-muted"> · </span>
          <a
            href={buildTestWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pt-green-bright underline-offset-4 hover:underline"
          >
            Demander sur WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
