# BEYOU by Emi — Roadmap

## Stage 1 — complete (2026-10-12)
Brand setup, all core pages, Academy landing page, global header/footer,
floating WhatsApp button. Forms are UI only.

Placeholders still to replace:
- `lib/site.ts` — WhatsApp number, phone, email, studio address, opening hours.
- `lib/images.ts` — Unsplash placeholder photos → real photos in `public/images/`.
- `app/page.tsx` — testimonials (invented; marked PLACEHOLDER).
- `app/brides/page.tsx` — bride names and captions (invented; marked PLACEHOLDER).
- `app/about/page.tsx` — Emi's story (draft copy; marked PLACEHOLDER).

## Stage 2 — recommended
1. **Real content:** real photography, Emi's story, real testimonials,
   studio address, and a Google Maps embed on the Contact page.
2. **Form handling:** a server action that emails consultation and academy
   requests (e.g. via Resend), with validation, spam protection, and
   success/error states. Replaces the UI-only notice in
   `components/forms/FormShell.tsx`.
3. **SEO & sharing:** Open Graph images for social link previews,
   `sitemap.ts` and `robots.ts`, LocalBusiness structured data, and a
   favicon/logo mark.
4. **Deploy:** Vercel with the custom domain, plus analytics.

## Later stages
- Expand the Academy into nested routes under `app/academy/` (courses, fees,
  intake dates).
- Individual detail pages for collection pieces.
