import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Linkedin,
  Github,
} from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "@/config/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        {/* Section label */}
        <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
          Contact
        </p>

        {/* Heading */}
        <div className="mb-16 max-w-xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Let&apos;s build something
            <br />
            together.
          </h2>
        </div>

        {/* Two action cards */}
        <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Book a call */}
          <a
            href={COMPANY.calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-7 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
                <CalendarDays className="h-5 w-5 text-zinc-400" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-semibold text-zinc-900 dark:text-white">
                Book a free call
              </h3>
              <p className="text-sm leading-6 text-zinc-500">
                A 15-minute intro to discuss your project and figure out if
                we&apos;re a good fit. No pressure.
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-700">
              cal.com/luisrodge
            </span>
          </a>

          {/* Send an email */}
          <a
            href={`mailto:${COMPANY.email}`}
            className="group flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-7 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-white/8 dark:bg-white/[0.04] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
                <Mail className="h-5 w-5 text-zinc-400" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-semibold text-zinc-900 dark:text-white">
                Send an email
              </h3>
              <p className="text-sm leading-6 text-zinc-500">
                Prefer to write things out? We&apos;ll respond within one
                business day.
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-700">
              {COMPANY.email}
            </span>
          </a>
        </div>

        {/* Contact details row */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-2.5 text-sm text-zinc-400 dark:text-zinc-600">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            {COMPANY.phone}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-zinc-400 dark:text-zinc-600">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {COMPANY.location}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-300 transition-colors hover:text-zinc-600 dark:text-zinc-700 dark:hover:text-zinc-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-300 transition-colors hover:text-zinc-600 dark:text-zinc-700 dark:hover:text-zinc-400"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
