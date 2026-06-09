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

const FRAMEWORK = [
  {
    letter: "S",
    title: "Start Small",
    body: "Avoid large financial risks. Focus on a single, low-risk, repeatable move you can execute immediately to learn what actually works.",
  },
  {
    letter: "E",
    title: "Earn More",
    body: "Reinvest early profits, layer new revenue streams onto your infrastructure, and use automation so earnings grow without more hours.",
  },
  {
    letter: "T",
    title: "Today",
    body: "Avoid over-planning. An imperfect first step taken now will outrun a flawless plan that never gets launched.",
  },
];

const CHAPTERS = [
  { part: "Part 1 — The Foundations", num: "01", title: "What It Really Is" },
  { part: "", num: "02", title: "Why a Side Income Changes Everything" },
  { part: "Part 2 — Don't Trip at the Start", num: "03", title: "The 5 Beginner Mistakes" },
  { part: "Part 3 — Fuel & Launch", num: "04", title: "Funding Your Start (On Almost Nothing)" },
  { part: "", num: "05", title: "The Best Low-Cost Ways to Begin" },
  { part: "", num: "06", title: "Spend Less to Start" },
  { part: "Part 4 — Know Who You're Serving", num: "07", title: "Cheap, Fast Market Research" },
  { part: "", num: "08", title: "Branding That Punches Above Its Weight" },
  { part: "Part 5 — Grow & Scale", num: "09", title: "Build a Tiny, Mighty Team" },
  { part: "", num: "10", title: "More Streams, More Income" },
  { part: "", num: "11", title: "Squeeze Out the Maximum" },
  { part: "Part 6 — Stay in the Game", num: "12", title: "Ride the Ups and Downs" },
  { part: "", num: "13", title: "Stay Ahead of the Curve" },
  { part: "", num: "14", title: "The Numbers That Actually Matter" },
];

const ACTION_PLAN = [
  { title: "Pick your why", body: "Decide what drives you — a safety cushion, lifestyle flexibility, or long-term financial freedom." },
  { title: "Choose one on-ramp", body: "Commit to a single vehicle: freelancing, blogging, affiliate marketing, or a basic digital product." },
  { title: "Run one piece of research", body: "Execute a single social poll or community survey to validate demand before you build." },
  { title: "Set up one automation", body: "Establish your first automated tool plus a dedicated 'passive income fund' to feed weekly." },
  { title: "Ship something this week", body: "Push an imperfect version live. Live and imperfect beats perfect and imaginary." },
];

