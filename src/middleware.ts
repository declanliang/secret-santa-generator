import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix (e.g., /en, /es)
  localePrefix: 'always',

  // Detect locale from Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for:
  // - API routes (/api/...)
  // - Static files (/_next/..., /images/..., etc.)
  // - Event routes (/event/...)
  matcher: ['/((?!api|_next|_vercel|.*\\..*|event).*)'],
};
