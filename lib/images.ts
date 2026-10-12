// Placeholder imagery. To use real photos, drop files into /public/images
// and replace a `src` below with e.g. "/images/bridal-01.jpg".

export type SiteImage = { src: string; alt: string };

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600`;

export const images = {
  hero: { src: unsplash("1594552072238-b8a33785b261"), alt: "Ivory lace bridal gown on a dress form in a sunlit fitting room" },

  bridalGown: { src: unsplash("1594552072238-b8a33785b261"), alt: "Lace bridal gown with cathedral train" },
  bridalBouquet: { src: unsplash("1550005809-91ad75fb315f"), alt: "Bride in a sweetheart-neckline gown holding a bouquet" },
  bridalHanging: { src: unsplash("1546804784-896d0dca3805"), alt: "Tulle bridal gown hanging outdoors" },
  bridalVeil: { src: unsplash("1583391733956-3750e0ff4e8b"), alt: "Bride in a flowing embellished ivory ensemble" },

  tradPrint: { src: unsplash("1531123897727-8f129e1688ce"), alt: "Portrait in a structured print ensemble" },
  tradSkirt: { src: unsplash("1523824921871-d6f1a15151f1"), alt: "Woman in a vibrant wax-print skirt" },
  tradKaftan: { src: unsplash("1605763240000-7e93b172d754"), alt: "Embroidered marigold kaftan" },
  tradPortrait: { src: unsplash("1589156280159-27698a70f29e"), alt: "Portrait at dusk in an ivory blouse" },

  eveningPlum: { src: unsplash("1566174053879-31528523f8ae"), alt: "Off-shoulder plum evening gown" },
  eveningRed: { src: unsplash("1595777457583-95e059d581b8"), alt: "Flowing red evening gown in motion" },
  eveningBlue: { src: unsplash("1539008835657-9e8e9680c956"), alt: "Powder-blue draped evening gown" },

  atelierRack: { src: unsplash("1558769132-cb1aea458c5e"), alt: "Garments on a rail in the atelier" },
  atelierRail: { src: unsplash("1490481651871-ab68de25d43d"), alt: "Ivory and neutral pieces on hangers" },
  rings: { src: unsplash("1515934751635-c81c6bc9a2d8"), alt: "Wedding rings resting on flowers" },
  hands: { src: unsplash("1520854221256-17451cc331bf"), alt: "Bride and groom holding hands" },
  bouquetDark: { src: unsplash("1519741497674-611481863552"), alt: "Bridal bouquet in soft evening light" },
  beauty: { src: unsplash("1487412947147-5cebf100ffc2"), alt: "Bridal beauty close-up" },
} satisfies Record<string, SiteImage>;
