import {
  HeroSection,
  AboutSection,
  ServicesSection,
  WorkSection,
  ContactSection,
} from "@/components/sections";
import { COMPANY, SOCIAL_LINKS } from "@/config/site";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white dark:border-white/[0.06] dark:bg-zinc-950">
        {/* Three-column body */}
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {/* Col 1 — Brand */}
            <div className="flex flex-col gap-3">
              <p className="font-heading text-base font-semibold text-zinc-900 dark:text-white">
                rodgetech
              </p>
              <p className="text-sm leading-6 text-zinc-400 dark:text-zinc-500">
                {COMPANY.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {COMPANY.location}
              </div>
            </div>

            {/* Col 2 — Services */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Enterprise Application Development",
                  "Cloud Engineering & Infrastructure",
                  "Software Migration & Modernisation",
                  "Security Assessment & Pen Testing",
                ].map((s) => (
                  <li key={s} className="text-sm text-zinc-500 dark:text-zinc-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Get in Touch */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
                Get in Touch
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <Linkedin className="h-3.5 w-3.5 shrink-0" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5 shrink-0" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-100 dark:border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-6 py-6 sm:px-12">
            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
              <p className="font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
                rodgetech — Belize
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-600">
                © 2025 rodgetech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
