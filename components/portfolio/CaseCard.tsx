import Link from 'next/link';

import type { Dictionary } from '@/lib/portfolio/dictionaries';
import type { CaseStudy, Locale } from '@/lib/portfolio/types';

interface CaseCardProps {
  caseStudy: CaseStudy;
  locale: Locale;
  dictionary: Dictionary['cases'];
  index: number;
}

export function CaseCard({
  caseStudy,
  locale,
  dictionary,
  index,
}: CaseCardProps) {
  return (
    <article className="case-card">
      <div className="case-number">0{index + 1}</div>
      <div className="case-card-content">
        <p className="eyebrow">
          {caseStudy.kind === 'personal'
            ? dictionary.personal
            : dictionary.professional}
        </p>
        <h3>{caseStudy.title}</h3>
        <p>{caseStudy.summary}</p>
        <div className="tag-list">
          {caseStudy.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      <Link
        className="arrow-link"
        href={`/${locale}/cases/${caseStudy.slug}`}
        aria-label={`${dictionary.read}: ${caseStudy.title}`}
      >
        {dictionary.read} <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
