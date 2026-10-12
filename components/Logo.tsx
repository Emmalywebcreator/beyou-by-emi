import Link from "next/link";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="BEYOU by Emi — home"
      className={`inline-flex items-baseline gap-2 font-serif ${light ? "text-ivory" : "text-ink"}`}
    >
      <span className="text-2xl font-medium tracking-[0.2em]">BEYOU</span>
      <span className="text-lg font-light italic text-gold">by Emi</span>
    </Link>
  );
}
