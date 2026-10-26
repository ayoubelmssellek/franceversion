# France site — project brief (read this first)

## What this folder is

- The **MeilleurIPTVFrance** site. French language, France market.
- Work **only** in `stream_website_france`. Do not edit the Spain or Portugal project folders.

## Current status

- UI, pages, and data are French (`fr-FR`), market France.
- Brand / domain: **MeilleurIPTVFrance** · `https://www.meilleuriptvfrance.shop` · `support@meilleuriptvfrance.shop`.
- Locale: `fr-FR` / `fr_FR`; checkout country lock `FR`.
- Public paths are French (`/tarifs`, `/chaines`, `/questions-frequentes`, blog slugs `*-france`).
- Open Graph image is `public/meilleuriptvfrance-image-open-graph.jpg`.
- Colors follow the French flag: blue `#0055A4`, white `#FFFFFF`, red `#EF4135`.
- French national channel logos are placeholders (`Chaîne française 1` …). The owner will supply names and logos. Do not invent that lineup.
- WhatsApp number is still `212637573773`. Messages from this site are French and say IPTV France.
- Confirm before launch: domain, mailbox, and the Meld/Banxa checkout wallets.

## Stack

- Next.js (see `AGENTS.md` / `node_modules/next/dist/docs/`), TypeScript. SMTP is used for orders and the review form.

## Run locally

```powershell
cd C:\Users\ADMIN\Desktop\MyProjects\stream_website_france
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` and `SMTP_FROM` for MeilleurIPTVFrance in `.env.local` before checkout email is tested.
