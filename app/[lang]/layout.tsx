import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n/provider";

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

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords,
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
