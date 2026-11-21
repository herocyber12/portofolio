import { locales, type Locale } from "@/lib/i18n/config";

// Both values are set in next.config.ts and inlined at build time.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const PERSON_NAME = "Krisna Joko Purjianto";
export const CV_PATH = "/asset/cv/CV_Krisna_Joko_Purjianto_Software_Engineer_for_public.pdf";

/** Absolute URL for a path inside the site, e.g. absoluteUrl("/en"). */
export const absoluteUrl = (path = "") => `${SITE_URL}${path}`;

/** Path for a raw <a href> to a file in public/ (next/link adds basePath itself, plain anchors do not). */
export const assetPath = (path: string) => `${BASE_PATH}${path}`;

export const localeUrls = Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(`/${locale}`)])) as Record<Locale, string>;

export const openGraphLocale: Record<Locale, string> = { en: "en_US", id: "id_ID" };
