import Link from "next/link";

const steps = [
  { num: "01", title: "Requirement Analysis", desc: "Structured discovery covering frequency bands, gain targets, polarisation, form factor, connector type, operating environment, and volume forecast. Output: a formal engineering brief.", duration: "1-2 days", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { num: "02", title: "RF Design", desc: "Our engineers develop the antenna geometry, matching network, feed structure, and PCB layout. Design rules are validated against the engineering brief before simulation.", duration: "3-7 days", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
  { num: "03", title: "Electromagnetic Simulation", desc: "Full-wave EM simulation to predict radiation patterns, impedance behaviour, and cross-band isolation. Results compared against targets and design iterated until compliant.", duration: "2-5 days", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { num: "04", title: "Prototype Build", desc: "In-house fabrication of functional prototypes using the validated design. Assembly follows controlled procedures for connector integration, cable routing, and mechanical fit.", duration: "3-10 days", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { num: "05", title: "Lab Testing and Validation", desc: "Network analyser measurements for VSWR, insertion loss, and impedance. Anechoic chamber testing for gain and radiation patterns. Environmental stress screening where required.", duration: "2-5 days", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
  { num: "06", title: "Production Scale-Up", desc: "Transition from approved prototype to volume manufacturing. Process documentation, incoming material QC, in-process checks, and batch testing ensure consistent quality at scale.", duration: "Per volume", icon: "M4 7h16M4 12h16M4 17h7" },
];

const faqs = [
  { q: "What is the minimum order quantity for custom designs?", a: "For prototyping, we typically work with quantities of 1-10 units. Production runs depend on design complexity. Contact us for a volume-specific quote." },
  { q: "Can you work to a specific standard (MIL-SPEC, IEC, etc.)?", a: "Yes. We can design and test against MIL-STD, IEC, and customer-specified test plans. Please include this in your requirement brief." },
  { q: "What file formats do you accept for RF design reviews?", a: "We work with Gerbers, DXF/DWG for mechanical, and accept simulation files from HFSS, CST, and similar tools." },
  { q: "How do I get a quote?", a: "Fill out the enquiry form on the Contact page with your frequency range, gain target, form factor, connector type, and approximate volume. We respond within one business day." },
];

export default function CustomSolutions() {
  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-16 lg:py-20">
          <span className="section-label">Engineering Services</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">Custom RF Solutions</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            From initial specification to production-ready hardware, our engineers work with you at every stage of the RF product development lifecycle.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">Start a Project</Link>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center">
          <span className="section-label">How We Work</span>
          <h2 className="mt-3 text-3xl font-bold">Our Engineering Process</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted)]">A structured, collaborative workflow that reduces design iterations and gets you to qualified hardware faster.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="card flex flex-col gap-4 p-7">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                  <svg className="h-6 w-6 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-[var(--line)]">{step.num}</span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)] py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <span className="section-label">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold">Common Questions</h2>
            <div className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="font-bold text-[var(--text)]">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to spec out your project?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-90">Share your requirements and our RF engineers will review and respond within one business day.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--brand)] hover:bg-[var(--brand-light)]">Submit Enquiry</Link>
        </div>
      </section>
    </main>
  );
}
