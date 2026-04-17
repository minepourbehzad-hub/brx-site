"use client";

import React, { useMemo, useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Before and After",
  heightClass = "h-64 md:h-80",
}: {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  heightClass?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [pct, setPct] = useState(50);

  const clipStyle = useMemo(
    () => ({
      clipPath: `inset(0 ${100 - pct}% 0 0)`,
    }),
    [pct]
  );

  function onMove(clientX: number) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const next = Math.round((x / rect.width) * 100);
    setPct(next);
  }

  function onMouseMove(e: React.MouseEvent) {
    if (e.buttons !== 1) return; // فقط وقتی کلیک نگه داشته شده
    onMove(e.clientX);
  }

  function onTouchMove(e: React.TouchEvent) {
    onMove(e.touches[0]?.clientX || 0);
  }

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 ${heightClass}`}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* after image (base) */}
      <img
        src={afterSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />

      {/* before image (clipped) */}
      <img
        src={beforeSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain"
        style={clipStyle}
        draggable={false}
      />

      {/* divider */}
      <div
        className="absolute top-0 h-full w-[2px] bg-white/70"
        style={{ left: `${pct}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 px-3 py-2 text-xs text-white/80"
        style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
      >
        drag
      </div>

      {/* labels */}
      <div className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[11px] text-white/80">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[11px] text-white/80">
        After
      </div>
    </div>
  );
}
