import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { RoleItem } from "@/components/experience/role-item";
import { GitHubActivity } from "@/components/home/github-activity";
import { SectionHeader } from "@/components/home/section-header";
import { GitHubIcon } from "@/components/home/social-icons";
import { FOCUS } from "@/components/site/styles";
import { TechGroups, TechRow } from "@/components/home/tech-groups";
import { SiteShell } from "@/components/site/site-shell";
import { AI_SECTION, ESIGNA, SCREEN_MOCKUPS, STACK_ASIDE, STACK_GROUPS } from "@/config/home";
import { EXPERIENCE_ROLES } from "@/config/experience";
import { SITE_INFO, SITE_PATHS, SOCIAL_IMAGE, USER } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `${USER.fullName} | ${USER.jobTitle}` },
  description: SITE_INFO.description,
  alternates: { canonical: "/" },
  openGraph: { title: USER.fullName, description: SITE_INFO.description, url: "/", type: "profile", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: USER.fullName, description: SITE_INFO.description, images: [SOCIAL_IMAGE] },
};

/** The homepage shows the BuildShip role only (owner's call); /experience has the rest. */
const LATEST_ROLE = EXPERIENCE_ROLES.find((role) => role.id === "buildship")!;

export default function Home() {
  return (
    <SiteShell nameIsHeading>
      {/* Products: esigna is the one raised surface on the page. */}
      <section aria-labelledby="built-heading" style={{ "--stagger": 1 } as React.CSSProperties} className="animate-enter">
        <SectionHeader id="built-heading" title="Things I've built" />

        <article className="hover-lift relative grid items-center gap-6 rounded-2xl bg-card p-5 shadow-border transition-shadow duration-150 sm:grid-cols-[minmax(0,1fr)_14rem] sm:p-6 xl:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Image src={ESIGNA.icon} alt="" width={32} height={32} className="size-8 shrink-0 rounded-lg" />
              <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight">
                <a
                  href={ESIGNA.url}
                  target="_blank"
                  rel="noopener"
                  className="group/link inline-flex items-center gap-1 outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-3 focus-visible:after:ring-ring"
                >
                  <span className="decoration-foreground/30 underline-offset-4 group-hover/link:underline">{ESIGNA.name}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRight aria-hidden className="size-4 opacity-0 transition-[opacity,translate] duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5" />
                </a>
              </h3>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                <span aria-hidden className="live-dot !size-1.5" />
                {ESIGNA.usage}
              </span>
            </div>

            <p className="mt-5 flex items-baseline gap-2 tabular-nums">
              <span className="text-3xl font-semibold tracking-tight">{ESIGNA.revenue}</span>
              <span className="text-sm text-muted-foreground">{ESIGNA.revenueLabel}</span>
            </p>
            <p className="mt-3 max-w-[60ch] text-sm text-pretty text-muted-foreground">{ESIGNA.description}</p>
          </div>

          <div className="overflow-hidden rounded-lg bg-muted shadow-border max-sm:hidden">
            <Image
              src={ESIGNA.screenshot}
              alt={ESIGNA.screenshotAlt}
              width={1600}
              height={1000}
              priority
              sizes="272px"
              className="block aspect-[16/10] h-auto w-full object-cover object-top"
            />
          </div>
        </article>

        {/* Retired, so it stays flat; the payout notification is its proof. */}
        <div className="mt-5 grid items-center gap-4 px-1 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6 sm:px-6">
          <Image
            src={SCREEN_MOCKUPS.proof}
            alt={SCREEN_MOCKUPS.proofAlt}
            width={736}
            height={236}
            sizes="(min-width: 640px) 208px, 100vw"
            className="block h-auto w-full max-w-80 rounded-xl bg-black shadow-border"
          />
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-medium">{SCREEN_MOCKUPS.name}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{SCREEN_MOCKUPS.badge}</span>
            </p>
            <p className="mt-1 max-w-[52ch] text-sm text-pretty text-muted-foreground">{SCREEN_MOCKUPS.description}</p>
            <a
              href={SCREEN_MOCKUPS.repo}
              target="_blank"
              rel="noopener"
              className={`group mt-2 -ml-1 inline-flex h-8 items-center gap-1.5 rounded-md px-1 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground ${FOCUS}`}
            >
              <GitHubIcon className="size-3.5" />
              <span className="decoration-foreground/30 underline-offset-4 group-hover:underline">View the source</span>
              <span className="sr-only"> on GitHub (opens in a new tab)</span>
              <ArrowUpRight aria-hidden className="size-3.5 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* AI gets its own section: the daily agentic workflow, then what ships to users. */}
      <section aria-labelledby="ai-heading">
        <SectionHeader id="ai-heading" title="Building with AI" />
        <p className="mb-6 max-w-[60ch] text-[15px] text-pretty">{AI_SECTION.intro}</p>
        <dl className="flex flex-col gap-5">
          <TechRow label={AI_SECTION.workflow.label} tech={AI_SECTION.workflow.tech} />
          {AI_SECTION.split.map((row) => (
            <div key={row.label} className="grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4">
              <dt className="text-sm text-muted-foreground sm:pt-0.5">{row.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {row.items.map((item) => (
                    <li key={item} className="rounded-full border border-border px-2.5 py-0.5 text-[13px] text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
          <div className="grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4">
            <dt className="text-sm text-muted-foreground">{AI_SECTION.shipped.label}</dt>
            <dd>
              <ul className="flex max-w-[60ch] flex-col gap-2.5">
                {AI_SECTION.shipped.items.map((item) => (
                  <li key={item.title} className="text-sm text-pretty text-muted-foreground">
                    <span className="font-medium text-foreground">{item.title}.</span> {item.body}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <TechRow label={AI_SECTION.builtWith.label} tech={AI_SECTION.builtWith.tech} />
        </dl>
      </section>

      {/* Most recent role only, same entry as /experience; the full history lives there. */}
      <section aria-labelledby="experience-heading">
        <SectionHeader id="experience-heading" title="Experience" link={{ href: SITE_PATHS.experience, label: "Full experience" }} />
        <RoleItem role={LATEST_ROLE} detailed />
      </section>

      <GitHubActivity />

      <section aria-labelledby="stack-heading">
        <SectionHeader id="stack-heading" title="Stack" />
        <TechGroups groups={STACK_GROUPS} />
        {/* The punchline under the stack: lined up with the chips, closed by default. */}
        <details className="disclosure group mt-4 sm:ml-[calc(8.5rem+1rem)]">
          <summary className={`inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-md text-sm text-muted-foreground italic transition-colors duration-150 hover:text-foreground sm:min-h-0 [&::-webkit-details-marker]:hidden ${FOCUS}`}>
            {STACK_ASIDE.summary}
            <ChevronDown
              aria-hidden
              className="size-3.5 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <div className="flex max-w-[60ch] flex-col gap-2 pt-2 text-sm text-pretty text-muted-foreground">
            {STACK_ASIDE.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </details>
      </section>
    </SiteShell>
  );
}
