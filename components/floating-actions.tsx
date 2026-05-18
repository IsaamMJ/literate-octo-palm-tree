"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { whatsappEnquiryUrl } from "@/lib/products";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappEnquiryUrl("General enquiry from website")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="float-action float-whatsapp"
      >
        <MessageCircle size={22} />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`float-action transition-opacity duration-300 ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
