import { NextRequest } from "next/server";
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

  // Increment first so repeated retries still count
  await supabase
    .from("download_tokens")
    .update({ download_count: tokenRow.download_count + 1 })
    .eq("token", token);

  // Stream the file directly — avoids cross-origin redirect issues
  const { data: fileBlob, error: downloadError } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME!)
    .download(process.env.SUPABASE_PDF_PATH!);

  if (downloadError || !fileBlob) {
    console.error("Supabase storage download error:", downloadError);
    return new Response(
      "Could not retrieve the file. Please contact support.",
      { status: 500 }
    );
  }

  const buffer = await fileBlob.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Complete_Guide_To_Passive_Income.pdf"',
      "Content-Length": buffer.byteLength.toString(),
      "Cache-Control": "no-store",
    },
  });
}
