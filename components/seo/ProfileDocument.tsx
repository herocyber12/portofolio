import { contactItems } from "@/lib/contact";
import { experience } from "@/lib/experience";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { formatDuration } from "@/lib/i18n/format";
import { projects } from "@/lib/projects";
import { assetPath, CV_PATH, PERSON_NAME } from "@/lib/site";
import { skillGroups } from "@/lib/skills";

const helpSectors = ["payments", "erp", "commerce", "monitoring", "bots", "automation"] as const;

/**
 * The desktop windows only render in the browser (their layout depends on the
 * viewport), so the prerendered HTML would otherwise contain no profile content.
 * This server-rendered, linear version carries the same content as the windows
 * into the static HTML for search engines, AI crawlers, and screen readers.
 */
export function ProfileDocument({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);
    const otherLocale = locales.find((item) => item !== locale) ?? locale;

    return (
        <article className="sr-only" aria-label={t.seo.documentLabel} lang={locale}>
            <header>
                <h1>{PERSON_NAME}</h1>
                <p>{t.about.role}</p>
                <p>{t.about.summary}</p>
                <p>{t.about.location}</p>
                <p>{t.about.education}</p>
                <p><a href={assetPath(CV_PATH)}>{t.about.downloadCv}</a></p>
                <p><a href={assetPath(`/${otherLocale}`)} hrefLang={otherLocale}>{t.seo.otherLanguage}</a></p>
            </header>

            <section>
                <h2>{t.apps.help.menu}</h2>
                <p>{t.help.title} {t.help.intro}</p>
                <h3>{t.help.buildLabel}</h3>
                <ul>
                    {helpSectors.map((id) => (
                        <li key={id}><strong>{t.help.sectors[id].name}</strong>: {t.help.sectors[id].description}</li>
                    ))}
                </ul>
                <h3>{t.help.problemsLabel}</h3>
                <dl>
                    {t.help.problems.map((item) => (
                        <div key={item.question}>
                            <dt>{item.question}</dt>
                            <dd>{item.answer}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section>
                <h2>{t.apps.experience.menu}</h2>
                {experience.map((item) => {
                    const text = t.experience.entries[item.key];
                    return (
                        <section key={item.key}>
                            <h3>{text.role} · {item.company}</h3>
                            <p><time dateTime={item.duration.from}>{formatDuration(t, item.duration)}</time></p>
                            <p>{text.description}</p>
                            <ul>
                                {text.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                            </ul>
                            <p>{item.technologies.join(", ")}</p>
                            {item.websites && (
                                <p>
                                    {t.experience.selectedPlatforms}:{" "}
                                    {item.websites.map((website, index) => (
                                        <span key={website.href}>
                                            {index > 0 && ", "}
                                            <a href={website.href}>{website.label}</a>
                                        </span>
                                    ))}
                                </p>
                            )}
                        </section>
                    );
                })}
            </section>

            <section>
                <h2>{t.apps.projects.menu}</h2>
                {projects.map((project) => {
                    const text = t.projects.entries[project.key];
                    return (
                        <section key={project.key}>
                            <h3>{text.name}</h3>
                            <p>{text.type}</p>
                            <p>{text.summary}</p>
                            <ul>
                                {text.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                            </ul>
                            <p>{project.stack.join(", ")}</p>
                        </section>
                    );
                })}
            </section>

            <section>
                <h2>{t.apps.skills.menu}</h2>
                <ul>
                    {skillGroups.map((group) => (
                        <li key={group.id}>
                            <strong>{t.skills.groups[group.id]}</strong>:{" "}
                            {group.skills.map((skill) => (skill === "Server Deployment" ? t.skills.serverDeployment : skill)).join(", ")}
                        </li>
                    ))}
                </ul>
                <p>{t.skills.educationLabel}: {t.skills.education}</p>
                <p>{t.skills.certificate}</p>
                <p>{t.skills.publication}</p>
            </section>

            <section>
                <h2>{t.contact.title}</h2>
                <p>{t.contact.location}</p>
                <ul>
                    {contactItems.map((item) => (
                        <li key={item.label}>
                            {item.label === "Email" ? t.contact.email : item.label}: <a href={item.href}>{item.value}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
