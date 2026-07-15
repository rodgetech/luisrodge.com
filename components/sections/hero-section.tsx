import Image from "next/image";
import { USER } from "@/config/site";
import { TimeDisplay } from "@/components/ui/time-display";

export function HeroSection() {
  return (
    <header className="relative w-full">
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <Image
          src="/cover.jpeg"
          alt=""
          fill
          className="object-cover object-bottom brightness-[0.92] saturate-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-background" />
      </div>

      <div className="relative -mt-12 z-10">
        <div className="mx-auto max-w-2xl page-x">
          <div className="flex flex-col gap-section-inner sm:flex-row sm:items-end">
            <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
              <Image
                src="/me.png"
                alt={USER.displayName}
                fill
                className="surface rounded-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-1.5 pb-1">
              <h1 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance text-foreground sm:text-[2.25rem]">
                {USER.displayName}
              </h1>
              <p className="max-w-[36ch] text-base text-pretty text-muted-foreground">
                {USER.tagline}
              </p>
              <div className="text-meta flex flex-col gap-1.5 pt-0.5 sm:flex-row sm:items-center sm:gap-3">
                <span>Belize · US timezone overlap</span>
                <span aria-hidden className="hidden text-border sm:inline">
                  /
                </span>
                <TimeDisplay timeZone={USER.timeZone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
