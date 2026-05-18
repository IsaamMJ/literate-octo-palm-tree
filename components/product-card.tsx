import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const ratings = product.variants.map((v) => v.rating).slice(0, 3);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-xl border border-line hover:border-crimson/30 card-lift overflow-hidden"
    >
      <div className="aspect-[5/4] bg-blush-soft relative overflow-hidden flex items-center justify-center">
        <ProductIllustration family={product.family} />
        <div className="absolute top-3 left-3 inline-flex items-center bg-white/85 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider text-crimson">
          {product.standardFamily}
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-crimson text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>
      <div className="p-5 lg:p-6 flex flex-col gap-3">
        <h3 className="text-[18px] font-semibold leading-tight text-ink group-hover:text-crimson transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[13px] text-ink-mute leading-relaxed line-clamp-2">
          {product.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
          {ratings.map((r) => (
            <span
              key={r}
              className="text-[10.5px] uppercase tracking-wider font-medium text-ink-mute bg-blush-soft px-2.5 py-1 rounded-full"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ProductIllustration({ family }: { family: Product["family"] }) {
  if (family === "Flanges") {
    return (
      <svg viewBox="0 0 280 220" className="w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-105" fill="none">
        <circle cx="140" cy="110" r="90" stroke="#1B4E8F" strokeOpacity="0.22" strokeWidth="1.5" />
        <circle cx="140" cy="110" r="68" stroke="#1B4E8F" strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="140" cy="110" r="30" stroke="#1B4E8F" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="140" cy="110" r="24" fill="#F2F7FB" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x = 140 + Math.cos(a) * 78;
          const y = 110 + Math.sin(a) * 78;
          return <circle key={i} cx={x} cy={y} r="5" fill="#1B4E8F" />;
        })}
      </svg>
    );
  }
  if (family === "Fittings") {
    return (
      <svg viewBox="0 0 280 220" className="w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-105" fill="none">
        <path d="M30 110 H130 Q160 110 160 140 V210" stroke="#1B4E8F" strokeOpacity="0.55" strokeWidth="34" strokeLinecap="round" />
        <path d="M30 110 H130 Q160 110 160 140 V210" stroke="#1B4E8F" strokeWidth="1.5" fill="none" />
        <circle cx="160" cy="210" r="6" fill="#1B4E8F" />
        <circle cx="30" cy="110" r="6" fill="#1B4E8F" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 220" className="w-4/5 h-3/4 transition-transform duration-500 group-hover:scale-105" fill="none">
      <rect x="20" y="80" width="240" height="60" rx="6" fill="#1B4E8F" fillOpacity="0.18" />
      <rect x="20" y="80" width="240" height="60" rx="6" stroke="#1B4E8F" strokeOpacity="0.55" />
      <line x1="20" y1="80" x2="20" y2="160" stroke="#1B4E8F" strokeOpacity="0.4" strokeDasharray="3 3" />
      <line x1="260" y1="80" x2="260" y2="160" stroke="#1B4E8F" strokeOpacity="0.4" strokeDasharray="3 3" />
      <text x="140" y="178" fill="#1B4E8F" fontSize="10" textAnchor="middle">SCH 5 — XXS</text>
    </svg>
  );
}
