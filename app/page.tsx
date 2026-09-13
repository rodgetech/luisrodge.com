import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Github, Linkedin, Mail, MessageCircle, UserRound } from "lucide-react";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import styles from "@/components/portfolio/portfolio.module.css";
import { BOOKING_URL, USER, SOCIAL_LINKS } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("Web Designer & App Developer in Belize", "Custom websites and apps for businesses in Belize and the US. Explore Luis Rodriguez’s work, projects from $500–$3,000, and chat about your next build.", "/");

export default function Home() {
  return (
    <div className={styles.portfolioPage}>
      <a href="#selected-work" className={styles.skipLink}>Skip to selected work</a>
      <main className={styles.shell}>
        <aside className={styles.identityPanel} aria-label="About Luis">
          <div className={styles.profile}>
            <Image src={USER.avatar} alt="Luis Rodriguez" width={80} height={80} priority className={styles.portrait} />
            <h1>Luis Rodriguez</h1>
            <p>I design and build websites and apps for businesses and founders here in Belize and internationally.</p>
            <p className={styles.price}><Link href="/web-design-belize">Website design</Link> & <Link href="/web-app-development">app development</Link>. <span>$500–$3,000 per project.</span></p>
            <p className={styles.serviceLinks}><Link href="/work">Explore the projects</Link> · <Link href="/small-business-web-design">For US small businesses</Link></p>
            <nav className={styles.socials} aria-label="Social profiles">
              <a href={SOCIAL_LINKS.github.url} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={17} /></a>
              <a href={SOCIAL_LINKS.linkedin.url} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /></a>
              <a href={SOCIAL_LINKS.x.url} aria-label="X" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href={`mailto:${USER.email}`} aria-label="Email Luis"><Mail size={18} /></a>
            </nav>
            <nav className={styles.navigation} aria-label="Main navigation">
              <Link href="/about">About <UserRound size={16} /></Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Let’s talk <CalendarDays size={17} /></a>
              <a href={`https://wa.me/${USER.phoneNumber.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">Let’s Chat <MessageCircle size={17} /></a>
            </nav>
          </div>
          <div className={styles.profileFooter}>
            <div className={styles.stats}>
              <div><strong>12+</strong><span>Clients</span></div>
              <div><strong>13+</strong><span>Projects shipped</span></div>
              <div><strong>$500</strong><span>Starting price</span></div>
            </div>
          </div>
        </aside>
        <section className={styles.workColumn} id="selected-work" aria-label="Selected work" tabIndex={-1}>
          <ProjectGallery />
        </section>
      </main>
    </div>
  );
}
