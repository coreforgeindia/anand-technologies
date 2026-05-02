"use client";

import { useState } from "react";
import Link from "next/link";

export default function Admin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!identifier || !password) {
      setMessage("Please enter your email or mobile and password.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setMessage("Login request submitted. Connect this to Supabase Auth to complete the integration.");
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]">
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="white" />
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="9" cy="9" r="9" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.5" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-[var(--text)]">Admin Login</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">Sign in to the Anand Technologies dashboard</p>
        </div>

        <div className="card p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[var(--muted)]">Email or Mobile Number</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="admin@example.com or +91 9XXXXXXXXX"
                  style={{ paddingLeft: "2.5rem" }}
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-semibold text-[var(--muted)]">Password</label>
                <a href="#" className="text-xs font-medium text-[var(--brand)] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {message && (
              <div className={`rounded-lg p-3 text-sm ${message.startsWith("Login request") ? "bg-blue-50 text-blue-800" : "bg-red-50 text-red-700"}`}>
                {message}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : "Secure Login"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--brand)]">Back to website</Link>
        </p>
      </div>
    </main>
  );
}
