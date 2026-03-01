"use client";

import { useEffect, useState } from "react";

export function WelcomeIntro() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("out"), 1600);
    const t2 = window.setTimeout(() => setPhase("done"), 2050);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={
        "fixed inset-0 z-[200] grid place-items-center bg-slate-950 transition-opacity duration-500 " +
        (phase === "out" ? "opacity-0" : "opacity-100")
      }
    >
      <div className="text-center">
        <div className="mx-auto h-14 w-14 rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]" />
        <div className="mt-5 text-xs uppercase tracking-[0.35em] text-slate-400">Welcome</div>
        <div className="mt-2 text-2xl font-semibold text-slate-100">Sumit Niveriya</div>
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-emerald-300 [animation:introbar_1.1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
