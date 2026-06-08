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
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  if (isPending) {
    return (
      <div className="h-12 flex items-center justify-center text-slate-500 text-sm">
        Loading payment…
      </div>
    );
  }

  return (
    <div className="w-full">
      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}
      {processing && (
        <p className="text-slate-500 text-sm mb-3 text-center">
          Processing your payment…
        </p>
      )}
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
        disabled={processing}
        createOrder={async () => {
          setError(null);
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
          });
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
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const result = await res.json();
          if (!result.success) {
            setError("Payment could not be completed. Please try again.");
            setProcessing(false);
            return;
          }
          sessionStorage.setItem("ebook_download_url", result.downloadUrl);
          router.push("/success");
        }}
        onError={() => {
          setError("Something went wrong with PayPal. Please try again.");
          setProcessing(false);
        }}
        onCancel={() => setProcessing(false)}
      />
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
