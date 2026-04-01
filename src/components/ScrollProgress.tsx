"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: "0%",
          background: "linear-gradient(to right, #34d399, #22d3ee, #818cf8)",
          boxShadow: "0 0 8px rgba(110,231,183,0.7)",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}
