import { Download } from "lucide-react";

type AboutMeProps = {
    onOpenApp: (app: string) => void;
};

const recruiterGuide = [
    { number: "01", app: "about", title: "Profile", description: "Role, background, and location" },
    { number: "02", app: "experience", title: "Experience", description: "Work history and responsibilities" },
    { number: "03", app: "skills", title: "Skills", description: "Technologies, tools, and methods" },
    { number: "04", app: "projects", title: "Projects", description: "Selected work and outcomes" },
    { number: "05", app: "contact", title: "Contact", description: "Ways to get in touch" },
];

export function AboutMe({ onOpenApp }: AboutMeProps) {
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <div className="text-xs font-semibold uppercase text-emerald-300">Software Engineer</div>
                        <h1 className="text-3xl font-semibold">Krisna Joko Purjianto</h1>
                    </div>
                    <a
                        href="/asset/cv/CV_Krisna_Joko_Purjianto_Software_Engineer_for_public.pdf"
                        download="Krisna_Joko_Purjianto_CV.pdf"
                        className="inline-flex h-10 shrink-0 items-center gap-2 border border-emerald-200/30 bg-emerald-300/10 px-3 text-sm font-medium text-emerald-100 transition-colors hover:border-emerald-200/60 hover:bg-emerald-300/15 focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        <Download size={16} />
                        Download CV
                    </a>
                </div>
                <p className="max-w-full text-sm leading-6 text-white/70">
                    Software Engineer focused on backend development using PHP/Laravel and Golang. Experienced in API development, database management (MySQL &amp; PostgreSQL), payment gateway integration, and server setup &amp; deployment. Capable of working across the stack with modern frontend frameworks (Vue.js, React.js, Next.js). My ability to unravel complex problems, simplify the findings, and draw clear conclusions has become my advantage in technical problem solving and improving system efficiency. I take full ownership in my role, enjoy collaborating in teams, and am comfortable working independently while always looking to grow and contribute more in a dynamic work environment.
                </p>
            </div>

            <nav aria-label="Recruiter quick guide" className="border-t border-white/10 pt-4">
                <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h2 className="text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">RECRUITER QUICK GUIDE</h2>
                    <span className="text-[10px] text-white/40">A quick route through my profile</span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {recruiterGuide.map((item) => (
                        <button key={item.app} type="button" onClick={() => onOpenApp(item.app)} className="group flex items-start gap-3 border-b border-white/[0.07] py-3 text-left transition-colors hover:border-emerald-200/30">
                            <span className="pt-0.5 font-mono text-[10px] text-emerald-200/55">{item.number}</span>
                            <span className="min-w-0">
                                <span className="block text-sm font-medium text-white/85 group-hover:text-emerald-100">{item.title}<span aria-hidden="true" className="ml-2 text-emerald-200/40">→</span></span>
                                <span className="mt-0.5 block text-xs text-white/45">{item.description}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Surakarta, Central Java, Indonesia · Open to relocate domestically and internationally</span>
                <span>Bachelor of Information Technology · GPA 3.74</span>
            </div>
        </div>
    );
}