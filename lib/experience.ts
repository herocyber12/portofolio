type ExperienceLink = {
    label: string;
    href: string;
};

type ExperienceEntry = {
    key: string;
    company: string;
    role: string;
    duration: { from: string; to: string };
    description: string;
    technologies: string[];
    keyAchievement: string[];
    websites?: ExperienceLink[];
};

export const experience: ExperienceEntry[] = [
    {
        key: "pt_transformasi_data_digital",
        company: "PT Transformasi Data Digital",
        role: "Software Engineer (Full-time)",
        duration: {
            from: "Nov 2024",
            to: "Present"
        },
        websites: [
            { label: "x45.co.id", href: "https://x45.co.id" },
            { label: "nevalis.id", href: "https://nevalis.id" },
            { label: "mitranevalis.com", href: "https://mitranevalis.com" },
            { label: "x45reseller.com", href: "https://x45reseller.com" },
            { label: "portalnevalis.id", href: "https://portalnevalis.id" },
            { label: "mrtopup.id", href: "https://mrtopup.id" },
        ],
        description: "Maintained and developed client websites focused on top-up systems and digital transaction flows using PHP (Native OOP and Laravel) and MySQL.",
        technologies: [
            "PHP Native",
            "Laravel",
            "MySQL",
            "REST API",
            "Third-party APIs",
            "Payment Gateway"
        ],
        keyAchievement: [
            "Monitored ad bot performance and kept client transaction pipelines running smoothly.",
            "Contributed to API development for new client features and maintained API documentation as requirements and implementations evolved.",
            "Integrated third-party APIs, including Coda and domain provisioning, into client top-up websites as new features were required.",
            "Implemented end-to-end atomic database operations and high-precision decimal calculations to prevent data anomalies and ensure financial accuracy.",
            "Established structured discussions with cross-functional teams, reducing miscommunication."
        ]
    },
    {
        key: "toktik",
        company: "TokTik Indonesia",
        role: "Software Engineer (Side Project)",
        duration: {
            from: "August 2025",
            to: "Present"
        },
        websites: [
            { label: "toktik.id", href: "https://toktik.id" },
        ],
        description: "Built and maintained the backend for an electricity token and digital top-up platform serving 2,301+ customers and growing.",
        technologies: [
            "Laravel",
            "Golang",
            "Gin",
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
        ],
        keyAchievement: [
            "Built and maintained the backend using Laravel, Golang, MySQL, and REST APIs.",
            "Driven by infrastructure cost efficiency, migrated high-traffic transaction and product API endpoints serving the toktik.id frontend from Laravel to Go after exhausting Laravel optimizations with query tuning, caching, and OPcache. Retained Laravel for authentication and the admin dashboard, and increased system throughput by 300%, from ~50 to ~200 req/s.",
            "Implemented clean architecture for the Go service using the repository pattern, service layer, and raw SQL, with token-based authentication and authorization middleware. Connected the Laravel and Go services through gRPC callbacks and documented the service architecture and API interactions.",
            "Integrated payment gateways and digital product aggregators, implementing idempotent callback handling via transaction order IDs and status validation to safely process asynchronous events, manage delayed callbacks, and strictly prevent duplicate payments.",
            "Cached product data and authenticated user profiles as serialized JSON in Redis with TTL-based expiry, reducing MySQL reads.",
            "Added automated unit tests to the CI/CD pipeline, running them before Docker image builds and automated deployment to Alibaba Cloud.",
            "Built TokTik's Agent portal with Next.js, integrating Go APIs for withdrawal and redemption flows."
        ]
    },
    {
        key: "pt_umbi_sgsgo",
        company: "PT UMBI Teknologi Indonesia",
        role: "Software Engineer (Freelance / Project-based)",
        duration: {
            from: "Mar 2025",
            to: "Aug 2025"
        },
        description: "Led maintenance, optimization, and development of the Solo Raya Great Sale event website using Laravel and MySQL.",
        technologies: [
            "Laravel",
            "MySQL",
            "Database Optimization",
            "Team Leadership"
        ],
        keyAchievement: [
            "Managed data and monitored infrastructure stability.",
            "Optimized database performance across 23,000+ merchants, 5 million+ transactions, and 212,041 users through indexing and query optimization.",
            "Planned and delegated tasks based on team capacity and skills, fostering collaboration and improving issue-report turnaround.",
            "Coordinated with the admin team to resolve user and tenant reports promptly."
        ]
    },
    {
        key: "pt_umbi_solo_raya",
        company: "PT UMBI Teknologi Indonesia",
        role: "Software Engineer (Freelance / Project-based)",
        duration: {
            from: "Apr 2024",
            to: "Jul 2024"
        },
        description: "Maintained and developed the Solo Raya Great Sale event website.",
        technologies: [
            "PHP",
            "Laravel",
            "JavaScript",
            "MySQL"
        ],
        keyAchievement: [
            "Updated UI and fixed bugs and errors.",
            "Added new features based on event requirements.",
            "Ensured consistent website performance."
        ]
    }
];