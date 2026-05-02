"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { categories } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const { enquiry, t } = useSite();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname    = usePathname();

  useEffect(() => { setDropdownOpen(false); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/about",            label: "About" },
    { href: "/products",         label: t.products },
    { href: "/industries",       label: t.industries },
    { href: "/custom-solutions", label: t.customSolutions },
    { href: "/resources",        label: t.resources },
    { href: "/contact",          label: t.contact },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--panel)] border-b border-[var(--line)] transition-shadow duration-200${scrolled ? " shadow-md" : ""}`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="container h-full grid grid-cols-[auto_1fr_auto] items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 no-underline">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="white"/>
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="9" cy="9" r="9" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
            </svg>
          </div>
          <span className="text-base font-bold" style={{ color: "var(--text)" }}>
            Anand <span style={{ color: "var(--brand)" }}>Technologies</span>
          </span>
        </Link>

        {/* ── Desktop Nav (hidden on mobile) ── */}
        <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 text-sm font-medium">
          {navLinks.map((l) => (
            l.href === "/products" ? (
              <div key={l.href} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 px-3 py-2.5 rounded-lg border-none cursor-pointer text-sm font-semibold transition-colors"
                  style={{ background: dropdownOpen ? "var(--soft)" : "transparent", color: "var(--muted)" }}
                >
                  {l.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4"/>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-3 w-[860px] -translate-x-1/2 rounded-none border border-[#d9e0e8] bg-white p-[1cm] shadow-[0_16px_30px_rgba(11,27,48,0.12)]">
                    <div className="grid grid-cols-[340px_1fr]">
                      <div className="border-r border-[#e5ebf2] bg-[#f8fafc] p-8">
                        <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em]" style={{ color: "#2f3f55" }}>Brand</p>
                        <p className="mt-6 text-[1.9rem] leading-none font-bold" style={{ color: "#0f1f33" }}>BRAND Products</p>
                        <p className="mt-4 text-[0.78rem] leading-6" style={{ color: "#5a6c82" }}>Explore RF antennas and microwave systems engineered for reliability and mission-critical performance.</p>
                        <Link href="/products" onClick={() => setDropdownOpen(false)}
                          className="mt-5 inline-flex items-center rounded-md px-4 py-2.5 text-[0.72rem] font-semibold no-underline text-white transition-opacity hover:opacity-90"
                          style={{ background: "var(--brand)" }}>
                          Explore more products
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pl-8 pr-2 py-2">
                        {categories.map((c) => (
                          <Link key={c.id} href={`/products?category=${c.slug}`} onClick={() => setDropdownOpen(false)}
                            className="flex flex-col rounded-md border border-transparent px-3 py-2.5 no-underline transition-colors hover:border-[#dce5ef] hover:bg-[#f8fbff]">
                            <span className="text-[0.95rem] font-semibold leading-5" style={{ color: "#182a3d" }}>{c.name}</span>
                            <span className="mt-1 text-[0.72rem] leading-5" style={{ color: "#667a91" }}>{c.summary}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[#e5ebf2] pt-4">
                      <Link href="/products" onClick={() => setDropdownOpen(false)}
                        className="flex items-center rounded-md px-2 py-1.5 text-[0.95rem] font-semibold no-underline hover:bg-[var(--brand-light)]" style={{ color: "var(--brand)" }}>
                        View all products &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={l.href} href={l.href}
                className="px-3 py-2.5 rounded-lg no-underline text-sm font-semibold transition-colors hover:bg-[var(--soft)]"
                style={{ color: pathname === l.href ? "var(--text)" : "var(--muted)" }}>
                {l.label}
              </Link>
            )
          ))}
        </nav>

        {/* ── Desktop Right Controls (hidden on mobile) ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact"
            className="flex h-9 min-w-[110px] items-center justify-center gap-1.5 rounded-xl px-4 text-[1.05rem] font-semibold text-white no-underline transition-colors hover:opacity-90"
            style={{ background: "var(--brand)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {t.enquiry}
            {enquiry.length > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: "#f59e0b", color: "#1a2636" }}>
                {enquiry.length}
              </span>
            )}
          </Link>
        </div>

        {/* ── Mobile: hamburger only ── */}
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu"
          className="flex lg:hidden flex-col items-center justify-center gap-1.5 h-9 w-9 rounded-lg border border-[var(--line)] bg-transparent cursor-pointer">
          <span className={`block h-0.5 w-5 rounded transition-all duration-200`}
            style={{ background: "var(--text)", transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }}/>
          <span className={`block h-0.5 w-5 rounded transition-all duration-200`}
            style={{ background: "var(--text)", opacity: mobileOpen ? 0 : 1 }}/>
          <span className={`block h-0.5 w-5 rounded transition-all duration-200`}
            style={{ background: "var(--text)", transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}/>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-[var(--line)] bg-[var(--panel)] px-4 pt-3 pb-5 shadow-xl lg:hidden">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>{t.products}</p>
          {categories.map((c) => (
            <Link key={c.id} href={`/products?category=${c.slug}`} onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium no-underline hover:bg-[var(--soft)]" style={{ color: "var(--text)" }}>
              {c.name}
            </Link>
          ))}
          <hr className="my-2.5 border-[var(--line)]"/>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium no-underline hover:bg-[var(--soft)]" style={{ color: "var(--text)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="mt-2.5 flex h-10 w-full items-center justify-center rounded-lg text-sm font-semibold text-white no-underline" style={{ background: "var(--brand)" }}>
            {t.enquiry} {enquiry.length > 0 ? `(${enquiry.length})` : ""}
          </Link>
        </div>
      )}
    </header>
  );
}
