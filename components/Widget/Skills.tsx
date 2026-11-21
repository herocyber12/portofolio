"use client";

import { useI18n } from "@/lib/i18n/provider";
import { skillGroups } from "@/lib/skills";


export function Skills() {
    const { t } = useI18n();
    return (
        <div className="h-full w-full overflow-y-auto p-2 text-white sm:p-5">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <section key={group.id} className="border-t border-white/10 pt-3">
                        <h2 className="mb-3 text-xs font-semibold uppercase text-white/45">{t.skills.groups[group.id]}</h2>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white/80">{skill === "Server Deployment" ? t.skills.serverDeployment : skill}</span>)}
                        </div>
                    </section>
                ))}
            </div>
            <div className="mt-7 border-t border-white/10 pt-4 text-sm text-white/65">
                <span className="font-medium text-white">{t.skills.educationLabel}</span> · {t.skills.education}
            </div>
            <div className="mt-3 text-xs text-white/50">{t.skills.certificate}</div>
            <div className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-white/50">
                {t.skills.publication}
            </div>
        </div>
    );
}