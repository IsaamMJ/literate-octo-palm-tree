"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { company } from "@/lib/products";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/products?family=Flanges", label: "Catalog" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR — crimson info strip */}
      <div className="bg-crimson text-white text-[12px]">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <Mail size={13} className="shrink-0" />
            <a href={`mailto:${company.contact.china.email}`} className="hover:underline truncate">
              {company.contact.china.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <a href={`tel:${company.contact.china.mobile.replace(/\s/g,"")}`} className="flex items-center gap-2 hover:underline">
              <Phone size={12} /> {company.contact.china.mobile}
            </a>
            <a href={`tel:${company.contact.china.phone.replace(/\s/g,"")}`} className="hidden md:flex items-center gap-2 hover:underline">
              <Phone size={12} /> {company.contact.china.phone}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_24px_-12px_rgba(31,31,31,0.12)]" : ""
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="h-[78px] flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="OSTAR Group home">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-[14px] font-medium text-ink-soft hover:text-crimson transition-colors duration-200 relative group"
                >
                  {n.label}
                  <span className="absolute left-0 right-0 -bottom-1.5 mx-auto w-0 h-[2px] bg-crimson group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-pill">
                Enquire Now
                <ChevronDown size={14} className="-rotate-90" />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 text-ink"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white flex flex-col">
            <div className="h-9 bg-crimson" />
            <div className="flex items-center justify-between p-5 border-b border-line">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col p-5 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 px-3 text-[16px] font-medium text-ink hover:bg-blush-soft rounded-md transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-line space-y-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-pill w-full justify-center"
              >
                Enquire Now
              </Link>
              <div className="text-xs text-ink-mute space-y-1.5 pt-2">
                <div className="flex items-center gap-2"><Phone size={12} className="text-crimson" /> {company.contact.china.mobile}</div>
                <div className="flex items-center gap-2"><Mail size={12} className="text-crimson" /> {company.contact.china.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Logo() {
  return (
    <div className="flex flex-col leading-none">
      <span className="text-[26px] font-bold tracking-tight text-crimson">
        ostar<span className="text-ink">group</span>
      </span>
      <span className="text-[9px] tracking-[0.35em] text-ink-mute uppercase mt-1">
        Flanges · Fittings · Pipes
      </span>
    </div>
  );
}
