import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }];
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const isEnglish = params.locale === 'en';
  return {
    description: isEnglish
      ? 'Software engineering portfolio focused on systems, decisions, trade-offs, and lessons.'
      : 'Portfólio de engenharia de software focado em sistemas, decisões, trade-offs e aprendizados.',
    alternates: {
      canonical: `/${params.locale}`,
      languages: { 'pt-BR': '/pt', 'en-US': '/en' },
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        {dictionary.skip}
      </a>
      <Header locale={params.locale} dictionary={dictionary} />
      {children}
      <Footer locale={params.locale} />
    </div>
  );
}
