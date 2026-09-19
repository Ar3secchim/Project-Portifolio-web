import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { ScrollEffects } from '@/components/portfolio/ScrollEffects';
import { siteConfig } from '@/lib/portfolio/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Portfólio de engenharia de software: sistemas, decisões, trade-offs e aprendizados.',
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
