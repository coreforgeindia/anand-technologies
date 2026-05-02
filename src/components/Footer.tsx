import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div><h3 className="text-xl font-semibold text-[var(--brand)]">Anand Technologies</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">Design and manufacturing partner for RF antennas microwave components and custom communication hardware.</p></div>
          <div><h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Navigate</h4><div className="mt-4 space-y-2 text-sm"><Link href="/">Home</Link><br/><Link href="/products">Products</Link><br/><Link href="/about">About</Link><br/><Link href="/contact">Contact</Link></div></div>
          <div><h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Visit Us</h4><p className="mt-4 text-sm leading-7">No 21 6th Main Road Sriganadada Kavalu Magadi Main Road Sunkadakatte Bengaluru Karnataka 560091</p></div>
          <div><h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Connect</h4><p className="mt-4 text-sm">sales@anandtechnologies.co.in</p><p className="text-sm">ceo@anandtechnologies.co.in</p><p className="mt-2 text-sm">+91 90000 00000</p><div className="mt-4 flex gap-3 text-sm"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">YouTube</a></div></div>
        </div>
        <div className="mt-10 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">Copyright 2026 Anand Technologies All rights reserved</div>
      </div>
    </footer>
  );
}
