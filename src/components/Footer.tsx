"use client";

import Link from "next/link";

const navigate = [
  { href: "/",                 label: "Home" },
  { href: "/products",         label: "Products" },
  { href: "/about",            label: "About Us" },
  { href: "/industries",       label: "Industries" },
  { href: "/custom-solutions", label: "Custom Solutions" },
  { href: "/resources",        label: "Resources" },
  { href: "/contact",          label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 no-underline">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white"/>
                  <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="9" r="9" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
                </svg>
              </div>
              <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
                Anand <span style={{ color: "var(--brand)" }}>Technologies</span>
              </span>
            </Link>
            <p className="mt-3 text-xs leading-6" style={{ color: "var(--muted)" }}>
              Design and manufacturing partner for RF antennas, microwave components, and custom communication hardware.
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="badge">ISO Certified</span>
              <span className="badge">Made in India</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>Navigate</h4>
            <ul className="space-y-2.5 list-none">
              {navigate.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs no-underline transition-colors hover:text-[var(--brand)]" style={{ color: "var(--muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>Visit Us</h4>
            <p className="text-xs leading-6" style={{ color: "var(--muted)" }}>
              No. 21, 6th Main Road,<br/>
              Srigandada Kavalu,<br/>
              Magadi Main Road, Sunkadakatte,<br/>
              Bengaluru, Karnataka 560091
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>Connect</h4>
            <ul className="space-y-2.5 list-none">
              {[
                { href: "mailto:sales@anandtechnologies.co.in", label: "sales@anandtechnologies.co.in", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { href: "mailto:ceo@anandtechnologies.co.in",   label: "ceo@anandtechnologies.co.in",   icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { href: "tel:+919000000000",                    label: "+91 90000 00000",                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-2 text-xs no-underline transition-colors hover:text-[var(--brand)]" style={{ color: "var(--muted)" }}>
                    <svg className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--brand)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                    </svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              {[
                { label: "LinkedIn",  d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.4 2h9.2A5.4 5.4 0 0122 7.4v9.2A5.4 5.4 0 0116.6 22H7.4A5.4 5.4 0 012 16.6V7.4A5.4 5.4 0 017.4 2z" },
                { label: "YouTube",   d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--line)] no-underline transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
                  style={{ color: "var(--muted)" }}>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "var(--muted)" }}>&copy; 2026 Anand Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs no-underline transition-colors hover:text-[var(--brand)]" style={{ color: "var(--muted)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
