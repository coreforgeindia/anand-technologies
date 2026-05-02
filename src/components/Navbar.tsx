"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { categories } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, setDark, lang, setLang, enquiry, t } = useSite();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: t.about },
    { href: "/industries", label: t.industries },
    { href: "/custom-solutions", label: t.customSolutions },
    { href: "/resources", label: t.resources },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--panel)] transition-shadow duration-200${scrolled ? " shadow-md" : ""}`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="container flex h-full items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand)]">
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 text-sm font-medium lg:flex">

          {/* Products dropdown — click based */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[var(--muted)] transition-colors hover:bg-[var(--soft)] hover:text-[var(--text)]${dropdownOpen ? " bg-[var(--soft)]" : ""}`}
            >
              {t.products}
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-150${dropdownOpen ? " rotate-180" : ""}`}
                fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-80 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 shadow-xl">
                <p className="mb-2 px-3 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Product Lines</p>
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/products?category=${c.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--soft)]"
                  >
                    <span className="font-semibold text-[var(--text)]">{c.name}</span>
                    <span className="mt-0.5 text-xs text-[var(--muted)]">{c.summary}</span>
                  </Link>
                ))}
                <div className="mt-2 border-t border-[var(--line)] pt-2">
                  <Link
                    href="/products"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-[var(--brand)] hover:bg-[var(--brand-light)]"
                  >
                    View all products
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 transition-colors hover:bg-[var(--soft)] hover:text-[var(--text)]${pathname === l.href ? " font-semibold text-[var(--text)]" : " text-[var(--muted)]"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => setDark(!dark)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--muted)] transition-colors hover:bg-[var(--soft)]"
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "kn" | "zh")}
            className="h-8 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-2 text-xs font-semibold text-[var(--text)]"
            style={{ minWidth: "58px" }}
          >
            <option value="en">EN</option>
            <option value="kn">KN</option>
            <option value="zh">ZH</option>
          </select>

          <Link
            href="/contact"
            className="flex h-8 items-center gap-1.5 rounded-lg bg-[var(--brand)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-dark)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {t.enquiry}
            {enquiry.length > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900">
                {enquiry.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--line)] lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 rounded bg-[var(--text)] transition-all${mobileOpen ? " translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded bg-[var(--text)] transition-all${mobileOpen ? " opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded bg-[var(--text)] transition-all${mobileOpen ? " -translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-[var(--line)] bg-[var(--panel)] px-4 pb-6 pt-4 shadow-xl lg:hidden">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">{t.products}</p>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/products?category=${c.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--soft)]"
            >
              {c.name}
            </Link>
          ))}
          <div className="my-3 border-t border-[var(--line)]" />
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--soft)]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--line)] text-sm font-medium"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "kn" | "zh")}
              className="h-9 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-2 text-sm font-semibold"
            >
              <option value="en">EN - English</option>
              <option value="kn">KN - Kannada</option>
              <option value="zh">ZH - Chinese</option>
            </select>
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-[var(--brand)] text-sm font-semibold text-white"
          >
            {t.enquiry} {enquiry.length > 0 ? `(${enquiry.length})` : ""}
          </Link>
        </div>
      )}
    </header>
  );
}
