import Link from "next/link";
import Logo from "@/components/Logo";
import { InstagramIcon } from "@/components/icons";
import { instagramUrl, mainNav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              Bespoke bridal, traditional and evening couture — designed and handmade in Nigeria.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm text-ivory/80 transition-colors hover:text-gold"
            >
              <InstagramIcon />@{site.instagramHandle}
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">The House</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ivory/70">
              <li>
                <Link href="/" className="transition-colors hover:text-ivory">Home</Link>
              </li>
              {mainNav
                .filter((item) => item.href !== "/academy")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-ivory">
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/book-consultation" className="transition-colors hover:text-ivory">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">Academy</p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              {site.academy.name}
              <br />
              {site.academy.addressLines.slice(0, 2).join(", ")}
            </p>
            <Link
              href="/academy"
              className="mt-4 inline-block border-b border-gold pb-1 text-sm text-ivory transition-colors hover:text-gold"
            >
              Discover the Academy
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Benin City · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
