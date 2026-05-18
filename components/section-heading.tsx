import clsx from "clsx";

export function SectionHeading({
  title,
  highlight,
  className,
}: {
  title: string;
  highlight?: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "section-heading text-[26px] md:text-[32px] font-bold text-ink tracking-tight",
        className,
      )}
    >
      <span>
        {title}
        {highlight && <span className="text-crimson"> {highlight}</span>}
      </span>
    </h2>
  );
}
