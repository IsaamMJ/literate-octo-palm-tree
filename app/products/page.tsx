import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsBrowser } from "./browser";
import { SectionHeading } from "@/components/section-heading";
import { RedCtaBand } from "@/components/red-cta-band";

export const metadata: Metadata = {
  title: "Products — Flanges, Fittings & Pipes",
  description:
    "Browse OSTAR Group's full product catalog — forged flanges to ANSI, ASME, DIN, BS and JIS, butt-weld fittings and seamless/welded line pipe.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-blush py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 text-center">
          <span className="inline-block text-[12px] tracking-[0.2em] font-semibold text-crimson uppercase mb-3">
            Our Catalog
          </span>
          <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight leading-[1.05] text-ink">
            Forged <span className="text-crimson">Flanges,</span> Fittings &amp; Pipes
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-ink-soft text-[15px] leading-relaxed">
            Filter by family or standard. Every product page has a WhatsApp
            enquiry button and a request-for-quote form — buyer-friendly,
            spec-first.
          </p>
        </div>
        <div className="dotted-band absolute inset-x-0 -bottom-3" />
      </section>

      <section className="py-12 lg:py-16">
        <div className="text-center mb-10">
          <SectionHeading title="The Full" highlight="Catalog" />
        </div>
        <Suspense fallback={<div className="mx-auto max-w-[1280px] px-5 lg:px-8 pb-32 text-ink-mute">Loading…</div>}>
          <ProductsBrowser />
        </Suspense>
      </section>

      <RedCtaBand
        title="Can't find what you need?"
        highlight="Ask our team."
        button="Get In Touch"
        href="/contact"
      />
    </>
  );
}
