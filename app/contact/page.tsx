"use client";

import { useState } from "react";
import { useSite } from "@/src/hooks/useSite";

const contactDetails = [
  { labelKey: "address", value: "No. 21, 6th Main Road, Srigandada Kavalu, Magadi Main Road, Sunkadakatte, Bengaluru 560091", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { labelKey: "sales",   value: "sales@anandtechnologies.co.in", href: "mailto:sales@anandtechnologies.co.in", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { labelKey: "ceo",     value: "ceo@anandtechnologies.co.in",   href: "mailto:ceo@anandtechnologies.co.in",   icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { labelKey: "phone",   value: "+91 90000 00000",               href: "tel:+919000000000",                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
];

const labelMap: Record<string, string> = {
  address: "Address", sales: "Sales Email", ceo: "CEO Email", phone: "Phone",
};

export default function Contact() {
  const { enquiry, removeFromEnquiry, t } = useSite();
  const [form, setForm]           = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, products: enquiry }) });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main>

      {/* Hero */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">Reach Us</span>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem" }}>{t.contactTitle}</h1>
          <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.75, color: "var(--muted)", maxWidth: "560px" }}>{t.contactDesc}</p>
        </div>
      </section>

      <div className="container" style={{ paddingBlock: "var(--section-y)" }}>
        <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "start" }}>

          {/* ── Left column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Contact details card */}
            <div className="card">
              <h2 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.5rem", color: "var(--text)" }}>Contact Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {contactDetails.map((c) => (
                  <div key={c.labelKey} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "var(--brand-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.1rem" }}>
                      <svg style={{ width: "14px", height: "14px", color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon}/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.2rem" }}>{labelMap[c.labelKey]}</p>
                      {c.href ? (
                        <a href={c.href} style={{ fontSize: "0.825rem", color: "var(--text)", textDecoration: "none" }}>{c.value}</a>
                      ) : (
                        <p style={{ fontSize: "0.825rem", color: "var(--text)", lineHeight: 1.6 }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry list card */}
            <div className="card">
              <h2 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.25rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {t.enquiryList}
                {enquiry.length > 0 && (
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", background: "var(--brand)", color: "white", fontSize: "0.62rem", fontWeight: 800 }}>
                    {enquiry.length}
                  </span>
                )}
              </h2>
              {enquiry.length === 0 ? (
                <p style={{ fontSize: "0.825rem", color: "var(--muted)", lineHeight: 1.65 }}>{t.noProductsYet}</p>
              ) : (
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                  {enquiry.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", background: "var(--soft)", borderRadius: "9px", padding: "0.55rem 0.875rem" }}>
                      <span style={{ fontSize: "0.825rem", fontWeight: 500, color: "var(--text)" }}>{item}</span>
                      <button onClick={() => removeFromEnquiry(item)} style={{ fontSize: "0.72rem", fontWeight: 600, color: "#ef4444", background: "transparent", border: "none", cursor: "pointer", flexShrink: 0 }}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Google Maps */}
            <div className="card" style={{ padding: "0", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7608072562516!2d77.50462137409617!3d12.987144887329636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c466cdc8ccb%3A0x4bd769de44604b80!2sAnand%20Technologies!5e0!3m2!1sen!2sin!4v1777758129827!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anand Technologies Location"
              />
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div>
            {submitted ? (
              <div className="card" style={{ textAlign: "center", padding: "4rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg style={{ width: "32px", height: "32px", color: "#16a34a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)" }}>{t.submittedTitle}</h2>
                  <p style={{ marginTop: "0.5rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    Thank you, {form.name || "there"}. {t.submittedDesc}
                  </p>
                </div>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", message: "" }); }} className="btn-outline">
                  {t.submitAnother}
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "1.75rem", color: "var(--text)" }}>{t.sendEnquiry}</h2>
                <form onSubmit={onSubmit} style={{ display: "grid", gap: "1.1rem", gridTemplateColumns: "1fr 1fr" }}>
                  {[
                    { key: "name",    label: t.fullName,         type: "text",  placeholder: "Your full name",      req: true,  span: false },
                    { key: "email",   label: t.emailAddr,        type: "email", placeholder: "you@company.com",     req: true,  span: false },
                    { key: "phone",   label: t.phone,            type: "tel",   placeholder: "+91 98765 43210",     req: false, span: false },
                    { key: "company", label: t.company,          type: "text",  placeholder: "Your company name",   req: false, span: false },
                  ].map((f) => (
                    <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: "0.4rem", gridColumn: f.span ? "1 / -1" : undefined }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {f.label}{f.req ? " *" : ""}
                      </label>
                      <input required={f.req} type={f.type} value={(form as Record<string,string>)[f.key]}
                        onChange={(e) => set(f.key, e.target.value)} placeholder={f.placeholder}/>
                    </div>
                  ))}

                  <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{t.selectedProducts}</label>
                    <input readOnly value={enquiry.join(" | ")} placeholder="Add products from the Products page" style={{ background: "var(--soft)" }}/>
                  </div>
                  <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{t.requirementDetails} *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => set("message", e.target.value)}
                      placeholder="Frequency bands, gain targets, quantity, delivery timeline, application environment..."/>
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem" }}>
                      {loading ? (
                        <>
                          <svg style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24">
                            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          {t.sending}
                        </>
                      ) : t.submitEnquiry}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
