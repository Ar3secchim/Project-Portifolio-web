import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getCaseStudies, getCaseStudy } from '@/lib/portfolio/cases';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';
import { siteConfig } from '@/lib/portfolio/site';

interface CasePageProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return (['pt', 'en'] as const).flatMap((locale) =>
    getCaseStudies(locale).map((caseStudy) => ({
      locale,
      slug: caseStudy.slug,
    })),
  );
}

export function generateMetadata({ params }: CasePageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const caseStudy = getCaseStudy(params.locale, params.slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: {
      languages: {
        'pt-BR': `/pt/cases/${params.slug}`,
        'en-US': `/en/cases/${params.slug}`,
      },
    },
  };
}

export default function CasePage({ params }: CasePageProps) {
  if (!isLocale(params.locale)) notFound();
  const caseStudy = getCaseStudy(params.locale, params.slug);
  if (!caseStudy) notFound();
  const dictionary = getDictionary(params.locale).cases;
  const { Content } = caseStudy;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: caseStudy.title,
    description: caseStudy.summary,
    author: { '@type': 'Person', name: siteConfig.name },
  };

  return (
    <main id="main-content" className="case-page page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="back-link" href={`/${params.locale}/cases`}>
        ← {dictionary.back}
      </Link>
      <header className="case-hero">
        <p className="eyebrow">{caseStudy.eyebrow}</p>
        <h1>{caseStudy.title}</h1>
        <p className="case-summary">{caseStudy.summary}</p>
        <p className="confidentiality">
          <strong>PRIVACY NOTE</strong>
          {caseStudy.confidentiality}
        </p>
        {caseStudy.links && caseStudy.links.length > 0 && (
          <div className="case-links">
            {caseStudy.links.map((link) => (
              <a
                key={link.href}
                className="text-link"
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="case-overview">
        <div>
          <span>01 / {dictionary.problem}</span>
          <p>{caseStudy.problem}</p>
        </div>
        <div>
          <span>02 / {dictionary.stack}</span>
          <div className="tag-list">
            {caseStudy.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="case-prose">
        <Content />
      </article>

      <section className="case-decisions">
        <p className="eyebrow">03 / {dictionary.decisions}</p>
        <div className="decision-grid">
          {caseStudy.decisions.map((decision, index) => (
            <article key={decision.title}>
              <span>0{index + 1}</span>
              <h2>{decision.title}</h2>
              <p>{decision.rationale}</p>
              <small>
                <strong>TRADE-OFF</strong>
                {decision.tradeoff}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="case-outcomes">
        <p className="eyebrow">04 / {dictionary.outcomes}</p>
        <ul>
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
