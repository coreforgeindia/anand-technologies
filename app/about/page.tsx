import Link from "next/link";

const capabilities = [
  { title: "Antenna Design and Simulation",   desc: "Full-wave electromagnetic simulation using industry tools. Radiation pattern optimisation and multi-band integration for telecom and IoT deployments.",                         icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Prototyping and Validation",       desc: "Rapid prototyping with in-house machining and assembly. Lab validation across frequency, VSWR, gain, and environmental stress parameters.",                                     icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { title: "Cable Harnessing and RF Assembly", desc: "Precision cable assemblies, RF connector integration, microwave component assembly with controlled torque and tested insertion loss.",                                          icon: "M4 7h16M4 12h16M4 17h7" },
  { title: "Impedance Tuning and QC",          desc: "Network analyser-based impedance characterisation, VSWR verification, and rigorous end-of-line quality checkpoints.",                                                           icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Environmental Testing",            desc: "Temperature cycling, humidity exposure, vibration and shock testing aligned to relevant standards for field-deployed hardware.",                                                 icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
  { title: "Production Scale-Up",              desc: "Transition from validated prototype to repeatable volume manufacturing with process documentation and part traceability.",                                                       icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const milestones = [
  { year: "2004", label: "Founded in Bengaluru" },
  { year: "2008", label: "First defense sector contract" },
  { year: "2013", label: "Expanded to microwave devices" },
  { year: "2018", label: "ISO certification achieved" },
  { year: "2022", label: "IoT and GNSS product lines launched" },
  { year: "2025", label: "500+ products delivered milestone" },
];

export default function About() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">Our Story</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem", maxWidth: "700px" }}>
            About Anand Technologies
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "580px" }}>
            A specialised RF and antenna engineering manufacturer delivering low-gain, high-gain, and microwave solutions for industrial and mission-critical sectors since 2004.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section container">
        <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "center" }}>
          <div>
            <span className="label">Company Overview</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.5rem", lineHeight: 1.3 }}>Engineering Partner from Prototype to Production</h2>
            <p style={{ marginTop: "1.25rem", lineHeight: 1.8, color: "var(--muted)" }}>
              Anand Technologies is headquartered in Bengaluru, Karnataka. We combine deep RF engineering expertise with agile manufacturing to deliver custom antenna and microwave solutions that meet the strictest performance and reliability requirements.
            </p>
            <p style={{ marginTop: "1rem", lineHeight: 1.8, color: "var(--muted)" }}>
              Our capabilities span design simulation, prototyping, environmental validation, and repeatable production, making us a single-window partner for the full product lifecycle.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/custom-solutions" className="btn-outline">Our Process</Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {[
              { value: "20+",  label: "Years of RF Expertise" },
              { value: "500+", label: "Products Delivered" },
              { value: "15+",  label: "Industry Sectors" },
              { value: "ISO",  label: "Certified Manufacturer" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--brand)", lineHeight: 1 }}>{s.value}</p>
                <p style={{ marginTop: "0.6rem", fontSize: "0.8rem", color: "var(--muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "var(--section-y)" }}>
        <div className="container">
          <span className="label">Journey</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.5rem" }}>Key Milestones</h2>
          <div style={{ marginTop: "3rem", display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {milestones.map((m, i) => (
              <div key={m.year} className="card" style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, color: "white", flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--brand)", fontSize: "0.95rem" }}>{m.year}</p>
                  <p style={{ marginTop: "0.3rem", fontSize: "0.875rem", color: "var(--muted)" }}>{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="label">What We Do</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.5rem" }}>Manufacturing Capabilities</h2>
          <p style={{ marginTop: "1rem", color: "var(--muted)", maxWidth: "480px", marginInline: "auto", lineHeight: 1.75 }}>
            End-to-end RF engineering and manufacturing under one roof.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {capabilities.map((c) => (
            <div key={c.title} className="card">
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg style={{ width: "22px", height: "22px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
              </div>
              <h3 style={{ marginTop: "1.25rem", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{c.title}</h3>
              <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container section-bot">
        <div style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)", borderRadius: "20px", padding: "4rem 3rem", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Ready to work with us?</h2>
          <p style={{ marginTop: "1rem", opacity: 0.88, maxWidth: "480px", marginInline: "auto", lineHeight: 1.75 }}>
            Share your RF requirement and our engineers will respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "2rem", background: "white", color: "var(--brand)", fontWeight: 700, width: "170px", height: "170px", borderRadius: "50%", textDecoration: "none", fontSize: "1rem", lineHeight: 1.35, textAlign: "center", padding: "1rem" }}>
            Contact Our Team
          </Link>
        </div>
      </section>

    </main>
  );
}
