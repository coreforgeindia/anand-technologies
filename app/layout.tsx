import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { SiteProvider } from "@/src/hooks/useSite";

export const metadata: Metadata = { title: "Anand Technologies", description: "RF and Antenna manufacturing" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteProvider><Navbar />{children}<Footer /></SiteProvider></body></html>;
}
