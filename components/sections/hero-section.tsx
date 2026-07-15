import Image from "next/image";
import Link from "next/link";
import { OUTREACH_CTAS, USER } from "@/config/site";
import { Button } from "@/components/ui/button";
import { TimeDisplay } from "@/components/ui/time-display";

export function HeroSection() {
  return (
    <header className="relative w-full">
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <Image
          src="/cover.jpeg"
          alt=""
          fill
          className="object-cover object-bottom brightness-[0.9] saturate-[0.88]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background" />
      </div>

      <div className="relative z-10 -mt-12">
        <div className="page-x mx-auto max-w-2xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
              <Image
                src="/me.png"
                alt={USER.displayName}
                fill
                className="surface rounded-full object-cover ring-4 ring-background"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
              <h1 className="text-display">{USER.displayName}</h1>
              <p className="text-lead">{USER.tagline}</p>
              <div className="text-meta flex flex-col gap-1 pt-0.5 sm:flex-row sm:items-center sm:gap-3">
                <span>Belize · US timezone overlap</span>
                <span aria-hidden className="hidden text-border sm:inline">
                  /
                </span>
                <TimeDisplay timeZone={USER.timeZone} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:pl-[calc(8rem+1.25rem)]">
            {OUTREACH_CTAS.map((cta, index) => (
              <Button
                key={cta.id}
                asChild
                size="sm"
                variant={index === 0 ? "default" : "outline"}
                className="h-9 px-4"
              >
                <Link
                  href={cta.href}
                  {...(cta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cta.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
