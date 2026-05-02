"use client";

import { useState } from "react";

export default function Admin(){
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!identifier || !password) {
      setMessage("Enter registered email or mobile and password");
      return;
    }
    setMessage("Login request submitted. Connect this to Supabase auth next.");
  }

  return <main className="container py-12"><h1 className="text-4xl font-bold">Admin Login</h1><p className="mt-3 text-[var(--muted)]">Access via registered email or mobile number with password.</p><form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4 rounded-xl border border-[var(--line)] bg-white p-6"><input value={identifier} onChange={(e)=>setIdentifier(e.target.value)} className="w-full rounded border border-[var(--line)] p-3" placeholder="Email or mobile"/><input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full rounded border border-[var(--line)] p-3" placeholder="Password"/><button className="w-full rounded bg-[var(--brand)] px-6 py-3 font-semibold text-white">Secure Login</button>{message && <p className="text-sm text-[var(--muted)]">{message}</p>}</form></main>
}
