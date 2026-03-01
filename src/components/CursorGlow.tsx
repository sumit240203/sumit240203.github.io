"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // default position so it shows even before moving the mouse
    el.style.setProperty("--x", `${Math.round(window.innerWidth * 0.35)}px`);
    el.style.setProperty("--y", `${Math.round(window.innerHeight * 0.25)}px`);

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-100 mix-blend-screen"
        style={{
          background:
            "radial-gradient(540px circle at var(--x) var(--y), rgba(110,231,183,0.28), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-80 mix-blend-screen"
        style={{
          background:
            "radial-gradient(380px circle at var(--x) var(--y), rgba(96,165,250,0.18), transparent 60%)",
        }}
      />
    </div>
  );
}
