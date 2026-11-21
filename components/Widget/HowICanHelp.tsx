"use client";

import { Activity, ArrowUpRight, Bot, Boxes, ShoppingCart, Workflow, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

type HowICanHelpProps = {
    onOpenApp: (app: string) => void;
};

const sectors = [
    { id: "payments", icon: Zap },
    { id: "erp", icon: Boxes },
    { id: "commerce", icon: ShoppingCart },
    { id: "monitoring", icon: Activity },
    { id: "bots", icon: Bot },
    { id: "automation", icon: Workflow },
] as const;

export function HowICanHelp({ onOpenApp }: HowICanHelpProps) {
    const { t } = useI18n();
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase text-emerald-300">{t.help.eyebrow}</div>
                <h1 className="text-3xl font-semibold">{t.help.title}</h1>
                <p className="max-w-full text-sm leading-6 text-white/70">
                    {t.help.intro}
                </p>
            </div>

            <section aria-label={t.help.buildLabel} className="border-t border-white/10 pt-4">
                <h2 className="mb-3 text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">{t.help.buildTitle}</h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {sectors.map(({ id, icon: Icon }) => (
                        <div key={id} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-3">
                            <Icon size={18} className="mt-0.5 shrink-0 text-emerald-200/75" />
                            <div className="min-w-0">
                                <h3 className="text-sm font-medium text-white/90">{t.help.sectors[id].name}</h3>
                                <p className="mt-0.5 text-xs leading-5 text-white/55">{t.help.sectors[id].description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section aria-label={t.help.problemsLabel} className="border-t border-white/10 pt-4">
                <h2 className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">{t.help.problemsTitle}</h2>
                <div className="flex flex-col">
                    {t.help.problems.map((item, index) => (
                        <article key={index} className="flex items-start gap-3 border-b border-white/[0.07] py-3">
                            <span className="pt-0.5 font-mono text-[10px] text-emerald-200/55">{String(index + 1).padStart(2, "0")}</span>
                            <div className="min-w-0">
                                <h3 className="text-sm font-medium text-white/90">{item.question}</h3>
                                <p className="mt-1 text-sm leading-6 text-white/60">{item.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="text-xs text-white/60">{t.help.footer}</span>
                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={() => onOpenApp("projects")}
                        className="inline-flex h-10 items-center gap-2 border border-white/15 px-3 text-sm font-medium text-white/75 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        {t.help.seeProjects}
                    </button>
                    <button
                        type="button"
                        onClick={() => onOpenApp("contact")}
                        className="inline-flex h-10 items-center gap-2 border border-emerald-200/30 bg-emerald-300/10 px-3 text-sm font-medium text-emerald-100 transition-colors hover:border-emerald-200/60 hover:bg-emerald-300/15 focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        {t.help.letsTalk} <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
