import type { MetadataRoute } from "next";
import { biodanceProduct, siteUrl } from "@/data/biodance-product";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}${biodanceProduct.productUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];
}
