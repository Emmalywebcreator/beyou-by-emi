import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "outline-light";
  external?: boolean;
  className?: string;
};

const variants = {
  gold: "bg-gold text-ink hover:bg-ink hover:text-ivory",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  "outline-light": "border border-ivory/80 text-ivory hover:bg-ivory hover:text-ink",
};

export const ctaClasses = (variant: CTAButtonProps["variant"] = "gold") =>
  `inline-flex min-h-12 items-center justify-center px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${variants[variant]}`;

export default function CTAButton({
  href,
  children,
  variant = "gold",
  external = false,
  className = "",
}: CTAButtonProps) {
  const classes = `${ctaClasses(variant)} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
