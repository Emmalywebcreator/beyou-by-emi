import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Emi and the BEYOU house.",
};

// PLACEHOLDER story copy — replace with Emi's own words.
const values = [
  { title: "Made to measure", text: "Nothing off the rail. Every pattern is drafted for one woman." },
  { title: "Rooted in heritage", text: "Nigerian ceremony and craft, carried into contemporary couture." },
  { title: "Finished by hand", text: "Beading, lace placement and hems completed by our artisans." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image={images.atelierRack}
        eyebrow="About the House"
        title="The story of Emi"
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={images.tradPortrait.src} alt={images.tradPortrait.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <SectionTitle align="left" eyebrow="Founder & Creative Director" title="Be you — beautifully." />
          <div className="mt-10 space-y-6 leading-relaxed text-ink/75">
            <p>
              BEYOU by Emi began with a simple belief: that a woman should never have to choose between
              her heritage and her own sense of style. Emi started by dressing friends and family for
              their weddings in Benin City, and word travelled quickly.
            </p>
            <p>
              Today the house creates bridal gowns, traditional wedding and aso-ebi attire, and evening
              couture for brides and public figures across Nigeria and the diaspora — each piece designed
              around the woman who will wear it.
            </p>
            <p>
              The name is the promise. We do not dress you to look like someone else. We dress you to look
              entirely, unmistakably like yourself.
            </p>
          </div>
          <p className="mt-10 font-serif text-3xl italic text-ink">— Emi</p>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <ul className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3 md:px-10 md:py-32">
          {values.map((v) => (
            <li key={v.title} className="text-center">
              <span aria-hidden className="mx-auto block h-px w-10 bg-gold" />
              <h3 className="mt-6 font-serif text-3xl font-light">{v.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink/65">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink px-6 py-24 text-center text-ivory md:py-32">
        <h2 className="font-serif text-4xl font-light sm:text-5xl">Meet us in the studio</h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="/book-consultation">Book a Consultation</CTAButton>
          <CTAButton href="/academy" variant="outline-light">The Academy</CTAButton>
        </div>
      </section>
    </>
  );
}
