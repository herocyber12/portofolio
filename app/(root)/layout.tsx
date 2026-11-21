import type { Metadata } from "next";
import type { ReactNode } from "react";
import { localeUrls } from "@/lib/site";
import "../globals.css";

// `/` only picks a language, so search engines are pointed at the localized pages.
export const metadata: Metadata = {
  title: "Krisna Joko Purjianto | Software Engineer",
  alternates: {
    canonical: localeUrls.en,
    languages: { ...localeUrls, "x-default": localeUrls.en },
  },
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative h-dvh w-full overflow-hidden bg-[#06100f]">{children}</body>
    </html>
  );
}
