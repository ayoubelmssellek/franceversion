"use client";

import { useEffect } from "react";
import { PAY_HANDOFF_ORIGIN } from "@/lib/pay-handoff";

/** Legacy local /pay — forward to shop handoff domain. */
export default function PayExitRedirect() {
  useEffect(() => {
    const stored = sessionStorage.getItem("pc_pay_url") || "";
    sessionStorage.removeItem("pc_pay_url");
    if (stored && /^https:\/\//i.test(stored)) {
      window.location.replace(
        `${PAY_HANDOFF_ORIGIN}/pay?to=${encodeURIComponent(stored)}`,
      );
      return;
    }
    window.location.replace(PAY_HANDOFF_ORIGIN);
  }, []);

  return (
    <main
      style={{ minHeight: "100vh", margin: 0, background: "#000" }}
      aria-hidden
    />
  );
}
