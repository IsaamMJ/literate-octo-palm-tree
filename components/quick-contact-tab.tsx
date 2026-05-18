"use client";

import Link from "next/link";

export function QuickContactTab() {
  return (
    <Link href="/contact" className="quick-contact-tab hidden md:inline-flex items-center justify-center">
      Quick Contact
    </Link>
  );
}
