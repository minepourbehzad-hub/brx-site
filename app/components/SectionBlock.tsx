import Link from "next/link";

export default function SectionBlock({
  id,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 pb-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-white/70">{subtitle}</p>
          )}
        </div>

        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="hidden md:inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            {ctaLabel}
          </Link>
        )}
      </div>

      {children}
    </section>
  );
}
