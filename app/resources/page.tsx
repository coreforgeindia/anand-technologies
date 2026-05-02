import Link from "next/link";

const articles = [
  { slug: "gsm-gps-combo-antennas-fleet-tracking", category: "Application Guide", title: "Selecting GSM/GPS Combo Antennas for Fleet Tracking", excerpt: "Key parameters to evaluate when choosing a combined GSM/GPS antenna for vehicle telematics: frequency coverage, ground plane requirements, and mounting considerations.", readTime: "6 min read", tags: ["GPS", "GSM", "Automotive", "Combo Antennas"] },
  { slug: "vswr-impedance-matching-iot", category: "Technical Deep Dive", title: "Understanding VSWR and Impedance Matching in IoT Devices", excerpt: "Why a high VSWR degrades link budget, how to read a Smith chart, and practical matching techniques for compact embedded antennas.", readTime: "8 min read", tags: ["VSWR", "IoT", "Impedance", "Design"] },
  { slug: "rf-attenuators-splitters-network-reliability", category: "Product Insight", title: "How RF Attenuators and Splitters Improve Network Reliability", excerpt: "A practical walkthrough of when to insert attenuation into a signal chain and how well-matched power splitters preserve signal integrity across distribution networks.", readTime: "5 min read", tags: ["Attenuator", "Splitter", "Microwave", "Telecom"] },
  { slug: "antenna-gain-vs-directivity", category: "Technical Deep Dive", title: "Antenna Gain vs. Directivity: What Matters for Your Deployment", excerpt: "A clear explanation of the difference between gain and directivity, and how each affects coverage area, link margin, and antenna selection.", readTime: "7 min read", tags: ["Antenna Theory", "High Gain", "Deployment"] },
  { slug: "yagi-patch-panel-long-range", category: "Application Guide", title: "Yagi vs. Patch Panel Antennas for Long-Range Point-to-Point Links", excerpt: "Comparing Yagi and patch panel antennas across beam width, back lobe suppression, wind load, and installation complexity for outdoor fixed links.", readTime: "6 min read", tags: ["Yagi", "Patch Panel", "High Gain", "Outdoor"] },
  { slug: "gnss-multi-constellation-irnss", category: "Application Guide", title: "GNSS Multi-Constellation Antennas: Adding IRNSS to Your Design", excerpt: "Why Indian system designers are adding IRNSS (NavIC) coverage to GPS and GLONASS designs, and what antenna parameters change when you add L5 band support.", readTime: "5 min read", tags: ["GNSS", "IRNSS", "GPS", "NavIC"] },
];

const categoryFilters = ["All", "Application Guide", "Technical Deep Dive", "Product Insight"];

export default function Resources() {
  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-16 lg:py-20">
          <span className="section-label">Knowledge Base</span>
          <h1 className="mt-3 text-4xl font-bold leading-tight lg:text-5xl">Resources and Blog</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">Technical articles, application guides, and product insights from our RF engineering team.</p>
        </div>
      </section>

      <div className="border-b border-[var(--line)] bg-[var(--panel)]">
        <div className="container flex gap-2 overflow-x-auto py-3">
          {categoryFilters.map((c, i) => (
            <span key={c} className={`shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium ${i === 0 ? "bg-[var(--brand)] text-white" : "border border-[var(--line)] text-[var(--muted)]"}`}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.slug} className="card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="badge">{a.category}</span>
                <span className="text-xs text-[var(--muted)]">{a.readTime}</span>
              </div>
              <h2 className="mt-4 font-bold leading-snug text-[var(--text)] hover:text-[var(--brand)]">
                <Link href={`/resources/${a.slug}`}>{a.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{a.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]">{t}</span>
                ))}
              </div>
              <Link href={`/resources/${a.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:underline">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-10 text-center shadow-sm">
          <span className="section-label">Stay Updated</span>
          <h2 className="mt-3 text-2xl font-bold">Get RF Engineering Insights</h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">We publish technical articles and product updates. Reach us to be added to the mailing list.</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
