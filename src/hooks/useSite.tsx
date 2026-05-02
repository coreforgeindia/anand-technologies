"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "kn" | "zh";

export type Translations = {
  /* Navbar */
  products: string;
  about: string;
  industries: string;
  customSolutions: string;
  resources: string;
  contact: string;
  enquiry: string;
  /* Home hero */
  heroLabel: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroHeadline3: string;
  heroSubtext: string;
  requestQuote: string;
  exploreProducts: string;
  /* Sections */
  whatWeMake: string;
  productLines: string;
  viewAllProducts: string;
  whyChooseUs: string;
  builtForDemanding: string;
  whoWeServe: string;
  industrySectors: string;
  learnMore: string;
  customRFReq: string;
  customRFDesc: string;
  getInTouch: string;
  ourProcess: string;
  /* Products page */
  catalogue: string;
  productsTitle: string;
  productsDesc: string;
  allProducts: string;
  searchPlaceholder: string;
  addToEnquiry: string;
  added: string;
  details: string;
  /* Contact */
  contactTitle: string;
  contactDesc: string;
  sendEnquiry: string;
  submitEnquiry: string;
  fullName: string;
  emailAddr: string;
  phone: string;
  company: string;
  selectedProducts: string;
  requirementDetails: string;
  enquiryList: string;
  noProductsYet: string;
  submittedTitle: string;
  submittedDesc: string;
  submitAnother: string;
  sending: string;
};

const t_en: Translations = {
  products: "Products", about: "About", industries: "Industries",
  customSolutions: "Custom Solutions", resources: "Resources", contact: "Contact", enquiry: "Enquiry",
  heroLabel: "RF and Antenna Systems · Bengaluru, India",
  heroHeadline1: "Precision RF Components", heroHeadline2: "for", heroHeadline3: "Performance",
  heroSubtext: "Industrial-grade antenna and RF product manufacturing with strict process control, electromagnetic simulation, and fast design response — for telecom, defense, automotive, and IoT deployments.",
  requestQuote: "Request a Quote", exploreProducts: "Explore Products",
  whatWeMake: "What We Make", productLines: "Product Lines", viewAllProducts: "View all products",
  whyChooseUs: "Why Choose Us", builtForDemanding: "Built for Demanding Applications",
  whoWeServe: "Who We Serve", industrySectors: "Industry Sectors", learnMore: "Learn more",
  customRFReq: "Have a custom RF requirement?",
  customRFDesc: "Our engineering team works directly with you, from initial specification to validated prototype and production scale-up.",
  getInTouch: "Get in Touch", ourProcess: "Our Process",
  catalogue: "Catalogue", productsTitle: "Products", productsDesc: "Browse our full range of RF antennas and microwave components.",
  allProducts: "All Products", searchPlaceholder: "Search products...", addToEnquiry: "Add to Enquiry", added: "✓ Added", details: "Details",
  contactTitle: "Contact and Enquiry", contactDesc: "Add products to your enquiry list then submit your requirements. Our sales team responds within one business day.",
  sendEnquiry: "Send an Enquiry", submitEnquiry: "Submit Enquiry",
  fullName: "Full Name", emailAddr: "Email Address", phone: "Phone Number", company: "Company",
  selectedProducts: "Selected Products", requirementDetails: "Requirement Details",
  enquiryList: "Enquiry List", noProductsYet: "No products added yet. Browse the Products page and click \"Add to Enquiry\".",
  submittedTitle: "Enquiry Submitted!", submittedDesc: "Our sales team will contact you within one business day.",
  submitAnother: "Submit Another Enquiry", sending: "Sending...",
};

