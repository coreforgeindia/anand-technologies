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
  const [sub, setSub]       = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { addToEnquiry, enquiry, t } = useSite();

  useEffect(() => {
    if (urlCat) {
      const found = categories.find((c) => c.slug === urlCat);
      if (found) { setCat(found.id); setSub(null); }
    }
  }, [urlCat]);

  const subcats          = useMemo(() => subcategories.filter((s) => s.categoryId === cat), [cat]);
  const selectedCategory = categories.find((c) => c.id === cat);

  const list = useMemo(() => {
    let items = products.filter((p) => p.categoryId === cat && (!sub || p.subcategoryId === sub));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return items;
  }, [cat, sub, search]);

  return (
    <main>
      {/* Page header */}
      <section className="hero-banner">
        <div className="container">
          <span className="label">{t.catalogue}</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, lineHeight: 1.18, marginTop: "0.5rem" }}>{t.productsTitle}</h1>
          <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted)" }}>
            {t.productsDesc}
          </p>

          {/* Category tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
            {categories.map((c) => (
              <button key={c.id} onClick={() => { setCat(c.id); setSub(null); }}
                style={{
                  padding: "0.55rem 1.25rem", borderRadius: "8px", fontSize: "0.875rem", fontWeight: 600,
                  cursor: "pointer", border: cat === c.id ? "none" : "1.5px solid var(--line)",
                  background: cat === c.id ? "var(--brand)" : "var(--panel)",
                  color: cat === c.id ? "white" : "var(--muted)", transition: "all 0.15s",
                }}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        {/* Category description */}
        {selectedCategory && (
          <div style={{ marginBottom: "2rem", padding: "1rem 1.5rem", borderRadius: "12px", background: "var(--brand-light)", border: "1px solid var(--brand-light)" }}>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--brand-dark)" }}>{selectedCategory.name}</p>
            <p style={{ marginTop: "0.25rem", fontSize: "0.825rem", color: "var(--muted)" }}>{selectedCategory.summary}</p>
          </div>
        )}

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "220px 1fr" }} className="lg-product-grid">

          {/* Sidebar */}
          <aside>
            <div className="card" style={{ position: "sticky", top: "calc(var(--nav-h) + 1.5rem)", padding: "1.25rem" }}>
              <h2 style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.875rem" }}>
                {selectedCategory?.name}
              </h2>

              {/* Search */}
              <div style={{ position: "relative", marginBottom: "0.875rem" }}>
                <svg style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "13px", height: "13px", color: "var(--muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder} style={{ paddingLeft: "2.25rem", paddingTop: "0.55rem", paddingBottom: "0.55rem", fontSize: "0.8rem" }}/>
              </div>

              {/* All */}
              <button onClick={() => setSub(null)}
                style={{ display: "block", width: "100%", padding: "0.5rem 0.75rem", borderRadius: "8px", textAlign: "left", fontSize: "0.825rem", cursor: "pointer", border: "none",
                  fontWeight: sub === null ? 600 : 400,
                  background: sub === null ? "var(--brand)" : "transparent",
                  color: sub === null ? "white" : "var(--muted)", transition: "all 0.12s" }}>
                {t.allProducts}
              </button>

              {/* Subcats */}
              <div style={{ marginTop: "0.25rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                {subcats.map((s) => (
                  <button key={s.id} onClick={() => setSub(s.id)}
                    style={{ display: "block", width: "100%", padding: "0.45rem 0.75rem", borderRadius: "8px", textAlign: "left", fontSize: "0.8rem", cursor: "pointer", border: "none",
                      fontWeight: sub === s.id ? 600 : 400,
                      background: sub === s.id ? "var(--brand-dark)" : "transparent",
                      color: sub === s.id ? "white" : "var(--muted)", transition: "all 0.12s" }}>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div>
            {list.length === 0 ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200px", borderRadius: "16px", border: "1px solid var(--line)", background: "var(--panel)" }}>
                <p style={{ color: "var(--muted)" }}>No products found.</p>
              </div>
            ) : (
              <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
                {list.map((p) => {
                  const inEnquiry = enquiry.includes(p.title);
                  return (
                    <div key={p.id} className="card" style={{ display: "flex", flexDirection: "column", padding: "1.25rem", gap: "0.875rem" }}>
                      {/* Image area */}
                      <div style={{ height: "140px", borderRadius: "10px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg style={{ width: "36px", height: "36px", color: "var(--line)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>

                      {/* Title */}
                      <Link href={`/products/${p.slug}`} style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", textDecoration: "none", lineHeight: 1.35 }}>
                        {p.title}
                      </Link>

                      {/* Specs */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                          <span style={{ fontWeight: 600, color: "var(--text)" }}>Freq: </span>{p.frequencyRange}
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                          <span style={{ fontWeight: 600, color: "var(--text)" }}>Gain: </span>{p.gain}
                        </p>
                      </div>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                        {p.applications.map((a) => <span key={a} className="badge">{a}</span>)}
                      </div>

                      {/* Buttons */}
                      <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
                        <Link href={`/products/${p.slug}`}
                          style={{ flex: 1, padding: "0.55rem 0", textAlign: "center", borderRadius: "8px", border: "1.5px solid var(--line)", fontSize: "0.775rem", fontWeight: 600, color: "var(--text)", textDecoration: "none", transition: "all 0.15s" }}>
                          {t.details}
                        </Link>
                        <button onClick={() => addToEnquiry(p.title)} disabled={inEnquiry}
                          style={{ flex: 1, padding: "0.55rem 0", borderRadius: "8px", border: "none", fontSize: "0.775rem", fontWeight: 600, cursor: inEnquiry ? "default" : "pointer", transition: "all 0.15s",
                            background: inEnquiry ? "#dcfce7" : "var(--brand)",
                            color: inEnquiry ? "#166534" : "white" }}>
                          {inEnquiry ? t.added : t.addToEnquiry}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <p style={{ marginTop: "1.25rem", fontSize: "0.75rem", color: "var(--muted)" }}>
              {list.length} product{list.length !== 1 ? "s" : ""} shown
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container" style={{ paddingTop: "5rem", textAlign: "center", color: "var(--muted)" }}>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
