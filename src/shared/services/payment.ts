import {
  CreemProvider,
  PaymentManager,
  PayPalProvider,
  StripeProvider,
} from "@/extensions/payment";
import { Configs, getAllConfigs } from "@/shared/services/config";

/**
 * get payment service for sending payment
 */
export function getPaymentService(configs: Configs) {
  const paymentManager = new PaymentManager();

  const paymentProvider = configs.payment_provider;

  // add stripe provider
  if (paymentProvider === "stripe") {
    paymentManager.addProvider(
      new StripeProvider({
        secretKey: configs.stripe_secret_key,
        publishableKey: configs.stripe_publishable_key,
      })
    );
  }

  // add creem provider
  if (paymentProvider === "creem") {
    paymentManager.addProvider(
      new CreemProvider({
        apiKey: configs.creem_api_key,
        environment: "sandbox",
      })
    );
  }

  // add paypal provider
  if (paymentProvider === "paypal") {
    paymentManager.addProvider(
      new PayPalProvider({
        clientId: configs.paypal_client_id,
        clientSecret: configs.paypal_client_secret,
        environment: "sandbox",
      })
    );
  }

  return paymentManager;
}

/**
 * default payment service
 */
export const paymentService = getPaymentService(await getAllConfigs());
