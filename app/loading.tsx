export default function Loading() {
  return (
    <section className="bg-blush-soft min-h-[50vh] flex flex-col items-center justify-center py-32">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
        <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse [animation-delay:120ms]" />
        <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse [animation-delay:240ms]" />
      </div>
      <p className="mt-6 text-[11px] tracking-[0.25em] uppercase text-ink-mute font-semibold">
        Loading
      </p>
    </section>
  );
}
