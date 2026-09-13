"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Link2 } from "lucide-react";

import styles from "@/components/portfolio/portfolio.module.css";

type QuickQuoteCtaProps = {
  phoneNumber: string;
};

function normalizePageUrl(value: string) {
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  const parsed = new URL(candidate);

  if (!parsed.hostname.includes(".")) {
    throw new Error("invalid-url");
  }

  return parsed.toString();
}

export function QuickQuoteCta({ phoneNumber }: QuickQuoteCtaProps) {
  const [pageUrl, setPageUrl] = useState("");
  const [error, setError] = useState("");

  function openQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const normalizedUrl = normalizePageUrl(pageUrl.trim());
      const message = `Hi Luis, I'd like a fast website quote. Here's my page: ${normalizedUrl}`;
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

      setError("");
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setError("Paste a complete Facebook, Instagram, TikTok, or website link.");
    }
  }

  return (
    <section className={styles.quickQuote} aria-labelledby="quick-quote-title">
      <h2 id="quick-quote-title">
        Your business is on <span className="sr-only">social media</span>
        <span className={styles.quickQuoteRotator} aria-hidden="true">
          <span className={styles.quickQuoteWords}>
            <span className={`${styles.quickQuotePlatform} ${styles.facebook}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.2 8.2V6.8c0-.7.5-.9.9-.9h2.3V2.1L14.2 2C10.7 2 9.9 4.6 9.9 6.4v1.8H7.8v4.3h2.1V22h4.3v-9.5h2.9l.4-4.3h-3.3Z" />
              </svg>
              Facebook
            </span>
            <span className={`${styles.quickQuotePlatform} ${styles.instagram}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.7" r="1" className={styles.instagramDot} />
              </svg>
              Instagram
            </span>
            <span className={`${styles.quickQuotePlatform} ${styles.tiktok}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.4 2v12.2a3.1 3.1 0 1 1-2.6-3.1V7a7.2 7.2 0 1 0 6.7 7.2V9.1A8.1 8.1 0 0 0 22 10V6a4.2 4.2 0 0 1-3.5-1.9A4.1 4.1 0 0 1 17.8 2h-3.4Z" />
              </svg>
              TikTok
            </span>
            <span className={`${styles.quickQuotePlatform} ${styles.facebook}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.2 8.2V6.8c0-.7.5-.9.9-.9h2.3V2.1L14.2 2C10.7 2 9.9 4.6 9.9 6.4v1.8H7.8v4.3h2.1V22h4.3v-9.5h2.9l.4-4.3h-3.3Z" />
              </svg>
              Facebook
            </span>
          </span>
        </span>
      </h2>
      <p>Paste the page. Your website could be next.</p>

      <form onSubmit={openQuote} className={styles.quickQuoteForm} noValidate>
        <div className={styles.quickQuoteField}>
          <Link2 size={16} aria-hidden="true" />
          <input
            value={pageUrl}
            onChange={(event) => {
              setPageUrl(event.target.value);
              if (error) setError("");
            }}
            inputMode="url"
            autoComplete="url"
            aria-label="Facebook, Instagram, TikTok, or website link"
            aria-describedby={error ? "quick-quote-error" : undefined}
            aria-invalid={Boolean(error)}
            placeholder="Paste your page link"
          />
          <button type="submit" aria-label="Get a fast quote on WhatsApp">
            Get quote
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
        <p
          id="quick-quote-error"
          className={styles.quickQuoteError}
          aria-live="polite"
        >
          {error}
        </p>
      </form>
    </section>
  );
}
