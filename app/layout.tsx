import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/jetbrains-mono/wght.css';

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

const themeScript =
  "(function(){try{var p=localStorage.getItem('theme')||'system';var d=p==='system'?(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):p;document.documentElement.dataset.theme=d}catch(e){document.documentElement.dataset.theme='dark'}})()";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
