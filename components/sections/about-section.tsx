import {
  Users,
  UserCheck,
  Zap,
  Shield,
  FileText,
  Award,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Production-proven",
    desc: "10+ years delivering systems across fintech, government, SaaS, and enterprise — payment platforms, application intake systems, staff portals, procurement systems, and cloud infrastructure. We build for production from the start: tested, documented, and ready to scale.",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20",
  },
  {
    icon: Users,
    title: "Curated specialists",
    desc: "Every engagement is staffed based on your specific requirements — not a bench of generalists. We bring in vetted engineers with hands-on experience in your stack, whether that's a full-stack TypeScript team, a cloud architect, a security reviewer, or an AI specialist.",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20",
  },
  {
    icon: FileText,
    title: "Transparent scoping",
    desc: "Before any work starts you receive a written proposal covering the full scope, a milestone-by-milestone cost breakdown, recommended tech stack with rationale, and a projected timeline. Pricing is fixed per milestone — you always know what you're paying for and when.",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50 border-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20",
  },
  {
    icon: Zap,
    title: "Agile from day one",
    desc: "We follow agile/SCRUM methodology with 1-week sprints. At the end of every sprint you get a working demo, a summary of what shipped, and a clear plan for the next week. You can reprioritize at any point — no change-request paperwork, no renegotiated contracts.",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20",
  },
  {
    icon: UserCheck,
    title: "Single point of contact",
    desc: "You never chase down multiple people for answers. One lead owns your entire engagement — running weekly video check-ins, maintaining a shared project board so you can track progress in real time, and escalating decisions to you before they become blockers.",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Full IP ownership",
    desc: "Everything we build belongs to you from day one — source code, database schemas, infrastructure configuration, and documentation. On project completion we do a full handoff: repository access, deployment credentials, and a walkthrough so your team can operate independently.",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50 border-violet-100 dark:bg-violet-500/10 dark:border-violet-500/20",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        {/* Section label */}
        <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-zinc-400 dark:text-zinc-600 uppercase">
          About
        </p>

        {/* Heading + intro */}
        <div className="mb-16">
          <h2 className="font-heading mb-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            A curated network.
            <br />
            Enterprise delivery.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
            rodgetech is a software engineering &amp; cloud consultancy that
            delivers through a curated network of specialists — selectively
            assembled for each engagement to build custom applications, cloud
            infrastructure, and technical solutions that ship on time and scale
            reliably.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 gap-px border border-zinc-100 bg-zinc-100 sm:grid-cols-2 lg:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
          {differentiators.map(({ icon: Icon, title, desc, iconColor, iconBg }) => (
            <div
              key={title}
              className="flex flex-col gap-4 bg-white p-7 dark:bg-zinc-950"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${iconBg}`}>
                <Icon className={`h-4 w-4 ${iconColor}`} />
              </div>
              <div>
                <p className="font-heading mb-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {title}
                </p>
                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
