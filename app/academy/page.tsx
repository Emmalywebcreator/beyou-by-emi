import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FormShell from "@/components/forms/FormShell";
import { SelectField, TextAreaField, TextField } from "@/components/forms/Field";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academy",
  description: `${site.academy.name} — learn fashion design and couture tailoring on Sapele Road, Benin City.`,
};

const interests = ["Beginner fashion design", "Advanced tailoring", "Bridal couture", "Not sure yet"] as const;

export default function AcademyPage() {
  return (
    <>
      <Hero
        image={images.atelierRail}
        eyebrow={site.academy.name}
        title="Learn the craft of couture"
        subtitle="Hands-on training in design, pattern cutting and finishing — taught in our Benin City studio."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <SectionTitle align="left" eyebrow="The Academy" title="Where the next generation of designers is made" />
          <div className="mt-10 space-y-6 leading-relaxed text-ink/75">
            <p>
              The BEYOU Fashion Academy shares the techniques behind our bridal and couture work with
              aspiring designers — from sketching and measuring to pattern drafting, construction and the
              hand-finishing that sets couture apart.
            </p>
            <p>
              Classes are small and practical, taught by the same team that creates for our brides.
            </p>
          </div>
        </div>
        <aside className="md:col-span-4 md:col-start-9 md:self-end">
          <div className="border-t border-gold pt-6">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ink/60">Location</p>
            <address className="mt-4 font-serif text-2xl font-light not-italic leading-snug">
              {site.academy.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>
        </aside>
      </section>

      <section id="register" className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <SectionTitle
            eyebrow="Register Interest"
            title="Join the next intake"
            intro="Leave your details and we will contact you when admissions open."
          />
          <div className="mt-16">
            <FormShell submitLabel="Register Interest">
              <TextField id="name" label="Full name" autoComplete="name" required />
              <TextField id="phone" label="Phone" type="tel" autoComplete="tel" required />
              <TextField id="email" label="Email" type="email" autoComplete="email" required />
              <SelectField id="interest" label="Area of interest" options={interests} />
              <TextAreaField
                id="message"
                label="Message"
                placeholder="Tell us about your experience and goals."
                className="sm:col-span-2"
              />
            </FormShell>
          </div>
        </div>
      </section>
    </>
  );
}
