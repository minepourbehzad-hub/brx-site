import Link from "next/link";

export default function ServiceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
    >
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-6 text-white/70">{desc}</p>
      <div className="mt-6 h-px w-full bg-white/10" />
      <p className="mt-4 text-xs text-white/50">View details →</p>
    </Link>
  );
}
