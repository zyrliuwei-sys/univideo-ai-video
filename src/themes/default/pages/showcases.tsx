import { CTA, Showcases } from "@/themes/default/blocks";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function ShowcasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");
  const tt = await getTranslations("showcases");

  return (
    <>
      <Showcases showcases={t.raw("showcases")} srOnlyTitle={tt.raw("title")} />

      <CTA cta={t.raw("cta")} className="bg-muted" />
    </>
  );
}
