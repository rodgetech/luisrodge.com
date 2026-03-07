"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

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
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-5 sm:px-12">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-heading text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            rodgetech
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 md:flex">
              <Link href="#about" onClick={scrollTo} className="text-base font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-white/60">About</Link>
              <Link href="#services" onClick={scrollTo} className="text-base font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-white/60">Services</Link>
              <Link href="#work" onClick={scrollTo} className="text-base font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-white/60">Work</Link>
              <Link href="#contact" onClick={scrollTo} className="text-base font-medium text-zinc-900 transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-white/60">Contact</Link>
            </div>
            <ThemeToggle />
            <Link
              href="#contact"
              onClick={scrollTo}
              className="rounded-full border-2 border-zinc-900 px-6 py-2 font-mono text-xs font-semibold tracking-[0.15em] text-zinc-900 uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — full-bleed image below nav */}
      <section className="relative m-4 flex h-[calc(100svh-105px)] items-center overflow-hidden rounded-3xl bg-zinc-950">
        {/* Background image */}
        <Image
          src="/nanobanana-image-editing-1772831100425.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient overlays for text readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Content — bottom-left aligned like EPAM */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-8 py-20 sm:px-12 sm:py-28">
          {/* Heading */}
          <h1 className="fade-in slide-in-from-bottom-8 animate-in fill-mode-backwards text-4xl font-light leading-[1.1] tracking-tight text-white delay-150 duration-700 ease-out sm:text-5xl md:text-6xl lg:text-7xl">
            Serious Software.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300">
              Built Right.
            </span>{" "}
            For Belize
            <br className="hidden sm:block" />
            {" "}and Beyond.
          </h1>

          {/* Subheading */}
          <p className="fade-in slide-in-from-bottom-6 mt-6 max-w-lg animate-in fill-mode-backwards text-base leading-relaxed text-white/60 delay-300 duration-700 ease-out sm:text-lg">
            Independent software engineering &amp; cloud consultancy.
            <br />
            10+ years building what matters.
          </p>

          {/* CTAs */}
          <div className="fade-in slide-in-from-bottom-6 mt-10 flex animate-in flex-row flex-wrap items-center gap-4 fill-mode-backwards delay-500 duration-700 ease-out">
            <Link
              href="#contact"
              onClick={scrollTo}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white/90"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Call
            </Link>
            <Link
              href="#services"
              onClick={scrollTo}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
