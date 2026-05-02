import Link from "next/link";
import { categories, industries } from "@/src/data/catalog";

const stats = [
  { value: "20+", label: "Years of RF Expertise" },
  { value: "500+", label: "Products Delivered" },
  { value: "15+", label: "Industry Sectors Served" },
  { value: "98%", label: "On-Time Delivery Rate" },
];

const features = [
  {
    title: "Precision Engineering",
    desc: "Tight impedance tolerances, VSWR optimisation, and repeatable production runs backed by strict in-process QC.",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  },
  {
    title: "Custom RF Design",
    desc: "From antenna geometry to multi-band integration. We prototype, simulate, and validate to your exact specification.",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
  {
    title: "Fast Turnaround",
    desc: "Rapid design response and agile manufacturing cycles to meet demanding project timelines.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Full Lifecycle Support",
    desc: "Engineering consultation, field installation guidance, and post-delivery technical support included.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

const industryIcons: Record<string, string> = {
  Telecom: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  Defense: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  Automotive: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  IoT: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  Aerospace: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
};

export default function Home() {
  return (
    <main>

      {/* ── HERO: exactly one full screen ── */}
      <section className="hero-section">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label">RF and Antenna Systems | Bengaluru, India</span>
            <h1 className="mt-5 text-5xl font-bold leading-[1.15] tracking-tight text-[var(--text)] lg:text-6xl">
              Precision RF Components for{" "}
              <span className="text-[var(--brand)]">Mission-Critical</span>{" "}
              Performance
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
              Industrial-grade antenna and RF product manufacturing with strict process control, electromagnetic simulation, and fast design response for telecom, defense, automotive, and IoT deployments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Request a Quote
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline text-base">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-[var(--brand)]">{s.value}</p>
                <p className="mt-1.5 text-sm text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES ── */}
      <section className="container py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">What We Make</span>
            <h2 className="mt-3 text-3xl font-bold">Product Lines</h2>
          </div>
          <Link href="/products" className="btn-outline text-sm">View all products</Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Link key={c.id} href={`/products?category=${c.slug}`} className="card group flex flex-col gap-5 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                {i === 0 && (
                  <svg className="h-6 w-6 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="h-6 w-6 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="h-6 w-6 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text)] transition-colors group-hover:text-[var(--brand)]">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.summary}</p>
              </div>
              <span className="mt-auto text-sm font-semibold text-[var(--brand)] group-hover:underline">Explore</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY ANAND ── */}
      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-24">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold">Built for Demanding Applications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
              Every product is designed to perform reliably under real-world field conditions, not just in the lab.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                  <svg className="h-5 w-5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-bold text-[var(--text)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="container py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Who We Serve</span>
            <h2 className="mt-3 text-3xl font-bold">Industry Sectors</h2>
          </div>
          <Link href="/industries" className="btn-outline text-sm">Learn more</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <Link
              key={ind}
              href="/industries"
              className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-semibold text-[var(--text)] shadow-sm transition-all hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              <svg className="h-4 w-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={industryIcons[ind] ?? "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
              </svg>
              {ind}
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="container pb-28">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] p-12 text-white lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Have a custom RF requirement?</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed opacity-90">
                Our engineering team works directly with you, from initial specification to validated prototype and production scale-up.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[var(--brand)] transition-colors hover:bg-[var(--brand-light)]">
                Get in Touch
              </Link>
              <Link href="/custom-solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
