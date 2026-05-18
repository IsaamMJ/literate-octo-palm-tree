"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="relative bg-blush min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 text-center">
        <div className="text-[80px] md:text-[120px] font-extrabold text-crimson leading-none tracking-tighter">
          !
        </div>
        <h1 className="mt-2 text-[28px] md:text-[36px] font-bold text-ink">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-lg mx-auto text-ink-soft">
          An unexpected error occurred while loading this page. Try again, or
          head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn-pill">
            Try again
          </button>
          <Link href="/" className="btn-pill-outline">
            Back to Home
          </Link>
        </div>
      </div>
      <div className="dotted-band absolute inset-x-0 bottom-0" />
    </section>
  );
}
