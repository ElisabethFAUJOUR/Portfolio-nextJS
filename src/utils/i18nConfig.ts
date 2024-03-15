import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

export const locales = ['fr', 'en'];
export const defaultLocale = 'fr';

export const getPreferredLocale = (request: NextRequest) => {
  const acceptLanguage = request.headers.get('accept-language');
  const headers = { 'accept-language': acceptLanguage ?? 'fr' };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export const getLocaleUrlToRedirect = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    return new URL(`/${locale}/${pathname}`, request.url);
  }
};
