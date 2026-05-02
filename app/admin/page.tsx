"use client";

import { useState } from "react";
import Link from "next/link";

export default function Admin() {
  const [id, setId]             = useState("");
  const [pw, setPw]             = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [msg, setMsg]           = useState("");
  const [loading, setLoading]   = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id || !pw) { setMsg("Please enter your email or mobile and password."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setMsg("Login request submitted. Connect this to Supabase Auth to complete the integration.");
  }

  return (
    <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1rem" }}>
      <div style={{ width: "100%", maxWidth: "440px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="white" />
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="9" cy="9" r="9" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.45" />
            </svg>
          </div>
          <h1 style={{ marginTop: "1.25rem", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>Admin Login</h1>
          <p style={{ marginTop: "0.4rem", fontSize: "0.875rem", color: "var(--muted)" }}>Sign in to the Anand Technologies dashboard</p>
        </div>

        <div className="card" style={{ padding: "2.25rem" }}>
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>Email or Mobile</label>
              <div style={{ position: "relative" }}>
                <svg style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "var(--muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="admin@example.com or +91 9XXXXXXXXX" style={{ paddingLeft: "2.5rem" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>Password</label>
                <a href="#" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--brand)", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <div style={{ position: "relative" }}>
                <svg style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "var(--muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input type={showPw ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Enter your password" style={{ paddingLeft: "2.5rem", paddingRight: "2.75rem" }} />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)", padding: 0 }}>
                  <svg style={{ width: "15px", height: "15px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {showPw
                      ? <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      : <><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                    }
                  </svg>
                </button>
              </div>
            </div>

            {msg && (
              <div style={{ borderRadius: "9px", padding: "0.75rem 1rem", fontSize: "0.875rem", background: msg.startsWith("Login") ? "#eff6ff" : "#fef2f2", color: msg.startsWith("Login") ? "#1d4ed8" : "#dc2626" }}>
                {msg}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: "center", width: "100%", fontSize: "0.95rem", padding: "0.9rem" }}>
              {loading ? (
                <>
                  <svg style={{ width: "15px", height: "15px", animation: "spin 1s linear infinite" }} fill="none" viewBox="0 0 24 24">
                    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : "Secure Login"}
            </button>
          </form>
        </div>

        <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.8rem", color: "var(--muted)" }}>
          <Link href="/" style={{ color: "var(--brand)", textDecoration: "none" }}>← Back to website</Link>
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
