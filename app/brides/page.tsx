import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Brides",
  description: "Real BEYOU by Emi brides and celebrity looks.",
};

// PLACEHOLDER captions — replace with real brides and celebrity clients (with their permission).
const brides: GalleryItem[] = [
  { ...images.bridalBouquet, title: "Ifeoma", caption: "White wedding · Lagos — sweetheart gown in silk mikado." },
  { ...images.tradPrint, title: "Ehi", caption: "Traditional wedding · Benin City — heritage print with coral accents." },
  { ...images.bridalVeil, title: "Kemi", caption: "Reception look · Abuja — flowing embellished ivory." },
  { ...images.tradSkirt, title: "Nosa", caption: "Engagement ceremony · Benin City — full wax-print skirt." },
  { ...images.bridalHanging, title: "Amara", caption: "Garden wedding · Enugu — layered tulle gown." },
  { ...images.tradPortrait, title: "Zainab", caption: "Introduction ceremony · Port Harcourt." },
];

const celebrity: GalleryItem[] = [
  { ...images.eveningPlum, title: "Awards night", caption: "Off-shoulder column gown in plum." },
  { ...images.eveningRed, title: "Premiere", caption: "Silk chiffon circle gown." },
  { ...images.beauty, title: "Editorial", caption: "Bridal beauty shoot styling." },
];

export default function BridesPage() {
  return (
    <>
      <Hero
        image={images.bouquetDark}
        eyebrow="Our Brides"
        title="Real women, real moments"
        subtitle="A few of the brides and leading ladies who have trusted us with their most important days."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionTitle eyebrow="The Brides" title="Worn with love" />
        <div className="mt-16 md:mt-20">
          <Gallery items={brides} columns={3} />
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionTitle
            eyebrow="Celebrity Wears"
            title="On the red carpet"
            intro="Statement pieces created for public figures, award shows and premieres."
          />
          <div className="mt-16 md:mt-20">
            <Gallery items={celebrity} columns={3} />
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-center text-ivory md:py-32">
        <h2 className="font-serif text-4xl font-light sm:text-5xl">Your story, next</h2>
        <div className="mt-10">
          <CTAButton href="/book-consultation">Book a Consultation</CTAButton>
        </div>
      </section>
    </>
  );
}
