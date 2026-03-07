import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Github,
} from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "@/config/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 bg-white pt-0 pb-24 dark:bg-zinc-950 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        <div className="mb-16 h-px bg-zinc-200 dark:bg-zinc-800" />

        <p className="mb-3 font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
          Get in Touch
        </p>

        {/* Big statement */}
        <h2 className="font-heading max-w-3xl text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            together.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
          A 15-minute intro to discuss your project and figure out if
          we&apos;re a good fit. No pressure, no commitment.
        </p>

        {/* CTA links — EPAM style */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-12">
          <a
            href={COMPANY.calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <span className="font-heading text-base font-semibold text-zinc-900 dark:text-white">
              Book a Call
            </span>
            <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-600" />
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="group flex items-center gap-3"
          >
            <span className="font-heading text-base font-semibold text-zinc-900 dark:text-white">
              Send an Email
            </span>
            <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-600" />
          </a>
        </div>

        {/* Thin divider */}
        <div className="my-16 h-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Contact details — horizontal row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
              Email
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {COMPANY.email}
            </a>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
              Phone
            </p>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {COMPANY.phone}
            </a>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
              Location
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {COMPANY.location}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
              Social
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
