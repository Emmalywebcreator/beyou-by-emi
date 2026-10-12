import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Collections",
  description: "Bridal, traditional & aso-ebi, and evening couture by BEYOU by Emi.",
};

const collections: { id: string; eyebrow: string; title: string; intro: string; items: GalleryItem[] }[] = [
  {
    id: "bridal",
    eyebrow: "Collection I",
    title: "Bridal",
    intro: "White wedding gowns and reception looks — hand-beaded lace, sculpted bodices and trains made to be remembered.",
    items: [
      { ...images.bridalGown, title: "The Cathedral", caption: "Corded lace, sheer sleeves, chapel-length train." },
      { ...images.bridalBouquet, title: "The Sweetheart", caption: "Structured bodice in silk mikado." },
      { ...images.bridalHanging, title: "The Reverie", caption: "Layered tulle with a softly gathered skirt." },
    ],
  },
  {
    id: "traditional",
    eyebrow: "Collection II",
    title: "Traditional & Aso Ebi",
    intro: "Ceremony attire rooted in heritage — for the bride, her family and her aso-ebi party, coordinated down to the last bead.",
    items: [
      { ...images.tradPrint, title: "The Heritage", caption: "Statement print with a crisp tailored collar." },
      { ...images.tradSkirt, title: "The Celebration", caption: "Full wax-print skirt, made for dancing." },
      { ...images.tradKaftan, title: "The Matriarch", caption: "Embroidered kaftan in marigold." },
    ],
  },
  {
    id: "evening",
    eyebrow: "Collection III",
    title: "Evening",
    intro: "Gowns for galas, premieres and milestone birthdays — sculpted, fluid and unmistakably yours.",
    items: [
      { ...images.eveningPlum, title: "The Velvet Hour", caption: "Off-shoulder column gown." },
      { ...images.eveningRed, title: "The Flame", caption: "Full circle skirt in silk chiffon." },
      { ...images.eveningBlue, title: "The Tide", caption: "Draped wrap gown with thigh-high slit." },
    ],
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Hero
        image={images.bridalVeil}
        imagePosition="center 25%"
        eyebrow="The Collections"
        title="Bridal, Traditional & Evening"
        subtitle="Each piece shown here is a starting point. Every BEYOU garment is made to measure."
      />

      <nav aria-label="Collections" className="border-b border-ink/10">
        <ul className="mx-auto flex max-w-7xl justify-center gap-6 overflow-x-auto px-6 py-5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/60 sm:gap-12">
          {collections.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${c.id}`} className="transition-colors hover:text-ink">{c.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {collections.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`scroll-mt-16 ${i > 0 ? "border-t border-ink/10" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <SectionTitle eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
            <div className="mt-16 md:mt-20">
              <Gallery items={c.items} columns={3} />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink px-6 py-24 text-center text-ivory md:py-32">
        <h2 className="font-serif text-4xl font-light sm:text-5xl">Begin your own piece</h2>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">Tell us about your occasion and we will design around you.</p>
        <div className="mt-10">
          <CTAButton href="/book-consultation">Book a Consultation</CTAButton>
        </div>
      </section>
    </>
  );
}
