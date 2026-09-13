import type { Metadata } from "next";
import { SITE_INFO } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: SITE_INFO.name, images: [{ url: SITE_INFO.ogImage, alt: SITE_INFO.name }] },
    twitter: { card: "summary_large_image", title, description, images: [SITE_INFO.ogImage] },
  };
}
