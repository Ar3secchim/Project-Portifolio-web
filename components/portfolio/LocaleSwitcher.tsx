'use client';

import { usePathname, useRouter } from 'next/navigation';

import type { Locale } from '@/lib/portfolio/types';

interface LocaleSwitcherProps {
  locale: Locale;
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale: Locale = locale === 'pt' ? 'en' : 'pt';

  function changeLocale() {
    const segments = (pathname ?? `/${locale}`).split('/');
    segments[1] = nextLocale;
    document.cookie = `portfolio_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.push(segments.join('/') || `/${nextLocale}`);
  }

  return (
    <button
      className="locale-switcher"
      type="button"
      onClick={changeLocale}
      aria-label={`Switch to ${nextLocale === 'en' ? 'English' : 'Português'}`}
    >
      <span className={locale === 'pt' ? 'is-active' : ''}>PT</span>
      <span aria-hidden="true">/</span>
      <span className={locale === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  );
}
