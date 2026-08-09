import type { Metadata } from "next";
import Link from "next/link";

import { FaqSchema } from "@/components/seo/faq-schema";
import { FooterSection } from "@/components/sections";
import { PageSection } from "@/components/ui/page-section";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteNav } from "@/components/ui/site-nav";
import {
  HIRE_CTA,
  HIRE_FAQ,
  HIRE_PAGE,
  HIRE_PROOF_LINKS,
  OTHER_OPTIONS,
  WHY_BELIZE,
} from "@/config/hire";
import { BOOKING_CTA_LABEL, BOOKING_URL } from "@/config/site";

export const metadata: Metadata = {
  title: HIRE_PAGE.title,
  description: HIRE_PAGE.description,
  alternates: {
    canonical: HIRE_PAGE.slug,
  },
  openGraph: {
    title: HIRE_PAGE.title,
    description: HIRE_PAGE.description,
    url: HIRE_PAGE.slug,
  },
};

export default function HirePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[var(--z-skip)] focus-visible:rounded-md focus-visible:px-3 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-elevated focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        tabIndex={-1}
        className="page-x mx-auto w-full max-w-2xl flex-1 pb-[var(--nav-clearance)] outline-none"
      >
        <PageSection variant="first">
          <SectionContent>
            <h1 className="text-display text-balance">{HIRE_PAGE.title}</h1>
            <div className="flex flex-col gap-[var(--stack-prose)]">
              <p className="text-lead text-pretty">{HIRE_PAGE.lead}</p>
              <p className="text-body">{HIRE_PAGE.subLead}</p>
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>Why Belize</SectionLabel>
            <div className="flex flex-col gap-[var(--section-inner)]">
              {WHY_BELIZE.map((item) => (
                <div key={item.id} className="flex flex-col gap-1.5">
                  <h3 className="section-title text-balance">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>{HIRE_CTA.heading}</SectionLabel>
            <div className="flex flex-col gap-[var(--stack-prose)]">
              <p className="text-body">{HIRE_CTA.body}</p>
              <p className="text-body">{HIRE_CTA.scopeNote}</p>
              <p className="text-body">
                Past roles and outcomes are on the{" "}
                <Link href={HIRE_PROOF_LINKS.experience} className="link-underline">
                  experience page
                </Link>
                , and there&apos;s a{" "}
                <Link href={HIRE_PROOF_LINKS.resume} className="link-underline">
                  resume
                </Link>{" "}
                if you prefer the short version.
              </p>
              <p>
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-meta inline-flex min-h-11 items-center font-medium text-foreground"
                >
                  {BOOKING_CTA_LABEL}
                </Link>
              </p>
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>Other ways to hire here</SectionLabel>
            <div className="flex flex-col gap-[var(--section-inner)]">
              <p className="text-body">{OTHER_OPTIONS.intro}</p>
              {OTHER_OPTIONS.options.map((item) => (
                <div key={item.id} className="flex flex-col gap-1.5">
                  <h3 className="section-title text-balance">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>Common questions</SectionLabel>
            <div className="flex flex-col gap-[var(--section-inner)]">
              {HIRE_FAQ.map((item) => (
                <div key={item.question} className="flex flex-col gap-1.5">
                  <h3 className="section-title text-balance">{item.question}</h3>
                  <p className="text-body">{item.answer}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </PageSection>

        <PageSection variant="footer">
          <FooterSection />
        </PageSection>
      </main>

      <SiteNav homeHref="/" />
      <FaqSchema items={HIRE_FAQ} />
    </div>
  );
}
