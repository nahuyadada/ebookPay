import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 text-center">

        {/* Checkmark */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Payment Successful!
        </h1>

        {/* Email icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
        </div>

        <p className="text-slate-700 font-semibold text-lg mb-2">
          Check your email!
        </p>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          We&apos;ve sent your copy of{" "}
          <strong className="text-slate-700">The Complete Guide to Passive Income</strong>{" "}
          to your inbox. Check your spam folder if you don&apos;t see it within a few minutes.
        </p>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800 mb-8">
          <p className="font-semibold mb-1">Start Small. Earn More. Today.</p>
          <p className="text-amber-700">Take your first step this week — don&apos;t wait for the perfect moment.</p>
        </div>

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
