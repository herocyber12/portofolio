"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, hasLocale, LOCALE_STORAGE_KEY, type Locale } from "@/lib/i18n/config";

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && hasLocale(stored)) return stored;
  } catch {
    // Ignore unavailable storage and fall back to the browser language.
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of preferred) {
    const base = language.toLowerCase().split("-")[0];
    if (base === "in") return "id"; // legacy code for Indonesian
    if (hasLocale(base)) return base;
  }
  return defaultLocale;
}

export function LocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return (
    <noscript>
      <div className="flex h-full items-center justify-center gap-4 text-sm text-white/80">
        <a href="en">English</a>
        <a href="id">Bahasa Indonesia</a>
      </div>
    </noscript>
  );
}
