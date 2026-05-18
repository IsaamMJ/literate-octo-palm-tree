import Link from "next/link";
import {
  ChevronRight,
  CircleDot,
  Layers,
  Pipette,
  ShieldCheck,
  Factory,
  Boxes,
  Wrench,
  Award,
  Quote,
} from "lucide-react";
import { products, company } from "@/lib/products";
import { SectionHeading } from "@/components/section-heading";
import { RedCtaBand } from "@/components/red-cta-band";
import { ProductCard } from "@/components/product-card";

const featuredSlugs = [
  "ansi-b16-5-flanges",
  "din-flanges",
  "butt-weld-elbows-returns",
  "seamless-welded-pipes",
];

export default function Home() {
  const featured = featuredSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;
  return (
    <>
      <Hero />
      <Intro />
      <Clients />
      <RedCtaBand
        title="Let's Start a"
        highlight="New Project Together"
        button="Request A Quote"
        href="/contact"
      />
      <Services />
      <Featured products={featured} />
      <RedCtaBand
        title="We Promise."
        highlight="We Deliver."
        button="Let's Work Together"
        href="/contact"
      />
      <Insights />
      <Testimonials />
    </>
  );
}

/* =========================== HERO =========================== */

function Hero() {
  return (
    <section className="relative bg-blush overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left fade-up">
            <span className="inline-block text-[12px] tracking-[0.2em] font-semibold text-crimson uppercase mb-4">
              Forged in Hebei · Trusted in Dubai
            </span>
            <h1 className="text-[44px] sm:text-[56px] lg:text-[78px] font-extrabold leading-[0.95] tracking-tight text-ink">
              FORGED FLANGES
              <br />
              <span className="text-crimson">&amp; PIPE FITTINGS</span>
            </h1>
            <p className="mt-7 text-[15px] lg:text-[16.5px] text-ink-soft max-w-xl mx-auto lg:mx-0 leading-relaxed">
              High-pressure flanges, fittings and pipes manufactured to ANSI,
              ASME, DIN, BS and JIS standards. Supplying the world&apos;s Oil
              &amp; Gas, Marine and Power industries since 1998.
            </p>
            <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link href="/products" className="btn-pill">
                View Catalog
              </Link>
              <Link href="/contact" className="btn-pill-outline">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Dotted divider at bottom */}
      <div className="dotted-band" />
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto">
      {/* outer ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-crimson/15" />
      <div className="absolute inset-6 rounded-full border-[2px] border-crimson/25" />
      <div className="absolute inset-14 rounded-full bg-white shadow-[0_30px_60px_-30px_rgba(27,78,143,0.45)]" />
      {/* bolt circle */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const r = 45;
        const x = 50 + Math.cos(a) * r;
        const y = 50 + Math.sin(a) * r;
        return (
          <span
            key={i}
            className="absolute w-3 h-3 rounded-full bg-crimson"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          />
        );
      })}
      {/* center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-[42px] font-bold text-crimson leading-none">B16.5</div>
        <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ink-mute">ANSI / ASME</div>
        <div className="mt-5 text-[12px] tracking-[0.2em] uppercase text-ink-mute">Class 150 → 1500</div>
      </div>
      {/* floating badges */}
      <div className="absolute -top-2 -right-2 bg-white rounded-full shadow-lg px-4 py-2 text-[11px] font-semibold text-crimson border border-blush-deep">
        ISO 9001
      </div>
      <div className="absolute -bottom-2 -left-2 bg-white rounded-full shadow-lg px-4 py-2 text-[11px] font-semibold text-crimson border border-blush-deep">
        TÜV · CE
      </div>
    </div>
  );
}

/* =========================== INTRO =========================== */

function Intro() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[920px] px-5 lg:px-8 text-center">
        <SectionHeading title="Leading Industrial Supplier" highlight="Dubai · UAE" />
        <div className="mt-9 space-y-5 text-[15px] lg:text-[16px] text-ink-soft leading-[1.85]">
          <p>
            OSTAR Group is a professional manufacturer of high-pressure flanges
            and pipe fittings — combining 28 years of forging expertise with a
            Dubai-based sales hub serving global industrial buyers. We are
            specialised in delivering critical pipeline hardware to clients who
            cannot compromise on integrity, certification or lead time.
          </p>
          <p>
            From an 880,000 sqm production complex in Hebei, China, we forge{" "}
            <strong className="text-ink">1,500 tons of flanges</strong> and{" "}
            <strong className="text-ink">1,000 tons of fittings</strong> per
            month — supplied to Oil &amp; Gas, Marine, Power and Construction
            projects across the GCC, Europe and beyond.
          </p>
          <p>
            If you&apos;re looking to source flanges or fittings to a specific
            standard, our team is ready to match your specification, grade and
            schedule — and have it shipped to any port. With{" "}
            <strong className="text-crimson">OSTAR&apos;s expertise</strong>, you
            elevate your project and trust your supply chain.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================== CLIENTS =========================== */

