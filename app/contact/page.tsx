import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CTAButton from "@/components/CTAButton";
import SectionTitle from "@/components/SectionTitle";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { instagramUrl, site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Visit the BEYOU by Emi studio in Benin City, or reach us by phone, WhatsApp or Instagram.",
  path: "/contact",
});

const label = "text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ink/60";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionTitle
        as="h1"
        eyebrow="Get in Touch"
        title="Visit the studio"
        intro="Appointments are recommended so we can give you our full attention."
      />

      <div className="mt-20 grid gap-14 border-t border-ink/15 pt-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className={label}>Studio</p>
          <address className="mt-5 font-serif text-2xl font-light not-italic leading-snug">
            {site.studio.addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </div>

        <div>
          <p className={label}>Opening hours</p>
          <dl className="mt-5 space-y-3">
            {site.studio.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-ink/10 pb-3 text-sm">
                <dt className="text-ink/70">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-8">
          <div>
            <p className={label}>Phone</p>
            <a href={telUrl} className="mt-5 block font-serif text-2xl font-light">{site.phone}</a>
          </div>
          <div>
            <p className={label}>Email</p>
            <a href={`mailto:${site.email}`} className="mt-5 block font-serif text-2xl font-light">{site.email}</a>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              <WhatsAppIcon className="h-5 w-5 text-gold" /> WhatsApp the studio
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              <InstagramIcon className="h-5 w-5 text-gold" /> @{site.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <CTAButton href="/book-consultation">Book a Consultation</CTAButton>
      </div>
    </section>
  );
}
