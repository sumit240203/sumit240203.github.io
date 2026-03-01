"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = { label: string; href: string; hint?: string };

export function Cmdk({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k";
      const cmd = e.metaKey || e.ctrlKey;
      if (cmd && isK) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) => (i.label + " " + (i.hint ?? "")).toLowerCase().includes(s));
  }, [items, q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-24 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Command
          </div>
          <div className="ml-auto text-xs text-slate-500">Esc to close</div>
        </div>
        <div className="p-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages… (Ctrl/⌘ + K)"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-300/40"
          />
          <div className="mt-3 max-h-[340px] overflow-auto">
            {filtered.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold">{i.label}</div>
                  <div className="text-xs text-slate-500">{i.hint}</div>
                </div>
              </Link>
            ))}
            {!filtered.length ? (
              <div className="px-4 py-8 text-center text-sm text-slate-500">
                No results.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
