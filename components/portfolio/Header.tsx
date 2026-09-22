'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { Dictionary } from '@/lib/portfolio/dictionaries';
import { siteConfig } from '@/lib/portfolio/site';
import type { Locale } from '@/lib/portfolio/types';

import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // O divisor separa âncoras desta página das páginas próprias.
  const sectionLinks = [
    [`/${locale}#homelab`, dictionary.nav.homelab],
    [`/${locale}#cases`, dictionary.nav.cases],
    [`/${locale}#stack`, dictionary.nav.stack],
  ];
  const pageLinks = [
    [`/${locale}/blog`, dictionary.nav.writing],
    [`/${locale}/knowledge`, dictionary.nav.knowledge],
  ];

  return (
    <header className={`site-header ${floating ? 'is-floating' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link
          className="site-mark"
          href={`/${locale}`}
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.shortName}
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
        <div
          id="primary-menu"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {sectionLinks.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          {pageLinks.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
          <ThemeToggle
            labels={dictionary.theme.options}
            description={dictionary.theme.label}
          />
        </div>
      </nav>
    </header>
  );
}
