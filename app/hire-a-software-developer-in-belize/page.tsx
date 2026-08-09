import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import { FaqSchema } from "@/components/seo/faq-schema";
import { FooterSection } from "@/components/sections";
import { PageSection } from "@/components/ui/page-section";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteNav } from "@/components/ui/site-nav";
import { TechChip } from "@/components/ui/tech-chip";
import {
  HIRE_BYLINE,
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
        className="bg-primary text-primary-foreground sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[var(--z-skip)] focus-visible:rounded-md focus-visible:px-3 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-elevated focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        tabIndex={-1}
        className="page-x mx-auto w-full max-w-2xl flex-1 pb-[var(--nav-clearance)] outline-none"
      >
        {/*
          Masthead. The title and the byline are one unit: this page's entire
          argument is that it was written by someone who lives here, so the
          credential sits with the title rather than trailing the copy.
        */}
        <PageSection variant="first">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <span aria-hidden className="page-mark" />
              <h1 className="page-title">{HIRE_PAGE.title}</h1>

              <div className="flex items-center gap-3">
                <Image
                  src={HIRE_BYLINE.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="surface size-14 shrink-0 rounded-full object-cover ring-2 ring-background"
                />
                <div className="min-w-0">
                  <p className="text-body font-semibold text-foreground">
                    {HIRE_BYLINE.name}
                  </p>
                  <p className="text-meta">{HIRE_BYLINE.meta}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[var(--stack-prose)]">
              <p className="page-lead">{HIRE_PAGE.lead}</p>
              <p className="text-body">{HIRE_PAGE.subLead}</p>
            </div>
          </div>
        </PageSection>

        {/* The page's peak: claims outrank everything below them. */}
        <PageSection variant="emphasis">
          <SectionContent>
            <SectionLabel>Why Belize</SectionLabel>
            <div className="flex flex-col gap-[var(--section-space)]">
              {WHY_BELIZE.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <h3 className="claim-title">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>{HIRE_PROOF.heading}</SectionLabel>

            {/*
              Single grid row: the figure and the prose are two columns that
              each flow on their own. An earlier version spanned the figure
              across two text rows, which let the tall screenshot stretch the
              rows and tear a gap between the paragraphs.
            */}
            <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-9">
              <figure className="mx-auto flex w-fit flex-col gap-2 sm:mx-0">
                <div className="proof-phone surface-elevated overflow-hidden sm:w-[150px]">
                  <Image
                    src={HIRE_PROOF.payoutImage}
                    alt={HIRE_PROOF.payoutAlt}
                    width={736}
                    height={1024}
                    sizes="(max-width: 640px) 72vw, 150px"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="text-meta px-0.5 text-center font-serif italic sm:text-left">
                  {HIRE_PROOF.payoutCaption}
                </figcaption>
              </figure>

              <div className="flex flex-col gap-[var(--stack-prose)]">
                <p className="text-body">{HIRE_PROOF.lead}</p>
                <p className="text-body">{HIRE_PROOF.closing}</p>
                <div className="flex items-center gap-2.5 pt-1">
                  <Image
                    src={HIRE_PROOF.companyLogo}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 shrink-0 object-contain"
                  />
                  <p className="text-meta">
                    Most recently {HIRE_PROOF.companyName} ·{" "}
                    <Link
                      href={HIRE_PROOF_LINKS.experience}
                      className="link-underline"
                    >
                      full experience
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </SectionContent>
        </PageSection>

        <PageSection>
          <SectionContent>
            <SectionLabel>{HIRE_CTA.heading}</SectionLabel>
            <div className="flex flex-col gap-[var(--stack-prose)]">
              <p className="text-body">{HIRE_CTA.body}</p>
              <p className="text-body">{HIRE_CTA.stackNote}</p>
            </div>

            {/* Named stack, so a visitor can match their project without leaving. */}
            <div className="flex flex-wrap gap-2">
              {HIRE_STACK.map((tech) => (
                <TechChip key={tech.name} tech={tech} />
              ))}
            </div>

            <p className="text-body">{HIRE_CTA.scopeNote}</p>

            {/* The ask stands alone — nothing else competes at this weight. */}
            <div className="flex flex-col items-start gap-3 pt-2">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pill"
              >
                {BOOKING_CTA_LABEL}
              </Link>
              <p className="text-meta">
                Or{" "}
                <Link href={HIRE_PROOF_LINKS.resume} className="link-underline">
                  read the resume
                </Link>{" "}
                first.
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
                  <h3 className="section-title">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionContent>
        </PageSection>

        {/* Its own beat — a caveat about the country, not a fourth way to hire. */}
        <PageSection>
          <SectionContent>
            <SectionLabel emphasis>{HONEST_CAVEAT.heading}</SectionLabel>
            <p className="text-body">{HONEST_CAVEAT.body}</p>
          </SectionContent>
        </PageSection>

        {/* Reference material, collapsed by default so the page's shape stays
            readable. Mirrors the disclosure pattern in TechStackSection. */}
        <PageSection>
          <SectionContent>
            <SectionLabel>Common questions</SectionLabel>
            <div className="flex flex-col">
              {HIRE_FAQ.map((item) => (
                <details
                  key={item.question}
                  className="disclosure group border-b border-border last:border-b-0"
                >
                  <summary className="group/row flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-3.5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                    <h3 className="section-title transition-colors duration-150 group-hover/row:text-muted-foreground">
                      {item.question}
                    </h3>
                    <span
                      aria-hidden
                      className="text-muted-foreground flex size-7 shrink-0 items-center justify-center rounded-full transition-[background-color,transform,color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:bg-muted group-hover/row:text-foreground group-open:rotate-45 motion-reduce:transition-none"
                    >
                      <Plus strokeWidth={2} className="size-4" />
                    </span>
                  </summary>
                  <p className="text-body pb-3">{item.answer}</p>
                </details>
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
