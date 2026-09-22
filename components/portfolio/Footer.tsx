import { siteConfig } from '@/lib/portfolio/site';
import type { Locale } from '@/lib/portfolio/types';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const role = locale === 'pt' ? 'ENGENHEIRA DE SOFTWARE' : 'SOFTWARE ENGINEER';
  const city = siteConfig.location.split(' · ')[0];

  return (
    <footer className="site-footer">
      <p>
        {siteConfig.name} · {role} · {city}
      </p>
      <time>{new Date().getFullYear()}</time>
    </footer>
  );
}
