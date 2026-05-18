import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative bg-blush min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-20 text-center">
        <div className="text-[120px] md:text-[180px] font-extrabold text-crimson leading-none tracking-tighter">
          404
        </div>
        <h1 className="mt-2 text-[28px] md:text-[36px] font-bold text-ink">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-lg mx-auto text-ink-soft">
          The page you&apos;re looking for isn&apos;t in this catalog. Try the
          product index or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-pill">
            Back to Home
          </Link>
          <Link href="/products" className="btn-pill-outline">
            Browse Products
          </Link>
        </div>
      </div>
      <div className="dotted-band absolute inset-x-0 bottom-0" />
    </section>
  );
}
