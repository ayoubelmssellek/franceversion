"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RenewForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-[4px] border border-line bg-transparent px-4 py-3 text-white outline-none focus:border-white/40";

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="border border-line bg-deep p-6 md:p-8">
        <label className="block text-[14px] text-slate">
          E-mail ou identifiant
          <input required name="account" className={field} placeholder="vous@email.com" />
        </label>
        <label className="mt-4 block text-[14px] text-slate">
          Durée du forfait actuel
          <select name="duration" className={`${field} bg-black`}>
            <option>3 mois</option>
            <option>6 mois</option>
            <option>1 an</option>
            <option>2 ans</option>
          </select>
        </label>
        <button type="submit" className="btn btn-solid mt-6 w-full" aria-label="Demander le renouvellement IPTV">
          Demander le renouvellement
        </button>
        {sent && (
          <p className="mt-4 border border-line px-4 py-3 text-[14px] text-slate">
            Demande reçue : le support confirmera le renouvellement par e-mail après traitement.
          </p>
        )}
      </form>

      <div className="border border-line bg-surface p-6 md:p-8">
        <h2 className="text-[20px] text-white">Vous préférez racheter un IPTV ?</h2>
        <p className="mt-3 text-[14px] text-slate">
          Repartez d&apos;un forfait complet si les identifiants ont expiré ou si vous avez besoin de plus de connexions. Comparez les tarifs
          et les connexions dans Tarifs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tarifs" className="btn btn-ghost" aria-label="Acheter l'IPTV maintenant">
            Acheter maintenant
          </Link>
          <Link href="/guides-installation" className="btn btn-solid">
            Guides d&apos;installation
          </Link>
          <Link href="/questions-frequentes" className="text-[14px] text-slate hover:text-white">
            FAQ →
          </Link>
        </div>
      </div>
    </div>
  );
}
