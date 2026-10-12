# BEYOU by Emi — project rules

Luxury website for BEYOU by Emi, a Nigerian bespoke bridal and fashion house
(traditional wedding & aso-ebi attire, evening gowns, high-end bridal) with a
fashion academy in Benin City. These rules apply to every stage of work.

## Stack
- Next.js App Router (TypeScript), Tailwind CSS v4. Routes live in `app/`
  at the project root (no `src/` directory). Path alias `@/*` → project root.
- Do not re-initialise the project or change the framework version.

## Brand
- Palette (defined as Tailwind theme colours in `app/globals.css`):
  - `ivory` #FAF7F2 — background
  - `ink` #111111 — deep black, text
  - `gold` #C9A96E — champagne gold: accents, buttons, dividers
- Fonts via `next/font`: Cormorant Garamond for headings (`font-serif`),
  Inter for body (`font-sans`).
- Tone: elegant, confident, minimal. Generous whitespace, large imagery,
  restrained gold accents. It must feel like a couture house, not a template.
  Gold is for accents only — never large blocks of gold text on ivory
  (low contrast); use it for rules, small labels, buttons and details.

## Quality rules
- Mobile-first: every page must look premium at 375px width, then scale up
  to desktop.
- Use `next/image` for all images. Image sources are centralised in
  `lib/images.ts` (currently Unsplash placeholders; swap for real photos).
- Keep components reusable: Header, Footer, Hero, Gallery, SectionTitle,
  CTAButton (in `components/`).
- Site-wide contact details (WhatsApp number, phone, Instagram, address,
  hours, nav links) live in one place: `lib/site.ts`.

## Structure notes
- `/academy` has its own `app/academy/layout.tsx` so further academy pages
  (e.g. `/academy/courses`) can be added as nested routes without
  restructuring.

## Scope discipline
- Build only what the current stage asks for. No unrequested features.
- Forms (consultation, academy interest) submit via server actions in
  `app/actions/enquiries.ts` and email the studio through Resend
  (`lib/email.ts`). Validation lives in `lib/enquiries.ts` and is enforced
  server-side. Config is env-only: see `.env.example`. Never commit secrets.

## SEO
- Every page exports metadata via `pageMetadata()` from `lib/seo.ts`
  (title, description, canonical path, social text). New pages must do the
  same and be added to `app/sitemap.ts`.
- The site URL comes from `siteUrl` in `lib/site.ts` (env:
  `NEXT_PUBLIC_SITE_URL`).

## Roadmap
- Stage status, outstanding placeholders and next-stage recommendations are
  tracked in `docs/ROADMAP.md`. Read it at the start of each stage and update
  it when a stage is finished.
