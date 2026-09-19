import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { KnowledgeGraph } from '@/components/portfolio/KnowledgeGraph';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { buildKnowledgeGraph } from '@/lib/portfolio/cases';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';

interface KnowledgePageProps {
  params: { locale: string };
}

export function generateMetadata({ params }: KnowledgePageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).knowledge.title };
}

export default function KnowledgePage({ params }: KnowledgePageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale);
  return (
    <main id="main-content" className="page-shell knowledge-page">
      <SectionHeading
        eyebrow={dictionary.knowledge.eyebrow}
        title={dictionary.knowledge.title}
        description={dictionary.knowledge.description}
      />
      <KnowledgeGraph
        graph={buildKnowledgeGraph(params.locale)}
        locale={params.locale}
        dictionary={dictionary.knowledge}
      />
    </main>
  );
}
