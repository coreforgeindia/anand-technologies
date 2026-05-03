"use client";

import Link from "next/link";
import { useSite } from "@/src/hooks/useSite";

export function AddToEnquiryButton({ title }: { title: string }) {
  const { addToEnquiry, enquiry } = useSite();
  const inEnquiry = enquiry.includes(title);

  if (inEnquiry) {
    return (
      <Link href="/contact" className="btn-primary">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
        Added - View Enquiry
      </Link>
    );
  }

  return (
    <button onClick={() => addToEnquiry(title)} className="btn-primary">
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
      Add to Enquiry
    </button>
  );
}
