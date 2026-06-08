import { createClient } from "@supabase/supabase-js";

export function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Returns a signed URL valid for 7 days
export async function getEbookDownloadUrl(): Promise<string> {
  const supabase = adminClient();
  const bucket = process.env.SUPABASE_BUCKET_NAME!;
  const path = process.env.SUPABASE_PDF_PATH!;

  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, 60 * 60 * 24 * 7);

  if (error || !data) {
    throw new Error(`Supabase signed URL error: ${error?.message}`);
  }

  return data.signedUrl;
}
