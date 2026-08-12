import type { MetadataRoute } from "next";
import { categories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.zenovabiosource.com";
  const lastModified = new Date();
  const primary: MetadataRoute.Sitemap = ["", "/about", "/products", "/services", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );
  const categoriesMap: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const secondary: MetadataRoute.Sitemap = ["/privacy", "/terms"].map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));
  return [...primary, ...categoriesMap, ...secondary];
}
