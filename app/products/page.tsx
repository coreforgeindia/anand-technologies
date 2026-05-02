"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, subcategories, products } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

function ProductsContent() {
  const searchParams = useSearchParams();
  const urlCat = searchParams.get("category");

  const [cat, setCat] = useState(() => {
    if (urlCat) {
      const found = categories.find((c) => c.slug === urlCat);
      if (found) return found.id;
    }
    return categories[0].id;
  });
  const [sub, setSub] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { addToEnquiry, enquiry } = useSite();

  useEffect(() => {
    if (urlCat) {
      const found = categories.find((c) => c.slug === urlCat);
      if (found) { setCat(found.id); setSub(null); }
    }
  }, [urlCat]);

  const subcats = useMemo(() => subcategories.filter((s) => s.categoryId === cat), [cat]);

  const list = useMemo(() => {
    let items = products.filter((p) => p.categoryId === cat && (!sub || p.subcategoryId === sub));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      );
    }
    return items;
  }, [cat, sub, search]);

  const selectedCategory = categories.find((c) => c.id === cat);

  return (
    <main className="container py-12">
      <div className="mb-8">
        <span className="section-label">Catalogue</span>
        <h1 className="mt-2 text-4xl font-bold">Products</h1>
        <p className="mt-2 text-[var(--muted)]">Browse our full range of RF antennas and microwave components.</p>
      </div>

      {/* Category tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => { setCat(c.id); setSub(null); }}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
              cat === c.id
                ? "bg-[var(--brand)] text-white"
                : "border border-[var(--line)] bg-[var(--panel)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mb-8 rounded-xl border border-[var(--brand-light)] bg-[var(--brand-light)] px-6 py-4">
          <p className="text-sm font-semibold text-[var(--brand-dark)]">{selectedCategory.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{selectedCategory.summary}</p>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-4">

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-[80px] card p-4">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
              {selectedCategory?.name}
            </h2>
            <div className="relative mb-4">
              <svg className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="py-2 pl-9 pr-3 text-sm"
              />
            </div>
            <button
              onClick={() => setSub(null)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                sub === null ? "bg-[var(--brand)] font-semibold text-white" : "text-[var(--muted)] hover:bg-[var(--soft)]"
              }`}
            >
              All Products
            </button>
            <div className="mt-1 space-y-0.5">
              {subcats.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSub(s.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    sub === s.id ? "bg-[var(--brand-dark)] font-semibold text-white" : "text-[var(--muted)] hover:bg-[var(--soft)]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="lg:col-span-3">
          {list.length === 0 ? (
            <div className="flex h-48 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--panel)]">
              <p className="text-[var(--muted)]">No products found.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((p) => {
                const inEnquiry = enquiry.includes(p.title);
                return (
                  <div key={p.id} className="card flex flex-col p-5">
                    <div className="mb-4 flex h-36 items-center justify-center rounded-lg bg-[var(--soft)]">
                      <svg className="h-10 w-10 text-[var(--line)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <Link href={`/products/${p.slug}`} className="font-bold text-[var(--text)] hover:text-[var(--brand)]">
                      {p.title}
                    </Link>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-[var(--muted)]"><span className="font-semibold text-[var(--text)]">Freq: </span>{p.frequencyRange}</p>
                      <p className="text-xs text-[var(--muted)]"><span className="font-semibold text-[var(--text)]">Gain: </span>{p.gain}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {p.applications.map((a) => <span key={a} className="badge">{a}</span>)}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link href={`/products/${p.slug}`} className="flex-1 rounded-lg border border-[var(--line)] px-3 py-2 text-center text-xs font-semibold transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]">
                        Details
                      </Link>
                      <button
                        onClick={() => addToEnquiry(p.title)}
                        disabled={inEnquiry}
                        className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                          inEnquiry ? "bg-green-100 text-green-700" : "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                        }`}
                      >
                        {inEnquiry ? "Added" : "Add to Enquiry"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <p className="mt-6 text-xs text-[var(--muted)]">{list.length} product{list.length !== 1 ? "s" : ""} shown</p>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container py-20 text-center text-[var(--muted)]">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
