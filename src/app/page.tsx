import Image from "next/image";
import PayPalCheckout from "@/components/PayPalCheckout";

const FEATURES = [
  "The SSEMT framework: Start Small, Earn More, Today — step by step",
  "Avoid the 5 beginner mistakes that silently kill new side hustles",
  "Fund your launch on almost nothing with zero-capital strategies",
  "Build automated income streams that pay you without trading hours",
  "Conduct cheap, fast market research using free tools",
  "Stack multiple revenue streams on your existing audience",
  "Hire a tiny freelance team to scale without a payroll",
  "Track the 4 numbers that actually matter — ignore the vanity metrics",
];

const CHAPTERS = [
  { part: "Part 1 — The Foundations",      num: "01", title: "What It Really Is" },
  { part: "",                               num: "02", title: "Why a Side Income Changes Everything" },
  { part: "Part 2 — Don't Trip at the Start", num: "03", title: "The 5 Beginner Mistakes" },
  { part: "Part 3 — Fuel & Launch",         num: "04", title: "Funding Your Start (On Almost Nothing)" },
  { part: "",                               num: "05", title: "The Best Low-Cost Ways to Begin" },
  { part: "",                               num: "06", title: "Spend Less to Start" },
  { part: "Part 4 — Know Who You're Serving", num: "07", title: "Cheap, Fast Market Research" },
  { part: "",                               num: "08", title: "Branding That Punches Above Its Weight" },
  { part: "Part 5 — Grow & Scale",          num: "09", title: "Build a Tiny, Mighty Team" },
  { part: "",                               num: "10", title: "More Streams, More Income" },
  { part: "",                               num: "11", title: "Squeeze Out the Maximum" },
  { part: "Part 6 — Stay in the Game",      num: "12", title: "Ride the Ups and Downs" },
  { part: "",                               num: "13", title: "Stay Ahead of the Curve" },
  { part: "",                               num: "14", title: "The Numbers That Actually Matter" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Book cover */}
          <div className="flex-shrink-0 rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/cover.jpg"
              alt="SSEMT — The Complete Guide to Passive Income"
              width={208}
              height={277}
              priority
              className="block"
            />
          </div>

          {/* Hero copy */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Digital Download · PDF
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The Complete Guide to Passive Income
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg">
              A plain-English playbook for first-time founders and side-hustlers who want to launch a passive income stream on a shoestring budget — and grow it into something that pays them repeatedly.
            </p>
            <div className="flex items-baseline gap-3 mb-2 justify-center lg:justify-start">
              <span className="text-4xl font-extrabold text-yellow-400">
                $14.99
              </span>
              <span className="text-slate-400 line-through text-lg">$29.99</span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                50% OFF
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-8">
              Instant download — pay once, keep it forever.
            </p>
            <div className="max-w-sm mx-auto lg:mx-0">
              <PayPalCheckout />
            </div>
            <p className="text-slate-500 text-xs mt-3">
              Secure checkout powered by PayPal · Instant PDF download
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            What You&apos;ll Learn
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            14 chapters of battle-tested tactics for building income streams that work while you sleep.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-100"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            Table of Contents
          </h2>
          <p className="text-slate-500 text-center mb-12">
            {CHAPTERS.length} chapters across 6 parts — each one packed with actionable steps.
          </p>
          <ol className="space-y-1">
            {CHAPTERS.map((c) => (
              <li key={c.num}>
                {c.part && (
                  <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold mt-6 mb-2 px-1">
                    {c.part}
                  </p>
                )}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                  <span className="text-blue-400 font-mono font-bold text-sm flex-shrink-0">
                    {c.num}
                  </span>
                  <span className="text-slate-700 font-medium">{c.title}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── ABOUT AUTHOR ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-slate-600 flex items-center justify-center text-white text-3xl font-bold select-none">
            S
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold mb-1">
              About the Author
            </p>
            <h3 className="text-2xl font-bold mb-2">The SSEMT Team</h3>
            <p className="text-slate-600 leading-relaxed">
              SSEMT — Start Small. Earn More. Today. — is a practical resource for first-time founders and side-hustlers who want to build real income without waiting for the perfect moment. This guide distills hard-won lessons into a no-fluff playbook you can act on immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Start Your First Passive Income Stream Today</h2>
          <p className="text-slate-300 mb-8">
            An imperfect first step taken now will outrun a perfect plan that never launches.
            Get instant access for just{" "}
            <strong className="text-yellow-400">$14.99</strong>.
          </p>
          <div className="max-w-sm mx-auto">
            <PayPalCheckout />
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Secure checkout · Instant PDF download · Pay once, keep forever
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 text-center text-slate-400 text-sm bg-slate-900">
        © {new Date().getFullYear()} SSEMT. All rights reserved.
      </footer>
    </main>
  );
}
