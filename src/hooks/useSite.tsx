"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "kn" | "zh";

export type Translations = {
  products: string;
  about: string;
  industries: string;
  customSolutions: string;
  resources: string;
  contact: string;
  enquiry: string;
  requestQuote: string;
  exploreProducts: string;
  heroHeadline: string;
  heroSubtext: string;
  viewAll: string;
  learnMore: string;
  getInTouch: string;
  ourProcess: string;
  productLines: string;
  whatWeMake: string;
  whyChooseUs: string;
  industrySectors: string;
  whoWeServe: string;
  customRFReq: string;
};

const translations: Record<Lang, Translations> = {
  en: {
    products: "Products",
    about: "About",
    industries: "Industries",
    customSolutions: "Custom Solutions",
    resources: "Resources",
    contact: "Contact",
    enquiry: "Enquiry",
    requestQuote: "Request a Quote",
    exploreProducts: "Explore Products",
    heroHeadline: "Precision RF Components for Mission-Critical Performance",
    heroSubtext:
      "Industrial-grade antenna and RF product manufacturing with strict process control, electromagnetic simulation, and fast design response for telecom, defense, automotive, and IoT deployments.",
    viewAll: "View all products",
    learnMore: "Learn more",
    getInTouch: "Get in Touch",
    ourProcess: "Our Process",
    productLines: "Product Lines",
    whatWeMake: "What We Make",
    whyChooseUs: "Why Choose Us",
    industrySectors: "Industry Sectors",
    whoWeServe: "Who We Serve",
    customRFReq: "Have a custom RF requirement?",
  },
  kn: {
    products: "ಉತ್ಪನ್ನಗಳು",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    industries: "ಕೈಗಾರಿಕೆಗಳು",
    customSolutions: "ಕಸ್ಟಮ್ ಪರಿಹಾರಗಳು",
    resources: "ಸಂಪನ್ಮೂಲಗಳು",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    enquiry: "ವಿಚಾರಣೆ",
    requestQuote: "ಉದ್ಧರಣ ಕೇಳಿ",
    exploreProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    heroHeadline: "ಮಿಷನ್-ಕ್ರಿಟಿಕಲ್ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ನಿಖರ RF ಘಟಕಗಳು",
    heroSubtext:
      "ಕಟ್ಟುನಿಟ್ಟಾದ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣ, ವಿದ್ಯುತ್ಕಾಂತೀಯ ಸಿಮ್ಯುಲೇಶನ್ ಮತ್ತು ವೇಗದ ವಿನ್ಯಾಸ ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ಕೈಗಾರಿಕಾ RF ಉತ್ಪನ್ನ ತಯಾರಿಕೆ.",
    viewAll: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    getInTouch: "ಸಂಪರ್ಕಿಸಿ",
    ourProcess: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ",
    productLines: "ಉತ್ಪನ್ನ ಸಾಲುಗಳು",
    whatWeMake: "ನಾವು ಏನು ತಯಾರಿಸುತ್ತೇವೆ",
    whyChooseUs: "ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಿ",
    industrySectors: "ಕೈಗಾರಿಕಾ ವಿಭಾಗಗಳು",
    whoWeServe: "ನಾವು ಯಾರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತೇವೆ",
    customRFReq: "ಕಸ್ಟಮ್ RF ಅಗತ್ಯವಿದೆಯೇ?",
  },
  zh: {
    products: "产品",
    about: "关于我们",
    industries: "行业",
    customSolutions: "定制解决方案",
    resources: "资源",
    contact: "联系我们",
    enquiry: "询价",
    requestQuote: "请求报价",
    exploreProducts: "浏览产品",
    heroHeadline: "为关键任务性能提供精密RF组件",
    heroSubtext:
      "严格过程控制、电磁仿真和快速设计响应的工业级天线和RF产品制造，服务于电信、国防、汽车和物联网领域。",
    viewAll: "查看所有产品",
    learnMore: "了解更多",
    getInTouch: "联系我们",
    ourProcess: "我们的流程",
    productLines: "产品线",
    whatWeMake: "我们的产品",
    whyChooseUs: "为何选择我们",
    industrySectors: "行业领域",
    whoWeServe: "我们服务谁",
    customRFReq: "有定制RF需求？",
  },
};

type SiteContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dark: boolean;
  setDark: (value: boolean) => void;
  enquiry: string[];
  addToEnquiry: (title: string) => void;
  removeFromEnquiry: (title: string) => void;
  t: Translations;
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

  const t = useMemo(() => translations[lang], [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      dark,
      setDark,
      enquiry,
      addToEnquiry: (title: string) =>
        setEnquiry((prev) => (prev.includes(title) ? prev : [...prev, title])),
      removeFromEnquiry: (title: string) =>
        setEnquiry((prev) => prev.filter((item) => item !== title)),
      t,
    }),
    [lang, dark, enquiry, t],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
