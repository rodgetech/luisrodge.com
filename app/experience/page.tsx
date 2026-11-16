import { RoleItem } from "@/components/experience/role-item";
import { SectionHeader } from "@/components/home/section-header";
import { SiteShell } from "@/components/site/site-shell";
import { EXPERIENCE_ROLES } from "@/config/experience";
import { SITE_INFO, SITE_PATHS } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("Experience", `Career experience for ${SITE_INFO.name}: roles, outcomes, and stack in context.`, SITE_PATHS.experience);

const RECENT = EXPERIENCE_ROLES.filter((role) => role.section === "featured");
const EARLIER = EXPERIENCE_ROLES.filter((role) => role.section === "earlier");

export default function ExperiencePage() {
  return (
    <SiteShell>
      <header className="animate-enter">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-2 max-w-[60ch] text-[15px] text-pretty text-muted-foreground">
          Every role since 2011, newest first. The most recent ones in full, the rest in brief.
        </p>
      </header>

      <section aria-labelledby="recent-heading" style={{ "--stagger": 1 } as React.CSSProperties} className="animate-enter">
        <SectionHeader id="recent-heading" title="Recent" />
        <ol className="flex flex-col gap-10">
          {RECENT.map((role, index) => (
            <li key={role.id}>
              <RoleItem role={role} detailed priorityMark={index === 0} />
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="earlier-heading">
        <SectionHeader id="earlier-heading" title="Earlier" />
        <ol className="flex flex-col gap-8">
          {EARLIER.map((role) => (
            <li key={role.id}>
              <RoleItem role={role} />
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
