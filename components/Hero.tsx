import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import type { SiteImage } from "@/lib/images";

type HeroProps = {
  image: SiteImage;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  cta?: { href: string; label: string };
  /** "full" fills the viewport (home); "page" is a shorter banner for inner pages. */
  size?: "full" | "page";
  imagePosition?: string;
};

export default function Hero({
  image,
  title,
  eyebrow,
  subtitle,
  cta,
  size = "page",
  imagePosition = "center",
}: HeroProps) {
  const full = size === "full";

  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-ink ${
        full ? "min-h-[calc(100svh-4rem)]" : "min-h-[60svh] md:min-h-[65vh]"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="max-w-2xl text-ivory">
          {eyebrow && (
            <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-serif font-light leading-[1.05] ${
              full ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-10">
              <CTAButton href={cta.href}>{cta.label}</CTAButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
