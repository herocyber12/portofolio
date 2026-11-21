import { contactItems } from "@/lib/contact";
import { experience } from "@/lib/experience";
import { getDictionary } from "@/lib/i18n";
import { formatDuration } from "@/lib/i18n/format";
import { projects } from "@/lib/projects";
import { absoluteUrl, CV_PATH, localeUrls, PERSON_NAME } from "@/lib/site";
import { skillGroups } from "@/lib/skills";

export const dynamic = "force-static";

// Plain-markdown profile for LLM-based tools (https://llmstxt.org), built from the same data as the site.
export function GET() {
  const t = getDictionary("en");
  const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

  const body = [
    `# ${PERSON_NAME}`,
    `> ${t.meta.description}`,
    t.about.summary,
    `Location: ${t.about.location}`,
    `Education: ${t.skills.education}`,
    "## Pages",
    list([
      `[Portfolio (English)](${localeUrls.en})`,
      `[Portfolio (Bahasa Indonesia)](${localeUrls.id})`,
      `[CV (PDF)](${absoluteUrl(CV_PATH)})`,
    ]),
    "## Experience",
    ...experience.map((item) => {
      const text = t.experience.entries[item.key];
      return [
        `### ${text.role}, ${item.company} (${formatDuration(t, item.duration)})`,
        text.description,
        list(text.highlights),
        `Technologies: ${item.technologies.join(", ")}`,
      ].join("\n\n");
    }),
    "## Projects",
    ...projects.map((project) => {
      const text = t.projects.entries[project.key];
      return [`### ${text.name} (${text.type})`, text.summary, list(text.highlights), `Stack: ${project.stack.join(", ")}`].join("\n\n");
    }),
    "## Skills",
    list(skillGroups.map((group) => `${t.skills.groups[group.id]}: ${group.skills.join(", ")}`)),
    list([t.skills.certificate, t.skills.publication]),
    "## Services",
    list(Object.values(t.help.sectors).map((sector) => `${sector.name}: ${sector.description}`)),
    "## Contact",
    list(contactItems.map((item) => `${item.label}: ${item.href.startsWith("mailto:") ? item.value : item.href}`)),
  ].join("\n\n");

  return new Response(`${body}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
