import Link from "next/link";
import { products, categories, subcategories } from "@/src/data/catalog";
import { AddToEnquiryButton } from "@/src/components/AddToEnquiryButton";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="container py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-3 text-[var(--muted)]">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products" className="btn-primary mt-6 inline-flex">Back to Products</Link>
      </main>
    );
  }

  const category = categories.find((c) => c.id === product.categoryId);
  const subcategory = subcategories.find((s) => s.id === product.subcategoryId);
  const relatedProducts = products
    .filter((p) => p.subcategoryId === product.subcategoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="container py-12">

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--brand)]">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[var(--brand)]">Products</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/products?category=${category.slug}`} className="hover:text-[var(--brand)]">{category.name}</Link>
          </>
        )}
        <span>/</span>
        <span className="text-[var(--text)]">{product.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Image panel */}
        <div className="card p-8">
          <div className="flex h-72 items-center justify-center rounded-xl bg-[var(--soft)]">
            <svg className="h-20 w-20 text-[var(--line)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--muted)]">Product image displayed once assets are uploaded</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {product.applications.map((a) => <span key={a} className="badge">{a}</span>)}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex flex-col gap-6">
          <div>
            {subcategory && (
              <span className="section-label">{category?.name} / {subcategory.name}</span>
            )}
            <h1 className="mt-2 text-3xl font-bold text-[var(--text)]">{product.title}</h1>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Frequency Range", value: product.frequencyRange },
              { label: "Gain", value: product.gain },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[var(--line)] bg-[var(--soft)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
                <p className="mt-1 font-bold text-[var(--text)]">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="card p-5">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--muted)]">Technical Specifications</h2>
            <table className="spec-table">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.key}>
                    <td>{s.key}</td>
                    <td className="text-[var(--text)]">{s.value}</td>
                  </tr>
                ))}
                <tr>
                  <td>Frequency Range</td>
                  <td className="text-[var(--text)]">{product.frequencyRange}</td>
                </tr>
                <tr>
                  <td>Gain</td>
                  <td className="text-[var(--text)]">{product.gain}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            <AddToEnquiryButton title={product.title} />
            <a href={product.datasheetUrl} className="btn-outline">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Datasheet
            </a>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold">Related Products</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} href={`/products/${rp.slug}`} className="card flex flex-col gap-3 p-5">
                <div className="flex h-24 items-center justify-center rounded-lg bg-[var(--soft)]">
                  <svg className="h-8 w-8 text-[var(--line)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold hover:text-[var(--brand)]">{rp.title}</h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">{rp.frequencyRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
