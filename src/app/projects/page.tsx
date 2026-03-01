import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { projects } from "@/content/site";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <Link
              href="/"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              ← Home
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Case studies with decisions, tradeoffs, and what I learned.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.slug}>
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <Link
                    href={`/projects/${p.slug}/`}
                    className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    Open →
                  </Link>
                </div>
                <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
