import { Configs } from "@/services/config";
import { AdsManager, AdsenseProvider } from "@/extensions/ads";
import { ReactNode } from "react";

export function getAdsComponents(dbConfigs: Configs): {
  adsMetaTags: ReactNode;
  adsHeadScripts: ReactNode;
  adsBodyScripts: ReactNode;
} {
  const ads = new AdsManager();

  // adsense
  if (dbConfigs.adsense_code) {
    ads.addProvider(new AdsenseProvider({ adId: dbConfigs.adsense_code }));
  }

  return {
    adsMetaTags: ads.getMetaTags(),
    adsHeadScripts: ads.getHeadScripts(),
    adsBodyScripts: ads.getBodyScripts(),
  };
}
