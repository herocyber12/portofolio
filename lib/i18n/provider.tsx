"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries, LOCALE_STORAGE_KEY, type Dictionary, type Locale } from "@/lib/i18n";

type I18nContextValue = {
    locale: Locale;
    t: Dictionary;
    setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);
    const t = dictionaries[locale];

    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = t.meta.title;
    }, [locale, t]);

    // Switch language in place so open windows and the loading state are kept,
    // then sync the URL so refreshes and shared links land on the same language.
    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next);
        try {
            localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {
            // Storage can be unavailable (private mode); the URL still carries the locale.
        }
        const path = window.location.pathname.replace(/\/(en|id)(\/?)$/, `/${next}$2`);
        window.history.replaceState(null, "", path + window.location.search + window.location.hash);
    }, []);

    const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) throw new Error("useI18n must be used inside I18nProvider");
    return context;
}
