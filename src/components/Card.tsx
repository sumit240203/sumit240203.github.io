import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(110,231,183,0.22), rgba(59,130,246,0.16), rgba(255,255,255,0))",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
