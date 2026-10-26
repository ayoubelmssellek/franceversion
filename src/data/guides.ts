export type Guide = {
  slug: string;
  title: string;
  short: string;
  seoTitle?: string;
  seoDescription?: string;
  intro: string;
  needs: string[];
  steps: { title: string; body: string }[];
  tips: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "android",
    title: "IPTV Android France — mobile, tablette et TV",
    short:
      "Comment installer l’IPTV Android France avec Xtream Codes : mobile, tablette, Android TV et Google TV. Pas à pas en français.",
    seoTitle: "IPTV Android France — Comment installer (mobile et TV)",
    seoDescription:
      "Installer l’IPTV Android France : Play Store, Xtream Codes sur mobile, tablette ou Android TV. Guide pas à pas MeilleurIPTVFrance — les erreurs sont dans l’article de diagnostic.",
    intro:
      "Voici le guide pas à pas pour installer l’IPTV Android France : mobile, tablette, Android TV et Google TV. MeilleurIPTVFrance est le service (forfait et identifiants) ; l’application est un lecteur tiers. Il vous faut un accès valide (forfait ou essai de 24 heures) et les identifiants envoyés. Pour choisir l’appareil et le lecteur, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation. Si la connexion échoue déjà (Invalid details, aucun flux ou buffering), utilisez l’article de diagnostic /blog/iptv-android-france-installation — ce guide ne reprend pas ce diagnostic.",
    needs: [
      "Appareil Android compatible (mobile, tablette, Android TV ou Google TV)",
      "Connexion Internet stable sur l’appareil (Wi‑Fi ou données ; au salon, un Wi‑Fi solide ou un câble via adaptateur aide)",
      "Compte Google / Play Store lorsque la boutique est disponible sur l’appareil",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Identifiants MeilleurIPTVFrance (méthode habituelle : URL du serveur, utilisateur et mot de passe — Xtream Codes)",
      "La disponibilité exacte du lecteur dans la boutique peut varier selon le modèle et la région — si l’application n’apparaît pas, consultez /applications ou demandez de l’aide à l’assistance",
    ],
    steps: [
      {
        title: "Confirmer l’appareil et le réseau",
        body: "Utilisez un mobile, une tablette, une Android TV ou une Google TV avec un Internet stable. Fermez les téléchargements lourds sur le même Wi‑Fi. Ayez les identifiants sous la main (e-mail ou message de l’assistance) avant d’ouvrir le lecteur.",
      },
      {
        title: "Installer un lecteur compatible depuis le Play Store",
        body: "Ouvrez le Google Play Store et cherchez un lecteur avec connexion Xtream (par exemple IPTV Smarters ou équivalent). Sur Android TV / Google TV, utilisez le clavier à l’écran. Préférez la boutique officielle — évitez les APK de sites inconnus. La disponibilité de l’application peut varier ; orientation sur les lecteurs dans /applications.",
      },
      {
        title: "Ouvrir le lecteur",
        body: "Ouvrez l’application installée. Si elle demande des autorisations réseau, acceptez-les pour charger les flux. Les noms de menus changent selon le lecteur et la version — l’essentiel est d’arriver à l’écran de connexion ou d’ajout de compte.",
      },
      {
        title: "Choisir la connexion Xtream Codes",
        body: "Sur l’écran d’accueil, choisissez la méthode Xtream Codes / Xtream Codes API (pas M3U, sauf indication explicite de l’assistance). Champs habituels : nom du compte (n’importe quelle étiquette, p. ex. Maison), utilisateur, mot de passe et URL du serveur.",
      },
      {
        title: "Saisir les identifiants du service",
        body: "Copiez l’URL, l’utilisateur et le mot de passe exactement comme vous les avez reçus — sans espace en trop. Confirmez et attendez. Détail des champs et messages d’erreur : /blog/iptv-smarters-pro-france.",
      },
      {
        title: "Charger les catégories et vérifier la lecture",
        body: "Attendez le chargement de la TV en direct, des films et des séries. Ouvrez une chaîne en direct et, si vous voulez, un titre VOD pour valider l’écran. Épinglez des favoris pour le quotidien. Exemples de catalogue sur /chaines.",
      },
      {
        title: "Ajuster le réseau et la qualité si besoin",
        body: "Si l’image saute, essayez une autre chaîne, baissez la qualité dans le lecteur et réduisez l’encombrement du réseau. Checklist longue du buffering : /blog/iptv-ne-fonctionne-pas-france. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Préférez de vrais forfaits et une vraie assistance aux listes M3U « gratuites » anonymes — elles lâchent souvent sur le sport.",
      "Connexion invalide : recopiez l’URL, l’utilisateur et le mot de passe de l’e-mail (les fautes de frappe sont la cause la plus fréquente).",
      "Si les catégories ne se mettent pas à jour, videz le cache du lecteur dans Paramètres Android → Applications.",
      "Le mobile et la tablette partagent la même logique de connexion ; sur la TV, la télécommande remplace le tactile, mais Xtream reste le même.",
      "L’assistance 24h/24 en français vous aide si la boutique ne liste pas le lecteur ou si la connexion échoue après vérification des données.",
    ],
    sections: [
      {
        heading: "Mobile, tablette et Android TV — la même logique",
        paragraphs: [
          "Sur le mobile et la tablette, le parcours est tactile ; sur Android TV / Google TV, on utilise la télécommande et le clavier à l’écran. L’interface du lecteur change, mais la méthode importante est la même : installer un lecteur compatible et se connecter avec Xtream Codes.",
          "Vous n’avez pas besoin de refaire un guide différent par format — adaptez seulement la navigation. Si deux personnes regardent en même temps, il vous faut un forfait à deux connexions. Comparez sur /tarifs.",
        ],
      },
      {
        heading: "Xtream Codes et M3U sur Android",
        paragraphs: [
          "Chez MeilleurIPTVFrance, la méthode principale est Xtream Codes (URL du serveur, utilisateur et mot de passe). M3U seulement quand l’assistance l’indique et fournit la liste — n’utilisez pas de fichiers ni de liens M3U anonymes trouvés sur Internet.",
          "Orientation sur les lecteurs et les méthodes de connexion : /applications. Ne partagez pas les identifiants dans des groupes publics ; chaque connexion est pour un usage conforme au forfait.",
        ],
      },
      {
        heading: "Problèmes fréquents sur Android",
        paragraphs: [
          "Invalid details / connexion refusée : confirmez Xtream (pas M3U par erreur) et recopiez les données. Aucun flux : forfait inactif, essai expiré ou connexions épuisées. Buffering : essayez une autre chaîne et le réseau avant de réinstaller le lecteur.",
          "Diagnostic Android (erreurs, pas l’installation) : /blog/iptv-android-france-installation. Connexion dans Smarters : /blog/iptv-smarters-pro-france. Buffering général : /blog/iptv-ne-fonctionne-pas-france. Questions générales : /questions-frequentes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Cela fonctionne-t-il sur mobile et tablette Android ?",
        a: "Oui. Installez un lecteur compatible depuis le Play Store (lorsqu’il est disponible), utilisez Xtream Codes avec les identifiants du service et validez la lecture. La même logique s’applique au mobile et à la tablette.",
      },
      {
        q: "Cela fonctionne-t-il sur Android TV ou Google TV ?",
        a: "Oui. La connexion Xtream est la même ; ce qui change surtout, c’est la navigation à la télécommande. Si la boutique de la TV est limitée, voyez les alternatives dans Applications (/applications) ou un Fire Stick / une box en HDMI.",
      },
      {
        q: "Faut-il installer une application ?",
        a: "Oui. Le service MeilleurIPTVFrance n’est pas l’application : le forfait donne l’accès ; le lecteur sur Android affiche les chaînes et le VOD. Ce sont des applications tierces — pas une « application officielle » à nous.",
      },
      {
        q: "Puis-je utiliser Xtream Codes ou M3U ?",
        a: "La méthode recommandée est Xtream Codes. M3U seulement quand l’assistance l’indique explicitement. N’utilisez pas de listes M3U gratuites anonymes.",
      },
      {
        q: "Que faire si les accès ne sont pas valides ?",
        a: "Vérifiez l’URL, l’utilisateur et le mot de passe sans espace en trop, et que vous avez choisi Xtream Codes. Si cela échoue encore, l’article /blog/iptv-android-france-installation et l’assistance 24h/24 vous aident.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
      },
    ],
  },
  {
    slug: "smart-tv",
    title: "IPTV Smart TV France — installation pas à pas",
    short:
      "Comment installer l’IPTV sur une Smart TV en France : boutique officielle de la TV, Xtream Codes et vérification sur le grand écran.",
    seoTitle: "IPTV Smart TV France — Comment installer",
    seoDescription:
      "Installer l’IPTV Smart TV France : Samsung, LG ou Android TV, boutique officielle, Xtream Codes et vérification direct/VOD. Guide pas à pas MeilleurIPTVFrance.",
    intro:
      "Voici le guide pas à pas pour installer l’IPTV sur une Smart TV (Samsung, LG, Android TV / Google TV). MeilleurIPTVFrance est le service (forfait et identifiants) ; l’application est un lecteur tiers — ce n’est pas MeilleurIPTVFrance lui-même. Il vous faut un accès valide (forfait ou essai de 24 heures) et les identifiants envoyés. Pour choisir l’appareil et le lecteur, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation. Connexion et erreurs du lecteur : /blog/iptv-smarters-pro-france.",
    needs: [
      "Smart TV avec boutique d’applications (Samsung, LG, Android TV ou Google TV)",
      "Connexion Internet stable (un Wi‑Fi solide au salon ou un câble Ethernet aide)",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Identifiants MeilleurIPTVFrance (méthode habituelle : URL du serveur, utilisateur et mot de passe — Xtream Codes)",
      "Télécommande de la TV pour naviguer dans la boutique et le lecteur",
      "La disponibilité exacte du lecteur dans la boutique peut varier selon le modèle et la région — si l’application n’apparaît pas, consultez /applications, un Fire Stick ou contactez l’assistance",
    ],
    steps: [
      {
        title: "Identifier la plateforme et confirmer le réseau",
        body: "Confirmez si la TV est Samsung (Smart Hub / Apps), LG (Content Store) ou Android TV / Google TV (Play Store). Branchez un Wi‑Fi stable ou un câble Ethernet. Ayez les identifiants sous la main avant d’ouvrir le lecteur.",
      },
      {
        title: "Ouvrir la boutique officielle de la TV",
        body: "Ouvrez la boutique d’applications du fabricant. Préférez toujours la boutique officielle de la Smart TV — n’utilisez pas d’APK de forums ou de sites inconnus.",
      },
      {
        title: "Chercher et installer un lecteur compatible",
        body: "Cherchez un lecteur avec connexion Xtream (par exemple IPTV Smarters ou l’équivalent disponible dans votre boutique). Installez uniquement depuis la boutique officielle. La disponibilité peut varier ; orientation dans /applications. Si l’application n’apparaît pas, contactez l’assistance avant toute installation hors boutique.",
      },
      {
        title: "Ouvrir le lecteur et choisir Xtream Codes",
        body: "Ouvrez l’application installée. Choisissez Xtream Codes / Xtream Codes API (pas M3U, sauf indication explicite de l’assistance). Les noms de menus changent selon le lecteur, la version et la plateforme de la TV.",
      },
      {
        title: "Saisir les identifiants du service",
        body: "Champs habituels : nom du compte (n’importe quelle étiquette, p. ex. Salon), utilisateur, mot de passe et URL du serveur — exactement comme vous les avez reçus, sans espace en trop. Certains lecteurs peuvent demander une confirmation à l’écran — suivez les instructions de l’application. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        title: "Vérifier la TV en direct, le VOD et l’EPG",
        body: "Attendez le chargement des catégories. Ouvrez une chaîne en direct et, si vous voulez, un titre VOD. Épinglez des favoris. L’EPG apparaît quand la chaîne et le lecteur l’incluent — nous n’affirmons pas une couverture à 100 %. Exemples de catalogue sur /chaines.",
      },
      {
        title: "Ajuster le réseau et les performances si besoin",
        body: "Si l’image saute, essayez une autre chaîne, baissez la qualité dans le lecteur et réduisez l’encombrement du réseau. Évitez les modes d’économie qui suspendent les applications. Checklist du buffering : /blog/iptv-ne-fonctionne-pas-france. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Préférez la boutique officielle de la TV. Évitez les APK de forums ou de sites inconnus.",
      "Connexion invalide : recopiez l’URL, l’utilisateur et le mot de passe (les fautes de frappe sont la cause la plus fréquente).",
      "Le câble Ethernet ou le Wi‑Fi 5 GHz au salon est en général plus stable qu’une bande 2,4 GHz saturée.",
      "Mettez à jour le firmware de la TV et le lecteur quand la boutique le permet.",
      "L’assistance 24h/24 en français vous aide si la boutique ne liste pas le lecteur sur votre modèle.",
    ],
    sections: [
      {
        heading: "Samsung, LG et Android TV — la même logique, des boutiques différentes",
        paragraphs: [
          "Samsung (Tizen) et LG (webOS) ont leurs propres boutiques ; Android TV / Google TV utilisent en général le Play Store. Dans tous les cas : installer un lecteur compatible depuis la boutique officielle et se connecter avec Xtream Codes.",
          "Nous ne répétons pas un guide complet par marque — adaptez la navigation à la télécommande. Si la TV est Android TV / Google TV et que vous préférez le détail du Play Store, utilisez aussi /guides-installation/android.",
        ],
      },
      {
        heading: "Si l’application n’apparaît pas dans la boutique de la TV",
        paragraphs: [
          "La disponibilité du lecteur varie selon le modèle, la région et les mises à jour de la boutique. Contactez l’assistance avant d’installer un APK. Alternatives stables en HDMI : Fire Stick (/guides-installation/firestick) ou box Android (/guides-installation/android).",
          "Ce guide ne fournit pas de codes d’installation, d’URL d’APK ni de hubs de téléchargement.",
        ],
      },
      {
        heading: "Xtream Codes et M3U sur la Smart TV",
        paragraphs: [
          "Chez MeilleurIPTVFrance, la méthode principale est Xtream Codes (URL du serveur, utilisateur et mot de passe). M3U seulement quand l’assistance l’indique et fournit la liste — n’utilisez pas de fichiers ni de liens M3U anonymes trouvés sur Internet.",
          "Orientation sur les lecteurs et les méthodes de connexion : /applications.",
        ],
      },
      {
        heading: "Problèmes fréquents sur la Smart TV",
        paragraphs: [
          "Invalid details / connexion refusée : confirmez Xtream (pas M3U par erreur) et recopiez les données. Aucun flux : forfait inactif, essai expiré ou connexions épuisées. Buffering : essayez une autre chaîne et le réseau avant de réinstaller le lecteur. Application absente de la boutique : assistance ou alternative en HDMI.",
          "Connexion dans Smarters : /blog/iptv-smarters-pro-france. Buffering : /blog/iptv-ne-fonctionne-pas-france. Questions générales : /questions-frequentes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quelles applications puis-je utiliser sur une Smart TV ?",
        a: "Cela dépend de la boutique de votre modèle (Samsung, LG ou Android TV / Google TV). Cherchez un lecteur avec connexion Xtream disponible dans la boutique officielle — par exemple IPTV Smarters ou équivalent. Ce sont des applications tierces ; orientation dans /applications.",
      },
      {
        q: "Puis-je le configurer avec Xtream Codes ?",
        a: "Oui. Xtream Codes est la méthode recommandée : URL du serveur, utilisateur et mot de passe dans le lecteur. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        q: "Et si l’application n’apparaît pas dans la boutique de ma TV ?",
        a: "Contactez l’assistance avant d’installer un APK. Alternatives en HDMI : Fire Stick ou box Android. Ce guide ne fournit pas d’URL d’APK ni de codes de téléchargement.",
      },
      {
        q: "Puis-je utiliser une M3U ?",
        a: "Seulement quand l’assistance l’indique explicitement et fournit la liste. N’utilisez pas de listes M3U gratuites anonymes. Orientation dans /applications.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
      },
      {
        q: "MeilleurIPTVFrance est-il la même chose que l’application de la Smart TV ?",
        a: "Non. MeilleurIPTVFrance est le service / l’abonnement. L’application est un lecteur tiers utilisé pour accéder au catalogue. Choix des lecteurs dans /applications.",
      },
    ],
  },
  {
    slug: "firestick",
    title: "IPTV Fire Stick France — installation pas à pas",
    short:
      "Comment installer l’IPTV sur le Fire Stick / Fire TV en France : Amazon Appstore, Xtream Codes et vérification sur le grand écran.",
    seoTitle: "IPTV Fire Stick France — Comment installer",
    seoDescription:
      "Installer l’IPTV Fire Stick France : Amazon Appstore, Xtream Codes et vérification direct/VOD. Guide pas à pas MeilleurIPTVFrance — les erreurs de connexion sont dans l’article Smarters.",
    intro:
      "Voici le guide pas à pas pour installer l’IPTV sur le Fire Stick / Fire TV. MeilleurIPTVFrance est le service (forfait et identifiants) ; l’application est un lecteur tiers — ce n’est pas MeilleurIPTVFrance lui-même. Pour choisir l’appareil et le lecteur, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation. Champs Xtream et erreurs (Invalid details, etc.) : /blog/iptv-smarters-pro-france. Comparer les lecteurs : /blog/meilleure-app-iptv-france — ce guide ne reprend pas ces articles.",
    needs: [
      "Fire Stick ou appareil Fire TV compatible, branché à la TV et à Internet",
      "Compte Amazon sur l’appareil (lorsqu’il est nécessaire pour l’Appstore)",
      "Connexion Internet stable (un Wi‑Fi solide au salon ou un câble via adaptateur aide)",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Identifiants MeilleurIPTVFrance (méthode habituelle : URL du serveur, utilisateur et mot de passe — Xtream Codes)",
      "Préférence pour l’Amazon Appstore — la disponibilité exacte du lecteur peut varier selon le modèle et la région",
    ],
    steps: [
      {
        title: "Préparer le Fire Stick et le réseau",
        body: "Mettez à jour le logiciel dans les paramètres. Branchez un Wi‑Fi stable (5 GHz quand c’est possible) ou un câble via adaptateur. Redémarrez le Stick avant d’installer pour libérer de la mémoire. Ayez les identifiants sous la main (e-mail ou message de l’assistance).",
      },
      {
        title: "Ouvrir l’Amazon Appstore",
        body: "Sur l’écran d’accueil, ouvrez l’Amazon Appstore (boutique officielle du Fire Stick / Fire TV). C’est la voie à privilégier pour installer le lecteur — avant toute installation hors boutique.",
      },
      {
        title: "Chercher et installer un lecteur compatible",
        body: "Cherchez un lecteur avec connexion Xtream (par exemple IPTV Smarters ou l’équivalent disponible dans l’Appstore). Installez depuis la boutique officielle. La disponibilité de l’application peut varier ; orientation sur les lecteurs dans /applications. Comparer les options : /blog/meilleure-app-iptv-france.",
      },
      {
        title: "Ouvrir le lecteur et choisir Xtream Codes",
        body: "Ouvrez l’application installée. Sur l’écran de connexion, choisissez Xtream Codes / Xtream Codes API (pas M3U, sauf indication explicite de l’assistance). Les noms de menus changent selon le lecteur et la version.",
      },
      {
        title: "Saisir les identifiants du service",
        body: "Champs habituels : nom du compte (n’importe quelle étiquette, p. ex. FireStick Salon), utilisateur, mot de passe et URL du serveur — exactement comme vous les avez reçus, sans espace en trop. Confirmez et attendez. Détail des champs et messages d’erreur : /blog/iptv-smarters-pro-france.",
      },
      {
        title: "Vérifier la TV en direct et le VOD",
        body: "Attendez le chargement des catégories. Ouvrez une chaîne en direct et, si vous voulez, un titre VOD pour valider l’écran. Épinglez des favoris et activez l’EPG dans les réglages du lecteur lorsqu’il est disponible. Exemples de catalogue sur /chaines.",
      },
      {
        title: "Ajuster le réseau et les performances si besoin",
        body: "Si l’image saute, essayez une autre chaîne, baissez la qualité dans le lecteur et réduisez les applications en arrière-plan. Checklist du buffering : /blog/iptv-ne-fonctionne-pas-france. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Donnez la priorité à l’Amazon Appstore. Évitez les APK de forums ou de sites inconnus.",
      "Si la connexion échoue, recopiez l’URL, l’utilisateur et le mot de passe (les fautes de frappe sont la cause la plus fréquente).",
      "Les soirs de match, un FHD stable vaut souvent mieux que de forcer le 4K sur un réseau saturé.",
      "Redémarrez le Stick ou videz le cache du lecteur si l’écran rame.",
      "L’assistance 24h/24 en français vous aide si l’Appstore ne liste pas le lecteur sur votre appareil.",
    ],
    sections: [
      {
        heading: "Amazon Appstore et installation hors boutique",
        paragraphs: [
          "Donnez la priorité à l’Amazon Appstore. Si l’application que vous voulez utiliser n’est pas disponible dans la boutique de votre appareil, contactez l’assistance avant d’installer un APK. Évitez les fichiers APK trouvés sur des forums ou des sites inconnus.",
          "Ce guide ne fournit pas de codes Downloader ni de liens vers des APK. Toute installation hors boutique ne doit suivre que les consignes de l’assistance — et jamais comme un chemin équivalent à l’Appstore.",
        ],
      },
      {
        heading: "Xtream Codes et M3U sur le Fire Stick",
        paragraphs: [
          "Chez MeilleurIPTVFrance, la méthode principale est Xtream Codes (URL du serveur, utilisateur et mot de passe). M3U seulement quand l’assistance l’indique et fournit la liste — n’utilisez pas de fichiers ni de liens M3U anonymes trouvés sur Internet.",
          "Orientation sur les lecteurs et les méthodes de connexion : /applications. Ne partagez pas les identifiants dans des groupes publics ; chaque connexion est pour un usage conforme au forfait.",
        ],
      },
      {
        heading: "Fire Stick et box Android / Android TV",
        paragraphs: [
          "Le Fire Stick / Fire TV suit l’écosystème Amazon (Appstore). Les box Android TV ou Google TV avec Play Store suivent un autre parcours — suivez /guides-installation/android au lieu de répéter ce guide.",
          "La connexion Xtream est le même concept ; la boutique et la navigation changent. Choisissez le guide de l’appareil que vous avez déjà.",
        ],
      },
      {
        heading: "Problèmes fréquents sur le Fire Stick",
        paragraphs: [
          "Invalid details / connexion refusée : confirmez Xtream (pas M3U par erreur) et recopiez les données. Aucun flux : forfait inactif, essai expiré ou connexions épuisées. Buffering : essayez une autre chaîne et le réseau avant de réinstaller le lecteur.",
          "Connexion et erreurs du lecteur : /blog/iptv-smarters-pro-france. Comparer les applications : /blog/meilleure-app-iptv-france. Buffering général : /blog/iptv-ne-fonctionne-pas-france. Questions générales : /questions-frequentes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Puis-je l’installer sur le Fire Stick sans APK ?",
        a: "Oui — et c’est le chemin recommandé. Installez un lecteur compatible depuis l’Amazon Appstore et configurez-le avec Xtream Codes. Évitez les APK de forums ou de sites inconnus.",
      },
      {
        q: "Que faire si l’application n’apparaît pas dans l’Amazon Appstore ?",
        a: "Contactez l’assistance avant d’installer un APK. La disponibilité dans la boutique peut varier selon le modèle et la région. Ce guide ne fournit pas de codes Downloader ni de liens vers des APK.",
      },
      {
        q: "Puis-je utiliser Xtream Codes sur le Fire Stick ?",
        a: "Oui. Xtream Codes est la méthode recommandée : URL du serveur, utilisateur et mot de passe dans le lecteur. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        q: "Puis-je utiliser une M3U ?",
        a: "Seulement quand l’assistance l’indique explicitement et fournit la liste. N’utilisez pas de listes M3U gratuites anonymes. Orientation dans /applications.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement.",
      },
      {
        q: "MeilleurIPTVFrance est-il la même chose que l’application du Fire Stick ?",
        a: "Non. MeilleurIPTVFrance est le service / l’abonnement. L’application est un lecteur tiers utilisé pour accéder au catalogue. Choix des lecteurs dans /applications.",
      },
    ],
  },
  {
    slug: "ios",
    title: "IPTV iPhone France — installation pas à pas",
    short:
      "Comment installer l’IPTV sur l’iPhone et l’iPad en France : App Store, Xtream Codes et vérification à l’écran.",
    seoTitle: "IPTV iPhone France — Comment installer",
    seoDescription:
      "Installer l’IPTV iPhone France et iPad : App Store, lecteur compatible, Xtream Codes et vérification direct/VOD. Guide pas à pas MeilleurIPTVFrance.",
    intro:
      "Voici le guide pas à pas pour installer l’IPTV sur l’iPhone et l’iPad. MeilleurIPTVFrance est le service (forfait et identifiants) ; l’application est un lecteur tiers — ce n’est pas MeilleurIPTVFrance lui-même. Cherchez dans l’App Store un lecteur compatible avec Xtream, par exemple IPTV Smarters ou une autre option disponible dans votre région. Il vous faut un accès valide (forfait ou essai de 24 heures) et les identifiants envoyés. Pour choisir l’appareil et le lecteur, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation (/guides-installation). Connexion et erreurs du lecteur : /blog/iptv-smarters-pro-france. Habitudes et réseau sur iOS : /blog/iptv-france-iphone-ipad.",
    needs: [
      "iPhone ou iPad avec accès à l’App Store",
      "Identifiant Apple actif pour installer des applications",
      "Connexion Internet stable (Wi‑Fi de préférence ; les données mobiles fonctionnent, mais consomment davantage en HD)",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Identifiants MeilleurIPTVFrance (méthode habituelle : URL du serveur, utilisateur et mot de passe — Xtream Codes)",
      "La disponibilité exacte du lecteur dans l’App Store peut varier selon la région et les mises à jour — si l’application n’apparaît pas, consultez /applications ou contactez l’assistance",
    ],
    steps: [
      {
        title: "Préparer l’iPhone ou l’iPad",
        body: "Confirmez un Wi‑Fi stable (ou des données mobiles) et l’accès à l’App Store avec votre identifiant Apple. Ayez les identifiants sous la main (e-mail ou message de l’assistance) avant d’ouvrir le lecteur. Fermez les téléchargements lourds sur le même réseau si vous le pouvez.",
      },
      {
        title: "Ouvrir l’App Store",
        body: "Ouvrez l’App Store et cherchez un lecteur avec connexion Xtream. Préférez toujours l’App Store officiel — n’utilisez pas de sources externes, de jailbreak ni d’installations alternatives.",
      },
      {
        title: "Installer et ouvrir le lecteur",
        body: "Installez un lecteur compatible (par exemple IPTV Smarters ou l’équivalent disponible dans votre région) et ouvrez-le. Si iOS demande l’autorisation du réseau local, acceptez-la pour charger les flux. La disponibilité peut varier ; orientation dans /applications.",
      },
      {
        title: "Choisir Xtream Codes",
        body: "Sur l’écran de connexion, choisissez Xtream Codes / Xtream Codes API (pas M3U, sauf indication explicite de l’assistance). Les noms de menus changent selon le lecteur et la version.",
      },
      {
        title: "Saisir les identifiants du service",
        body: "Champs habituels : nom du compte (n’importe quelle étiquette, p. ex. iPhone), utilisateur, mot de passe et URL du serveur — exactement comme vous les avez reçus, sans espace en trop. Confirmez et attendez. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        title: "Vérifier la TV en direct, le VOD et les catégories",
        body: "Attendez le chargement des catégories. Ouvrez une chaîne en direct et, si vous voulez, un titre VOD. Épinglez des favoris. L’EPG apparaît quand la chaîne et le lecteur l’incluent — nous n’affirmons pas une couverture à 100 %. Exemples de catalogue sur /chaines.",
      },
      {
        title: "Confirmer le réseau et les performances si besoin",
        body: "Si l’image saute, essayez une autre chaîne, baissez la qualité dans le lecteur et redémarrez l’application. En données mobiles, préférez le Wi‑Fi quand c’est possible. Checklist du buffering : /blog/iptv-ne-fonctionne-pas-france. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Gardez iOS/iPadOS et le lecteur à jour depuis l’App Store.",
      "Connexion invalide : recopiez l’URL, l’utilisateur et le mot de passe (les fautes de frappe sont la cause la plus fréquente).",
      "Préférez Xtream Codes. Évitez les listes M3U « gratuites » anonymes trouvées sur Internet.",
      "Redémarrez le lecteur après un changement d’identifiants ou de réseau.",
      "L’assistance 24h/24 en français vous aide si l’App Store ne liste pas le lecteur dans votre région.",
    ],
    sections: [
      {
        heading: "iPhone et iPad — la même logique",
        paragraphs: [
          "Sur l’iPhone et l’iPad, le chemin est le même : App Store, lecteur compatible et connexion avec Xtream Codes. Sur l’iPad, le plus grand écran facilite l’EPG, les favoris et le VOD — vous n’avez pas besoin d’un guide distinct.",
          "Habitudes de réseau et usage au quotidien : /blog/iptv-france-iphone-ipad. S’il vous faut deux écrans simultanés, voyez les forfaits de 1, 2 ou 3 connexions sur /tarifs.",
        ],
      },
      {
        heading: "App Store et disponibilité du lecteur",
        paragraphs: [
          "L’App Store est le chemin recommandé. Les noms et la disponibilité des applications peuvent changer avec la région et les mises à jour d’Apple. Si le lecteur que vous cherchez n’apparaît pas, choisissez-en un autre compatible avec Xtream ou contactez l’assistance.",
          "Orientation sur les lecteurs : /applications. Ce guide ne recommande ni le jailbreak ni les installations hors App Store.",
        ],
      },
      {
        heading: "Xtream Codes et M3U sur iPhone et iPad",
        paragraphs: [
          "Chez MeilleurIPTVFrance, la méthode principale est Xtream Codes (URL du serveur, utilisateur et mot de passe). M3U seulement quand l’assistance l’indique et fournit la liste — la compatibilité M3U dépend aussi du lecteur. N’utilisez pas de fichiers ni de liens M3U anonymes trouvés sur Internet.",
          "Orientation sur les lecteurs et les méthodes de connexion : /applications.",
        ],
      },
      {
        heading: "Problèmes fréquents sur iPhone et iPad",
        paragraphs: [
          "Invalid details / connexion refusée : confirmez Xtream (pas M3U par erreur) et recopiez les données. Aucun flux : forfait inactif, essai expiré ou connexions épuisées. Buffering : essayez une autre chaîne et le réseau avant de réinstaller le lecteur. Application absente de l’App Store : un autre lecteur compatible, /applications ou l’assistance.",
          "Connexion dans Smarters : /blog/iptv-smarters-pro-france. Buffering : /blog/iptv-ne-fonctionne-pas-france. Habitudes iOS : /blog/iptv-france-iphone-ipad. Questions générales : /questions-frequentes.",
        ],
      },
      {
        heading: "Apple TV et AirPlay (optionnel)",
        paragraphs: [
          "L’Apple TV est un cas tvOS / écran de salon distinct de ce guide iPhone et iPad. Certains lecteurs permettent AirPlay selon l’application et le réseau ; pour une installation dédiée sur le téléviseur, utilisez /guides-installation/smart-tv ou /guides-installation/firestick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment installer l’IPTV sur l’iPhone ?",
        a: "Installez un lecteur compatible depuis l’App Store, choisissez Xtream Codes et saisissez les identifiants du service. Validez la TV en direct et, si vous voulez, le VOD. Orientation sur les lecteurs dans /applications.",
      },
      {
        q: "Puis-je utiliser la même méthode sur l’iPad ?",
        a: "Oui. App Store, Xtream Codes et identifiants sont les mêmes ; sur l’iPad, seul le confort de l’écran change (EPG et VOD). Habitudes d’usage : /blog/iptv-france-iphone-ipad.",
      },
      {
        q: "Qu’est-ce que Xtream Codes ?",
        a: "C’est la méthode recommandée : URL du serveur, utilisateur et mot de passe dans le lecteur. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        q: "Puis-je utiliser une M3U sur l’iPhone ?",
        a: "Seulement quand l’assistance l’indique explicitement et fournit la liste — et si le lecteur le permet. N’utilisez pas de listes M3U gratuites anonymes. Orientation dans /applications.",
      },
      {
        q: "L’application n’apparaît pas dans l’App Store. Que faire ?",
        a: "La disponibilité varie avec la région et les mises à jour. Cherchez un autre lecteur avec connexion Xtream, voyez /applications ou contactez l’assistance. Ce guide n’utilise ni le jailbreak ni les installations hors App Store.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider l’appareil et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement. Assistance 24h/24 en français.",
      },
    ],
  },
  {
    slug: "mag",
    title: "IPTV MAG France — configuration pas à pas",
    short:
      "Comment configurer l’IPTV sur une box MAG ou un STB en France : MAC, portail de l’assistance et vérification du direct.",
    seoTitle: "IPTV MAG France — Comment configurer",
    seoDescription:
      "Configurer l’IPTV MAG France : box MAG ou STB, MAC, URL de portail fournie par l’assistance et vérification du direct. Guide pas à pas MeilleurIPTVFrance.",
    intro:
      "Voici le guide pas à pas pour configurer l’IPTV sur une box MAG ou un STB avec portail. MeilleurIPTVFrance est le service (forfait et identifiants) ; le firmware et l’écran de la box ne sont pas MeilleurIPTVFrance lui-même. Sur la MAG, le parcours passe par la MAC et l’URL du portail — distinct des applications Android/iOS, où la méthode habituelle est Xtream Codes. Il vous faut un accès valide (forfait ou essai de 24 heures). Pour l’orientation sur les appareils et les lecteurs, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation (/guides-installation). L’assistance confirme ou envoie les informations de portail nécessaires à votre équipement.",
    needs: [
      "Box MAG ou STB compatible avec une configuration par portail",
      "Télécommande de la box et TV branchée en HDMI",
      "Connexion Internet stable (le câble Ethernet est en général plus stable au salon ; le Wi‑Fi peut aussi convenir)",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Adresse MAC (ou identifiant de l’appareil) de la box",
      "URL exacte du portail fournie ou confirmée par l’assistance — n’utilisez pas de liens de forums",
    ],
    steps: [
      {
        title: "Préparer la MAG et le réseau",
        body: "Branchez la box à la TV et à Internet. Préférez le câble Ethernet quand vous le pouvez. Ayez le contact de l’assistance sous la main et confirmez que vous avez un accès valide (forfait ou essai de 24 heures) avant de changer le portail.",
      },
      {
        title: "Repérer la MAC de l’appareil",
        body: "Notez l’adresse MAC de l’étiquette de la box et/ou dans Réglages / System / About (ou l’écran équivalent). Vérifiez-la chiffre par chiffre — une MAC erronée empêche l’autorisation. Ne partagez pas la MAC dans des groupes publics.",
      },
      {
        title: "Demander ou confirmer le portail avec l’assistance",
        body: "Envoyez la MAC à l’assistance et attendez l’URL exacte du portail fournie par l’assistance. N’inventez pas d’adresses et ne copiez pas de portails de forums ou de listes anonymes. Sans cette confirmation, la box peut rester sans chaînes.",
      },
      {
        title: "Ouvrir les réglages de portail / serveurs",
        body: "Sur l’écran de la box, ouvrez les réglages de serveurs ou de portails. Sur beaucoup de modèles, le chemin passe par Settings → System Settings → Servers → Portals, mais les noms peuvent varier selon le firmware.",
      },
      {
        title: "Saisir l’URL exacte du portail",
        body: "Dans le champ du portail (p. ex. Portal 1), collez l’URL exacte fournie par l’assistance — sans espace en trop. Vous pouvez donner un nom au compte (p. ex. Salon). Enregistrez avec OK. N’utilisez pas d’exemples génériques trouvés sur Internet.",
      },
      {
        title: "Enregistrer et redémarrer le portail",
        body: "Quittez les réglages et redémarrez le portail (Restart Portal) ou redémarrez la box. Attendez le chargement. Si l’écran reste sur loading ou affiche une erreur d’authentification, reconfirmez la MAC et l’URL avec l’assistance 24h/24.",
      },
      {
        title: "Vérifier la TV en direct et, si disponible, le VOD",
        body: "Ouvrez le direct et testez une chaîne. Si le portail et le modèle le permettent, explorez le VOD et l’EPG — nous n’affirmons pas une couverture à 100 %. Exemples de catalogue sur /chaines. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Conservez l’URL exacte du portail fournie par l’assistance dans un endroit privé — pas sur les réseaux sociaux.",
      "Confirmez la MAC avant de demander la configuration ; les fautes de frappe sont la cause la plus fréquente d’un portail vide.",
      "Redémarrez le portail après tout changement d’URL.",
      "Préférez le câble Ethernet au salon quand le Wi‑Fi est saturé.",
      "N’utilisez pas de portails au hasard trouvés sur des forums. L’assistance 24h/24 en français vous aide si la MAC ou l’URL échoue.",
    ],
    sections: [
      {
        heading: "MAG et applications sur mobile",
        paragraphs: [
          "Sur la MAG, le parcours est portail + MAC. Sur Android et iPhone, la méthode habituelle est un lecteur avec Xtream Codes. Utilisez le guide de l’appareil que vous configurez : /guides-installation/android ou /guides-installation/ios.",
          "Orientation générale sur les appareils et les lecteurs : /applications. Le même forfait peut couvrir le salon et le mobile selon le nombre de connexions — comparez sur /tarifs.",
        ],
      },
      {
        heading: "Portail, Xtream Codes et M3U",
        paragraphs: [
          "Sur la box MAG, la bonne méthode est l’URL de portail fournie par l’assistance, avec la MAC autorisée. Dans les applications mobiles, MeilleurIPTVFrance utilise Xtream Codes comme méthode principale.",
          "M3U n’est pas le chemin principal sur la MAG et ne doit être utilisé que si l’assistance l’indique explicitement et si l’équipement le permet. N’utilisez pas de listes M3U gratuites anonymes trouvées sur Internet. Orientation dans /applications.",
        ],
      },
      {
        heading: "Problèmes fréquents sur la MAG",
        paragraphs: [
          "MAC non reconnue / accès non autorisé : confirmez la MAC avec l’assistance et attendez l’autorisation sur le serveur. Le portail ne charge pas : vérifiez Internet, l’URL exacte fournie par l’assistance et redémarrez la box. Aucune chaîne : MAC, portail et redémarrage — puis contactez l’assistance.",
          "VOD ou EPG absents : cela peut dépendre du portail et du modèle ; confirmez avec l’assistance. Buffering : essayez une autre chaîne et le réseau ; checklist : /blog/iptv-ne-fonctionne-pas-france. Questions générales : /questions-frequentes. Alternatives au salon : /guides-installation/smart-tv ou /guides-installation/firestick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment configurer l’IPTV sur une box MAG ?",
        a: "Notez la MAC, demandez à l’assistance l’URL exacte du portail, saisissez-la dans les réglages Portals, redémarrez le portail et vérifiez le direct. Orientation sur les appareils dans /applications.",
      },
      {
        q: "Où trouver la MAC de ma MAG ?",
        a: "Sur l’étiquette de la box et/ou dans Réglages / System / About (les noms peuvent varier). Vérifiez-la chiffre par chiffre avant de l’envoyer à l’assistance.",
      },
      {
        q: "Quel portail mettre sur la MAG ?",
        a: "Uniquement l’URL exacte fournie ou confirmée par l’assistance MeilleurIPTVFrance. N’utilisez pas de liens de forums et n’inventez pas d’adresses.",
      },
      {
        q: "Pourquoi aucune chaîne n’apparaît après la configuration ?",
        a: "Confirmez la MAC autorisée, l’URL exacte, le redémarrage du portail et Internet. Si c’est encore vide, contactez l’assistance 24h/24 avec la MAC.",
      },
      {
        q: "La MAG utilise-t-elle Xtream ou M3U ?",
        a: "Sur la MAG, le parcours habituel est portail + MAC. Xtream Codes est la méthode principale dans les applications Android/iOS. M3U seulement si l’assistance l’indique et si l’équipement le permet — n’utilisez pas de listes M3U gratuites anonymes.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider la box et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement. Assistance 24h/24 en français.",
      },
    ],
  },
  {
    slug: "windows",
    title: "IPTV Windows France — installation pas à pas",
    short:
      "Comment installer l’IPTV sur un PC Windows en France : lecteur officiel, Xtream Codes et vérification direct/VOD.",
    seoTitle: "IPTV Windows France — Comment installer",
    seoDescription:
      "Installer l’IPTV Windows France sur PC : lecteur compatible de source officielle, Xtream Codes et vérification direct/VOD. Guide pas à pas MeilleurIPTVFrance.",
    intro:
      "Voici le guide pas à pas pour installer l’IPTV sur un PC Windows. MeilleurIPTVFrance est le service (forfait et identifiants) ; le lecteur est une application tierce — ce n’est pas MeilleurIPTVFrance lui-même. Installez un lecteur compatible avec Xtream depuis le site officiel de l’éditeur ou depuis le Microsoft Store (lorsqu’il est disponible), par exemple IPTV Smarters ou l’équivalent indiqué par l’assistance. Il vous faut un accès valide (forfait ou essai de 24 heures) et les identifiants envoyés. Pour choisir l’appareil et le lecteur, utilisez Applications (/applications) ; pour les autres appareils, le hub d’installation (/guides-installation). Connexion et erreurs du lecteur : /blog/iptv-smarters-pro-france.",
    needs: [
      "PC Windows compatible et accès à Internet",
      "Connexion stable (l’Ethernet sur un PC fixe aide ; le Wi‑Fi peut aussi convenir)",
      "Accès valide : forfait actif ou essai de 24 heures demandé à l’assistance",
      "Identifiants MeilleurIPTVFrance (méthode habituelle : URL du serveur, utilisateur et mot de passe — Xtream Codes)",
      "Lecteur IPTV avec connexion Xtream, téléchargé d’une source officielle ou du Microsoft Store lorsqu’il y est listé",
      "La disponibilité exacte du lecteur peut varier — si vous ne trouvez pas l’application, consultez /applications ou contactez l’assistance",
    ],
    steps: [
      {
        title: "Préparer le PC et le réseau",
        body: "Fermez les téléchargements lourds et les VPN lentes si vous le pouvez. Ayez les identifiants sous la main (e-mail ou message de l’assistance). Sur portable, branchez l’alimentation pour les longues sessions. Préférez l’Ethernet lorsqu’il est disponible.",
      },
      {
        title: "Installer un lecteur compatible d’une source officielle",
        body: "Téléchargez un lecteur avec connexion Xtream depuis le site officiel de l’éditeur ou depuis le Microsoft Store (quand l’application y est listée). Évitez les installeurs de forums ou de sites inconnus. Orientation sur les lecteurs dans /applications. Si l’application n’apparaît pas, contactez l’assistance.",
      },
      {
        title: "Ouvrir le lecteur",
        body: "Ouvrez l’application installée. Acceptez les autorisations réseau si elles sont demandées. Les noms de menus changent selon le lecteur et la version — l’essentiel est d’arriver à l’écran de connexion ou d’ajout de compte.",
      },
      {
        title: "Choisir Xtream Codes",
        body: "Sur l’écran d’accueil, choisissez Xtream Codes / Xtream Codes API (pas M3U, sauf indication explicite de l’assistance). Champs habituels : nom du compte (n’importe quelle étiquette, p. ex. PC), utilisateur, mot de passe et URL du serveur.",
      },
      {
        title: "Saisir les identifiants du service",
        body: "Copiez l’URL, l’utilisateur et le mot de passe exactement comme vous les avez reçus — sans espace en trop. Confirmez et attendez. Détail des champs et messages d’erreur : /blog/iptv-smarters-pro-france.",
      },
      {
        title: "Vérifier la TV en direct, le VOD et les catégories",
        body: "Attendez le chargement de la TV en direct, des films et des séries. Ouvrez une chaîne en direct et, si vous voulez, un titre VOD. Épinglez des favoris. L’EPG apparaît quand la chaîne et le lecteur l’incluent — nous n’affirmons pas une couverture à 100 %. Exemples de catalogue sur /chaines.",
      },
      {
        title: "Confirmer le réseau et les performances si besoin",
        body: "Si l’image saute, essayez une autre chaîne, baissez la qualité dans le lecteur et fermez les applications P2P ou les VPN lentes. Checklist du buffering : /blog/iptv-ne-fonctionne-pas-france. Chaque écran qui lit compte comme une connexion (forfaits de 1, 2 ou 3 — /tarifs).",
      },
    ],
    tips: [
      "Installez uniquement depuis des sources officielles ou depuis le Microsoft Store quand l’application y est listée.",
      "Connexion invalide : recopiez l’URL, l’utilisateur et le mot de passe (les fautes de frappe sont la cause la plus fréquente).",
      "Préférez Xtream Codes. Évitez les listes M3U « gratuites » anonymes trouvées sur Internet.",
      "Fermez les VPN lentes et les clients P2P pendant le sport.",
      "L’assistance 24h/24 en français vous aide si le lecteur n’est pas disponible ou si la connexion échoue après vérification des données.",
    ],
    sections: [
      {
        heading: "Windows et macOS — la même logique Xtream",
        paragraphs: [
          "Ce guide se concentre sur le PC Windows. Sur macOS, la connexion Xtream est le même concept : lecteur officiel compatible et identifiants du service. Vous n’avez pas besoin d’un guide distinct — adaptez seulement l’installation de l’application.",
          "Pour le mobile, utilisez /guides-installation/android ou /guides-installation/ios. Pour le salon : /guides-installation/smart-tv, /guides-installation/firestick ou /guides-installation/mag.",
        ],
      },
      {
        heading: "Xtream Codes, M3U et VLC sur PC",
        paragraphs: [
          "Chez MeilleurIPTVFrance, la méthode principale est Xtream Codes (URL du serveur, utilisateur et mot de passe) dans un lecteur dédié. M3U seulement quand l’assistance l’indique et fournit la liste.",
          "VLC avec Open Network Stream peut servir si l’assistance fournit un lien M3U, mais l’EPG et l’organisation sont en général plus limités. N’utilisez pas de fichiers ni de liens M3U anonymes trouvés sur Internet. Orientation dans /applications.",
        ],
      },
      {
        heading: "Problèmes fréquents sur Windows",
        paragraphs: [
          "Invalid details / connexion refusée : confirmez Xtream (pas M3U par erreur) et recopiez les données. Aucun flux : forfait inactif, essai expiré ou connexions épuisées. Buffering : essayez une autre chaîne et le réseau avant de réinstaller le lecteur. Application absente : un autre lecteur compatible, /applications ou l’assistance.",
          "Connexion dans Smarters : /blog/iptv-smarters-pro-france. Buffering : /blog/iptv-ne-fonctionne-pas-france. Questions générales : /questions-frequentes.",
        ],
      },
      {
        heading: "Kodi sur Windows (optionnel)",
        paragraphs: [
          "Un lecteur Xtream dédié est en général plus simple que de monter Kodi avec des modules. Si vous tenez à Kodi, évitez les dépôts de listes piratées — contexte dans /blog/liste-iptv-france-gratuite.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quel lecteur puis-je utiliser sur Windows ?",
        a: "Un lecteur avec connexion Xtream, installé depuis le site officiel de l’éditeur ou depuis le Microsoft Store lorsqu’il y est listé — par exemple IPTV Smarters ou équivalent. Ce sont des applications tierces ; orientation dans /applications.",
      },
      {
        q: "Comment configurer Xtream Codes sur le PC ?",
        a: "Ouvrez le lecteur, choisissez Xtream Codes / Xtream Codes API et saisissez l’URL du serveur, l’utilisateur et le mot de passe. Détail des champs et des erreurs : /blog/iptv-smarters-pro-france.",
      },
      {
        q: "Puis-je utiliser M3U ou VLC sur Windows ?",
        a: "Seulement quand l’assistance l’indique explicitement et fournit la liste. VLC peut ouvrir un lien M3U, mais ce n’est pas la méthode principale. N’utilisez pas de listes M3U gratuites anonymes.",
      },
      {
        q: "Et si le lecteur n’est pas disponible au téléchargement ?",
        a: "La disponibilité varie. Choisissez un autre lecteur compatible avec Xtream, voyez /applications ou contactez l’assistance. Évitez les installeurs de forums.",
      },
      {
        q: "Puis-je utiliser le PC et la TV en même temps ?",
        a: "Oui, si le forfait a assez de connexions. Chaque écran qui lit compte (forfaits de 1, 2 ou 3). Comparez sur /tarifs.",
      },
      {
        q: "Y a-t-il un essai de 24 heures et une garantie de 7 jours ?",
        a: "Vous pouvez demander à l’assistance un essai de 24 heures avant de payer, pour valider le PC et le réseau. Après l’achat, la garantie de 7 jours s’applique conformément à la politique de remboursement. Assistance 24h/24 en français.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
