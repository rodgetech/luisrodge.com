"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const techStack = [
  { src: "/stack/typescript.svg", alt: "TypeScript" },
  { src: "/stack/react.svg", alt: "React" },
  { src: "/stack/nextjs.svg", alt: "Next.js" },
  { src: "/stack/postgresql.svg", alt: "PostgreSQL" },
  { src: "/stack/aws.svg", alt: "AWS" },
  { src: "/stack/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/stack/python.svg", alt: "Python" },
  { src: "/stack/nestjs.svg", alt: "NestJS" },
];

export function HeroSection() {
  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      document
        .getElementById(href.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      {/* Floating pill nav */}
      <nav className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-2xl items-center justify-between rounded-full border border-zinc-200 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-xl dark:border-white/[0.10] dark:bg-zinc-900/75 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.07)]">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="pl-2 font-heading text-sm font-semibold text-zinc-900 dark:text-white"
          >
            rodgetech
          </Link>

          <div className="hidden items-center gap-6 sm:flex">
            <Link href="#about" onClick={scrollTo} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-white/55 dark:hover:text-white">About</Link>
            <Link href="#services" onClick={scrollTo} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-white/55 dark:hover:text-white">Services</Link>
            <Link href="#work" onClick={scrollTo} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-white/55 dark:hover:text-white">Work</Link>
            <Link href="#contact" onClick={scrollTo} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-white/55 dark:hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="#contact"
              onClick={scrollTo}
              className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-5xl">
        {/* Top radial shade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ background: "radial-gradient(35% 50% at 49% 0%, rgba(0,0,0,0.06), transparent)" }}
        />

        {/* Outer vertical borders (left + right edges of max-w-5xl) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px lg:block" style={{ background: "linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.15) 50%, transparent 90%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-px lg:block" style={{ background: "linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.15) 50%, transparent 90%)" }} />

        {/* Main content area */}
        <div className="relative flex flex-col items-center justify-center gap-5 px-6 pt-32 pb-32 sm:px-12">
          {/* Inner vertical borders — 4 lines */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-4 hidden w-px md:left-8 lg:block" style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.10) 70%, transparent 95%)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 hidden w-px md:right-8 lg:block" style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.10) 70%, transparent 95%)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-8 hidden w-px md:left-12 lg:block" style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.06) 70%, transparent 95%)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-8 hidden w-px md:right-12 lg:block" style={{ background: "linear-gradient(to bottom, transparent 5%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.06) 70%, transparent 95%)" }} />

          {/* Announcement pill */}
          <Link
            href="#contact"
            onClick={scrollTo}
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
            )}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground">Accepting proposals for 2026</span>
            <span className="block h-5 border-l" />
            <ArrowRight className="h-3 w-3 text-muted-foreground duration-150 ease-out group-hover:translate-x-0.5" />
          </Link>

          {/* Heading */}
          <h1
            className={cn(
              "fade-in slide-in-from-bottom-10 animate-in font-heading text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out sm:text-5xl lg:text-6xl",
            )}
          >
            Serious Software. <br />
            Built Right. For Belize <br className="hidden sm:block" />
            and Beyond.
          </h1>

          {/* Subheading */}
          <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base tracking-wide text-foreground/80 delay-200 duration-500 ease-out sm:text-lg md:text-xl">
            Independent software engineering &amp; cloud consultancy.
            <br />
            10+ years building what matters.
          </p>

          {/* CTAs */}
          <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
            <Link
              href="#contact"
              onClick={scrollTo}
              className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-accent"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Call
            </Link>
            <Link
              href="#services"
              onClick={scrollTo}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech stack slider */}
      <section className="relative space-y-4 border-t pt-6 pb-10">
        <h2 className="text-center text-lg font-medium tracking-tight text-muted-foreground md:text-xl">
          Built with <span className="text-foreground">modern tools</span>
        </h2>
        <div
          className="relative z-10 mx-auto max-w-4xl overflow-hidden py-4"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <InfiniteSlider gap={48} reverse speed={60} speedOnHover={20}>
            {techStack.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={32}
                height={32}
                className="pointer-events-none h-7 w-7 select-none object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert md:h-8 md:w-8"
              />
            ))}
          </InfiniteSlider>
        </div>
      </section>
    </div>
  );
}
