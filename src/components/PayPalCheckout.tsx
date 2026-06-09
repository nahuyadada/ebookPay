"use client";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CheckoutButtons() {
  const [{ isPending }] = usePayPalScriptReducer();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isPending) {
    return (
      <div className="h-12 flex items-center justify-center text-slate-500 text-sm">
        Loading payment…
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Email input */}
      <div className="mb-3">
        <label htmlFor="buyer-email" className="block text-sm font-medium text-slate-700 mb-1">
          Your email <span className="text-red-500">*</span>
        </label>
        <input
          id="buyer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          disabled={processing}
        />
        <p className="text-xs text-slate-400 mt-1">The ebook will be sent to this address.</p>
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}
      {processing && (
        <p className="text-slate-500 text-sm mb-3 text-center">
          Processing your payment…
        </p>
      )}

      {/* PayPal buttons — locked until valid email entered */}
      <div className={emailValid ? "" : "opacity-40 pointer-events-none select-none"}>
        <PayPalButtons
          style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
          disabled={processing || !emailValid}
          createOrder={async () => {
            setError(null);
            const res = await fetch("/api/paypal/create-order", { method: "POST" });
            const data = await res.json();
            if (!data.id) throw new Error("Could not create order");
            return data.id as string;
          }}
          onApprove={async (data) => {
            setProcessing(true);
            setError(null);
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID, email }),
            });
            const result = await res.json();
            if (!result.success) {
              setError("Payment could not be completed. Please try again.");
              setProcessing(false);
              return;
            }
            router.push("/success");
          }}
          onError={() => {
            setError("Something went wrong with PayPal. Please try again.");
            setProcessing(false);
          }}
          onCancel={() => setProcessing(false)}
        />
      </div>

      {!emailValid && (
        <p className="text-xs text-slate-400 text-center mt-2">
          Enter your email above to unlock payment.
        </p>
      )}
    </div>
  );
}

export default function PayPalCheckout() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "";

  return (
    <PayPalScriptProvider options={{ clientId, currency: "USD" }}>
      <CheckoutButtons />
    </PayPalScriptProvider>
  );
}
