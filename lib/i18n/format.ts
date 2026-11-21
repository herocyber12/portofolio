import type { Dictionary } from "./dictionaries/en";

export function formatMonth(t: Dictionary, value: string | null) {
    if (!value) return t.present;
    const [year, month] = value.split("-");
    return `${t.months[Number(month) - 1]} ${year}`;
}

export function formatDuration(t: Dictionary, duration: { from: string; to: string | null }) {
    return `${formatMonth(t, duration.from)} – ${formatMonth(t, duration.to)}`;
}
