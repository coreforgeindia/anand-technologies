"use client";

import { useState } from "react";
import { useSite } from "@/src/hooks/useSite";

const contactInfo = [
  { label: "Visit Us", value: "No. 21, 6th Main Road, Srigandada Kavalu, Magadi Main Road, Sunkadakatte, Bengaluru 560091", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Sales Email", value: "sales@anandtechnologies.co.in", href: "mailto:sales@anandtechnologies.co.in", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "CEO Email", value: "ceo@anandtechnologies.co.in", href: "mailto:ceo@anandtechnologies.co.in", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Phone", value: "+91 90000 00000", href: "tel:+919000000000", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
];

export default function Contact() {
  const { enquiry, removeFromEnquiry } = useSite();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(key: string, val: string) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, products: enquiry }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-14 lg:py-18">
          <span className="section-label">Reach Us</span>
          <h1 className="mt-3 text-4xl font-bold lg:text-5xl">Contact and Enquiry</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Add products to your enquiry list then submit your requirements. Our sales team responds within one business day.
          </p>
        </div>
      </section>

      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left: contact info + enquiry list */}
          <aside className="flex flex-col gap-6 lg:col-span-1">
            <div className="card p-6">
              <h2 className="mb-5 font-bold text-[var(--text)]">Contact Details</h2>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-light)]">
                      <svg className="h-4 w-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="mt-0.5 text-sm text-[var(--text)] hover:text-[var(--brand)]">{c.value}</a>
                      ) : (
                        <p className="mt-0.5 text-sm text-[var(--text)]">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h2 className="mb-4 font-bold text-[var(--text)]">
                Your Enquiry List
                {enquiry.length > 0 && (
                  <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">{enquiry.length}</span>
                )}
              </h2>
              {enquiry.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">No products added yet. Browse products and click &quot;Add to Enquiry&quot;.</p>
              ) : (
                <ul className="space-y-2">
                  {enquiry.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-2 rounded-lg bg-[var(--soft)] px-3 py-2">
                      <span className="text-sm font-medium text-[var(--text)]">{item}</span>
                      <button onClick={() => removeFromEnquiry(item)} className="shrink-0 text-xs font-semibold text-red-500 hover:text-red-700">Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>

          {/* Right: form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card flex h-full flex-col items-center justify-center gap-5 p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text)]">Enquiry Submitted!</h2>
                  <p className="mt-2 text-[var(--muted)]">Thank you, {form.name || "there"}. Our sales team will contact you within one business day.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", message: "" }); }}
                  className="btn-outline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div className="card p-8">
                <h2 className="mb-6 text-xl font-bold text-[var(--text)]">Send an Enquiry</h2>
                <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Full Name *</label>
                    <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Email Address *</label>
                    <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Company / Organisation</label>
                    <input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Your company name" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Selected Products</label>
                    <input readOnly value={enquiry.join(" | ") || ""} placeholder="Add products from the Products page to pre-fill this" className="bg-[var(--soft)]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Requirement Details *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Describe your requirement: frequency bands, gain targets, quantity, delivery timeline, application environment, standards compliance, etc." />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base">
                      {loading ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : "Submit Enquiry"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
