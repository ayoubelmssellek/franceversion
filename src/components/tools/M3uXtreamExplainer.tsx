"use client";

import { useState } from "react";

type ParseResult = {
  lines: number;
  extinf: number;
  httpUrls: number;
  looksLikePlaylist: boolean;
};

function parseM3u(raw: string): ParseResult {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  let extinf = 0;
  let httpUrls = 0;
  for (const line of lines) {
    if (line.toUpperCase().startsWith("#EXTINF")) extinf += 1;
    if (/^https?:\/\//i.test(line)) httpUrls += 1;
  }
  return {
    lines: lines.length,
    extinf,
    httpUrls,
    looksLikePlaylist: lines.some((l) => l.toUpperCase().startsWith("#EXTM3U")) || extinf > 0,
  };
}

export default function M3uXtreamExplainer() {
  const [raw, setRaw] = useState("");
  const result = raw.trim() ? parseM3u(raw) : null;

  return (
    <div className="max-w-3xl border border-line bg-surface p-6 md:p-8">
      <label htmlFor="m3u-input" className="block text-[14px] text-white">
        Collez ici des lignes M3U (facultatif)
      </label>
      <textarea
        id="m3u-input"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        rows={8}
        spellCheck={false}
        placeholder={"#EXTM3U\n#EXTINF:-1,Exemple\nhttps://exemple.invalid/stream"}
        className="mt-3 w-full resize-y border border-line bg-deep px-4 py-3 font-mono text-[13px] text-slate outline-none focus:border-white/30"
      />
      {result ? (
        <ul className="mt-4 space-y-2 text-[14px] text-slate">
          <li>
            Lignes non vides : <span className="text-white">{result.lines}</span>
          </li>
          <li>
            Entrées #EXTINF : <span className="text-white">{result.extinf}</span>
          </li>
          <li>
            URLs http(s): <span className="text-white">{result.httpUrls}</span>
          </li>
          <li>
            Ressemble à une liste M3U :{" "}
            <span className="text-white">{result.looksLikePlaylist ? "oui" : "non : vérifiez le format"}</span>
          </li>
        </ul>
      ) : (
        <p className="mt-4 text-[14px] text-muted">
          Rien n&apos;est envoyé au serveur. Si vous utilisez MeilleurIPTVFrance, préférez l&apos;accès Xtream de l&apos;e-mail
          d&apos;activation.
        </p>
      )}
      <div className="mt-6 border-t border-line pt-6 text-[14px] leading-6 text-slate">
        <p className="text-white">Repère Xtream</p>
        <p className="mt-2">
          URL du serveur → champ Server/Host · Identifiant → Username · Mot de passe → Password (libellés du
          lecteur). Ne collez pas de listes de forums : utilisez uniquement les identifiants de votre compte.
        </p>
      </div>
    </div>
  );
}
