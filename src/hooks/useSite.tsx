"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "kn" | "zh";

type SiteContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dark: boolean;
  setDark: (value: boolean) => void;
  enquiry: string[];
  addToEnquiry: (title: string) => void;
  removeFromEnquiry: (title: string) => void;
};

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const [enquiry, setEnquiry] = useState<string[]>([]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      dark,
      setDark,
      enquiry,
      addToEnquiry: (title: string) => setEnquiry((prev) => (prev.includes(title) ? prev : [...prev, title])),
      removeFromEnquiry: (title: string) => setEnquiry((prev) => prev.filter((item) => item !== title)),
    }),
    [lang, dark, enquiry],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
