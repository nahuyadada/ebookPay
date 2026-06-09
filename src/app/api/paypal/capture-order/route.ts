import { NextRequest, NextResponse } from "next/server";
import { capturePayPalOrder } from "@/lib/paypal";
import { adminClient } from "@/lib/supabase";
import { sendDownloadEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { orderID, email: submittedEmail } = await req.json();

    const capture = await capturePayPalOrder(orderID);

    if (capture.status !== "COMPLETED") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    // Prefer the email the buyer typed; fall back to their PayPal email
    const email = submittedEmail || capture.payer?.email_address || `paypal_${orderID}`;
    const buyerName = capture.payer?.name?.given_name ?? "there";
    const captureUnit = capture.purchase_units?.[0]?.payments?.captures?.[0];
    const amount = parseFloat(captureUnit?.amount?.value ?? "14.99");
    const currency = captureUnit?.amount?.currency_code ?? "USD";

    const supabase = adminClient();

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({ email, paypal_order_id: orderID, amount, currency, status: "completed" })
      .select("id")
      .single();

    if (orderError || !order) {
      console.error("Order insert error:", orderError);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    const { data: tokenRow, error: tokenError } = await supabase
      .from("download_tokens")
      .insert({ order_id: order.id })
      .select("token")
      .single();

    if (tokenError || !tokenRow) {
      console.error("Token insert error:", tokenError);
      return NextResponse.json({ error: "Failed to create download token" }, { status: 500 });
    }

    const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/api/download/${tokenRow.token}`;

    // Send email in the background — don't block the response
    sendDownloadEmail(email, buyerName, downloadUrl).catch((err) =>
      console.error("Email send error:", err)
    );

    return NextResponse.json({
      success: true,
      downloadUrl: `/api/download/${tokenRow.token}`,
    });
  } catch (err) {
    console.error("capture-order error:", err);
    return NextResponse.json(
      { error: "Failed to process payment" },
      { status: 500 }
    );
  }
}
