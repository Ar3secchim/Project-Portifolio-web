import { type NextRequest, NextResponse } from 'next/server';

const localeCookie = 'portfolio_locale';

export function middleware(request: NextRequest) {
  const storedLocale = request.cookies.get(localeCookie)?.value;
  const acceptedLanguage = request.headers.get('accept-language') ?? '';
  const locale =
    storedLocale === 'en' || storedLocale === 'pt'
      ? storedLocale
      : acceptedLanguage.toLowerCase().startsWith('en')
        ? 'en'
        : 'pt';

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: '/',
};
