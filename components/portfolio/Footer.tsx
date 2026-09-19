import Link from 'next/link';

import type { Dictionary } from '@/lib/portfolio/dictionaries';
import { siteConfig } from '@/lib/portfolio/site';
import type { Locale } from '@/lib/portfolio/types';

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>{dictionary.footer}</p>
      <div>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <Link href={`/${locale}/blog`}>{dictionary.nav.writing} →</Link>
      </div>
    </footer>
  );
}
