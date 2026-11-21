import img from "@/public/asset/img/725609.webp";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DesktopUi } from "@/components/DesktopUi";
import { ProfileDocument } from "@/components/seo/ProfileDocument";
import { StructuredData } from "@/components/seo/StructuredData";
import { hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <StructuredData locale={lang} />
      <Image
        src={img}
        alt=""
        fill
        priority
        className="object-cover object-bottom"
        style={{ zIndex: -1 }}
      />
      <ProfileDocument locale={lang} />
      <DesktopUi />
    </>
  );
}