// TESTIMONIALS commented out — replace with real reviews before enabling
// const TESTIMONIALS = [
//   { quote: "...", name: "Marcus Reyes", role: "Freelance designer", initials: "MR" },
//   { quote: "...", name: "Priya Natarajan", role: "Etsy shop owner", initials: "PN" },
//   { quote: "...", name: "Daniel Okafor", role: "Blogger & affiliate marketer", initials: "DO" },
// ];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function TrustRow() {
  const items = [
    { label: "Secure PayPal checkout", path: "M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4z" },
    { label: "Instant PDF download", path: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" },
    { label: "Pay once, keep forever", path: "M5 13l4 4L19 7" },
  ];
  return (
    <ul className="mt-5 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-slate-400 text-xs">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={it.path} />
          </svg>
          {it.label}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* Book cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-y-4 scale-95 rounded-2xl bg-amber-400/20 blur-2xl" />
              <Image
                src="/cover.jpg"
                alt="SSEMT — The Complete Guide to Passive Income"
                width={240}
                height={320}
                priority
                className="w-44 sm:w-52 lg:w-60 h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>

          {/* Hero copy */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full ring-1 ring-amber-400/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Digital Download · PDF
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1] tracking-tight">
              The Complete Guide to <span className="text-amber-400">Passive Income</span>
            </h1>
            {/* star rating hidden until real reviews are collected
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <Stars className="text-amber-400" />
              <span className="text-slate-300 text-sm">
                <strong className="text-white font-semibold">4.9</strong>/5 from 300+ readers
              </span>
            </div>
            */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              A plain-English playbook for first-time founders and side-hustlers who
              want to launch a passive income stream on a shoestring budget — and grow
              it into something that pays them repeatedly.
            </p>

            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="text-4xl sm:text-5xl font-extrabold text-amber-400">$14.99</span>
              <div className="flex flex-col items-start">
                <span className="text-slate-400 line-through text-base leading-none">$29.99</span>
                <span className="mt-1 bg-green-500/90 text-white text-[0.65rem] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                  Save 50%
                </span>
              </div>
            </div>

            <div id="buy" className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl max-w-sm mx-auto lg:mx-0 scroll-mt-24">
              <PayPalCheckout />
            </div>

            <TrustRow />
          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-t border-white/10 bg-black/20">
          <dl className="max-w-5xl mx-auto px-5 sm:px-6 grid grid-cols-3 divide-x divide-white/10 text-center">
            {[
              { n: "14", l: "Chapters" },
              { n: "6", l: "Parts" },
              { n: "5-Step", l: "Action Plan" },
            ].map((s) => (
              <div key={s.l} className="py-5 sm:py-6">
                <dt className="text-xl sm:text-2xl font-bold text-amber-400">{s.n}</dt>
                <dd className="text-[0.7rem] sm:text-xs uppercase tracking-widest text-slate-400 mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-tight">
            What You&apos;ll Learn
          </h2>
          <p className="text-slate-500 text-center mb-10 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            14 chapters of battle-tested tactics for building income streams that work
            while you sleep.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-100 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <CheckIcon />
                </span>
                <span className="text-slate-700 text-sm sm:text-base leading-snug">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SSEMT FRAMEWORK ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold text-center mb-2">
            The Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-tight">
            The SSEMT Framework
          </h2>
          <p className="text-slate-500 text-center mb-10 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            Three principles that turn momentum into money — without a massive bankroll
            or a perfect plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {FRAMEWORK.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center sm:text-left"
              >
                <div className="mx-auto sm:mx-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  {f.letter}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-tight">
            Table of Contents
          </h2>
          <p className="text-slate-500 text-center mb-10 sm:mb-12 text-sm sm:text-base">
            {CHAPTERS.length} chapters across 6 parts — each one packed with actionable
            steps.
          </p>
          <ol className="space-y-1.5">
            {CHAPTERS.map((c) => (
              <li key={c.num}>
                {c.part && (
                  <p className="text-[0.7rem] uppercase tracking-widest text-amber-500 font-semibold mt-7 first:mt-0 mb-2 px-1">
                    {c.part}
                  </p>
                )}
                <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 transition-colors">
                  <span className="text-amber-500 font-mono font-bold text-sm flex-shrink-0 w-6">
                    {c.num}
                  </span>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{c.title}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5-STEP ACTION PLAN ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold text-center mb-2">
            Put It Into Action
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 tracking-tight">
            The 5-Step SSEMT Plan
          </h2>
          <ol className="relative space-y-6 sm:space-y-8">
            {ACTION_PLAN.map((step, i) => (
              <li key={step.title} className="flex gap-4 sm:gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm sm:text-base">
                    {i + 1}
                  </span>
                  {i < ACTION_PLAN.length - 1 && (
                    <span className="w-px flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-bold text-slate-800">{step.title}</h3>
                  <p className="mt-1 text-slate-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS section hidden — uncomment when real reviews are ready
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-slate-50">
        ...
      </section>
      */}

      {/* ── ABOUT ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-400 to-slate-700 flex items-center justify-center text-white text-3xl font-bold select-none shadow-md">
            S
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1">
              About the Author
            </p>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">The SSEMT Team</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              SSEMT — Start Small. Earn More. Today. — is a practical resource for
              first-time founders and side-hustlers who want to build real income
              without waiting for the perfect moment. This guide distills hard-won
              lessons into a no-fluff playbook you can act on immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white text-center">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Start Your First Passive Income Stream Today
          </h2>
          <p className="text-slate-300 mb-8 text-sm sm:text-base">
            An imperfect first step taken now will outrun a perfect plan that never
            launches. Get instant access for just{" "}
            <strong className="text-amber-400">$14.99</strong>.
          </p>
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl max-w-sm mx-auto">
            <PayPalCheckout />
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Secure checkout · Instant PDF download · Pay once, keep forever
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-5 sm:px-6 text-center text-slate-400 text-sm bg-slate-950">
        © {new Date().getFullYear()} SSEMT. All rights reserved.
      </footer>

      {/* ── STICKY MOBILE BUY BAR ── */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="leading-tight">
          <p className="text-lg font-extrabold text-slate-900">$14.99</p>
          <p className="text-[0.7rem] text-slate-400 line-through">$29.99</p>
        </div>
        <a
          href="#buy"
          className="flex-1 max-w-[12rem] text-center bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Get the Ebook
        </a>
      </div>
      {/* spacer so footer isn't hidden behind sticky bar on mobile */}
      <div className="lg:hidden h-20" aria-hidden="true" />
    </main>
  );
}
