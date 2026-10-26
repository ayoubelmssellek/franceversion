import { redirect } from "next/navigation";

/** Hardcoded Banxa/Paygate checkout for the 1-month plan. */
const PAYMENT_URL =
  "https://checkout.paygate.sbs/process-payment.php?address=2rhJMEuL625xtG392%2B9zB4xZ8cp%2F71aN0h3bWm9gIse1DoJR2PqmGH31OGjmPLsVlknC4xqQIzJiaxke9gBb6A%3D%3D&amount=11&provider=banxa&email=mustapha.2003.arab%40gmail.com&currency=EUR";

export default function Checkout1MesRedirectPage() {
  redirect(PAYMENT_URL);
}
