import type { ReactNode } from "react";

export function MovingBorderCard({ children }: { children: ReactNode }) {
  return (
    <div className="moving-border-wrapper group">
      <div className="moving-border-gradient" aria-hidden="true" />
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none" />
      <div className="relative rounded-2xl bg-slate-900/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(110,231,183,0.12), rgba(0,212,255,0.08), transparent)",
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
