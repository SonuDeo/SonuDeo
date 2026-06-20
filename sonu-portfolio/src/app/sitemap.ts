import type { MetadataRoute } from "next";
import { siteConfig, navLinks } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  const sections = navLinks
    .filter((l) => l.href.startsWith("#") && l.href !== "#home")
    .map((l) => ({
      url: `${siteConfig.url}/${l.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [home, ...sections];
}
