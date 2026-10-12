import Image from "next/image";
import type { SiteImage } from "@/lib/images";

export type GalleryItem = SiteImage & {
  title?: string;
  caption?: string;
};

type GalleryProps = {
  items: GalleryItem[];
  /** Number of columns from the md breakpoint up. Mobile is always one column. */
  columns?: 2 | 3 | 4;
  aspect?: "portrait" | "tall";
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const aspectClasses = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
};

export default function Gallery({ items, columns = 3, aspect = "tall" }: GalleryProps) {
  const sizes =
    columns === 2 ? "(min-width: 768px) 50vw, 100vw" : columns === 3 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw";

  return (
    <ul className={`grid grid-cols-1 gap-x-6 gap-y-12 ${columnClasses[columns]}`}>
      {items.map((item) => (
        <li key={`${item.src}-${item.title ?? item.alt}`}>
          <figure>
            <div className={`group relative overflow-hidden bg-ink/5 ${aspectClasses[aspect]}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            {(item.title || item.caption) && (
              <figcaption className="mt-5">
                {item.title && <p className="font-serif text-2xl font-light">{item.title}</p>}
                {item.caption && (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.caption}</p>
                )}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
