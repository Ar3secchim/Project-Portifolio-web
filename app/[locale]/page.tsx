import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CaseCard } from '@/components/portfolio/CaseCard';
import { FinanceDemo } from '@/components/portfolio/FinanceDemo';
import { HomelabMap } from '@/components/portfolio/HomelabMap';
import { KnowledgeGraph } from '@/components/portfolio/KnowledgeGraph';
import { Reveal } from '@/components/portfolio/Reveal';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { getAllPosts } from '@/lib/notion/posts';
import { buildKnowledgeGraph, getCaseStudies } from '@/lib/portfolio/cases';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';
import { siteConfig } from '@/lib/portfolio/site';

interface HomePageProps {
  params: { locale: string };
}

export function generateMetadata({ params }: HomePageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  return {
    title:
      params.locale === 'en'
        ? 'Software engineer who understands systems'
        : 'Engenharia de software com visão de sistemas',
  };
}

export default async function HomePage({ params }: HomePageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const cases = getCaseStudies(locale);
  const graph = buildKnowledgeGraph(locale);
  const posts = (await getAllPosts()).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: `${siteConfig.url}/${locale}`,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal delay-1">
            {dictionary.hero.eyebrow}
          </p>
          <h1>
            <span className="hero-reveal delay-2">
              {dictionary.hero.titleStart}
            </span>{' '}
            <em className="hero-reveal delay-3">
              {dictionary.hero.titleAccent}
            </em>{' '}
            <span className="hero-reveal delay-4">
              {dictionary.hero.titleEnd}
            </span>
          </h1>
          <p className="hero-description hero-reveal delay-5">
            {dictionary.hero.description}
          </p>
          <div className="hero-actions hero-reveal delay-5">
            <Link className="primary-button" href={`/${locale}/cases`}>
              {dictionary.hero.primaryCta} <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href={`/${locale}#about`}>
              {dictionary.hero.secondaryCta} <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
        <aside className="hero-aside hero-reveal delay-5">
          <div className="availability">
            <span className="live-dot" />
            {dictionary.hero.status}
          </div>
          <dl>
            {dictionary.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="scroll-cue">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section className="section-shell section-block" id="about">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.about.eyebrow}
            title={dictionary.about.title}
            description={dictionary.about.body}
          />
        </Reveal>
        <div className="principles-grid">
          {dictionary.about.principles.map(
            ([number, title, description], index) => (
              <Reveal key={number} delay={index * 70}>
                <article className="principle-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </section>

      <section className="section-shell section-block" id="homelab">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.homelab.eyebrow}
            title={dictionary.homelab.title}
            description={dictionary.homelab.description}
          />
        </Reveal>
        <Reveal delay={100}>
          <HomelabMap
            hint={dictionary.homelab.hint}
            disclosure={dictionary.homelab.disclosure}
          />
        </Reveal>
      </section>

      <section className="section-shell section-block" id="plan-finance">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.finance.eyebrow}
            title={dictionary.finance.title}
            description={dictionary.finance.description}
          />
        </Reveal>
        <Reveal delay={100}>
          <FinanceDemo dictionary={dictionary.finance} />
        </Reveal>
      </section>

      <section className="section-shell section-block" id="cases">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.cases.eyebrow}
            title={dictionary.cases.title}
            description={dictionary.cases.description}
            action={
              <Link className="text-link" href={`/${locale}/cases`}>
                {dictionary.cases.all} →
              </Link>
            }
          />
        </Reveal>
        <div className="case-list">
          {cases.map((caseStudy, index) => (
            <Reveal key={caseStudy.slug} delay={index * 70}>
              <CaseCard
                caseStudy={caseStudy}
                locale={locale}
                dictionary={dictionary.cases}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell section-block" id="knowledge">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.knowledge.eyebrow}
            title={dictionary.knowledge.title}
            description={dictionary.knowledge.description}
            action={
              <Link className="text-link" href={`/${locale}/knowledge`}>
                {dictionary.knowledge.all} →
              </Link>
            }
          />
        </Reveal>
        <Reveal delay={100}>
          <KnowledgeGraph
            graph={graph}
            locale={locale}
            dictionary={dictionary.knowledge}
            compact
          />
        </Reveal>
      </section>

      <section className="section-shell section-block" id="writing">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.writing.eyebrow}
            title={dictionary.writing.title}
            description={dictionary.writing.description}
            action={
              <Link className="text-link" href={`/${locale}/blog`}>
                {dictionary.writing.all} →
              </Link>
            }
          />
        </Reveal>
        <div className="writing-grid">
          {posts.length ? (
            posts.map((post) => (
              <article className="writing-card" key={post.id}>
                <span>
                  {post.publishAt} · {post.time} {dictionary.writing.minutes}
                </span>
                <h3>
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <div className="tag-list">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <p className="empty-state">{dictionary.writing.empty}</p>
          )}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <p className="eyebrow">{dictionary.contact.eyebrow}</p>
        <h2>{dictionary.contact.title}</h2>
        <p>{dictionary.contact.description}</p>
        <div className="contact-links">
          <a className="primary-button" href={`mailto:${siteConfig.email}`}>
            {dictionary.contact.email} ↗
          </a>
          <a
            className="text-link"
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="text-link"
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </main>
  );
}
