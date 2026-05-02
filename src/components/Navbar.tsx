"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, setDark, lang, setLang, enquiry } = useSite();

  return (
    <header className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="container flex h-18 items-center justify-between gap-8">
        <Link href="/" className="text-3xl font-bold text-[var(--brand)]">Anand Technologies</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <div className="group relative">
            <Link href="/products" className="hover:text-[var(--brand)]">Products</Link>
            <div className="invisible absolute left-0 top-8 z-50 w-72 rounded-xl border border-[var(--line)] bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:bg-[var(--panel)]">
              {categories.map((c) => <Link key={c.id} href={`/products?category=${c.slug}`} className="block rounded px-3 py-2 hover:bg-[var(--soft)]">{c.name}</Link>)}
            </div>
          </div>
          <Link href="/about">About</Link><Link href="/industries">Industries</Link><Link href="/custom-solutions">Custom Solutions</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><Link href="/admin">Admin Login</Link>
          <button onClick={() => setDark(!dark)} className="rounded border border-[var(--line)] px-2 py-1">{dark ? "Light" : "Dark"}</button>
          <select value={lang} onChange={(e) => setLang(e.target.value as "en" | "kn" | "zh")} className="rounded border border-[var(--line)] bg-transparent px-2 py-1"><option value="en">EN</option><option value="kn">KN</option><option value="zh">ZH</option></select>
          <Link href="/contact" className="rounded bg-[var(--brand)] px-3 py-1 text-white">Enquiry {enquiry.length}</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded border border-[var(--line)] px-3 py-1 md:hidden">Menu</button>
      </div>
      {open && <div className="container space-y-2 pb-4 text-sm md:hidden"><Link href="/products" className="block">Products</Link><Link href="/about" className="block">About</Link><Link href="/industries" className="block">Industries</Link><Link href="/contact" className="block">Contact</Link></div>}
    </header>
  );
}
