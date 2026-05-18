"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const families = ["All", "Flanges", "Fittings", "Pipes"] as const;
const standardFamilies = ["All", "ANSI", "ASME", "DIN", "BS", "JIS", "Multiple"];

export function ProductsBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const initialFamily = (params.get("family") as (typeof families)[number]) ?? "All";
  const [family, setFamily] = useState<(typeof families)[number]>(
    families.includes(initialFamily) ? initialFamily : "All",
  );
  const [stdFamily, setStdFamily] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (family !== "All" && p.family !== family) return false;
      if (stdFamily !== "All" && p.standardFamily !== stdFamily) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = (
          p.name +
          " " +
          p.tagline +
          " " +
          p.variants.flatMap((v) => [...v.standards, ...v.types]).join(" ")
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [family, stdFamily, query]);

  function updateFamily(f: (typeof families)[number]) {
    setFamily(f);
    const sp = new URLSearchParams(params.toString());
    if (f === "All") sp.delete("family");
    else sp.set("family", f);
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }

  return (
    <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
      {/* Filter bar */}
      <div className="bg-blush-soft rounded-2xl p-5 lg:p-6 mb-10 border border-line">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-crimson mb-2">
              Product Family
            </div>
            <div className="flex flex-wrap gap-2">
              {families.map((f) => (
                <button
                  key={f}
                  onClick={() => updateFamily(f)}
                  className={`text-[12.5px] font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                    family === f
                      ? "bg-crimson text-white"
                      : "bg-white text-ink-soft hover:bg-blush-deep"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-crimson mb-2">
              Standard
            </div>
            <div className="flex flex-wrap gap-2">
              {standardFamilies.map((s) => (
                <button
                  key={s}
                  onClick={() => setStdFamily(s)}
                  className={`text-[12.5px] font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                    stdFamily === s
                      ? "bg-crimson text-white"
                      : "bg-white text-ink-soft hover:bg-blush-deep"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-72">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-crimson mb-2">
              Search
            </div>
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
              />
              <input
                type="search"
                placeholder="Size, grade, standard…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="field pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="text-[13px] text-ink-mute">
          Showing <strong className="text-ink">{filtered.length}</strong> {filtered.length === 1 ? "product" : "products"}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto">
            <Search size={26} className="text-crimson" />
          </div>
          <p className="mt-6 text-[22px] font-semibold text-ink">No matches found</p>
          <p className="mt-2 text-ink-mute">Try a different filter or search term.</p>
        </div>
      )}
    </div>
  );
}