function Clients() {
  const logos = [
    "ADNOC",
    "Saudi Aramco",
    "Qatar Energy",
    "PETRONAS",
    "TotalEnergies",
    "Shell",
    "Sinopec",
    "ENOC",
  ];
  const doubled = [...logos, ...logos];
  return (
    <section className="py-14 lg:py-16 bg-white border-y border-line">
      <div className="text-center mb-10">
        <SectionHeading title="OUR CLIENTS" />
      </div>
      <div className="relative overflow-hidden">
        <div className="flex scroll-x gap-16 w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px] h-[80px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-[20px] font-bold tracking-tight text-ink-soft">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================== SERVICES =========================== */

function Services() {
  const services = [
    { icon: CircleDot, label: "Forged Flanges", href: "/products?family=Flanges" },
    { icon: Wrench, label: "Pipe Fittings", href: "/products?family=Fittings" },
    { icon: Pipette, label: "Steel Pipes", href: "/products?family=Pipes" },
    { icon: Layers, label: "Standards Library", href: "/products" },
    { icon: Factory, label: "Custom Forging", href: "/contact" },
    { icon: ShieldCheck, label: "Quality Certification", href: "/about#certifications" },
    { icon: Boxes, label: "Bulk Supply", href: "/contact" },
    { icon: Award, label: "Project Sourcing", href: "/contact" },
  ];
  return (
    <section className="py-16 lg:py-24 bg-blush-soft">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading title="What We Manufacture" highlight="& Supply" />
          <p className="mt-5 text-ink-mute max-w-xl mx-auto">
            Every flange family, every fitting class, every pipe schedule — to
            global pressure standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link href={s.href} key={s.label} className="group text-center">
                <div className="service-circle">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[14px] font-semibold uppercase tracking-wider text-ink group-hover:text-crimson transition-colors">
                  {s.label}
                </h3>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-pill">
            View All Products
          </Link>
          <Link href="/about" className="btn-pill-outline">
            View Company Profile
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================== FEATURED =========================== */

function Featured({ products }: { products: typeof import("@/lib/products").products }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading title="LATEST PRODUCTS" />
          <p className="mt-5 text-ink-mute max-w-xl mx-auto">
            A snapshot of OSTAR&apos;s most-specified products by global B2B
            buyers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products" className="btn-pill-outline">
            View All Products <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================== INSIGHTS / BLOG =========================== */

function Insights() {
  const cards = [
    {
      tag: "Standards",
      title: "Understanding ANSI B16.5 — Class 150 vs 300",
      blurb:
        "A practical guide to selecting the right pressure class for refinery, pipeline and process plant service.",
    },
    {
      tag: "Materials",
      title: "Carbon vs Alloy vs Stainless — when to specify which",
      blurb:
        "A buyer's overview of material trade-offs for high-temperature and corrosive flange service.",
    },
    {
      tag: "Logistics",
      title: "How OSTAR ships forged flanges to GCC ports",
      blurb:
        "Lead times, packaging, certifications and what we need from your project team.",
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading title="INDUSTRY INSIGHTS" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="rounded-xl overflow-hidden card-lift bg-ink text-white border border-line">
              <div className="h-44 bg-gradient-to-br from-ink to-crimson relative">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute top-4 left-4 bg-crimson px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider">
                  {c.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold leading-tight">{c.title}</h3>
                <p className="mt-3 text-[13.5px] text-white/70 leading-relaxed line-clamp-3">
                  {c.blurb}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-crimson hover:underline"
                >
                  Read more <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================== TESTIMONIALS =========================== */

function Testimonials() {
  const t = [
    {
      quote:
        "OSTAR delivered our ANSI B16.5 Class 600 flanges in exact spec, ahead of schedule. The third-party certification was clean and our QA team had zero rework. We'll be back for the next phase.",
      name: "Project Manager",
      org: "GCC Petrochemical EPC",
    },
    {
      quote:
        "Quotes came back inside 24 hours. Their team understood our DIN PN16 spec immediately, no back-and-forth on translations. Highly recommendable for European-spec projects.",
      name: "Procurement Lead",
      org: "Marine Engineering, Spain",
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-blush-soft">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading title="TESTIMONIALS" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.map((it, i) => (
            <div key={i} className="bg-white rounded-xl p-7 lg:p-9 border border-line card-lift">
              <Quote size={32} className="text-crimson" />
              <p className="mt-5 text-[15px] text-ink-soft leading-relaxed">
                {it.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-line">
                <div className="text-[15px] font-semibold text-ink">{it.name}</div>
                <div className="text-[12.5px] text-ink-mute">{it.org}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-pill-outline">
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
