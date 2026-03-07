import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Delivering Production Systems" },
  { value: "50+", label: "Projects Shipped Across 4 Industries" },
  { value: "100%", label: "Client IP Ownership From Day One" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-12 bg-white py-24 dark:bg-zinc-950 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        {/* Big editorial statement */}
        <h2 className="font-heading max-w-3xl text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
          We help you{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            reimagine
          </span>{" "}
          your business through software.
        </h2>

        {/* Thin divider */}
        <div className="my-16 h-px bg-zinc-200 dark:bg-zinc-800 sm:my-20" />

        {/* About intro */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-[11px] tracking-[0.22em] text-zinc-400 uppercase dark:text-zinc-600">
            About
          </p>
          <h3 className="font-heading mb-5 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            A curated network. 
            Enterprise delivery.
          </h3>
          <p className="mb-6 text-base leading-7 text-zinc-500 dark:text-zinc-400">
            rodgetech is a software engineering &amp; cloud consultancy that
            delivers through a curated network of specialists — selectively
            assembled for each engagement to build custom applications, cloud
            infrastructure, and technical solutions that ship on time and scale
            reliably.
          </p>
          <Link
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Big stat numbers */}
        <div className="grid grid-cols-1 gap-8 border-t border-zinc-200 pt-12 dark:border-zinc-800 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-zinc-200 dark:sm:divide-zinc-800">
          {stats.map(({ value, label }) => (
            <div key={label} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="font-heading text-5xl font-light tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
                {value}
              </p>
              <p className="mt-3 text-sm leading-snug text-zinc-400 dark:text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
