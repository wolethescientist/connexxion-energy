import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PriceTicker } from "@/components/site/PriceTicker";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://energy.connexxiongroup.com"),
  title: {
    default: "Connexxion Energy — Africa's Leading Energy Service Corporation",
    template: "%s · Connexxion Energy",
  },
  description:
    "Connexxion Energy is a key and growing player in the Upstream, Midstream and Downstream sectors of the Oil & Gas industry, and the broader Energy sector across Nigeria and Africa.",
  keywords: [
    "Connexxion Energy",
    "Oil and Gas Nigeria",
    "Upstream Midstream Downstream",
    "Energy company Africa",
    "Petroleum trading",
    "FPSO",
    "Pipeline construction",
    "Renewable energy Nigeria",
  ],
  openGraph: {
    title: "Connexxion Energy — Africa's Leading Energy Service Corporation",
    description:
      "An indigenous energy corporation operating across the full Oil & Gas value chain in Nigeria and Africa.",
    type: "website",
    locale: "en_NG",
    siteName: "Connexxion Energy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-cream">
        <div className="fixed inset-x-0 top-0 z-50">
          <PriceTicker />
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
