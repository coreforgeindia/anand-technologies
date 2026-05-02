import Link from "next/link";

const navigate = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About us" },
  { href: "/industries", label: "Industries" },
  { href: "/custom-solutions", label: "Custom Solutions" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact us" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white" />
                  <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="9" cy="9" r="9" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                </svg>
              </div>
              <span className="text-base font-bold text-[var(--text)]">
                Anand <span className="text-[var(--brand)]">Technologies</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Design and manufacturing partner for RF antennas, microwave components, and custom communication hardware for industrial and mission-critical sectors.
            </p>
            <div className="mt-5 flex gap-2">
              <span className="badge">ISO Certified</span>
              <span className="badge">Made in India</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Navigate</h4>
            <ul className="space-y-3">
              {navigate.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Visit Us</h4>
            <p className="text-sm leading-7 text-[var(--muted)]">
              No. 21, 6th Main Road,<br />
              Srigandada Kavalu,<br />
              Magadi Main Road,<br />
              Sunkadakatte,<br />
              Bengaluru, Karnataka 560091
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sales@anandtechnologies.co.in" className="flex items-center gap-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand)]">
                  <svg className="h-4 w-4 shrink-0 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sales@anandtechnologies.co.in
                </a>
              </li>
              <li>
                <a href="mailto:ceo@anandtechnologies.co.in" className="flex items-center gap-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand)]">
                  <svg className="h-4 w-4 shrink-0 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ceo@anandtechnologies.co.in
                </a>
              </li>
              <li>
                <a href="tel:+919000000000" className="flex items-center gap-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--brand)]">
                  <svg className="h-4 w-4 shrink-0 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 90000 00000
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Instagram", d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.4 2h9.2A5.4 5.4 0 0122 7.4v9.2A5.4 5.4 0 0116.6 22H7.4A5.4 5.4 0 012 16.6V7.4A5.4 5.4 0 017.4 2z" },
                { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-8 text-xs text-[var(--muted)] sm:flex-row">
          <p>&copy; 2026 Anand Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--brand)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--brand)]">Terms of Use</a>
            <a href="#" className="hover:text-[var(--brand)]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
