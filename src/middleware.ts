import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/core/i18n/config";
import { getSessionCookie } from "better-auth/cookies";

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle internationalization first
  const intlResponse = intlMiddleware(request);

  // Extract locale from pathname
  const locale = pathname.split("/")[1];
  const isValidLocale = routing.locales.includes(locale as any);
  const pathWithoutLocale = isValidLocale
    ? pathname.slice(locale.length + 1)
    : pathname;

  // Only check authentication for admin routes
  if (
    pathWithoutLocale.startsWith("/admin") ||
    pathWithoutLocale.startsWith("/settings") ||
    pathWithoutLocale.startsWith("/activity")
  ) {
    // Check if session cookie exists
    const sessionCookie = getSessionCookie(request);

    // If no session token found, redirect to sign-in
    if (!sessionCookie) {
      const signInUrl = new URL(
        isValidLocale ? `/${locale}/sign-in` : "/sign-in",
        request.url
      );
      // Add the current path (including search params) as callback - use relative path for multi-language support
      const callbackPath = pathWithoutLocale + request.nextUrl.search;
      signInUrl.searchParams.set("callbackUrl", callbackPath);
      return NextResponse.redirect(signInUrl);
    }

    // Note: We only check if session token exists here.
    // Full session validation happens on the client side and in API routes.
    // This is a lightweight check to prevent unauthorized access to protected routes.
  }

  intlResponse.headers.set("x-pathname", request.nextUrl.pathname);
  intlResponse.headers.set("x-url", request.url);

  // For all other routes (including /, /sign-in, /sign-up, /sign-out), just return the intl response
  return intlResponse;
}

export const config = {
  matcher:
    "/((?!api|trpc|_next|_vercel|privacy-policy|terms-of-service|.*\\..*).*)",
};
