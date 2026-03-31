import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { peachtrackScreens } from "./gallery";

export default function PeachTrackPage() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/projects/"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              ← All projects
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Home
            </Link>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            PeachTrack — Shift & Tip Dashboard
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-300">
            Role-based PHP + MySQL app built around a real workflow. Designed to make data entry
            simple, reduce mistakes, and give managers reporting that’s easy to understand.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">What it does</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Employee mode: start/end shifts, enter tips and sales</li>
                <li>Manager mode: manage users/shifts and run reports</li>
                <li>Payroll-style summaries and exports</li>
              </ul>
            </Card>
            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Design focus</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>Clear labels, validation rules, and feedback states</li>
                <li>Consistent navigation + card-based layout</li>
                <li>Responsive layout for smaller screens</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Screens</h2>
                <p className="mt-2 text-sm text-slate-300">
                  A quick visual walkthrough of key pages.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {peachtrackScreens.map((s) => (
                <Card key={s.src}>
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={s.src}
                      alt={s.title}
                      width={1400}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
