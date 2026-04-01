"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { HeaderActions } from "@/components/HeaderActions";
import { HeroScene } from "@/components/HeroScene";
import { certifications, experience, projects, site, skills } from "@/content/site";

import { Cmdk } from "@/components/Cmdk";
import { CursorGlow } from "@/components/CursorGlow";
import { Reveal } from "@/components/Reveal";
import { TypewriterText } from "@/components/TypewriterText";
import dynamic from "next/dynamic";
import { MovingBorderCard } from "@/components/MovingBorderCard";
import { Marquee } from "@/components/Marquee";

const Hero3D = dynamic(
  () => import("@/components/Hero3D").then((m) => ({ default: m.Hero3D })),
  { ssr: false }
);

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const skillItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-10%] h-[520px] w-[720px] rounded-full bg-emerald-300/18 blur-[95px] [animation:floaty_9s_ease-in-out_infinite]" />
        <div className="absolute right-[-20%] top-[0%] h-[520px] w-[720px] rounded-full bg-blue-500/18 blur-[95px] [animation:floaty_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[520px] w-[720px] rounded-full bg-emerald-300/14 blur-[110px] [animation:floaty_11s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-[0.22]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">{site.name}</span>
              <span className="mx-2 text-white/20">•</span>
              <span>{site.title}</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
              <a className="nav-link hover:text-white" href="#projects">
                Projects
              </a>
              <a className="nav-link hover:text-white" href="#skills">
                Skills
              </a>
              <a className="nav-link hover:text-white" href="#certifications">
                Certifications
              </a>
              <a className="nav-link hover:text-white" href="#experience">
                Experience
              </a>
              <a className="nav-link hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
            <HeaderActions />
          </div>
        </Container>
      </header>

      <CursorGlow />
      <Cmdk
        items={[
          { label: "Home", href: "/", hint: "Overview" },
          { label: "Projects", href: "/projects/", hint: "All projects" },
          { label: "PeachTrack case study", href: "/projects/peachtrack/", hint: "UI + reporting" },
          { label: "Auth system", href: "/projects/auth-system/", hint: "PHP/MySQL" },
          { label: "IT support portfolio", href: "/projects/it-support/", hint: "Docs" },
          { label: "E-Commerce Inventory DB", href: "/projects/ecommerce-inventory/", hint: "MySQL + SQL" },
        ]}
      />

      <main>
        <HeroScene>
          <Hero3D />
          <section className="relative z-10 py-14 sm:py-20">
            <Container>
              <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="show"
                className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
              >
                <div>
                  <motion.div variants={heroItem}>
                    <Badge>{site.opening.badge}</Badge>
                  </motion.div>
                  <motion.h1
                    variants={heroItem}
                    className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
                  >
                    <TypewriterText />
                  </motion.h1>
                  <motion.p
                    variants={heroItem}
                    className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
                  >
                    {site.opening.subhead}
                  </motion.p>
                  <motion.div
                    variants={heroItem}
                    className="mt-7 flex flex-wrap gap-3"
                  >
                    <a href="#projects" className="shimmer-btn">
                      <span className="shimmer-btn-shine" aria-hidden="true" />
                      <span className="relative z-10">View work</span>
                    </a>
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noopener"
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noopener"
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </motion.div>
                </div>

                <motion.div variants={heroItem}>
                  <MovingBorderCard>
                    {/* Profile photo + name */}
                    <div className="flex items-center gap-4">
                      {/* Spinning gradient ring around photo */}
                      <div className="relative h-[88px] w-[88px] shrink-0">
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "conic-gradient(from 0deg, #6ee7b7, #00d4ff, #818cf8, #6ee7b7)",
                            animation: "spin-border 4s linear infinite",
                            padding: "2px",
                          }}
                        >
                          <div className="h-full w-full rounded-full bg-slate-950" />
                        </div>
                        <Image
                          src="/profile.jpg"
                          alt="Profile photo"
                          width={84}
                          height={84}
                          className="absolute inset-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-full object-cover"
                          priority
                        />
                        {/* Online dot */}
                        <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
                        </span>
                      </div>

                      <div className="min-w-0">
                        <div className="font-semibold text-slate-100">{site.name}</div>
                        <div className="mt-0.5 text-xs text-slate-400 leading-snug">{site.title}</div>
                        <div className="mt-1 text-xs text-slate-500">{site.location}</div>
                      </div>
                    </div>

                    {/* Available badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/[0.08] px-3 py-1 text-xs font-medium text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Open to co-op &amp; internships
                    </div>

                    {/* Quick stats */}
                    <div className="mt-4 grid grid-cols-3 divide-x divide-white/[0.06] rounded-xl border border-white/[0.06] bg-white/[0.03]">
                      <div className="py-3 text-center">
                        <div className="text-lg font-bold text-slate-100">5</div>
                        <div className="text-[10px] text-slate-500">Projects</div>
                      </div>
                      <div className="py-3 text-center">
                        <div className="text-lg font-bold text-slate-100">2</div>
                        <div className="text-[10px] text-slate-500">Certs</div>
                      </div>
                      <div className="py-3 text-center">
                        <div className="text-lg font-bold text-slate-100">2+</div>
                        <div className="text-[10px] text-slate-500">Yrs exp</div>
                      </div>
                    </div>

                    {/* Email + social links */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <a
                        className="truncate text-xs text-slate-400 transition-colors hover:text-slate-200"
                        href={`mailto:${site.email}`}
                      >
                        {site.email}
                      </a>
                      <div className="flex shrink-0 gap-2">
                        <a
                          href={site.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          LinkedIn
                        </a>
                        <a
                          href={site.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>

                    {/* Focus area */}
                    <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">Currently focused on</div>
                      <div className="mt-1.5 text-xs leading-relaxed text-slate-300">
                        Building portfolio‑ready web projects, strengthening networking fundamentals,
                        and improving UI/UX clarity in every app I ship.
                      </div>
                    </div>
                  </MovingBorderCard>
                </motion.div>
              </motion.div>
            </Container>
          </section>
        </HeroScene>

        <section id="projects" className="py-10">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-300">
                  A few things I&apos;ve built recently. I prefer projects with real workflows,
                  clear requirements, and measurable improvements.
                </p>
              </div>
              <Link
                href="/projects/"
                className="hidden text-sm font-semibold text-emerald-300 hover:text-emerald-200 sm:block"
              >
                View all →
              </Link>
            </div>

            <motion.div
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-6 grid gap-5 md:grid-cols-2"
            >
              {projects.slice(0, 2).map((p) => (
                <motion.div key={p.slug} variants={gridItem}>
                  <MovingBorderCard>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <Link
                        href={`/projects/${p.slug}/`}
                        className="shrink-0 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                      >
                        Case study →
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
                  </MovingBorderCard>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-5">
              <Link
                href="/projects/"
                className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 sm:hidden"
              >
                View all projects →
              </Link>
            </div>
          </Container>
        </section>

        <section id="skills" className="py-10">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <div className="mt-8 space-y-4">
              <Marquee>
                {[...skills.languages, ...skills.databases].map((s) => (
                  <span
                    key={s}
                    className="inline-flex shrink-0 items-center rounded-full border border-emerald-300/25 bg-emerald-300/[0.07] px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur"
                  >
                    {s}
                  </span>
                ))}
              </Marquee>
              <Marquee reverse>
                {[...skills.networking, ...skills.tools].map((s) => (
                  <span
                    key={s}
                    className="inline-flex shrink-0 items-center rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur"
                  >
                    {s}
                  </span>
                ))}
              </Marquee>
            </div>
          </Container>
        </section>

        <section id="certifications" className="py-10">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
            <div className="mt-6">
              <Card>
                <ul className="divide-y divide-white/5">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-slate-100">{c.name}</span>
                      <span className="text-slate-400">{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        <section id="experience" className="py-10">
          <Reveal delayMs={40}>
            <Container>
              <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
              <div className="mt-6 grid gap-5">
                {experience.map((e) => (
                  <Card key={e.role + e.dates}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="text-lg font-semibold">{e.role}</div>
                      <div className="text-sm text-slate-400">{e.dates}</div>
                    </div>
                    <div className="mt-1 text-sm text-slate-300">{e.org}</div>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </Container>
          </Reveal>
        </section>

        <section id="contact" className="py-14">
          <Reveal delayMs={0}>
            <Container>
              <Card>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Let&apos;s talk</h2>
                    <p className="mt-2 text-sm text-slate-300">
                      Best way to reach me is email. I&apos;m open to web development roles and
                      networking-focused IT opportunities.
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-200"
                    href={`mailto:${site.email}`}
                  >
                    Email me
                  </a>
                </div>
                <div className="mt-6 text-xs text-slate-500">
                  © {new Date().getFullYear()} {site.name}
                </div>
              </Card>
            </Container>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
