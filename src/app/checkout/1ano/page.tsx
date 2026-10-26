import { redirect } from "next/navigation";

/** Hardcoded Meld checkout for the 1-year (€45) plan. */
const PAYMENT_URL =
  "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0xE35073eb6309CdeC787E0924FD61F83b8dab3738&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=45&countryCodeLocked=FR";

export default function Checkout1AnoRedirectPage() {
  redirect(PAYMENT_URL);
}
