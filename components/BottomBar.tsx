"use client";
type BottomBarProps = {
    openApps: string[];
    openApp: (app: string) => void;
    startMenuVisible: boolean;
    setStartMenuVisible: (visible: boolean) => void;
};

import { useEffect, useState } from "react";
import { AppWindow, Handshake, BriefcaseBusiness, FolderKanban, Languages, Mail, UserRound } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

const dockApps = [
    { id: "about", icon: UserRound },
    { id: "help", icon: Handshake },
    { id: "experience", icon: BriefcaseBusiness },
    { id: "projects", icon: FolderKanban },
    { id: "contact", icon: Mail },
] as const;

export function BottomBar({ openApps, openApp, startMenuVisible, setStartMenuVisible }: BottomBarProps) {
    const { t, locale, setLocale } = useI18n();
    const nextLocale = locale === "en" ? "id" : "en";
    const [time, setTime] = useState(() =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })
    );
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-[min(620px,calc(100vw-24px))] h-16 px-3 py-2 bg-black/35 rounded-xl shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.15)] border border-white/10 backdrop-blur-md flex justify-between items-center">
            <button type="button" aria-label={t.bottomBar.openProfileMenu} title={t.bottomBar.profileMenu} onClick={() => setStartMenuVisible(!startMenuVisible)} className={`size-11 shrink-0 rounded-lg inline-flex justify-center items-center text-white transition-colors ${startMenuVisible ? "bg-white/20" : "bg-white/10 hover:bg-white/20"}`}>
                <AppWindow size={21} />
            </button>
            <div className="flex items-center gap-1 sm:gap-2">
                {dockApps.map(({ id, icon: Icon }) => (
                    <button key={id} type="button" aria-label={`${t.bottomBar.open} ${t.apps[id].dock}`} title={t.apps[id].dock} onClick={() => openApp(id)} className={`relative size-11 rounded-lg inline-flex justify-center items-center text-white transition-colors ${openApps.includes(id) ? "bg-white/20" : "bg-white/5 hover:bg-white/15"}`}>
                        <Icon size={20} />
                        {openApps.includes(id) && <span className="absolute bottom-1 size-1 rounded-full bg-white" />}
                    </button>
                ))}
            </div>
            <div className="flex shrink-0 items-center gap-2">
                <button
                    type="button"
                    onClick={() => setLocale(nextLocale)}
                    aria-label={t.language.switchTo}
                    title={t.language.switchTo}
                    lang={nextLocale}
                    className="inline-flex h-11 items-center gap-1 rounded-lg bg-white/5 px-2 text-xs font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
                >
                    <Languages size={16} aria-hidden="true" className="hidden sm:block" />
                    <span>{locale.toUpperCase()}</span>
                </button>
                <div className="hidden sm:block text-white text-sm font-semibold tabular-nums">{time}</div>
            </div>
        </div>
    )
}