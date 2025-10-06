import { Pricing, FAQ, Testimonials } from "@/themes/default/blocks";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getUserInfo } from "@/shared/services/user";
import {
  getCurrentSubscription,
  Subscription,
} from "@/shared/services/subscription";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("landing");
  const tt = await getTranslations("pricing");

  let currentSubscription;

  const user = await getUserInfo();
  if (user) {
    currentSubscription = await getCurrentSubscription(user.id);
  }

  return (
    <>
      <Pricing
        pricing={tt.raw("default")}
        srOnlyTitle={tt.raw("default.title")}
        currentSubscription={currentSubscription}
      />
      <FAQ faq={t.raw("faq")} />
      <Testimonials testimonials={t.raw("testimonials")} />
    </>
  );
}
