type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

type FaqSchemaProps = {
  items: readonly FaqItem[];
};

/**
 * FAQPage graph. Pairs with visible Q&A on the page. Schema describing
 * content a visitor can't see is a structured-data violation, so keep the
 * rendered list and this array fed from the same source.
 */
export function FaqSchema({ items }: FaqSchemaProps) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Build-time constants from config, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
