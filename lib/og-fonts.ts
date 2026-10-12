// Loads Cormorant Garamond as TTF for generated images (share previews, icons).
// next/og can't use next/font, so the files are fetched from Google Fonts at build time.

async function loadFont(query: string) {
  // An old user agent makes Google Fonts serve TTF, which next/og supports.
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}&display=swap`, {
    headers: { "User-Agent": "Mozilla/4.0" },
  }).then((res) => res.text());

  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Could not load font: ${query}`);
  return fetch(url).then((res) => res.arrayBuffer());
}

export async function cormorantFonts() {
  const [regular, medium, italic] = await Promise.all([
    loadFont("Cormorant+Garamond:wght@400"),
    loadFont("Cormorant+Garamond:wght@500"),
    loadFont("Cormorant+Garamond:ital,wght@1,400"),
  ]);

  return [
    { name: "Cormorant", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Cormorant", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Cormorant", data: italic, weight: 400 as const, style: "italic" as const },
  ];
}
