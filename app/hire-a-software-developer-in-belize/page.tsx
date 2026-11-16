import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Plus } from "lucide-react";

import { SectionHeader } from "@/components/home/section-header";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SiteShell } from "@/components/site/site-shell";
import { BTN_PRIMARY, FOCUS } from "@/components/site/styles";
import { TechChip } from "@/components/ui/tech-chip";
import {
  HIRE_CTA,
  HIRE_FAQ,
  HIRE_PAGE,
  HIRE_PROOF,
  HIRE_PROOF_LINKS,
  HIRE_STACK,
  HONEST_CAVEAT,
  OTHER_OPTIONS,
  WHY_BELIZE,
} from "@/config/hire";
import { BOOKING_CTA_LABEL, BOOKING_URL } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(HIRE_PAGE.title, HIRE_PAGE.description, HIRE_PAGE.slug);

/** Reading copy on this page: a guide, so a comfortable measure and size. */
const PROSE = "max-w-[65ch] text-[15px] leading-relaxed text-pretty text-muted-foreground";

export default function HirePage() {
  return (
    <SiteShell>
      <header className="animate-enter">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">{HIRE_PAGE.title}</h1>
        <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-pretty">{HIRE_PAGE.lead}</p>
        <p className={`mt-3 ${PROSE}`}>{HIRE_PAGE.subLead}</p>
      </header>

      <section aria-labelledby="why-heading">
        <SectionHeader id="why-heading" title="Why Belize" />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {WHY_BELIZE.map((item) => (
            <div key={item.id}>
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="proof-heading">
        <SectionHeader id="proof-heading" title={HIRE_PROOF.heading} link={{ href: HIRE_PROOF_LINKS.experience, label: "Full experience" }} />
        <div className="grid items-start gap-6 sm:grid-cols-[15rem_minmax(0,1fr)]">
          <figure>
            <Image
              src={HIRE_PROOF.payoutImage}
              alt={HIRE_PROOF.payoutAlt}
              width={736}
              height={236}
              sizes="(min-width: 640px) 240px, 100vw"
              className="block h-auto w-full max-w-80 rounded-xl bg-black shadow-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">{HIRE_PROOF.payoutCaption}</figcaption>
          </figure>
          <div className="flex flex-col gap-3">
            <p className={PROSE}>{HIRE_PROOF.lead}</p>
            <p className={PROSE}>{HIRE_PROOF.closing}</p>
            <p className="flex items-center gap-2.5 pt-1 text-sm text-muted-foreground">
              <Image src={HIRE_PROOF.companyLogo} alt="" width={24} height={24} className="size-6 shrink-0 object-contain" />
              <span>
                Most recently at <span className="font-medium text-foreground">{HIRE_PROOF.companyName}</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="together-heading">
        <SectionHeader id="together-heading" title={HIRE_CTA.heading} />
        <div className="flex flex-col gap-3">
          <p className={PROSE}>{HIRE_CTA.body}</p>
          <p className={PROSE}>{HIRE_CTA.stackNote}</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {HIRE_STACK.map((tech) => (
            <li key={tech.name}>
              <TechChip tech={tech} />
            </li>
          ))}
        </ul>
        <p className={`mt-5 ${PROSE}`}>{HIRE_CTA.scopeNote}</p>
        <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`mt-5 ${BTN_PRIMARY}`}>
          <CalendarDays aria-hidden className="size-4" />
          {BOOKING_CTA_LABEL}
        </Link>
      </section>

      <section aria-labelledby="other-heading">
        <SectionHeader id="other-heading" title="Other ways to hire here" />
        <p className={PROSE}>{OTHER_OPTIONS.intro}</p>
        <div className="mt-6 flex flex-col gap-6">
          {OTHER_OPTIONS.options.map((item) => (
            <div key={item.id}>
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className={`mt-1.5 ${PROSE}`}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* A caveat about the whole country, not a fourth option: set apart, not raised. */}
        <aside aria-labelledby="caveat-heading" className="mt-8 rounded-2xl bg-muted/70 p-5 sm:p-6">
          <h3 id="caveat-heading" className="font-semibold tracking-tight">{HONEST_CAVEAT.heading}</h3>
          <p className={`mt-2 ${PROSE}`}>{HONEST_CAVEAT.body}</p>
        </aside>
      </section>

      <section aria-labelledby="faq-heading">
        <SectionHeader id="faq-heading" title="Common questions" />
        <div className="flex flex-col">
          {HIRE_FAQ.map((item) => (
            <details key={item.question} className="disclosure group border-b border-border/60 last:border-b-0">
              <summary className={`flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-md py-3.5 [&::-webkit-details-marker]:hidden ${FOCUS}`}>
                <h3 className="font-medium tracking-tight">{item.question}</h3>
                <span aria-hidden className="grid size-7 shrink-0 place-items-center rounded-full text-muted-foreground transition-[background-color,transform,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-muted group-hover:text-foreground group-open:rotate-45 motion-reduce:transition-none">
                  <Plus strokeWidth={2} className="size-4" />
                </span>
              </summary>
              <p className={`pb-4 ${PROSE}`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FaqSchema items={HIRE_FAQ} />
    </SiteShell>
  );
}
