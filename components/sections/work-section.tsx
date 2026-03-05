import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Prototype · In Development",
    title: "Procurement Management Platform",
    desc: "A multi-tenant procurement platform for managing the full bid lifecycle — from RFP publishing and vendor registration through to submission, evaluation, and award tracking.",
    bullets: [
      "Role-based access control (RBAC) across organisation admins, evaluators, and vendors",
      "Secure document upload, storage, and retrieval for bid submissions and supporting files",
      "Branch/organisation-isolated workspaces with configurable staff roles and permissions",
      "Application intake queue with status tracking, internal notes, and automated notifications",
    ],
    tech: [
      { name: "Next.js", icon: "/stack/nextjs.svg" },
      { name: "TypeScript", icon: "/stack/typescript.svg" },
      { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
      { name: "AWS", icon: "/stack/aws.svg" },
    ],
    href: null,
    status: "in-progress" as const,
  },
  {
    tag: "Prototype · In Development",
    title: "Teacher Resource Hub",
    desc: "A content marketplace for primary school educators — lesson plans, worksheets, printable charts, and gradebook tools organised by grade level (Infant 1 through Standard 6).",
    bullets: [
      "Paywall with per-document purchases and subscription tiers",
      "Admin dashboard for uploading, categorising, and pricing content without code",
      "Role-based access for content creators, reviewers, and administrators",
    ],
    tech: [
      { name: "Next.js", icon: "/stack/nextjs.svg" },
      { name: "TypeScript", icon: "/stack/typescript.svg" },
      { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
      { name: "AWS", icon: "/stack/aws.svg" },
    ],
    href: null,
    status: "in-progress" as const,
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        {/* Section label */}
        <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-zinc-400 dark:text-zinc-600 uppercase">
          Work
        </p>

        {/* Heading */}
        <div className="mb-16 max-w-xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            What we&apos;re building.
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Top row: tag + status */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-zinc-400 uppercase dark:text-zinc-600">
                  {project.status === "in-progress" && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                    </span>
                  )}
                  {project.tag}
                </span>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-zinc-200 dark:text-zinc-800" />
                )}
              </div>

              {/* Title + description + bullets */}
              <div className="flex flex-col gap-3 sm:max-w-2xl">
                <h3 className="font-heading text-xl font-bold leading-snug text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {project.desc}
                </p>
                {project.bullets && (
                  <ul className="mt-1 flex flex-col gap-1.5">
                    {project.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech stack */}
              <div className="flex items-center gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                {project.tech.map((t) => (
                  <div
                    key={t.name}
                    title={t.name}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white p-1.5 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={t.icon}
                        alt={t.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
