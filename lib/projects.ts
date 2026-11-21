import type { Dictionary } from "@/lib/i18n";

type ProjectEntry = {
    // Name, type, summary, and highlights live in lib/i18n/dictionaries under projects.entries[key].
    key: keyof Dictionary["projects"]["entries"];
    stack: string[];
};

export const projects: ProjectEntry[] = [
    {
        key: "portal-nevalis",
        stack: ["Laravel", "React", "MySQL", "IndexedDB", "SSE", "GitHub Actions"]
    },
    {
        key: "reseller-platform",
        stack: ["PHP Native", "MySQL", "JavaScript", "Payment Gateway", "Domain API"]
    },
    {
        key: "protowa",
        stack: ["React", "Laravel", "Node.js", "Baileys", "PostgreSQL", "SSE"]
    },
    {
        key: "queue-management",
        stack: ["Laravel", "MySQL", "JavaScript", "React"]
    },
    {
        key: "school-management",
        stack: ["Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"]
    },
    {
        key: "makeup-booking",
        stack: ["Laravel", "MySQL", "JavaScript", "jQuery", "AJAX"]
    },
    {
        key: "incubator-system",
        stack: ["Golang", "PostgreSQL", "PgBouncer", "Linux", "ESP32", "Vue.js", "TypeScript", "k6"]
    },
    {
        key: "atsin",
        stack: ["Vue.js", "TypeScript", "Node.js", "Playwright", "IndexedDB"]
    }
];