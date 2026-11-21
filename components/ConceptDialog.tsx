"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

type ConceptDialogProps = {
    onClose: () => void;
};

export function ConceptDialog({ onClose }: ConceptDialogProps) {
    const { t } = useI18n();
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-110 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="concept-title"
                className="dossier-enter max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-xl border border-white/10 bg-[#111b1b]/95 text-white shadow-[0px_24px_64px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
                <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                    <div className="font-mono text-[10px] tracking-[0.16em] text-emerald-200/65">{t.concept.file}</div>
                    <button
                        type="button"
                        aria-label={t.concept.closeLabel}
                        title={t.concept.close}
                        autoFocus
                        onClick={onClose}
                        className="flex size-8 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        <X size={18} />
                    </button>
                </header>

                <div className="space-y-6 px-5 py-6 sm:px-7 sm:py-7">
                    <div>
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-emerald-200/65">{t.concept.ideaLabel}</p>
                        <h2 id="concept-title" className="text-2xl font-semibold leading-tight sm:text-3xl">{t.concept.ideaTitle}</h2>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                            {t.concept.ideaBody}
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-5">
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-emerald-200/65">{t.concept.premiseLabel}</p>
                        <p className="text-sm leading-6 text-white/70">
                            {t.concept.premiseBody}
                        </p>
                    </div>
                </div>

                <footer className="border-t border-white/10 px-5 py-3 text-right font-mono text-[9px] tracking-[0.12em] text-white/35 sm:px-7">
                    {t.concept.footer}
                </footer>
            </section>
        </div>
    );
}