import type { Metadata } from "next";
import {
  CheckCircle2,
  Award,
  Globe2,
  Factory,
  Calendar,
} from "lucide-react";
import { company } from "@/lib/products";
import { SectionHeading } from "@/components/section-heading";
import { RedCtaBand } from "@/components/red-cta-band";

export const metadata: Metadata = {
  title: "About OSTAR Group",
  description:
    "Founded 1998 in Mengcun, Hebei. Manufactured to ANSI, ASME, DIN, BS and JIS standards. ISO, TÜV and CE certified. Dubai sales hub since 2010.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-blush py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 text-center">
          <span className="inline-block text-[12px] tracking-[0.2em] font-semibold text-crimson uppercase mb-3">
            About Us
          </span>
          <h1 className="text-[40px] md:text-[58px] font-extrabold tracking-tight leading-[1.05] text-ink">
            28 Years Forging
            <br /> <span className="text-crimson">Industrial Standards.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft text-[15px] leading-relaxed">
            From the hometown of pipe fittings in Hebei to industrial buyers in
            Dubai, the GCC and beyond.
          </p>
        </div>
        <div className="dotted-band absolute inset-x-0 -bottom-3" />
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <SectionHeading className="lg:!justify-start lg:[&::before]:hidden" title="Our" highlight="Story" />
            <div className="mt-7 space-y-4 text-[15px] text-ink-soft leading-[1.85]">
              <p>
                OSTAR Group was founded in 1998 in Mengcun County — known as
                the hometown of pipe fittings in Hebei, China. What began as a
                700-ton-per-year flange operation has grown into one of the
                region&apos;s most respected manufacturers of high-pressure
                forged flanges and pipe fittings, with an 880,000 sqm
                production complex and an export footprint across 30+ countries.
              </p>
              <p>
                In 2010, we opened OSTAR Industry General Trading in Dubai —
                our sales hub for industrial buyers across the GCC, Asia,
                Africa, Europe and the Americas. We work directly with EPC
                contractors, refinery procurement teams, marine yards and
                project engineers.
              </p>
              <p>
                Today, OSTAR is ISO 9001, TÜV, PED/CE and API 6L certified.
                We&apos;ve been recognised with a 30,000-ton export award and
                continue to specialise in what we&apos;ve done for two decades:
                forging steel that holds.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {[
                "ISO 9001 certified",
                "TÜV audited",
                "PED / CE compliant",
                "API 6L authenticated",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13.5px] text-ink-soft">
                  <CheckCircle2 size={16} className="text-crimson shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={Calendar} value="1998" label="Founded" />
              <Stat icon={Factory} value="880K m²" label="Production area" />
              <Stat icon={Globe2} value="30+" label="Export markets" />
              <Stat icon={Award} value="30,000T" label="Export award 2016" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="py-16 lg:py-20 bg-blush-soft">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading title="Our" highlight="Milestones" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.history.map((h) => (
              <div key={h.year} className="bg-white rounded-2xl border border-line p-7 card-lift">
                <div className="text-[36px] font-extrabold text-crimson leading-none">
                  {h.year}
                </div>
                <div className="mt-2 w-12 h-[2px] bg-crimson rounded-full" />
                <p className="mt-5 text-[13.5px] text-ink-soft leading-relaxed">{h.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedCtaBand
        title="Two decades of forging."
        highlight="One spec at a time."
        button="View Our Products"
        href="/products"
      />

      {/* Certifications */}
      <section id="certifications" className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="Certifications &" highlight="Authentications" />
            <p className="mt-4 text-ink-mute max-w-xl mx-auto">
              Third-party audited and documented — submit any project compliance
              dossier with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {company.certifications.map((c, i) => (
              <div key={i} className="bg-blush-soft rounded-2xl p-6 border border-line">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center font-bold text-[16px] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold leading-tight text-ink">{c}</h3>
                    <p className="text-[12px] uppercase tracking-wider text-ink-mute mt-2">
                      Third-party audited
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + markets */}
      <section className="py-16 lg:py-20 bg-blush-soft">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="Industries &" highlight="Markets Served" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-line">
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-crimson mb-5">
                Industries
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.industries.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                    <CheckCircle2 size={16} className="text-crimson shrink-0 mt-0.5" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-line">
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-crimson mb-5">
                Export Markets
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.markets.map((m) => (
                  <span
                    key={m}
                    className="text-[13px] font-medium text-ink bg-blush rounded-full px-4 py-2"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-blush-soft rounded-2xl p-6 border border-line text-center">
      <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center mx-auto">
        <Icon size={20} strokeWidth={1.7} />
      </div>
      <div className="mt-4 text-[28px] font-extrabold text-ink leading-none">{value}</div>
      <div className="mt-2 text-[11.5px] uppercase tracking-wider text-ink-mute">{label}</div>
    </div>
  );
}
