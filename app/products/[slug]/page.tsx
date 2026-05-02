import { products } from "@/src/data/catalog";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return <main className="container py-12">Product not found</main>;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="aspect-square rounded bg-slate-800" />
          <p className="mt-4 text-sm text-slate-400">Image placeholder for uploaded product asset</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-200">{product.description}</p>
          <div className="mt-4 space-y-2 text-sm"><p>Frequency Range {product.frequencyRange}</p><p>Gain {product.gain}</p><p>Applications {product.applications.join(" | ")}</p></div>
          <table className="mt-6 w-full text-sm">
            <tbody>{product.specs.map((s) => <tr key={s.key} className="border-t border-slate-800"><td className="py-2 font-medium">{s.key}</td><td className="py-2">{s.value}</td></tr>)}</tbody>
          </table>
          <div className="mt-6 flex gap-3"><a className="rounded bg-sky-500 px-4 py-2 font-semibold text-slate-950" href="/contact">Add to Enquiry</a><a className="rounded border border-slate-700 px-4 py-2" href={product.datasheetUrl}>Download Datasheet</a></div>
        </div>
      </div>
    </main>
  );
}
