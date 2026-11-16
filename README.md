# luisrodge.com

Personal portfolio of Luis Rodriguez, a software engineer in Cayo, Belize. Built with Next.js (App Router), React and Tailwind CSS v4, deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Homepage content (esigna, Screen Mockups, AI section, stack) | `config/home.ts` |
| Work history (homepage BuildShip entry and `/experience`) | `config/experience.ts` |
| Identity, socials, SEO, tech icon registry | `config/site.ts` |
| Hire page copy and FAQ | `config/hire.ts` |
| Shared layout (identity column, nav, footer) | `components/site/site-shell.tsx` |
| GitHub contribution graph | `lib/github.ts`, `components/home/github-activity.tsx` |
| Design tokens | `app/globals.css` (`.home`) |
| Retired URLs (301 to `/`) | `next.config.ts` |

Numbers on the site (revenue, usage) are hand-maintained in `config/home.ts`. Keep them literally true.

## Social preview image

`public/social/luis-rodriguez-og.png` is generated from the avatar and the esigna screenshot:

```bash
npm run social:generate
```

## Docs

- `PRODUCT.md`: audience, positioning and content rules
- `DESIGN.md`: the design system
- `SEO.md`: SEO plan and progress log
