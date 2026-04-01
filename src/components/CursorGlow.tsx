"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = window.innerWidth  * 0.35;
    let my = window.innerHeight * 0.25;
    let tx = mx, ty = my; // trailed position
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      // Smooth lag for trail
      tx += (mx - tx) * 0.07;
      ty += (my - ty) * 0.07;

      const dot   = dotRef.current;
      const ring  = ringRef.current;
      const trail = trailRef.current;

      if (dot)   dot.style.transform   = `translate(${mx - 4}px, ${my - 4}px)`;
      if (ring)  ring.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (trail) trail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[998] overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Small bright dot — instant follow */}
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#6ee7b7",
          boxShadow: "0 0 10px 2px rgba(110,231,183,0.9), 0 0 20px 4px rgba(110,231,183,0.4)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      />

      {/* 2. Mid ring — instant follow, faint border */}
      <div
        ref={ringRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1px solid rgba(110,231,183,0.45)",
          background: "radial-gradient(circle, rgba(110,231,183,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
          willChange: "transform",
          animation: "cursor-ring-pulse 2.2s ease-in-out infinite",
        }}
      />

      {/* 3. Large trailing aura */}
      <div
        ref={trailRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,231,183,0.18) 0%, rgba(0,212,255,0.09) 40%, transparent 68%)",
          filter: "blur(6px)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      />
    </div>
  );
}
