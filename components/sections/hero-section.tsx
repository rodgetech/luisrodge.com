import Image from "next/image";
import { USER } from "@/config/site";
import { TimeDisplay } from "@/components/ui/time-display";

export function HeroSection() {
  return (
    <header className="relative w-full">
      <div className="relative h-32 w-full overflow-hidden sm:h-48 [@media(orientation:landscape)_and_(max-height:500px)]:h-20">
        <Image
          src="/cover.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-[0.9] saturate-[0.88]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-background" />
      </div>

      <div className="relative z-10 -mt-10 sm:-mt-12">
        <div className="page-x mx-auto max-w-2xl">
          {/* Row on all widths: hireable identity in one thumb-scroll beat */}
          <div className="flex flex-row items-center gap-3.5 sm:gap-5">
            <div className="relative h-20 w-20 shrink-0 sm:h-32 sm:w-32">
              <Image
                src="/me.png"
                alt={USER.displayName}
                fill
                sizes="(max-width: 640px) 80px, 128px"
                className="surface rounded-full object-cover ring-4 ring-background"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 sm:gap-1">
              <h1 className="text-display">{USER.displayName}</h1>
              <p className="text-lead">{USER.tagline}</p>
              <div className="text-meta flex flex-col gap-0.5 pt-0.5 sm:flex-row sm:items-center sm:gap-3">
                <span>Belize · US-friendly hours</span>
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
