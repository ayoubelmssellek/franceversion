import { getPlans } from "@/lib/plan-pricing";

export const site = {
  name: "MeilleurIPTVFrance",
  tagline: "Streaming stable pour la France — chaînes, sport et VOD",
  email: "support@meilleuresiptvfrance.shop",
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/chaines", label: "Chaînes" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/applications", label: "Applications" },
  { href: "/revendeurs", label: "Revendeurs" },
  { href: "/questions-frequentes", label: "Questions fréquentes" },
];

export const planFeatures = [
  "Chaînes en direct (+45 000)",
  "Films et séries (VOD) (+200 000 films · +40 000 séries)",
  "Tous les événements PPV et le sport premium",
  "Qualité 4K / FHD / HD",
  "Guide TV (EPG) et replay des programmes",
  "Smart TV, application et box",
  "Technologie anti-gel",
  "Disponibilité 99,9 % (engagement de service)",
  "Xtream Codes / M3U / MAG",
  "Activation après confirmation du paiement",
  "Assistance 24h/24",
  "VPN intégrée et protection de la vie privée",
  "Chaînes adultes (en option)",
  "Garantie de 7 jours",
];

/** Prices & checkout URLs from Vercel env — see `lib/plan-pricing.ts` and `.env.example`. */
export const plans = getPlans();

export const faqs = [
  {
    q: "Qu’est-ce que MeilleurIPTVFrance ?",
    a: "C’est un service IPTV pour la France : chaînes françaises, sport et VOD. Vous achetez un forfait, vous recevez des identifiants Xtream et vous installez un lecteur sur l’écran que vous avez déjà — avec une assistance en français.",
  },
  {
    q: "Combien coûtent les forfaits ?",
    a: "Les tarifs commencent au forfait mensuel et baissent sur les durées plus longues. Consultez la page des abonnements pour comparer les durées et le nombre de connexions — paiement unique, sans renouvellement automatique surprise.",
  },
  {
    q: "Comment acheter et activer le service ?",
    a: "Choisissez le forfait, terminez le paiement et suivez les instructions sur la page de remerciement. En règle générale, l’activation est rapide après la confirmation du paiement — l’assistance vous aide si besoin.",
  },
  {
    q: "Y a-t-il un essai ou une garantie ?",
    a: "Vous pouvez demander un essai de 24 heures à l’assistance avant de payer, pour valider vos appareils et votre réseau. Après l’achat, la garantie de satisfaction de 7 jours s’applique selon la politique de remboursement — ce n’est pas de l’IPTV gratuit illimité.",
  },
  {
    q: "Comment savoir si un IPTV France convient à mon foyer ?",
    a: "Regardez le nombre d’écrans en simultané, la Ligue 1 et Canal+, votre réseau et l’assistance. Une checklist courte est sur le blog ; pour la recherche « meilleur IPTV France », l’article principal est Meilleur IPTV France 2026 — ensuite comparez les forfaits.",
  },
  {
    q: "Qu’est-ce qui distingue MeilleurIPTVFrance ?",
    a: "Nous visons la stabilité pour les foyers en France, un catalogue avec des chaînes françaises et du sport, une installation guidée et une assistance continue — pas seulement une longue liste de noms de chaînes.",
  },
  {
    q: "Qu’est-ce qui est inclus ?",
    a: "Chaînes en direct, sport (y compris la Ligue 1 et les chaînes premium lorsqu’elles sont au catalogue), films et séries à la demande, et une qualité jusqu’en 4K selon votre réseau et votre appareil.",
  },
  {
    q: "Cela fonctionne-t-il sur Smart TV et sur les box Android ?",
    a: "Oui. La plupart des Smart TV, Fire Stick, box Android, mobiles et PC fonctionnent avec un lecteur compatible (par exemple IPTV Smarters). Consultez les guides d’installation.",
  },
  {
    q: "Faut-il un matériel spécial ?",
    a: "Non. Utilisez la Smart TV, le Fire Stick, la box Android, le mobile ou le PC que vous avez déjà. Une connexion stable (idéalement 15–20 Mbit/s ou plus) améliore l’expérience en HD/4K.",
  },
  {
    q: "Comment installer après l’achat ?",
    a: "Installez un lecteur compatible, saisissez les identifiants envoyés après le paiement et chargez le guide TV. Nos tutoriels couvrent la Smart TV, Android, le Fire Stick, iOS et MAG.",
  },
  {
    q: "Puis-je renouveler le forfait ?",
    a: "Oui. Utilisez la page Renouveler ou prenez un nouveau forfait sur la page des abonnements lorsque l’actuel se termine.",
  },
  {
    q: "L’IPTV est-il légal en France ?",
    a: "La technologie IPTV ne répond pas à elle seule à la question — l’origine des contenus et le modèle du service comptent. Nous ne publions pas de listes M3U gratuites. Lisez l’article sur la liste IPTV France gratuite (risques et alternatives) et les conditions d’utilisation.",
  },
  {
    q: "Comment contacter l’assistance ?",
    a: `Par e-mail (${site.email}) ou WhatsApp depuis le site. Nous aidons pour l’achat, l’installation et le renouvellement.`,
  },
];

/**
 * Trust commitments — factual service promises, NOT fabricated customer reviews.
 * Do not present these as named third-party testimonials.
 */
export const trustCommitments = [
  {
    title: "Activation après le paiement",
    body: "Après la confirmation du paiement, nous envoyons les accès et nous accompagnons l’installation si vous en avez besoin.",
  },
  {
    title: "Garantie de 7 jours",
    body: "Essai de 24 heures sur demande auprès de l’assistance. Après l’achat, garantie de 7 jours selon la politique de remboursement.",
  },
  {
    title: "Assistance en français",
    body: "Aide par e-mail et WhatsApp pour la configuration sur Smart TV, Android, Fire Stick et les autres appareils.",
  },
  {
    title: "Pensé pour la France",
    body: "Catalogue centré sur les chaînes françaises et le sport, pour le quotidien et les soirées de Ligue 1.",
  },
  {
    title: "Plusieurs écrans",
    body: "Forfaits de 1, 2 ou 3 connexions — choisissez selon votre foyer, sans payer des écrans que vous n’utilisez pas.",
  },
  {
    title: "Paiement sécurisé",
    body: "Paiement par carte et portefeuilles numériques. Les détails du compte sont envoyés par des canaux privés après la commande.",
  },
];
