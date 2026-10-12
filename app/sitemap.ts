import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/collections", priority: 0.9 },
  { path: "/book-consultation", priority: 0.9 },
  { path: "/bespoke-process", priority: 0.8 },
  { path: "/brides", priority: 0.8 },
  { path: "/academy", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
