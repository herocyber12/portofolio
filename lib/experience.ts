import type { Dictionary } from "@/lib/i18n";

type ExperienceLink = {
    label: string;
    href: string;
};

type ExperienceKey = keyof Dictionary["experience"]["entries"];

type ExperienceEntry = {
    // Role, description, and highlights live in lib/i18n/dictionaries under experience.entries[key].
    key: ExperienceKey;
    company: string;
    // "YYYY-MM"; `to: null` means the role is ongoing.
    duration: { from: string; to: string | null };
    technologies: string[];
    websites?: ExperienceLink[];
};

export const experience: ExperienceEntry[] = [
    {
        key: "pt_transformasi_data_digital",
        company: "PT Transformasi Data Digital",
        duration: {
            from: "2024-11",
            to: null
        },
        websites: [
            { label: "x45.co.id", href: "https://x45.co.id" },
            { label: "nevalis.id", href: "https://nevalis.id" },
            { label: "mitranevalis.com", href: "https://mitranevalis.com" },
            { label: "x45reseller.com", href: "https://x45reseller.com" },
            { label: "portalnevalis.id", href: "https://portalnevalis.id" },
            { label: "mrtopup.id", href: "https://mrtopup.id" },
        ],
        technologies: [
            "PHP Native",
            "Laravel",
            "MySQL",
            "REST API",
            "Third-party APIs",
            "Payment Gateway"
        ]
    },
    {
        key: "toktik",
        company: "TokTik Indonesia",
        duration: {
            from: "2025-08",
            to: null
        },
        websites: [
            { label: "toktik.id", href: "https://toktik.id" },
        ],
        technologies: [
            "Laravel",
            "Golang",
            "Gin",
            "k6",
            "MySQL",
            "Redis",
            "gRPC",
            "Raw SQL",
            "Docker",
            "GitHub Actions",
            "Alibaba Cloud",
            "Unit Testing",
            "Next.js",
            "Payment Gateway",
            "API Integration"
        ]
    },
    {
        key: "pt_umbi_sgsgo",
        company: "PT UMBI Teknologi Indonesia",
        duration: {
            from: "2025-03",
            to: "2025-08"
        },
        technologies: [
            "Laravel",
            "MySQL",
            "Database Optimization",
            "Team Leadership"
        ]
    },
    {
        key: "pt_umbi_solo_raya",
        company: "PT UMBI Teknologi Indonesia",
        duration: {
            from: "2024-04",
            to: "2024-07"
        },
        technologies: [
            "PHP",
            "Laravel",
            "JavaScript",
            "MySQL"
        ]
    }
];