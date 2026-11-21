import { contactItems } from "@/lib/contact";
import { experience } from "@/lib/experience";
import { getDictionary, type Locale } from "@/lib/i18n";
import { absoluteUrl, CV_PATH, localeUrls, PERSON_NAME, SITE_URL } from "@/lib/site";
import { skillGroups } from "@/lib/skills";

/** schema.org Person + ProfilePage, so search engines and AI tools can read the profile as structured facts. */
export function StructuredData({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);
    const pageUrl = localeUrls[locale];
    const personId = `${SITE_URL}/#person`;
    const email = contactItems.find((item) => item.href.startsWith("mailto:"))?.value;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: localeUrls.en,
                name: PERSON_NAME,
                inLanguage: ["en", "id"],
                publisher: { "@id": personId },
            },
            {
                "@type": "ProfilePage",
                "@id": `${pageUrl}#profile`,
                url: pageUrl,
                name: t.meta.title,
                description: t.meta.description,
                inLanguage: locale,
                isPartOf: { "@id": `${SITE_URL}/#website` },
                mainEntity: { "@id": personId },
            },
            {
                "@type": "Person",
                "@id": personId,
                name: PERSON_NAME,
                jobTitle: t.about.role,
                description: t.meta.description,
                url: pageUrl,
                email: email ? `mailto:${email}` : undefined,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Surakarta",
                    addressRegion: "Central Java",
                    addressCountry: "ID",
                },
                alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Duta Bangsa Surakarta" },
                worksFor: experience
                    .filter((item) => item.duration.to === null)
                    .map((item) => ({ "@type": "Organization", name: item.company })),
                knowsAbout: skillGroups.flatMap((group) => group.skills),
                sameAs: contactItems.filter((item) => item.href.startsWith("https:")).map((item) => item.href),
                subjectOf: {
                    "@type": "DigitalDocument",
                    name: `${PERSON_NAME} CV`,
                    encodingFormat: "application/pdf",
                    url: absoluteUrl(CV_PATH),
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
    );
}
