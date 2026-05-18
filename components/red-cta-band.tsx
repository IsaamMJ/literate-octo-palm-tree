import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function RedCtaBand({
  title,
  highlight,
  button,
  href,
}: {
  title: string;
  highlight: string;
  button: string;
  href: string;
}) {
  return (
    <section className="relative">
      <div className="dotted-band" />
      <div className="bg-crimson text-white py-7">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <p className="text-[22px] md:text-[28px] font-medium tracking-tight">
            {title} <span className="font-bold">{highlight}</span>
          </p>
          <Link href={href} className="btn-pill-white shrink-0">
            {button}
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
      <div className="dotted-band" />
    </section>
  );
}
