/**
 * CSS-only intro overlay.
 * Shows immediately (even before JS hydration) and auto-fades out.
 * This is intentionally not "use client" so it always appears.
 */
export function IntroOverlay({
  name,
  roles,
}: {
  name: string;
  roles: string;
}) {
  // Lead with web dev (recruiters scan fast), but still signal networking.
  const lines = ["Web Apps", "UI/UX", "Dashboards", "Networking"];

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,183,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(96,165,250,0.12),transparent_55%)]" />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent [animation:intro_sweep_1.2s_ease-in-out_infinite]" />

      <div className="relative grid h-full place-items-center px-6">
        <div className="w-full max-w-3xl">
          <div className="intro-kicker text-[11px] font-semibold uppercase tracking-[0.5em] text-slate-400">
            Portfolio
          </div>
          <div className="intro-title mt-3 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            {name}
          </div>
          <div className="intro-sub mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            {roles}
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {lines.map((t, idx) => (
              <div
                key={t}
                className="intro-tile rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                style={{ animationDelay: `${520 + idx * 90}ms` }}
              >
                <span className="mr-2 text-emerald-300">◆</span>
                {t}
              </div>
            ))}
          </div>

          <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 rounded-full bg-emerald-300/90 [animation:introbar_1.1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
