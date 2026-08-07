import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zenovabiosource.com";
  const lastModified = new Date("2026-08-01");
  const primary: MetadataRoute.Sitemap = ["", "/about", "/products", "/services", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );
  const secondary: MetadataRoute.Sitemap = ["/privacy", "/terms"].map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));
  return [...primary, ...secondary];
}
