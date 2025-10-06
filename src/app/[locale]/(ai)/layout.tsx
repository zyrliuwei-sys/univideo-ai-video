import { loadThemeLayout } from "@/core/theme";
import { getLocale, setRequestLocale } from "next-intl/server";
import { getUserInfo } from "@/shared/services/user";
import { redirect } from "next/navigation";

export default async function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const Layout = await loadThemeLayout("landing");

  return <Layout>{children}</Layout>;
}
