import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { projects } from "@/content/site";

// Required for static export of dynamic routes on GitHub Pages
export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  // In some Next.js versions/environments, params may be async.
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);

  // Special-case: PeachTrack has a dedicated page with a gallery
  if (slug === "peachtrack") {
    // Dedicated route exists at /projects/peachtrack/
  }

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

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

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">{project.name}</h1>
          <p className="mt-3 max-w-3xl text-base text-slate-300">{project.blurb}</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Highlights</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-slate-400">Stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links?.length ? (
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-slate-400">Links</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </Card>
          </div>

          {project.image ? (
            <div className="mt-6">
              <Card>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={720}
                  className="h-auto w-full rounded-xl border border-white/10"
                />
              </Card>
            </div>
          ) : null}

        </div>
      </Container>
    </div>
  );
}
