import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/apps", destination: "/applications", permanent: true },
      { source: "/faq", destination: "/questions-frequentes", permanent: true },
      { source: "/installation-guides", destination: "/guides-installation", permanent: true },
      { source: "/installation-guides/:path*", destination: "/guides-installation/:path*", permanent: true },
      { source: "/privacy-policy", destination: "/politique-de-confidentialite", permanent: true },
      { source: "/refund-policy", destination: "/politique-de-remboursement", permanent: true },
      { source: "/dmca-policy", destination: "/politique-dmca", permanent: true },
      { source: "/terms", destination: "/conditions", permanent: true },
      { source: "/renew", destination: "/renouveler", permanent: true },
      { source: "/thank-you", destination: "/merci", permanent: true },
      { source: "/channels", destination: "/chaines", permanent: true },
      { source: "/subscriptions", destination: "/tarifs", permanent: true },
      { source: "/why-us", destination: "/a-propos", permanent: true },

      { source: "/checkout/1mes", destination: "/checkout/1-mois", permanent: true },
      { source: "/checkout/6meses", destination: "/checkout/6-mois", permanent: true },
      { source: "/checkout/1ano", destination: "/checkout/1-an", permanent: true },

      {
        source: "/checkout/1-mois",
        destination:
          "https://checkout.paygate.sbs/process-payment.php?address=2rhJMEuL625xtG392%2B9zB4xZ8cp%2F71aN0h3bWm9gIse1DoJR2PqmGH31OGjmPLsVlknC4xqQIzJiaxke9gBb6A%3D%3D&amount=11&provider=banxa&email=mustapha.2003.arab%40gmail.com&currency=EUR",
        permanent: false,
      },
      {
        source: "/checkout/6-mois",
        destination:
          "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0x21D4e51Fd24A579ce153799856A951a599CE11F1&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=32&countryCodeLocked=FR",
        permanent: false,
      },
      {
        source: "/checkout/1-an",
        destination:
          "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0xE35073eb6309CdeC787E0924FD61F83b8dab3738&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=45&countryCodeLocked=FR",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
