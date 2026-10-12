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
2. ~~**Form handling**~~ — **done (2026-10-12).** Server actions email
   consultation and academy requests via Resend, with server-side
   validation, honeypot + minimum-fill-time spam protection, and
   success/error states. To go live: set `RESEND_API_KEY`,
   `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` (see `.env.example`) and
   verify the sending domain in Resend.
3. ~~**SEO & sharing**~~ — **done (2026-10-12).** Branded share image
   (`app/opengraph-image.tsx`), favicon and Apple icon, `sitemap.xml`,
   `robots.txt`, canonical URLs and social titles per page (`lib/seo.ts`),
   and ClothingStore structured data on the home page. To go live: set
   `NEXT_PUBLIC_SITE_URL` to the real domain, then submit the sitemap in
   Google Search Console. Update the structured data's street address and
   phone once real details are in `lib/site.ts`.
4. **Deploy:** Vercel with the custom domain, plus analytics.

## Later stages
- Rate limiting on the form actions (needs a store such as Upstash Redis or
  Vercel KV) if spam gets past the honeypot.
- Expand the Academy into nested routes under `app/academy/` (courses, fees,
  intake dates).
- Individual detail pages for collection pieces.
