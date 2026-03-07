"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    label: "Service",
    title: "Enterprise Application Development",
    desc: "Custom web apps, document management, workflow automation, and staff portals — built full-stack with TypeScript, React, and cloud-native architecture.",
  },
  {
    label: "Service",
    title: "AI Automation & Agents",
    desc: "Custom AI chatbots trained on your data, voice support agents, and workflow automation — built to reduce overhead and scale your operations.",
  },
  {
    label: "Service",
    title: "Cloud Engineering & Infrastructure",
    desc: "AWS & GCP architecture, Infrastructure as Code, CI/CD pipelines, containerization, and cost optimization for production workloads.",
  },
  {
    label: "Service",
    title: "Software Migration & Modernisation",
    desc: "Legacy system upgrades, database migrations, and platform modernization — from monolith to microservices without disrupting operations.",
  },
  {
    label: "Service",
    title: "Security Assessment & Pen Testing",
    desc: "OWASP-aligned security reviews, penetration testing, vulnerability remediation, and compliance guidance for production systems.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-12 bg-white pt-0 pb-24 dark:bg-zinc-950 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        <p className="mb-3 font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
          Services
        </p>
        <h2 className="font-heading max-w-2xl text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
          What we build and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            ship.
          </span>
        </h2>

        {/* Services list — editorial style */}
        <div className="mt-16 flex flex-col">
          {services.map(({ label, title, desc }, i) => (
            <div
              key={title}
              className="group border-t border-zinc-200 py-10 dark:border-zinc-800 last:border-b"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                {/* Label + number */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
                    {label}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:col-span-4 md:text-2xl">
                  {title}
                </h3>

                {/* Description + link */}
                <div className="md:col-span-5">
                  <p className="text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                    {desc}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 opacity-0 transition-opacity group-hover:opacity-100 dark:text-white"
                  >
                    Get Started
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
