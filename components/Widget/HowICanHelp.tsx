import { Activity, ArrowUpRight, Bot, Boxes, ShoppingCart, Workflow, Zap } from "lucide-react";

type HowICanHelpProps = {
    onOpenApp: (app: string) => void;
};

const sectors = [
    { name: "Top-up & Digital Payments", description: "Electricity tokens, game credits, and other digital products, with payments that go through correctly.", icon: Zap },
    { name: "ERP & Internal Systems", description: "Bring your team's daily work into one system instead of scattered spreadsheets.", icon: Boxes },
    { name: "E-commerce & Booking", description: "Online orders, bookings, and payments, plus an admin dashboard to keep track of it all.", icon: ShoppingCart },
    { name: "Monitoring Dashboards", description: "See what's happening in real time, from transactions to sensor data.", icon: Activity },
    { name: "Custom Bots", description: "Chat bots for WhatsApp or Telegram, scrapers, or bots that handle repetitive tasks for you, built around how you work.", icon: Bot },
    { name: "Automation", description: "Let the system handle repetitive work like sign-ups, setup, and data imports.", icon: Workflow },
];

const problems = [
    {
        question: "Your website takes forever to load?",
        answer: "Most visitors leave before a slow page even finishes loading. I'll find out what's dragging it down and fix it, so people stay long enough to buy or get in touch.",
    },
    {
        question: "Want a website for your company but not sure where to start?",
        answer: "Just tell me what your business does and who your customers are. We'll figure out what you really need, then I'll build it and get it online.",
    },
    {
        question: "Your website looks outdated or falls apart on phones?",
        answer: "Most of your customers are probably visiting from their phones. I can give it a fresh look that works well on any screen.",
    },
    {
        question: "Answering the same customer questions on WhatsApp all day?",
        answer: "Order updates, payment confirmations, and common replies can be sent automatically, so you only step in when it really matters.",
    },
    {
        question: "Still tracking orders and stock in spreadsheets?",
        answer: "It works until it doesn't. Let's move it into a simple system where your whole team sees the same, up-to-date data.",
    },
    {
        question: "Want to sell online on your own website?",
        answer: "Your own store with online payments, so customers can order anytime and you keep full control of your brand and customer data.",
    },
    {
        question: "Your website went down and you only heard about it from customers?",
        answer: "With proper monitoring, you'll know something's wrong before your customers do, and it gets fixed faster.",
    },
    {
        question: "Hard to tell how your business is actually doing?",
        answer: "A simple dashboard that shows your sales, orders, and trends at a glance, without digging through piles of reports.",
    },
    {
        question: "APIs timing out or queries slowing down under load?",
        answer: "I'll profile the bottleneck, then fix it with proper indexing, caching, and load testing so the system holds up at peak traffic.",
    },
    {
        question: "Deployments still manual and risky?",
        answer: "A CI/CD pipeline that runs your tests and deploys automatically, so releases become routine instead of stressful.",
    },
];

export function HowICanHelp({ onOpenApp }: HowICanHelpProps) {
    return (
        <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-2 text-white sm:p-5">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold uppercase text-emerald-300">How I can help</div>
                <h1 className="text-3xl font-semibold">Wanna build something?</h1>
                <p className="max-w-full text-sm leading-6 text-white/70">
                    Whether it&apos;s a brand new idea or a system that&apos;s giving you headaches, I can help you build it, fix it, and keep it running.
                </p>
            </div>

            <section aria-label="What I can build" className="border-t border-white/10 pt-4">
                <h2 className="mb-3 text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">WHAT I CAN BUILD</h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {sectors.map(({ name, description, icon: Icon }) => (
                        <div key={name} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-3">
                            <Icon size={18} className="mt-0.5 shrink-0 text-emerald-200/75" />
                            <div className="min-w-0">
                                <h3 className="text-sm font-medium text-white/90">{name}</h3>
                                <p className="mt-0.5 text-xs leading-5 text-white/55">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section aria-label="Sound familiar?" className="border-t border-white/10 pt-4">
                <h2 className="mb-1 text-[11px] font-semibold tracking-[0.12em] text-emerald-200/75">SOUND FAMILIAR?</h2>
                <div className="flex flex-col">
                    {problems.map((item, index) => (
                        <article key={item.question} className="flex items-start gap-3 border-b border-white/[0.07] py-3">
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
                <span className="text-xs text-white/60">Not sure where yours fits? Just tell me the problem, and we&apos;ll figure it out together.</span>
                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={() => onOpenApp("projects")}
                        className="inline-flex h-10 items-center gap-2 border border-white/15 px-3 text-sm font-medium text-white/75 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        See projects
                    </button>
                    <button
                        type="button"
                        onClick={() => onOpenApp("contact")}
                        className="inline-flex h-10 items-center gap-2 border border-emerald-200/30 bg-emerald-300/10 px-3 text-sm font-medium text-emerald-100 transition-colors hover:border-emerald-200/60 hover:bg-emerald-300/15 focus-visible:outline-2 focus-visible:outline-emerald-200"
                    >
                        Let&apos;s talk <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
