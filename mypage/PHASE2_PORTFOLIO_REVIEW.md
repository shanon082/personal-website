# Phase 2 portfolio review

23 October 2026. Local changes only; no commit, push, deployment, or test email.

## Before → after

- Enlarged low-resolution eagle graphic labelled as a personal photo → scalable, labelled SVG architecture composition showing frontend, API, and database layers. No identity imagery generated. The separate hero visual component can be replaced with a genuine photo later.
- Six text-heavy featured cards → four focused projects with category artwork, concise problem/solution/role copy, honest statuses, readable technology labels, and verified actions only. Each illustration is explicitly labelled conceptual artwork, not a screenshot. There are no genuine project screenshots in the repository.
- Remaining projects → a four-entry archive retaining their descriptions, contribution, technology information, and available repository action.
- Public education verification note → neutral wording about studies at Soroti University, with no award or graduation date implied. Confirmation requests remain in this document.
- Numbered skill panels → matching restrained line icons, using only previously supported skills.
- Email draft form → preserved, with explicit required-field guidance, whitespace-error focus, error associations, copy-email feedback/failure handling, and mobile fields that avoid iOS input zoom.
- Existing navy/white/gray design → retained with sharper card hierarchy, focus-within feedback, larger touch areas, and responsive artwork. No dependencies added or package inputs changed.
- Existing metadata/social preview/canonical/sitemap/robots retained; added a minimal Person JSON-LD record containing only the name, job title, site URL, and GitHub profile. The eagle remains an existing favicon asset, not a displayed personal photograph.

## Files modified

- `src/components/Sections/Hero.tsx`
- `src/components/Sections/Projects.tsx`
- `src/components/Sections/Experience.tsx`
- `src/components/Sections/Skills.tsx`
- `src/components/Sections/Contact.tsx`
- `src/data/portfolio.ts`
- `src/app/globals.css`
- `src/app/layout.tsx`

Created: `src/components/Visuals/EngineeringVisual.tsx`, `src/components/Visuals/ProjectVisual.tsx`, and this report.

The initial working tree was clean. Existing Phase 1 work remains in place. The CV, package files, and lockfile are preserved; final checks compare their hashes to the start of this phase.

## Responsive review

Source-level review covered the requested 360, 375, 390, 768, 1024, and 1440px widths. This is not a browser test.

| Width | Intended layout and changes reviewed |
| --- | --- |
| 360 / 375 / 390 | Single-column hero and projects; full-width hero buttons; scalable SVGs; two-column skill panels; single-column contact fields and archive; wrapping footer links; 44px menu, form, and copy-email actions. |
| 768 | Two-column hero/projects; compact desktop navigation; three-column skills; no fixed-width artwork; shrinkable grid children. |
| 1024 | Two-column hero/projects/contact; five-column skills; no raster hero image or fixed-width diagram. |
| 1440 | Existing 1200px content cap and generous section spacing; balanced two-column hero and project cards. |

Browser-control tools, graphical browsers, and Playwright/Puppeteer packages are unavailable. Actual screenshots, overflow measurements, keyboard interaction, mobile-menu behaviour, clipboard permissions, and email-client handoff must still be checked in a browser at these widths. No browser testing is claimed.

## Facts still requiring confirmation

- Soroti attendance dates and qualification status. Programme/institution wording is supplied by the owner; no graduation is claimed.
- Code Craft organisation, 2024–2025 dates, role, and remote India location remain the documented existing claims, not independent verification.
- Soliton exact start month is unknown; existing 2026 start year and supplied October 2026 end remain.
- Current project completion statuses, exact contribution details, and genuine screenshots, if available outside this repository.
- Public source/demo URLs for timetable, energy-sharing, and authentication projects; no replacement URLs invented.
- LinkedIn URL and evidence for adding Flutter, MySQL, Docker, Linux, WSL2, or other tools.

The energy platform remains a prototype, without operational payments or meter integrations. Avenora remains a fictional presentation concept, not a paid engagement. Timetable adoption, paying users, production use, and audited security are not claimed.

## Verification

- `npm run lint`: passed with no errors or warnings.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; generated the home, not-found, icon, Open Graph image, robots, and sitemap routes.
- `git diff --check`: passed; final diff inspected.
- Temporary focused contact checks: passed for recipient, encoded special characters, multiline message, whitespace validation and focus, clipboard success, permission denial, and missing clipboard support. No network/storage calls in the component; no real message sent.
- Generated-output checks: passed for four featured cards, five labelled scalable SVG figures, 28 nonempty links and valid internal/local targets, heading/ID/field-label checks, neutral education copy, native mailto fallback, canonical/sharing metadata, valid Person JSON-LD, generated social PNG, sitemap/robots assets, and reduced-motion CSS.
- Preservation checks: CV and lockfile SHA-256 hashes match the start of this phase. No package/config dependency changes.
- There is no existing test runner or browser-accessibility suite. These focused checks are not browser interaction, layout, or full accessibility audits.

### Public links

HTTP verification returned 200 for:

- `https://github.com/shanon082`
- `https://github.com/shanon082/E-commerce-using-tailwind`
- `https://shanvexa-technologies.vercel.app/`
- `https://avenora-foundation.vercel.app/`

Previously recorded URLs still return 404 and remain omitted:

- `https://github.com/shanon082/final_year_project`
- `https://github.com/shanon082/Secure-Authentication-System`
- `https://github.com/shanon082/Sickle-cell-Image-Multiplier`

These may be private or renamed; corrected public URLs require the owner's confirmation. No broken actions or invented replacement links were added. External links use normal same-tab navigation; none opens a new tab unexpectedly.

## Recommended next improvements

Run visual/keyboard review at all six requested widths and try clipboard/mailto behaviour in actual browsers. Supply corrected public project links and genuine screenshots to replace artwork where useful. Confirm the factual details above and review the existing CV separately before approving any publication.
