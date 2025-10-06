import { AIManager, KieProvider } from "@/extensions/ai";
import { Configs, getAllConfigs } from "@/shared/services/config";

/**
 * get payment service for sending payment
 */
export function getAIService(configs: Configs) {
  const aiManager = new AIManager();

  if (process.env.KIE_API_KEY) {
    aiManager.addProvider(
      new KieProvider({
        apiKey: process.env.KIE_API_KEY,
      })
    );
  }

  return aiManager;
}

/**
 * default ai service
 */
export const aiService = getAIService(await getAllConfigs());
