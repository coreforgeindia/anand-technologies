"use client";

import Link from "next/link";
import { categories, industries } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

const featureIcons = [
  "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
];

const industryIcons: Record<string, string> = {
  Telecom:    "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  Defense:    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  Automotive: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  IoT:        "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  Aerospace:  "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
};

const stats = [
  { value: "20+",  key: "yearsLabel" },
  { value: "500+", key: "productsLabel" },
  { value: "15+",  key: "sectorsLabel" },
  { value: "98%",  key: "deliveryLabel" },
];

const featureTitles = ["Precision Engineering", "Custom RF Design", "Fast Turnaround", "Full Lifecycle Support"];
const featureDescs  = [
  "Tight impedance tolerances, VSWR optimisation, and repeatable production runs backed by strict in-process QC.",
  "From antenna geometry to multi-band integration. We prototype, simulate, and validate to your exact specification.",
  "Rapid design response and agile manufacturing cycles to meet demanding project timelines.",
  "Engineering consultation, field installation guidance, and post-delivery technical support included.",
];

export default function Home() {
  const { t } = useSite();

  const statsLabels = ["Years of RF Expertise", "Products Delivered", "Industry Sectors Served", "On-Time Delivery Rate"];

  return (
    <main>

      {/* ── HERO with background video ── */}
      <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background video */}
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.12 }}
          poster=""
        >
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay to ensure readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg, rgba(232,243,251,0.97) 0%, rgba(240,247,255,0.95) 55%, rgba(250,252,255,0.93) 100%)", zIndex: 1 }} className="dark-overlay" />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "720px" }}>
            <span className="label">{t.heroLabel}</span>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: "0.6rem" }}>
              {t.heroHeadline1}<br />
              {t.heroHeadline2}{" "}
              <span style={{ color: "var(--brand)" }}>Mission-Critical</span><br />
              {t.heroHeadline3}
            </h1>
            <p style={{ marginTop: "1.75rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "600px" }}>
              {t.heroSubtext}
            </p>
            <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                {t.requestQuote}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/products" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                {t.exploreProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container" style={{ paddingBlock: "3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2rem" }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.key} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand)", lineHeight: 1 }}>{s.value}</p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.825rem", color: "var(--muted)" }}>{statsLabels[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES ── */}
      <section className="section container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <div>
            <span className="label">{t.whatWeMake}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.25rem" }}>{t.productLines}</h2>
          </div>
          <Link href="/products" className="btn-outline" style={{ fontSize: "0.875rem", padding: "0.65rem 1.5rem" }}>{t.viewAllProducts}</Link>
        </div>
        <div style={{ display: "grid", gap: "var(--gap-cards)", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {categories.map((c, i) => (
            <Link key={c.id} href={`/products?category=${c.slug}`} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textDecoration: "none" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i === 0 && <svg style={{ width: "24px", height: "24px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>}
                {i === 1 && <svg style={{ width: "24px", height: "24px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>}
                {i === 2 && <svg style={{ width: "24px", height: "24px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>{c.name}</h3>
                <p style={{ marginTop: "0.6rem", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted)" }}>{c.summary}</p>
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--brand)" }}>Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY ANAND ── */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "var(--section-y)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="label">{t.whyChooseUs}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.25rem" }}>{t.builtForDemanding}</h2>
          </div>
          <div style={{ display: "grid", gap: "var(--gap-cards)", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {featureTitles.map((title, i) => (
              <div key={title} className="card">
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg style={{ width: "22px", height: "22px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={featureIcons[i]}/>
                  </svg>
                </div>
                <h3 style={{ marginTop: "1.25rem", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{title}</h3>
                <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)" }}>{featureDescs[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <div>
            <span className="label">{t.whoWeServe}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "0.25rem" }}>{t.industrySectors}</h2>
          </div>
          <Link href="/industries" className="btn-outline" style={{ fontSize: "0.875rem", padding: "0.65rem 1.5rem" }}>{t.learnMore}</Link>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
          {industries.map((ind) => (
            <Link key={ind} href="/industries"
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1.4rem", background: "var(--panel)", border: "1.5px solid var(--line)", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", transition: "border-color 0.18s, color 0.18s" }}>
              <svg style={{ width: "16px", height: "16px", color: "var(--brand)", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={industryIcons[ind] ?? "M12 6v6m0 0v6m0-6h6m-6 0H6"}/>
              </svg>
              {ind}
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container section-bot">
        <div style={{ background: "linear-gradient(135deg,var(--brand) 0%,var(--brand-dark) 100%)", borderRadius: "20px", padding: "4rem 3.5rem", color: "white" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: "520px" }}>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 700, lineHeight: 1.25 }}>{t.customRFReq}</h2>
              <p style={{ marginTop: "1rem", opacity: 0.88, lineHeight: 1.75, fontSize: "1rem" }}>{t.customRFDesc}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "white", color: "var(--brand)", fontWeight: 700, padding: "0.9rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "0.95rem" }}>
                {t.getInTouch}
              </Link>
              <Link href="/custom-solutions" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "white", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.95rem" }}>
                {t.ourProcess}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
