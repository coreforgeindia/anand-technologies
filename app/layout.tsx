import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Anand Technologies | RF and Antenna Manufacturing",
  description: "RF antennas IoT antennas PCB antennas GSM GPS antennas and custom RF solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
