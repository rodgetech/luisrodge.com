import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    label: "Case Study",
    tag: "Prototype · In Development",
    title: "Procurement Management Platform",
    desc: "A multi-tenant procurement platform for managing the full bid lifecycle — from RFP publishing and vendor registration through to submission, evaluation, and award tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    href: null,
  },
  {
    label: "Case Study",
    tag: "Prototype · In Development",
    title: "Teacher Resource Hub",
    desc: "A content marketplace for primary school educators — lesson plans, worksheets, printable charts, and gradebook tools organised by grade level.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    href: null,
  },
];

const differentiators = [
  {
    title: "Transparent scoping",
    desc: "Written proposals with milestone-by-milestone cost breakdowns, tech stack rationale, and fixed pricing — so you always know what you're paying for.",
  },
  {
    title: "Agile from day one",
    desc: "1-week sprints with working demos, shipping summaries, and the ability to reprioritize at any point without renegotiated contracts.",
  },
  {
    title: "Single point of contact",
    desc: "One lead owns your engagement — running weekly check-ins, maintaining a shared project board, and escalating decisions before they become blockers.",
  },
  {
    title: "Full IP ownership",
    desc: "Everything we build belongs to you from day one. On completion we do a full handoff: repo access, deployment credentials, and a walkthrough.",
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-12 bg-white pt-0 pb-24 dark:bg-zinc-950 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        {/* Featured Work */}
        <p className="mb-3 font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
          Featured Work
        </p>
        <h2 className="font-heading mb-16 max-w-2xl text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
          What we&apos;ve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            built.
          </span>
        </h2>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group border-t border-zinc-200 py-16 dark:border-zinc-800 last:border-b"
            >
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
                {/* Left: content */}
                <div className="flex flex-col">
                  {/* Large gradient index */}
                  <p className="font-heading mb-6 text-4xl font-light leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <div className="mb-4 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase dark:text-zinc-600">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-heading mb-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase dark:text-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: decorative visual */}
                <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 md:h-80">
                  {/* Abstract gradient mesh */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.2) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(99,102,241,0.15) 0%, transparent 50%)"
                          : "radial-gradient(ellipse at 70% 40%, rgba(34,211,238,0.25) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(59,130,246,0.2) 0%, transparent 55%), radial-gradient(ellipse at 50% 20%, rgba(16,185,129,0.12) 0%, transparent 50%)",
                    }}
                  />
                  {/* Grid lines overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Label in corner */}
                  <div className="absolute bottom-5 right-5">
                    <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
                      {project.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How we work — editorial heading + grid */}
        <h2 className="font-heading mt-20 max-w-2xl text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
          How we{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            deliver.
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {differentiators.map(({ title, desc }, i) => (
            <div
              key={title}
              className="border-t border-zinc-200 pt-6 dark:border-zinc-800"
            >
              <p className="mb-2 font-mono text-[11px] tracking-[0.22em] uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </p>
              <h3 className="font-heading mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
              </h3>
              <p className="text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
