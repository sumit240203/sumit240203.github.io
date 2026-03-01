"use client";

import Link from "next/link";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <button
        className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10 sm:inline-flex"
        onClick={() => {
          const e = new KeyboardEvent("keydown", {
            key: "k",
            metaKey: true,
            bubbles: true,
          });
          window.dispatchEvent(e);
        }}
        type="button"
      >
        ⌘K
      </button>
      <Link
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
        href="/resume.pdf"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );
}
