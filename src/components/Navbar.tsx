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
  const { dark, setDark, lang, setLang, enquiry, t } = useSite();
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
    { href: "/about",            label: t.about },
    { href: "/industries",       label: t.industries },
    { href: "/custom-solutions", label: t.customSolutions },
    { href: "/resources",        label: t.resources },
    { href: "/contact",          label: t.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--panel)] border-b border-[var(--line)] transition-shadow duration-200${scrolled ? " shadow-md" : ""}`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="container h-full flex items-center justify-between gap-4">

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
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg border-none cursor-pointer text-sm font-medium transition-colors"
              style={{ background: dropdownOpen ? "var(--soft)" : "transparent", color: "var(--muted)" }}
            >
              {t.products}
              <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-80 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 shadow-xl z-50">
                <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>Product Lines</p>
                {categories.map((c) => (
                  <Link key={c.id} href={`/products?category=${c.slug}`} onClick={() => setDropdownOpen(false)}
                    className="flex flex-col px-3 py-2.5 rounded-lg no-underline transition-colors hover:bg-[var(--soft)]">
                    <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>{c.name}</span>
                    <span className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{c.summary}</span>
                  </Link>
                ))}
                <div className="mt-2 pt-2 border-t border-[var(--line)]">
                  <Link href="/products" onClick={() => setDropdownOpen(false)}
                    className="flex items-center px-3 py-2 rounded-lg text-xs font-semibold no-underline hover:bg-[var(--brand-light)]" style={{ color: "var(--brand)" }}>
                    View all products &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="px-3 py-2 rounded-lg no-underline text-sm transition-colors hover:bg-[var(--soft)]"
              style={{ fontWeight: pathname === l.href ? 600 : 500, color: pathname === l.href ? "var(--text)" : "var(--muted)" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop Right Controls (hidden on mobile) ── */}
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={() => setDark(!dark)} title={dark ? "Light mode" : "Dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-transparent cursor-pointer transition-colors hover:bg-[var(--soft)]"
            style={{ color: "var(--muted)" }}>
            {dark ? (
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <select value={lang} onChange={(e) => setLang(e.target.value as "en" | "kn" | "zh")}
            className="h-8 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-2 text-xs font-semibold cursor-pointer"
            style={{ color: "var(--text)", minWidth: "56px" }}>
            <option value="en">EN</option>
            <option value="kn">KN</option>
            <option value="zh">ZH</option>
          </select>

          <Link href="/contact"
            className="flex h-8 items-center gap-1.5 rounded-lg px-4 text-xs font-semibold text-white no-underline transition-colors hover:opacity-90"
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
          <div className="mt-3 flex gap-2.5">
            <button onClick={() => setDark(!dark)}
              className="flex-1 h-9 rounded-lg border border-[var(--line)] bg-transparent text-sm font-medium cursor-pointer" style={{ color: "var(--text)" }}>
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
            <select value={lang} onChange={(e) => setLang(e.target.value as "en" | "kn" | "zh")}
              className="h-9 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-2 text-sm font-semibold cursor-pointer" style={{ color: "var(--text)" }}>
              <option value="en">EN — English</option>
              <option value="kn">KN — Kannada</option>
              <option value="zh">ZH — Chinese</option>
            </select>
          </div>
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="mt-2.5 flex h-10 w-full items-center justify-center rounded-lg text-sm font-semibold text-white no-underline" style={{ background: "var(--brand)" }}>
            {t.enquiry} {enquiry.length > 0 ? `(${enquiry.length})` : ""}
          </Link>
        </div>
      )}
    </header>
  );
}
