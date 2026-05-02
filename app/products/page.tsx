"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { categories, subcategories, products } from "@/src/data/catalog";
import { useSite } from "@/src/hooks/useSite";

export default function ProductsPage(){
const [cat,setCat]=useState(categories[0].id); const [sub,setSub]=useState<string | null>(null);
const { addToEnquiry } = useSite();
const subcats=useMemo(()=>subcategories.filter(s=>s.categoryId===cat),[cat]);
const list=useMemo(()=>products.filter(p=>p.categoryId===cat && (!sub || p.subcategoryId===sub)),[cat,sub]);
return <main className="container py-12"><h1 className="text-4xl font-bold">Products</h1><p className="mt-3 text-[var(--muted)]">Main category subcategory and products hierarchy</p><section className="mt-7 grid gap-6 lg:grid-cols-4"><aside className="rounded-xl border border-[var(--line)] bg-white p-4"><h2 className="font-semibold">Categories</h2><div className="mt-3 space-y-2">{categories.map(c=><button key={c.id} onClick={()=>{setCat(c.id);setSub(null);}} className={`w-full rounded px-3 py-2 text-left ${cat===c.id?"bg-[var(--brand)] text-white":"bg-[var(--soft)]"}`}>{c.name}</button>)}</div><h3 className="mt-5 font-semibold">Subcategories</h3><div className="mt-2 space-y-2"><button onClick={()=>setSub(null)} className={`w-full rounded px-3 py-2 text-left ${sub===null?"bg-[var(--brand-dark)] text-white":"bg-[var(--soft)]"}`}>All</button>{subcats.map(s=><button key={s.id} onClick={()=>setSub(s.id)} className={`w-full rounded px-3 py-2 text-left ${sub===s.id?"bg-[var(--brand-dark)] text-white":"bg-[var(--soft)]"}`}>{s.name}</button>)}</div></aside><div className="lg:col-span-3"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{list.map(p=><div key={p.id} className="rounded-xl border border-[var(--line)] bg-white p-4"><Link href={`/products/${p.slug}`}><h3 className="font-semibold">{p.title}</h3></Link><p className="text-sm text-[var(--muted)]">{p.frequencyRange}</p><p className="text-sm text-[var(--muted)]">Gain {p.gain}</p><button onClick={()=>addToEnquiry(p.title)} className="mt-3 rounded bg-[var(--brand)] px-3 py-2 text-sm text-white">Add to Enquiry</button></div>)}</div></div></section></main>
}
