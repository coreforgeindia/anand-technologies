import Link from "next/link";

const industryData = [
  { name: "Telecom",                    tagline: "Reliable RF for every network tier",          desc: "Cellular backhaul, rooftop base-station deployments, and resilient last-mile RF links. Our antennas meet the demanding uptime and performance thresholds of network operators.",                                                               products: ["GSM Antennas", "LTE Antennas", "CDMA Antennas", "High-Gain Yagi"], icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { name: "Defense and Security",       tagline: "Rugged RF for mission-critical operations",   desc: "Robust communication modules for surveillance systems, tactical mobility platforms, and fixed infrastructure. Designed to function under extreme environmental and operational stress.",                                                           products: ["VHF Antennas", "DVB Antennas", "Duplexers", "Power Amplifiers"],   icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { name: "Automotive",                 tagline: "Seamless connectivity on the move",           desc: "Telematics, GNSS integration, and connected fleet signal continuity. Compact, vibration-resistant antenna solutions for vehicles operating across diverse RF environments.",                                                                       products: ["GPS Antennas", "GLONASS Antennas", "Combo Antennas", "PCB Antennas"], icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
  { name: "IoT and Industrial Wireless", tagline: "Compact antennas for smart deployments",     desc: "Low-power, miniaturised antenna architectures for sensor nodes, gateways, and remote asset monitoring. Wide frequency coverage with minimal form factor for embedded integration.",                                                               products: ["WIFI Antennas", "RFID Antennas", "PCB Antennas", "Combo Antennas"], icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { name: "Aerospace",                  tagline: "Precision RF for airborne systems",           desc: "Compact antenna architecture for UAV payload electronics, satellite ground systems, and remote sensing platforms. Designed to survive altitude, temperature, and electromagnetic extremes.",                                                       products: ["GPS Antennas", "IRNSS Antennas", "Horn Antennas", "Patch Panel"],   icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
  { name: "Railways and Public Infra",  tagline: "Continuous coverage in tough environments",   desc: "High-availability antenna solutions for metro, rail communication, and public safety networks. Engineered for outdoor exposure and near-zero maintenance over extended deployment periods.",                                                      products: ["VHF Antennas", "GSM Antennas", "High-Gain Antennas", "Attenuators"], icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" },
];

export default function Industries() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">Markets We Serve</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem", maxWidth: "680px" }}>
            Industry Sectors
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "580px" }}>
            From urban telecom to aerospace, Anand Technologies delivers RF and antenna solutions purpose-built for each industry&apos;s unique performance, durability, and integration requirements.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="section container">
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {industryData.map((ind) => (
            <div key={ind.name} className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg style={{ width: "24px", height: "24px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ind.icon} />
                </svg>
              </div>
              <div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>{ind.name}</h2>
                <p style={{ marginTop: "0.25rem", fontSize: "0.825rem", fontWeight: 600, color: "var(--brand)" }}>{ind.tagline}</p>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--muted)" }}>{ind.desc}</p>
              <div>
                <p style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.6rem" }}>Relevant Products</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {ind.products.map((p) => (
                    <span key={p} style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: "99px", border: "1px solid var(--line)", background: "var(--soft)", color: "var(--muted)", fontWeight: 500 }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container section-bot">
        <div style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)", borderRadius: "20px", padding: "4rem 3rem", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Don&apos;t see your sector?</h2>
          <p style={{ marginTop: "1rem", opacity: 0.88, maxWidth: "480px", marginInline: "auto", lineHeight: 1.75 }}>
            We regularly develop custom solutions for new verticals. Share your application and we&apos;ll tell you what&apos;s possible.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "white", color: "var(--brand)", fontWeight: 700, padding: "0.9rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "0.95rem" }}>Discuss Your Need</Link>
            <Link href="/products" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "white", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.95rem" }}>Browse Products</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
