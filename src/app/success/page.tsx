"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const url = localStorage.getItem("ebook_download_url");
    if (!url) {
      router.replace("/");
      return;
    }
    setDownloadUrl(url);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 text-center">

        {/* Checkmark */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Thank you for your purchase. Your ebook is ready below.
        </p>

        {downloadUrl ? (
          <a
            href={downloadUrl}
            download="SSEMT.pdf"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg w-full justify-center mb-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Ebook
          </a>
        ) : (
          <div className="bg-slate-50 rounded-xl p-4 text-slate-500 text-sm mb-3">
            Download link not found. Please contact support.
          </div>
        )}

        <p className="text-slate-400 text-xs mb-6">
          Link valid for 7 days
        </p>

        <Link
          href="/"
          className="inline-block text-slate-400 hover:text-slate-600 text-sm transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
