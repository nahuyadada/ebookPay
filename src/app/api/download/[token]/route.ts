import { NextRequest, NextResponse } from "next/server";
import { adminClient } from "@/lib/supabase";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const supabase = adminClient();

  const { data: tokenRow, error } = await supabase
    .from("download_tokens")
    .select("id, download_count, max_downloads, expires_at")
    .eq("token", token)
    .single();

  if (error || !tokenRow) {
    return new Response("Invalid download link.", { status: 404 });
  }

  if (new Date(tokenRow.expires_at) < new Date()) {
    return new Response("This download link has expired.", { status: 410 });
  }

  if (tokenRow.download_count >= tokenRow.max_downloads) {
    return new Response("Download limit reached for this link.", { status: 403 });
  }

  await supabase
    .from("download_tokens")
    .update({ download_count: tokenRow.download_count + 1 })
    .eq("token", token);

  const { data: signedData, error: signedError } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME!)
    .createSignedUrl(process.env.SUPABASE_PDF_PATH!, 60 * 10, {
      download: "Complete_Guide_To_Passive_Income.pdf",
    });

  if (signedError || !signedData) {
    console.error("Signed URL error:", signedError);
    return new Response("Failed to generate download.", { status: 500 });
  }

  return NextResponse.redirect(signedData.signedUrl);
}
