"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const services = [
  { label: "Renovation", href: "/services/renovation" },
  { label: "Smart Home", href: "/services/smart-home" },
  { label: "Security Cameras", href: "/services/security-cameras" },
];

const nav = [
    { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "text-sm transition-colors",
        "text-white/70 hover:text-white",
        active ? "text-white" : "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openNow() {
    clearCloseTimer();
    setOpen(true);
  }

  function closeWithDelay() {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 220);
  }

  // بستن با کلیک بیرون
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // تغییر مسیر => منو بسته
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo => Home */}
        <Link href="/" className="flex flex-col leading-none overflow-hidden">
  <span className="text-2xl md:text-3xl font-bold tracking-[0.28em] text-white">
    BRX
  </span>
  <span className="mt-1 text-[10px] md:text-xs tracking-[0.22em] text-white/60">
    BUILD • RELIABLE • EXECUTION
  </span>
  
  
</Link>

        {/* Desktop nav همیشه نمایش داده شود (Menu حذف شد) */}
     <nav className="flex items-center gap-7">
  <NavLink href="/" active={pathname === "/"}>
    Home
  </NavLink>

  {/* Services dropdown */}
  <div
    ref={wrapRef}
    className="relative"
    onMouseEnter={openNow}
    onMouseLeave={closeWithDelay}
  >
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="text-sm text-white/70 hover:text-white transition-colors"
    >
      Services
    </button>

    {open && (
      <div
        className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl"
        onMouseEnter={openNow}
        onMouseLeave={closeWithDelay}
      >
        <div className="grid gap-1">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>

  {nav
    .filter((n) => n.href !== "/")
    .map((n) => (
      <NavLink key={n.href} href={n.href} active={pathname === n.href}>
        {n.label}
      </NavLink>
    ))}
</nav>

        {/* CTA (دیگه سفیدِ کامل نیست) */}
        <Link
          href="/contact"
          className={[
            "rounded-full px-4 py-2 text-sm",
            "border border-white/15 bg-white/5 text-white",
            "hover:bg-white/10 transition-colors",
          ].join(" ")}
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
}
