import Link from "next/link";

const articles = [
  { slug: "gsm-gps-combo-antennas-fleet-tracking",        category: "Application Guide",    title: "Selecting GSM/GPS Combo Antennas for Fleet Tracking",               excerpt: "Key parameters to evaluate when choosing a combined GSM/GPS antenna for vehicle telematics: frequency coverage, ground plane requirements, and mounting considerations.", readTime: "6 min", tags: ["GPS", "GSM", "Automotive"] },
  { slug: "vswr-impedance-matching-iot",                  category: "Technical Deep Dive",  title: "Understanding VSWR and Impedance Matching in IoT Devices",           excerpt: "Why a high VSWR degrades link budget, how to read a Smith chart, and practical matching techniques for compact embedded antennas.",                                      readTime: "8 min", tags: ["VSWR", "IoT", "Impedance"] },
  { slug: "rf-attenuators-splitters-network-reliability", category: "Product Insight",      title: "How RF Attenuators and Splitters Improve Network Reliability",       excerpt: "A practical walkthrough of when to insert attenuation into a signal chain and how well-matched power splitters preserve signal integrity.",                                readTime: "5 min", tags: ["Attenuator", "Splitter", "Telecom"] },
  { slug: "antenna-gain-vs-directivity",                  category: "Technical Deep Dive",  title: "Antenna Gain vs. Directivity: What Matters for Your Deployment",     excerpt: "A clear explanation of gain vs. directivity and how each affects coverage area, link margin, and antenna selection for base-station and end-device use.",                readTime: "7 min", tags: ["Antenna Theory", "High Gain"] },
  { slug: "yagi-patch-panel-long-range",                  category: "Application Guide",    title: "Yagi vs. Patch Panel Antennas for Long-Range Point-to-Point Links", excerpt: "Comparing Yagi and patch panel antennas across beam width, back lobe suppression, wind load, and installation complexity for outdoor fixed links.",                        readTime: "6 min", tags: ["Yagi", "Patch Panel", "Outdoor"] },
  { slug: "gnss-multi-constellation-irnss",               category: "Application Guide",    title: "GNSS Multi-Constellation Antennas: Adding IRNSS to Your Design",    excerpt: "Why Indian system designers are adding NavIC coverage to GPS designs, and what antenna parameters change when you add L5 band support.",                                  readTime: "5 min", tags: ["GNSS", "IRNSS", "NavIC"] },
];

const filters = ["All", "Application Guide", "Technical Deep Dive", "Product Insight"];

export default function Resources() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">Knowledge Base</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem" }}>Resources and Blog</h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "560px" }}>
            Technical articles, application guides, and product insights from our RF engineering team.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ background: "var(--panel)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingBlock: "0.875rem", display: "flex", gap: "0.5rem", overflowX: "auto" }}>
          {filters.map((f, i) => (
            <span key={f} style={{ flexShrink: 0, padding: "0.4rem 1rem", borderRadius: "99px", fontSize: "0.825rem", fontWeight: 600, background: i === 0 ? "var(--brand)" : "transparent", color: i === 0 ? "white" : "var(--muted)", border: i === 0 ? "none" : "1.5px solid var(--line)", cursor: "pointer" }}>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Articles */}
      <section className="section container">
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {articles.map((a) => (
            <article key={a.slug} className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="badge">{a.category}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{a.readTime} read</span>
              </div>
              <h2 style={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.5, color: "var(--text)" }}>
                <Link href={`/resources/${a.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{a.title}</Link>
              </h2>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)", flex: 1 }}>{a.excerpt}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {a.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "99px", border: "1px solid var(--line)", color: "var(--muted)" }}>{tag}</span>
                ))}
              </div>
              <Link href={`/resources/${a.slug}`} style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--brand)", textDecoration: "none" }}>
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container section-bot">
        <div style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: "20px", padding: "3.5rem 3rem", textAlign: "center" }}>
          <span className="label">Stay Updated</span>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "0.5rem" }}>Get RF Engineering Insights</h2>
          <p style={{ marginTop: "1rem", color: "var(--muted)", maxWidth: "420px", marginInline: "auto", lineHeight: 1.75 }}>
            We publish technical articles and product updates. Reach us to be added to the mailing list.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "1.75rem", display: "inline-flex" }}>Contact Us</Link>
        </div>
      </section>

    </main>
  );
}
