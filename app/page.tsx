import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { InstagramIcon } from "@/components/icons";
import { images } from "@/lib/images";
import { processSteps } from "@/lib/process";
import { instagramUrl, site } from "@/lib/site";

const featuredCollections = [
  { ...images.bridalGown, title: "Bridal", caption: "Gowns and reception looks of quiet, heirloom grandeur." },
  { ...images.tradPrint, title: "Traditional & Aso Ebi", caption: "Ceremony attire and coordinated looks for your loved ones." },
  { ...images.eveningPlum, title: "Evening", caption: "Sculpted gowns for galas, premieres and nights to remember." },
];

// PLACEHOLDER testimonials — replace with real client words (with permission).
const testimonials = [
  {
    quote: "From the first sketch to the final fitting, I felt completely understood. My gown was beyond anything I imagined.",
    name: "Adaeze",
    occasion: "White wedding, Lagos",
  },
  {
    quote: "Emi dressed me and my entire aso-ebi party. Every guest asked who made our outfits.",
    name: "Osas",
    occasion: "Traditional wedding, Benin City",
  },
  {
    quote: "The fit, the finishing, the calm — this is what true couture feels like.",
    name: "Temi",
    occasion: "Red carpet gown",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        size="full"
        image={images.hero}
        imagePosition="center 30%"
        eyebrow="Bespoke Bridal & Couture"
        title="Made for you, and only you."
        subtitle="Bridal, traditional and evening couture, designed and handmade in Nigeria for the moments that matter most."
        cta={{ href: "/book-consultation", label: "Book a Consultation" }}
      />

      {/* Featured collections */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <SectionTitle
          eyebrow="The Collections"
          title="Three worlds, one signature"
          intro="Every piece begins with you — then is shaped by hand, with lace, beading and structure chosen for the way you move."
        />
        <div className="mt-16 md:mt-20">
          <Gallery items={featuredCollections} columns={3} />
        </div>
        <div className="mt-16 text-center">
          <CTAButton href="/collections" variant="outline">View the Collections</CTAButton>
        </div>
      </section>

      {/* Bespoke process preview */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-36">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.atelierRack.src} alt={images.atelierRack.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">The Bespoke Process</p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-[1.1] sm:text-5xl">
              Unhurried, personal, exacting.
            </h2>
            <ol className="mt-12 space-y-8">
              {processSteps.map((step, i) => (
                <li key={step.title} className="flex gap-6 border-t border-ivory/15 pt-6">
                  <span className="font-serif text-2xl italic text-gold">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-2xl font-light">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">{step.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <CTAButton href="/bespoke-process" variant="outline-light">Discover the Process</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <SectionTitle eyebrow="Kind Words" title="From our brides" />
        <ul className="mt-16 grid gap-14 md:mt-20 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <li key={t.name} className="text-center">
              <span aria-hidden className="font-serif text-6xl leading-none text-gold">&ldquo;</span>
              <blockquote className="mt-2 font-serif text-2xl font-light italic leading-snug">{t.quote}</blockquote>
              <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.25em]">{t.name}</p>
              <p className="mt-1 text-sm text-ink/55">{t.occasion}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16 text-center">
          <Link href="/brides" className="border-b border-gold pb-1 text-sm">See our brides</Link>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {[images.bridalBouquet, images.tradSkirt, images.eveningRed].map((img) => (
              <a key={img.src} href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover transition-opacity duration-500 group-hover:opacity-85" />
              </a>
            ))}
          </div>
          <div className="mt-14 text-center">
            <InstagramIcon className="mx-auto h-6 w-6 text-gold" />
            <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl">Follow the atelier</h2>
            <p className="mx-auto mt-4 max-w-md text-ink/70">
              Fittings, finished looks and behind-the-scenes moments, daily on Instagram.
            </p>
            <div className="mt-10">
              <CTAButton href={instagramUrl} external variant="outline">@{site.instagramHandle}</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
