import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CaseCard } from '@/components/portfolio/CaseCard';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { getCaseStudies } from '@/lib/portfolio/cases';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';

interface CasesPageProps {
  params: { locale: string };
}

export function generateMetadata({ params }: CasesPageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).cases.pageTitle };
}

export default function CasesPage({ params }: CasesPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const cases = getCaseStudies(locale);
  return (
    <main id="main-content" className="page-shell">
      <SectionHeading
        eyebrow={dictionary.cases.eyebrow}
        title={dictionary.cases.pageTitle}
        description={dictionary.cases.pageDescription}
      />
      <div className="case-list page-list">
        {cases.map((caseStudy, index) => (
          <CaseCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            locale={locale}
            dictionary={dictionary.cases}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
