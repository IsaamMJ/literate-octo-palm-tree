import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { QuickContactTab } from "@/components/quick-contact-tab";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "OSTAR Group — Forged Flanges & Pipe Fittings · Dubai",
    template: "%s — OSTAR Group",
  },
  description:
    "OSTAR Group is a leading manufacturer of high-pressure forged flanges and pipe fittings, supplying Oil & Gas, Marine, Petrochemical and Construction sectors across the Middle East and worldwide. ISO, TÜV and CE certified. Based in Dubai, UAE.",
  keywords: [
    "OSTAR Group",
    "forged flanges Dubai",
    "pipe fittings UAE",
    "ANSI B16.5",
    "ASME B16.47",
    "DIN flanges",
    "BS 4504",
    "JIS B2220",
    "oil and gas supplier Dubai",
  ],
  authors: [{ name: "OSTAR Group" }],
  openGraph: {
    title: "OSTAR Group — Forged Flanges & Pipe Fittings · Dubai",
    description:
      "Leading supplier of forged flanges and pipe fittings to ANSI, ASME, DIN, BS and JIS — Dubai-based, exporting worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <QuickContactTab />
      </body>
    </html>
  );
}
