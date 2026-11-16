import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeaderProps = {
  id?: string;
  title: string;
  link?: { href: string; label: string; external?: boolean };
};

/** 15px title over a faint hairline, optional "see all" link on the right. */
export function SectionHeader({ id, title, link }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border/40 pb-3">
      <h2 id={id} className="text-[15px] font-medium tracking-tight">{title}</h2>
      {link ? (
        <Link
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 after:absolute after:-inset-x-2 after:-inset-y-2.5 hover:text-foreground outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
        >
          {link.label}
          <ArrowUpRight
            aria-hidden
            className="size-3.5 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </Link>
      ) : null}
    </div>
  );
}
