import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { absoluteUrl, CV_PATH, localeUrls } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...locales.map((locale) => ({
      url: localeUrls[locale],
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: { ...localeUrls } },
    })),
    {
      url: absoluteUrl(CV_PATH),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
