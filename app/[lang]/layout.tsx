import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n/provider";
import { absoluteUrl, localeUrls, openGraphLocale, PERSON_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const keywords = [
  "software engineer",
  "backend development",
  "PHP",
  "Laravel",
  "Golang",
  "REST API",
  "MySQL",
  "transaction systems",
  "JavaScript",
  "Vue.js",
  "React.js",
  "Next.js",
];

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);

  const url = localeUrls[lang];

  return {
    metadataBase: new URL(`${SITE_URL}/`),
    title: t.meta.title,
    description: t.meta.description,
    keywords,
    authors: [{ name: PERSON_NAME, url: absoluteUrl("/en") }],
    creator: PERSON_NAME,
    alternates: {
      canonical: url,
      languages: { ...localeUrls, "x-default": localeUrls.en },
    },
    openGraph: {
      type: "profile",
      url,
      siteName: PERSON_NAME,
      title: t.meta.title,
      description: t.meta.description,
      locale: openGraphLocale[lang],
      alternateLocale: locales.filter((locale) => locale !== lang).map((locale) => openGraphLocale[locale]),
      firstName: "Krisna Joko",
      lastName: "Purjianto",
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body className="relative h-dvh w-full overflow-hidden">
        <I18nProvider initialLocale={lang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
