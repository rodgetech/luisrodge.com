import {
  BIO,
  SITE_INFO,
  SOCIAL_LINKS,
  TECH_STACK,
  USER,
} from "@/config/site";

const PERSON_ID = `${SITE_INFO.url}/#person`;
const WEBSITE_ID = `${SITE_INFO.url}/#website`;

const absolute = (path: string) => new URL(path, SITE_INFO.url).toString();

/**
 * Person + WebSite graph.
 *
 * `sameAs` is what ties the aged @rodgetech handles to this domain after the
 * rodgetech.com → luisrodge.com move, so search engines resolve one entity
 * instead of two. Keep every profile below pointing back here.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: `${USER.firstName} ${USER.lastName}`,
      alternateName: USER.displayName,
      url: SITE_INFO.url,
      image: absolute(USER.avatar),
      jobTitle: USER.jobTitle,
      description: BIO.intro,
      email: `mailto:${USER.email}`,
      knowsLanguage: ["en"],
      knowsAbout: TECH_STACK.map((tech) => tech.name),
      address: {
        "@type": "PostalAddress",
        addressRegion: USER.addressRegion,
        addressCountry: USER.addressCountry,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: USER.jobTitle,
        occupationLocation: {
          "@type": "Country",
          name: USER.countryName,
        },
      },
      sameAs: Object.values(SOCIAL_LINKS).map((link) => link.url),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_INFO.url,
      name: SITE_INFO.name,
      description: SITE_INFO.description,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Values are build-time constants from config/site.ts, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
