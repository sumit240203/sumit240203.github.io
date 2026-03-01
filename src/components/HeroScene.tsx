"use client";

import { useEffect, useRef } from "react";

export function HeroScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--px", String(x));
        el.style.setProperty("--py", String(y));
      });
    };

    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-100"
        style={{
          background:
            "radial-gradient(900px circle at calc(50% + (var(--px, 0) * 160px)) calc(20% + (var(--py, 0) * 120px)), rgba(110,231,183,0.18), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-100"
        style={{
          background:
            "radial-gradient(700px circle at calc(65% + (var(--px, 0) * 140px)) calc(40% + (var(--py, 0) * 120px)), rgba(96,165,250,0.14), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
