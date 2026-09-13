import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_PAGES, type ServiceSlug } from "@/config/services";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import { BOOKING_URL, SITE_INFO, USER } from "@/config/site";
import { pageMetadata } from "@/lib/page-metadata";
import styles from "@/components/seo/service-page.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(SERVICE_PAGES).map(service => ({ service })); }
function getPage(service: string) {
  if (!Object.hasOwn(SERVICE_PAGES, service)) notFound();
  return SERVICE_PAGES[service as ServiceSlug];
}
export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = getPage(service);
  return pageMetadata(page.title, page.description, `/${service}`);
}
export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = getPage(service);
  const projects = PORTFOLIO_PROJECTS.filter(project => (page.projects as readonly string[]).includes(project.name));
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${SITE_INFO.url}/${service}#service`, name: page.title, description: page.description, url: `${SITE_INFO.url}/${service}`, provider: { "@id": `${SITE_INFO.url}/#person` }, areaServed: [{ "@type": "Country", name: "Belize" }, { "@type": "Country", name: "United States" }] },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.url }, { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_INFO.url}/${service}` }] },
  ] };
  return <div className={styles.page}>
    <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
    <nav className={styles.nav} aria-label="Page navigation"><Link href="/">Luis Rodriguez / Home</Link><Link href="/work">Selected projects</Link><Link href="/about">About</Link></nav>
    <main id="main-content" tabIndex={-1}>
      <h1>{page.title}</h1><p>{page.lead}</p>
      <div className={styles.actions}><a href={`https://wa.me/${USER.phoneNumber.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">Let’s Chat</a><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a></div>
      {page.sections.map(section => <section className={styles.section} key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}
      <section className={styles.section}><h2>Related work</h2><div className={styles.projects}>{projects.map(project => <article className={styles.project} key={project.name}><Image src={project.image.replace(".png", ".webp")} alt={project.imageAlt} width={960} height={540} sizes="(max-width: 640px) 100vw, 480px" /><h3>{project.name}</h3><p>{project.description}</p><Link href={`/work#${project.image.split("/").pop()!.replace(".png", "")}`}>Explore this project</Link></article>)}</div></section>
      <section className={styles.section}><h2>Before we get started</h2>{page.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
      <section className={styles.section}><h2>More about working together</h2><nav className={styles.nav} aria-label="Related services">{Object.entries(SERVICE_PAGES).filter(([slug]) => slug !== service).map(([slug, item]) => <Link key={slug} href={`/${slug}`}>{item.title}</Link>)}<Link href="/hire-a-software-developer-in-belize">Hiring a developer in Belize</Link><Link href="/experience">Experience & résumé</Link></nav></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </div>;
}
