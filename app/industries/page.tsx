import Link from "next/link";

const industryData = [
  {
    name: "Telecom",
    tagline: "Reliable RF for every network tier",
    desc: "Cellular backhaul, rooftop base-station deployments, and resilient last-mile RF links. Our antennas meet the demanding uptime and performance thresholds of network operators.",
    products: ["GSM Antennas", "LTE Antennas", "CDMA Antennas", "High-Gain Yagi"],
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
  },
  {
    name: "Defense and Security",
    tagline: "Rugged RF for mission-critical operations",
    desc: "Robust communication modules for surveillance systems, tactical mobility platforms, and fixed infrastructure. Designed to function under extreme environmental and operational stress.",
    products: ["VHF Antennas", "DVB Antennas", "Duplexers", "Power Amplifiers"],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Automotive",
    tagline: "Seamless connectivity on the move",
    desc: "Telematics, GNSS integration, and connected fleet signal continuity. Compact, vibration-resistant antenna solutions for vehicles operating across diverse RF environments.",
    products: ["GPS Antennas", "GLONASS Antennas", "Combo Antennas", "PCB Antennas"],
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    name: "IoT and Industrial Wireless",
    tagline: "Compact antennas for smart deployments",
    desc: "Low-power, miniaturised antenna architectures for sensor nodes, gateways, and remote asset monitoring. Wide frequency coverage with minimal form factor for embedded integration.",
    products: ["WIFI Antennas", "RFID Antennas", "PCB Antennas", "Combo Antennas"],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    name: "Aerospace",
    tagline: "Precision RF for airborne systems",
    desc: "Compact antenna architecture for UAV payload electronics, satellite ground systems, and remote sensing platforms. Designed to survive altitude, temperature, and electromagnetic extremes.",
    products: ["GPS Antennas", "IRNSS Antennas", "Horn Antennas", "Patch Panel Antennas"],
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  },
  {
    name: "Railways and Public Infrastructure",
    tagline: "Continuous coverage in challenging environments",
    desc: "High-availability antenna solutions for metro, rail communication, and public safety networks. Engineered for outdoor exposure and near-zero maintenance over extended deployment periods.",
    products: ["VHF Antennas", "GSM Antennas", "High-Gain Antennas", "Attenuators"],
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  },
];

export default function Industries() {
  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-16 lg:py-20">
          <span className="section-label">Markets We Serve</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">Industry Sectors</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            From urban telecom to aerospace, Anand Technologies delivers RF and antenna solutions purpose-built for each industry&apos;s unique performance, durability, and integration requirements.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryData.map((ind) => (
            <div key={ind.name} className="card flex flex-col gap-4 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                <svg className="h-6 w-6 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ind.icon} />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--text)]">{ind.name}</h2>
                <p className="mt-0.5 text-sm font-medium text-[var(--brand)]">{ind.tagline}</p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{ind.desc}</p>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Relevant Products</p>
                <div className="flex flex-wrap gap-1.5">
                  {ind.products.map((p) => (
                    <span key={p} className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Don&apos;t see your sector?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-90">We regularly develop custom solutions for new verticals. Share your application and we&apos;ll tell you what&apos;s possible.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--brand)] hover:bg-[var(--brand-light)]">Discuss Your Need</Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">Browse Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
