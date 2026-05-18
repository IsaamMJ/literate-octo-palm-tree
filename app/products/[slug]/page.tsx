import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { products, getProduct, whatsappEnquiryUrl, company } from "@/lib/products";
import { RedCtaBand } from "@/components/red-cta-band";
import { SectionHeading } from "@/components/section-heading";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product not found" };
  return { title: p.name, description: p.tagline };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.slug !== p.slug && x.family === p.family)
    .slice(0, 3);

  return (
    <>
      {/* Hero / breadcrumb */}
      <section className="relative bg-blush py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-mute hover:text-crimson transition-colors mb-6"
          >
            <ChevronLeft size={15} /> Back to Catalog
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[11.5px] font-semibold tracking-[0.18em] uppercase text-crimson mb-3">
                {p.family} · {p.category}
              </span>
              <h1 className="text-[34px] md:text-[46px] lg:text-[54px] font-extrabold tracking-tight leading-[1.05] text-ink">
                {p.name}
              </h1>
              <p className="mt-5 text-[15.5px] text-ink-soft leading-relaxed max-w-2xl">
                {p.tagline}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappEnquiryUrl(p.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill"
                >
                  <MessageCircle size={16} />
                  WhatsApp Enquiry
                </a>
                <Link
                  href={`/contact?product=${encodeURIComponent(p.name)}`}
                  className="btn-pill-outline"
                >
                  <Mail size={16} />
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square bg-white rounded-2xl shadow-[0_30px_60px_-30px_rgba(166,36,60,0.35)] relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-3/4 h-3/4" fill="none">
                  <circle cx="200" cy="200" r="160" stroke="#1B4E8F" strokeOpacity="0.18" strokeWidth="2" />
                  <circle cx="200" cy="200" r="120" stroke="#1B4E8F" strokeOpacity="0.32" strokeWidth="2" />
                  <circle cx="200" cy="200" r="60" stroke="#1B4E8F" strokeOpacity="0.5" strokeWidth="2" />
                  <circle cx="200" cy="200" r="48" fill="#F2F7FB" />
                  {Array.from({ length: 10 }).map((_, i) => {
                    const a = (i / 10) * Math.PI * 2;
                    const x = 200 + Math.cos(a) * 140;
                    const y = 200 + Math.sin(a) * 140;
                    return <circle key={i} cx={x} cy={y} r="8" fill="#1B4E8F" />;
                  })}
                </svg>
                <div className="absolute top-4 left-4 bg-blush rounded-full px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-crimson">
                  {p.standardFamily}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dotted-band absolute inset-x-0 -bottom-3" />
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[920px] px-5 lg:px-8 text-center">
          <SectionHeading title="Product" highlight="Overview" />
          <p className="mt-8 text-[15px] lg:text-[16px] text-ink-soft leading-[1.85]">
            {p.description}
          </p>
        </div>
      </section>

      {/* Variants table */}
      <section className="py-16 lg:py-20 bg-blush-soft">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="Available" highlight="Variants" />
            <p className="mt-4 text-ink-mute max-w-xl mx-auto">
              Pressure classes, types and standards we manufacture for this family.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            {/* desktop table */}
            <div className="hidden md:block">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-crimson text-white text-[11px] font-semibold uppercase tracking-wider">
                <div className="col-span-3">Pressure Class</div>
                <div className="col-span-5">Available Types</div>
                <div className="col-span-2">Size Range</div>
                <div className="col-span-2">Standards</div>
              </div>
              <div className="divide-y divide-line">
                {p.variants.map((v, i) => (
                  <div
                    key={v.rating}
                    className={`grid grid-cols-12 gap-4 px-6 py-5 items-start ${i % 2 === 1 ? "bg-blush-soft/40" : ""}`}
                  >
                    <div className="col-span-3 text-[18px] font-bold text-crimson">{v.rating}</div>
                    <div className="col-span-5">
                      <div className="flex flex-wrap gap-1.5">
                        {v.types.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium bg-blush px-2.5 py-1 rounded-full text-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {v.note && (
                        <p className="mt-2 text-[12px] text-ink-mute italic">{v.note}</p>
                      )}
                    </div>
                    <div className="col-span-2 text-[13.5px] text-ink-soft">{v.sizeRange}</div>
                    <div className="col-span-2 text-[12px] text-ink-mute">
                      {v.standards.join(" · ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* mobile cards */}
            <div className="md:hidden divide-y divide-line">
              {p.variants.map((v) => (
                <div key={v.rating} className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[20px] font-bold text-crimson">{v.rating}</div>
                    <div className="text-[12px] text-ink-mute">{v.sizeRange}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {v.types.map((t) => (
                      <span key={t} className="text-[11px] font-medium bg-blush px-2.5 py-1 rounded-full text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-[12px] text-ink-mute">
                    {v.standards.join(" · ")}
                  </div>
                  {v.note && <p className="mt-2 text-[12px] text-ink-mute italic">{v.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials, faces, industries */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard title="Materials">
              {p.materials.map((m) => (
                <li key={m} className="flex items-start gap-2.5 py-2 border-b border-line last:border-b-0">
                  <CheckCircle2 size={16} className="text-crimson shrink-0 mt-0.5" />
                  <span className="text-[14px] text-ink-soft">{m}</span>
                </li>
              ))}
            </DataCard>
            <DataCard title="Face / Finish">
              {(p.faces ?? ["Standard finish"]).map((f) => (
                <li key={f} className="flex items-start gap-2.5 py-2 border-b border-line last:border-b-0">
                  <CheckCircle2 size={16} className="text-crimson shrink-0 mt-0.5" />
                  <span className="text-[14px] text-ink-soft">{f}</span>
                </li>
              ))}
            </DataCard>
            <DataCard title="Industries Served">
              {p.industries.map((i) => (
                <li key={i} className="flex items-start gap-2.5 py-2 border-b border-line last:border-b-0">
                  <CheckCircle2 size={16} className="text-crimson shrink-0 mt-0.5" />
                  <span className="text-[14px] text-ink-soft">{i}</span>
                </li>
              ))}
            </DataCard>
          </div>
        </div>
      </section>

      <RedCtaBand
        title="Ready to order?"
        highlight={`Get a quote on ${p.name}.`}
        button="Enquire Now"
        href={`/contact?product=${encodeURIComponent(p.name)}`}
      />

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="text-center mb-12">
              <SectionHeading title="You May Also" highlight="Specify" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.slug}`}
                  className="group block bg-blush-soft rounded-xl p-7 card-lift border border-line"
                >
                  <span className="inline-block text-[10.5px] font-semibold uppercase tracking-wider text-crimson bg-white rounded-full px-2.5 py-1 mb-5">
                    {r.standardFamily}
                  </span>
                  <h3 className="text-[19px] font-semibold leading-tight text-ink group-hover:text-crimson transition-colors">
                    {r.name}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-ink-mute line-clamp-2 leading-relaxed">
                    {r.tagline}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-crimson">
                    View Product
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function DataCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blush-soft rounded-2xl p-7 border border-line">
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-crimson mb-5">
        {title}
      </h3>
      <ul className="space-y-0">{children}</ul>
    </div>
  );
}