const t_kn: Translations = {
  products: "ಉತ್ಪನ್ನಗಳು", about: "ನಮ್ಮ ಬಗ್ಗೆ", industries: "ಕೈಗಾರಿಕೆಗಳು",
  customSolutions: "ಕಸ್ಟಮ್ ಪರಿಹಾರಗಳು", resources: "ಸಂಪನ್ಮೂಲಗಳು", contact: "ಸಂಪರ್ಕ", enquiry: "ವಿಚಾರಣೆ",
  heroLabel: "RF ಮತ್ತು ಆಂಟೆನಾ ವ್ಯವಸ್ಥೆಗಳು · ಬೆಂಗಳೂರು",
  heroHeadline1: "ನಿಖರ RF ಘಟಕಗಳು", heroHeadline2: "ಮಿಷನ್-ಕ್ರಿಟಿಕಲ್", heroHeadline3: "ಪ್ರದರ್ಶನಕ್ಕಾಗಿ",
  heroSubtext: "ಕಟ್ಟುನಿಟ್ಟಾದ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣ, ವಿದ್ಯುತ್ಕಾಂತೀಯ ಸಿಮ್ಯುಲೇಶನ್ ಮತ್ತು ವೇಗದ ವಿನ್ಯಾಸ ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ಕೈಗಾರಿಕಾ RF ತಯಾರಿಕೆ.",
  requestQuote: "ಉದ್ಧರಣ ಕೇಳಿ", exploreProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  whatWeMake: "ನಾವು ತಯಾರಿಸುವದು", productLines: "ಉತ್ಪನ್ನ ಸಾಲುಗಳು", viewAllProducts: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
  whyChooseUs: "ನಮ್ಮನ್ನೇಕೆ ಆರಿಸಿ", builtForDemanding: "ಬೇಡಿಕೆಯ ಅನ್ವಯಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
  whoWeServe: "ನಾವು ಸೇವೆ ಸಲ್ಲಿಸುವ ಗ್ರಾಹಕರು", industrySectors: "ಕೈಗಾರಿಕಾ ವಿಭಾಗಗಳು", learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
  customRFReq: "ಕಸ್ಟಮ್ RF ಅಗತ್ಯವಿದೆಯೇ?",
  customRFDesc: "ನಮ್ಮ ಎಂಜಿನಿಯರಿಂಗ್ ತಂಡ ನೇರವಾಗಿ ನಿಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
  getInTouch: "ಸಂಪರ್ಕಿಸಿ", ourProcess: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ",
  catalogue: "ಕ್ಯಾಟಲಾಗ್", productsTitle: "ಉತ್ಪನ್ನಗಳು", productsDesc: "ನಮ್ಮ RF ಆಂಟೆನಾಗಳ ಸಂಪೂರ್ಣ ಶ್ರೇಣಿಯನ್ನು ನೋಡಿ.",
  allProducts: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು", searchPlaceholder: "ಉತ್ಪನ್ನ ಹುಡುಕಿ...", addToEnquiry: "ವಿಚಾರಣೆಗೆ ಸೇರಿಸಿ", added: "✓ ಸೇರಿಸಲಾಗಿದೆ", details: "ವಿವರಗಳು",
  contactTitle: "ಸಂಪರ್ಕ ಮತ್ತು ವಿಚಾರಣೆ", contactDesc: "ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಿ ನಂತರ ನಿಮ್ಮ ಅವಶ್ಯಕತೆಗಳನ್ನು ಸಲ್ಲಿಸಿ.",
  sendEnquiry: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ", submitEnquiry: "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ",
  fullName: "ಪೂರ್ಣ ಹೆಸರು", emailAddr: "ಇಮೇಲ್ ವಿಳಾಸ", phone: "ಫೋನ್ ಸಂಖ್ಯೆ", company: "ಕಂಪನಿ",
  selectedProducts: "ಆಯ್ದ ಉತ್ಪನ್ನಗಳು", requirementDetails: "ಅವಶ್ಯಕತೆ ವಿವರಗಳು",
  enquiryList: "ವಿಚಾರಣೆ ಪಟ್ಟಿ", noProductsYet: "ಇನ್ನೂ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳಿಲ್ಲ.",
  submittedTitle: "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಲಾಗಿದೆ!", submittedDesc: "ನಮ್ಮ ತಂಡ ಒಂದು ವ್ಯಾಪಾರ ದಿನದಲ್ಲಿ ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
  submitAnother: "ಮತ್ತೊಂದು ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ", sending: "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
};

const t_zh: Translations = {
  products: "产品", about: "关于我们", industries: "行业",
  customSolutions: "定制解决方案", resources: "资源", contact: "联系我们", enquiry: "询价",
  heroLabel: "RF和天线系统 · 班加罗尔，印度",
  heroHeadline1: "精密RF组件", heroHeadline2: "用于", heroHeadline3: "关键任务性能",
  heroSubtext: "严格过程控制、电磁仿真和快速设计响应的工业级天线和RF产品制造，服务于电信、国防、汽车和物联网领域。",
  requestQuote: "请求报价", exploreProducts: "浏览产品",
  whatWeMake: "我们的产品", productLines: "产品线", viewAllProducts: "查看所有产品",
  whyChooseUs: "为何选择我们", builtForDemanding: "专为严苛应用而生",
  whoWeServe: "我们服务谁", industrySectors: "行业领域", learnMore: "了解更多",
  customRFReq: "有定制RF需求？",
  customRFDesc: "我们的工程团队直接与您合作，从初始规格到经过验证的原型和量产。",
  getInTouch: "联系我们", ourProcess: "我们的流程",
  catalogue: "产品目录", productsTitle: "产品", productsDesc: "浏览我们完整的RF天线和微波元件系列。",
  allProducts: "所有产品", searchPlaceholder: "搜索产品...", addToEnquiry: "添加到询价", added: "✓ 已添加", details: "详情",
  contactTitle: "联系和询价", contactDesc: "将产品添加到询价列表，然后提交您的需求。我们的销售团队将在一个工作日内回复。",
  sendEnquiry: "发送询价", submitEnquiry: "提交询价",
  fullName: "全名", emailAddr: "电子邮件", phone: "电话号码", company: "公司",
  selectedProducts: "已选产品", requirementDetails: "需求详情",
  enquiryList: "询价列表", noProductsYet: "尚未添加产品。浏览产品页面并点击添加到询价。",
  submittedTitle: "询价已提交！", submittedDesc: "我们的销售团队将在一个工作日内联系您。",
  submitAnother: "再次提交询价", sending: "发送中...",
};

const translations: Record<Lang, Translations> = { en: t_en, kn: t_kn, zh: t_zh };

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
  const [lang, setLang]       = useState<Lang>("en");
  const [dark, setDark]       = useState(false);
  const [enquiry, setEnquiry] = useState<string[]>([]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const t = useMemo(() => translations[lang], [lang]);

  const value = useMemo(() => ({
    lang, setLang, dark, setDark, enquiry, t,
    addToEnquiry:    (title: string) => setEnquiry((prev) => prev.includes(title) ? prev : [...prev, title]),
    removeFromEnquiry: (title: string) => setEnquiry((prev) => prev.filter((item) => item !== title)),
  }), [lang, dark, enquiry, t]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
