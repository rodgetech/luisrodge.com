import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import { pageMetadata } from "@/lib/page-metadata";
import styles from "@/components/seo/service-page.module.css";

export const metadata = pageMetadata("Website & App Projects", "Explore websites and apps built by Luis Rodriguez: tourism booking, architecture, restaurants, marine sales and an AI product. View six live projects.", "/work");

export default function WorkPage() {
  return <div className={styles.page}>
    <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
    <nav className={styles.nav} aria-label="Page navigation"><Link href="/">Luis Rodriguez / Home</Link><Link href="/web-design-belize">Web design in Belize</Link><Link href="/small-business-web-design">Small business websites</Link><Link href="/web-app-development">Web apps</Link></nav>
    <main id="main-content" tabIndex={-1}><h1>Selected website & app projects</h1><p>A closer look at six websites and products I’ve built. Explore the live sites to see the design and interactions, from booking an experience to presenting a business or creating an email signature.</p>
      <div className={`${styles.projects} ${styles.section}`}>{PORTFOLIO_PROJECTS.map((project, index) => <article className={styles.project} id={project.image.split("/").pop()!.replace(".png", "")} key={project.name}>
        <Image src={project.image.replace(".png", ".webp")} alt={project.imageAlt} width={960} height={540} sizes="(max-width: 640px) 100vw, 480px" priority={index === 0} />
        <h2>{project.name}</h2><p>{project.category}</p><p>{project.description}</p><a href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name} ↗</a>
      </article>)}</div>
      <section className={styles.section}><h2>Have a similar project in mind?</h2><p>Explore <Link href="/web-design-belize">website design in Belize</Link>, <Link href="/small-business-web-design">websites for US small businesses</Link>, or <Link href="/web-app-development">web app development</Link> for scope, pricing and ways to get in touch.</p></section>
    </main>
  </div>;
}
