import { NextResponse } from "next/server";
import { createPayPalOrder } from "@/lib/paypal";

export async function POST() {
  try {
    const price = process.env.EBOOK_PRICE ?? "14.99";
    const order = await createPayPalOrder(price);
    return NextResponse.json({ id: order.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
