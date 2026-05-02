import Link from "next/link";

const capabilities = [
  { title: "Antenna Design and Simulation", desc: "Full-wave electromagnetic simulation using industry tools. Radiation pattern optimisation and multi-band integration for telecom and IoT deployments.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Prototyping and Validation", desc: "Rapid prototyping with in-house machining and assembly. Lab validation across frequency, VSWR, gain, and environmental stress parameters.", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { title: "Cable Harnessing and RF Assembly", desc: "Precision cable assemblies, RF connector integration, microwave component assembly with controlled torque and tested insertion loss.", icon: "M4 7h16M4 12h16M4 17h7" },
  { title: "Impedance Tuning and QC", desc: "Network analyser-based impedance characterisation, VSWR verification, and rigorous end-of-line quality checkpoints.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Environmental Testing", desc: "Temperature cycling, humidity exposure, vibration and shock testing aligned to relevant standards for field-deployed hardware.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
  { title: "Production Scale-Up", desc: "Transition from validated prototype to repeatable volume manufacturing with process documentation and part traceability.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
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
      <section className="hero-gradient">
        <div className="container py-16 lg:py-20">
          <span className="section-label">Our Story</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">About Anand Technologies</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            A specialised RF and antenna engineering manufacturer delivering low-gain, high-gain, and microwave solutions for industrial and mission-critical sectors since 2004.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="section-label">Company Overview</span>
            <h2 className="mt-3 text-3xl font-bold">Engineering Partner from Prototype to Production</h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Anand Technologies is headquartered in Bengaluru, Karnataka. We combine deep RF engineering expertise with agile manufacturing to deliver custom antenna and microwave solutions that meet the strictest performance and reliability requirements.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Our capabilities span design simulation, prototyping, environmental validation, and repeatable production, making us a single-window partner for the full product lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/custom-solutions" className="btn-outline">Our Process</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Years of RF Expertise" },
              { value: "500+", label: "Products Delivered" },
              { value: "15+", label: "Industry Sectors" },
              { value: "ISO", label: "Certified Manufacturer" },
            ].map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <p className="text-3xl font-bold text-[var(--brand)]">{s.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-16">
        <div className="container">
          <span className="section-label">Journey</span>
          <h2 className="mt-3 text-3xl font-bold">Key Milestones</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m, i) => (
              <div key={m.year} className="card flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">{i + 1}</div>
                <div>
                  <p className="font-bold text-[var(--brand)]">{m.year}</p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center">
          <span className="section-label">What We Do</span>
          <h2 className="mt-3 text-3xl font-bold">Manufacturing Capabilities</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted)]">End-to-end RF engineering and manufacturing under one roof.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                <svg className="h-5 w-5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
              </div>
              <h3 className="mt-4 font-bold text-[var(--text)]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to work with us?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-90">Share your RF requirement and our engineers will respond within one business day.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--brand)] hover:bg-[var(--brand-light)]">
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
