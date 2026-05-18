import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/products";

export function Footer() {
  return (
    <>
      {/* Bottom "Connect with our team" CTA section */}
      <section className="relative bg-blush overflow-hidden">
        <div className="dotted-band" />
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-bold leading-[1.1] text-ink tracking-tight">
                <span className="text-crimson">+971 4 123 4567</span>
                <br />
                <span className="text-crimson">+971 57 344 1099</span>
              </h2>
              <p className="mt-6 text-ink-mute text-[15px] max-w-md mx-auto lg:mx-0">
                We&apos;d love to help, share your specs.
              </p>
              <h3 className="mt-2 text-[22px] md:text-[26px] font-semibold text-ink">
                CONNECT WITH OUR TEAM
              </h3>
              <div className="mt-7 flex justify-center lg:justify-start">
                <Link href="/contact" className="btn-pill">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-[220px] h-[220px] rounded-full bg-crimson text-white flex flex-col items-center justify-center text-center px-6 shadow-[0_20px_50px_-20px_rgba(27,78,143,0.55)]">
                <div className="text-[28px] font-bold tracking-tight leading-none">ostar<span className="font-light">group</span></div>
                <div className="mt-3 text-[10px] tracking-[0.3em] uppercase">Dubai · Hebei</div>
                <div className="mt-4 flex items-start gap-1.5 text-[11px] leading-snug">
                  <MapPin size={11} className="mt-0.5 shrink-0" />
                  <span>{company.contact.dubai.address}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a aria-label="Facebook" href="#" className="w-7 h-7 rounded-full bg-white/15 hover:bg-white hover:text-crimson flex items-center justify-center text-[11px] font-bold transition-colors">f</a>
                  <a aria-label="Instagram" href="#" className="w-7 h-7 rounded-full bg-white/15 hover:bg-white hover:text-crimson flex items-center justify-center text-[10px] font-bold transition-colors">ig</a>
                  <a aria-label="LinkedIn" href="#" className="w-7 h-7 rounded-full bg-white/15 hover:bg-white hover:text-crimson flex items-center justify-center text-[10px] font-bold transition-colors">in</a>
                  <a aria-label="YouTube" href="#" className="w-7 h-7 rounded-full bg-white/15 hover:bg-white hover:text-crimson flex items-center justify-center text-[10px] font-bold transition-colors">yt</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links footer band */}
      <footer className="bg-white border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <FooterCol title="Quick Links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/products" className="footer-link">Products</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </FooterCol>
            <FooterCol title="Our Products">
              <Link href="/products?family=Flanges" className="footer-link">Flanges</Link>
              <Link href="/products?family=Fittings" className="footer-link">Fittings</Link>
              <Link href="/products?family=Pipes" className="footer-link">Pipes</Link>
              <Link href="/products" className="footer-link">All Standards</Link>
            </FooterCol>
            <FooterCol title="Standards">
              <span className="footer-link">ANSI · ASME</span>
              <span className="footer-link">DIN · EN</span>
              <span className="footer-link">BS 4504</span>
              <span className="footer-link">JIS · KS</span>
            </FooterCol>
            <FooterCol title="Get In Touch">
              <span className="footer-link flex items-start gap-2"><MapPin size={13} className="text-crimson mt-1 shrink-0" /> {company.contact.dubai.address}</span>
              <a href={`tel:${company.contact.china.mobile.replace(/\s/g,"")}`} className="footer-link flex items-center gap-2"><Phone size={13} className="text-crimson" /> {company.contact.china.mobile}</a>
              <a href={`mailto:${company.contact.china.email}`} className="footer-link flex items-center gap-2"><Mail size={13} className="text-crimson" /> {company.contact.china.email}</a>
            </FooterCol>
          </div>

          <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-ink-mute">
            <div>© {new Date().getFullYear()} OSTAR Group. All Rights Reserved.</div>
            <div className="flex items-center gap-4">
              <span>ISO 9001</span>
              <span className="w-1 h-1 rounded-full bg-line-strong" />
              <span>TÜV</span>
              <span className="w-1 h-1 rounded-full bg-line-strong" />
              <span>CE / PED</span>
              <span className="w-1 h-1 rounded-full bg-line-strong" />
              <span>API 6L</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-link {
          display: block;
          font-size: 13.5px;
          color: var(--ink-mute);
          padding: 4px 0;
          transition: color 200ms;
        }
        .footer-link:hover { color: var(--crimson); }
      `}</style>
    </>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold text-crimson uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
