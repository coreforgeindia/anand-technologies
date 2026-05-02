import Link from "next/link";

const steps = [
  { num: "01", title: "Requirement Analysis",       desc: "Structured discovery covering frequency bands, gain targets, polarisation, form factor, connector type, operating environment, and volume forecast. Output: a formal engineering brief.", duration: "1-2 days",  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { num: "02", title: "RF Design",                  desc: "Our engineers develop the antenna geometry, matching network, feed structure, and PCB layout. Design rules are validated against the engineering brief before simulation.",                   duration: "3-7 days",  icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
  { num: "03", title: "Electromagnetic Simulation", desc: "Full-wave EM simulation to predict radiation patterns, impedance behaviour, and cross-band isolation. Results compared against targets and design iterated until compliant.",                  duration: "2-5 days",  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { num: "04", title: "Prototype Build",             desc: "In-house fabrication of functional prototypes using the validated design. Assembly follows controlled procedures for connector integration, cable routing, and mechanical fit.",             duration: "3-10 days", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { num: "05", title: "Lab Testing and Validation",  desc: "Network analyser measurements for VSWR, insertion loss, and impedance. Anechoic chamber testing for gain and radiation patterns. Environmental stress screening where required.",           duration: "2-5 days",  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
  { num: "06", title: "Production Scale-Up",         desc: "Transition from approved prototype to volume manufacturing. Process documentation, incoming material QC, in-process checks, and batch testing ensure consistent quality at scale.",       duration: "Per volume", icon: "M4 7h16M4 12h16M4 17h7" },
];

const faqs = [
  { q: "What is the minimum order quantity for custom designs?",     a: "For prototyping, we typically work with quantities of 1-10 units. Production runs depend on design complexity. Contact us for a volume-specific quote." },
  { q: "Can you work to a specific standard (MIL-SPEC, IEC, etc.)?", a: "Yes. We can design and test against MIL-STD, IEC, and customer-specified test plans. Please include this in your requirement brief." },
  { q: "What file formats do you accept for RF design reviews?",      a: "We work with Gerbers, DXF/DWG for mechanical, and accept simulation files from HFSS, CST, and similar tools." },
  { q: "How do I get a quote?",                                       a: "Fill out the enquiry form on the Contact page with your frequency range, gain target, form factor, connector type, and approximate volume. We respond within one business day." },
];

export default function CustomSolutions() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">Engineering Services</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem", maxWidth: "680px" }}>
            Custom RF Solutions
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "580px" }}>
            From initial specification to production-ready hardware, our engineers work with you at every stage of the RF product development lifecycle.
          </p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex", fontSize: "1rem" }}>
            Start a Project
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="section container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="label">How We Work</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.5rem" }}>Our Engineering Process</h2>
          <p style={{ marginTop: "1rem", color: "var(--muted)", maxWidth: "520px", marginInline: "auto", lineHeight: 1.75 }}>
            A structured, collaborative workflow that reduces design iterations and gets you to qualified hardware faster.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {steps.map((step) => (
            <div key={step.num} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "13px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg style={{ width: "22px", height: "22px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--line)", lineHeight: 1 }}>{step.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{step.title}</h3>
                <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)" }}>{step.desc}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.775rem", fontWeight: 600, color: "var(--brand)" }}>
                <svg style={{ width: "13px", height: "13px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "var(--section-y)" }}>
        <div className="container">
          <div style={{ maxWidth: "680px", marginInline: "auto" }}>
            <span className="label">FAQ</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: "0.5rem" }}>Common Questions</h2>
            <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {faqs.map((f) => (
                <div key={f.q} className="card">
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{f.q}</h3>
                  <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)", borderRadius: "20px", padding: "4rem 3rem", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Ready to spec out your project?</h2>
          <p style={{ marginTop: "1rem", opacity: 0.88, maxWidth: "480px", marginInline: "auto", lineHeight: 1.75 }}>
            Share your requirements and our RF engineers will review and respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", marginTop: "2rem", background: "white", color: "var(--brand)", fontWeight: 700, padding: "0.9rem 2.25rem", borderRadius: "10px", textDecoration: "none", fontSize: "0.95rem" }}>
            Submit Enquiry
          </Link>
        </div>
      </section>

    </main>
  );
}
