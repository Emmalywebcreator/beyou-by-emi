import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { images } from "@/lib/images";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "The Bespoke Process",
  description: "Consultation, measurements, fittings and delivery — how a BEYOU by Emi piece is made.",
};

export default function BespokeProcessPage() {
  return (
    <>
      <Hero
        image={images.atelierRail}
        eyebrow="The Bespoke Process"
        title="From first conversation to final fitting"
        subtitle="A bespoke BEYOU piece typically takes 8 to 12 weeks. Here is how we make it together."
      />

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <ol>
          {processSteps.map((step, i) => (
            <li key={step.title} className="grid gap-6 border-t border-ink/15 py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="md:col-span-4">
                <span className="font-serif text-5xl font-light italic text-gold">0{i + 1}</span>
                <h2 className="mt-3 font-serif text-4xl font-light">{step.title}</h2>
                <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink/60">
                  {step.timeline}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-2xl font-light leading-snug">{step.summary}</p>
                <p className="mt-5 leading-relaxed text-ink/70">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-32">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Timelines"
              title="Plan ahead, arrive unhurried"
              tone="dark"
            />
            <dl className="mt-12 space-y-6 text-sm">
              {[
                ["Bridal gowns", "Book 4 – 6 months ahead"],
                ["Traditional & aso-ebi", "Book 3 – 4 months ahead"],
                ["Evening wear", "Book 6 – 8 weeks ahead"],
                ["Rush commissions", "Subject to availability"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-ivory/15 pb-4">
                  <dt className="text-ivory/70">{label}</dt>
                  <dd className="text-right font-serif text-xl font-light">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12">
              <CTAButton href="/book-consultation">Book a Consultation</CTAButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.hands.src} alt={images.hands.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
