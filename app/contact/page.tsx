import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./form";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { company, whatsappEnquiryUrl } from "@/lib/products";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact OSTAR Group",
  description:
    "Request a quote, send your tender, or message us on WhatsApp. Dubai sales hub plus China manufacturing — quotes within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-blush py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 text-center">
          <span className="inline-block text-[12px] tracking-[0.2em] font-semibold text-crimson uppercase mb-3">
            Contact Us
          </span>
          <h1 className="text-[40px] md:text-[58px] font-extrabold tracking-tight leading-[1.05] text-ink">
            Send Your <span className="text-crimson">Tender.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft text-[15px] leading-relaxed">
            Standard, grade, schedule and quantity. We&apos;ll quote back with
            lead time inside 24 hours.
          </p>
        </div>
        <div className="dotted-band absolute inset-x-0 -bottom-3" />
      </section>

      {/* Quick channels */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <QuickCard
              icon={MessageCircle}
              title="WhatsApp"
              detail="Fastest response during GST hours"
              cta="Open Chat"
              href={whatsappEnquiryUrl("General enquiry from website")}
              external
            />
            <QuickCard
              icon={Mail}
              title="Email"
              detail={company.contact.china.email}
              cta="Send Mail"
              href={`mailto:${company.contact.china.email}`}
            />
            <QuickCard
              icon={Phone}
              title="Phone"
              detail={company.contact.china.phone}
              cta="Call Now"
              href={`tel:${company.contact.china.phone.replace(/\s/g, "")}`}
            />
          </div>
        </div>
      </section>

      {/* Form + offices */}
      <section className="py-14 lg:py-16 bg-blush-soft">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="Request A" highlight="Quote" />
            <p className="mt-4 text-ink-mute max-w-xl mx-auto">
              Tell us about your project. Our sales team responds within
              one business day.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 bg-white rounded-2xl p-7 lg:p-9 border border-line">
              <Suspense fallback={<div className="text-ink-mute">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
            <aside className="lg:col-span-5 space-y-5">
              <OfficeCard
                title={company.contact.dubai.label}
                name={company.contact.dubai.company}
                address={company.contact.dubai.address}
              />
              <OfficeCard
                title={company.contact.china.label}
                name={company.contact.china.company}
                address={company.contact.china.address}
                phone={company.contact.china.phone}
                mobile={company.contact.china.mobile}
                email={company.contact.china.email}
              />
              <div className="bg-crimson text-white rounded-2xl p-7">
                <h3 className="text-[13px] font-semibold uppercase tracking-wider opacity-80 mb-3">
                  Lead Time
                </h3>
                <p className="text-[28px] font-extrabold leading-tight">24-hour quote response.</p>
                <p className="mt-3 text-[13.5px] text-white/85 leading-relaxed">
                  Standard SKUs ship from stock. Non-standard items quoted with
                  forging schedule attached.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function QuickCard({
  icon: Icon,
  title,
  detail,
  cta,
  href,
  external,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  detail: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group block bg-white rounded-2xl border border-line p-7 card-lift"
    >
      <div className="service-circle !w-16 !h-16 !mx-0">
        <Icon size={24} strokeWidth={1.7} />
      </div>
      <h3 className="mt-5 text-[20px] font-bold text-ink">{title}</h3>
      <p className="mt-1 text-[13.5px] text-ink-mute break-all">{detail}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-crimson">
        {cta} →
      </span>
    </a>
  );
}

function OfficeCard({
  title,
  name,
  address,
  phone,
  mobile,
  email,
}: {
  title: string;
  name: string;
  address: string;
  phone?: string;
  mobile?: string;
  email?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-line p-7">
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-crimson mb-4">
        {title}
      </h3>
      <p className="text-[17px] font-semibold text-ink mb-3">{name}</p>
      <p className="text-[13.5px] text-ink-soft flex items-start gap-2 mb-4">
        <MapPin size={15} className="text-crimson shrink-0 mt-0.5" />
        {address}
      </p>
      <div className="space-y-1.5 text-[13.5px] text-ink-soft border-t border-line pt-4">
        {phone && (
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-crimson">
            <Phone size={13} className="text-crimson" /> {phone}
          </a>
        )}
        {mobile && (
          <a href={`tel:${mobile.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-crimson">
            <Phone size={13} className="text-crimson" /> {mobile}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-crimson break-all">
            <Mail size={13} className="text-crimson shrink-0" /> {email}
          </a>
        )}
      </div>
    </div>
  );
}
