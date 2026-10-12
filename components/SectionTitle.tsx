type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  /** Use "dark" when the title sits on an ink background. */
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Heading = "h2",
  tone = "light",
  className = "",
}: SectionTitleProps) {
  const centered = align === "center";
  const muted = tone === "dark" ? "text-ivory/60" : "text-ink/60";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`mb-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] ${muted}`}>
          {eyebrow}
        </p>
      )}
      <Heading className="font-serif text-4xl font-light leading-[1.1] sm:text-5xl">
        {title}
      </Heading>
      <span
        aria-hidden
        className={`mt-6 block h-px w-12 bg-gold ${centered ? "mx-auto" : ""}`}
      />
      {intro && <p className={`mt-6 text-base leading-relaxed ${muted}`}>{intro}</p>}
    </div>
  );
}
