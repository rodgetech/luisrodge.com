import Link from "next/link";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { SOCIAL_LINKS, USER } from "@/config/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type SocialLinksSectionProps = {
  githubTotal: number;
};

export function SocialLinksSection({ githubTotal }: SocialLinksSectionProps) {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <Link
        href={SOCIAL_LINKS.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex items-center gap-1.5"
        title={`${githubTotal.toLocaleString()} contributions in ${year}`}
      >
        <Github className="h-3.5 w-3.5 shrink-0 opacity-70" />
        GitHub
      </Link>
      <Link
        href={SOCIAL_LINKS.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex items-center gap-1.5"
      >
        <Linkedin className="h-3.5 w-3.5 shrink-0 opacity-70" />
        LinkedIn
      </Link>
      <Link
        href={SOCIAL_LINKS.x.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex items-center gap-1.5"
      >
        <XIcon className="h-3.5 w-3.5 shrink-0 opacity-70" />
        Twitter
      </Link>
      <Link
        href={SOCIAL_LINKS.youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex items-center gap-1.5"
      >
        <Youtube className="h-3.5 w-3.5 shrink-0 opacity-70" />
        YouTube
      </Link>
      <Link
        href={`mailto:${USER.email}`}
        className="link-underline inline-flex items-center gap-1.5"
      >
        <Mail className="h-3.5 w-3.5 shrink-0 opacity-70" />
        Email
      </Link>
    </div>
  );
}
