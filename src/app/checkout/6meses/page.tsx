import { redirect } from "next/navigation";

/** Hardcoded Meld checkout for the 6-month (€32) plan. */
const PAYMENT_URL =
  "https://meldcrypto.com/?publicKey=WGtfQDvEVHeBW8HQkyejDb:2mCz6gKyTSyhfYPUgUEGUXaeEiSHP9LUt4t&destinationCurrencyCodeLocked=POL&walletAddressLocked=0x21D4e51Fd24A579ce153799856A951a599CE11F1&sourceCurrencyCodeLocked=EUR&sourceAmountLocked=32&countryCodeLocked=FR";

export default function Checkout6MesesRedirectPage() {
  redirect(PAYMENT_URL);
}
