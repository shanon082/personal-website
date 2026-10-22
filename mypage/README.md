# Shanon Simon Lubega — personal portfolio

A single-page Next.js 16 App Router portfolio using React 19, TypeScript, and Tailwind CSS 4. Existing navy branding and the original portrait are retained. No new dependencies were added.

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

There is no existing test runner or automated browser suite. See [PORTFOLIO_REVIEW.md](PORTFOLIO_REVIEW.md) for content decisions, verification limits, and information to confirm before publication.

## Content and structure

- `src/data/portfolio.ts`: contact details, URLs, featured projects, and archive projects.
- `src/components/Sections/`: hero, projects, skills, experience, and contact.
- `src/components/Layout/`: navigation and footer.
- `src/app/globals.css`: responsive layout, typography, focus styles, reduced-motion support.
- `src/app/layout.tsx`: canonical, title, description, Open Graph, and Twitter metadata.
- `src/app/opengraph-image.tsx`, `robots.ts`, `sitemap.ts`: sharing and crawler routes.

Update the canonical base URL in `src/data/portfolio.ts` if the production domain changes.

## Contact and privacy

The contact form prepares a `mailto:` draft in memory. Visitors explicitly open their email app and send it there. No API, analytics, local storage, form provider, or database receives form details from this site. A configured email app is required for the draft link; the direct email address is always displayed as a fallback. No delivery confirmation is claimed.

## CV

`public/SHANON_SIMON_LUBEGA_CV.pdf` is the existing downloadable CV. It was preserved without modification and needs a separate content review before updating.

## Publication

Changes are local only. Commit, push, and deployment require the owner's approval.
