import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CaseCard } from '@/components/portfolio/CaseCard';
import { FinanceDemo } from '@/components/portfolio/FinanceDemo';
import { HeroClock } from '@/components/portfolio/HeroClock';
import { HomelabMap } from '@/components/portfolio/HomelabMap';
import { KnowledgeGraph } from '@/components/portfolio/KnowledgeGraph';
import { Reveal } from '@/components/portfolio/Reveal';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { buildKnowledgeGraph, getCaseStudies } from '@/lib/portfolio/cases';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';
import {
  buildHomelabLiveContent,
  getHomelabSnapshot,
} from '@/lib/portfolio/homelab-snapshot';
import { siteConfig, technologyGroups } from '@/lib/portfolio/site';

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
  const snapshot = await getHomelabSnapshot();
  const homelabLive = snapshot
    ? buildHomelabLiveContent(snapshot, locale)
    : null;
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
      {/* hero + faixa somam exatamente uma viewport: a faixa encosta no rodapé
          da primeira tela sem precisar de margem negativa sobre o hero. */}
      <div className="hero-viewport">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="hero-reveal delay-1">
              <HeroClock locale={locale} />
            </div>
            <h1>
              {dictionary.hero.titleLines.map((line, index) => (
                <span
                  className={`hero-title-line hero-reveal delay-${index + 2}`}
                  key={line}
                >
                  {index === 1 ? <em>{line}</em> : line}
                </span>
              ))}
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
            <span>{dictionary.hero.scrollCue}</span>
            <i />
          </div>
        </section>

        <div
          className="system-status-bar"
          aria-label={dictionary.hero.status}
          role="region"
          tabIndex={0}
        >
          <strong>
            {homelabLive
              ? homelabLive.statusLabel
              : dictionary.snapshotUnavailable}
          </strong>
          <div>
            {(homelabLive?.statusStrip ?? dictionary.statusStrip).map(
              ([label, value]) => (
                <span key={label}>
                  <i aria-hidden="true" /> {label} <b>{value}</b>
                </span>
              ),
            )}
          </div>
        </div>
      </div>

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
            titleAccent={dictionary.homelab.titleAccent}
            description={dictionary.homelab.description}
          />
        </Reveal>
        <Reveal delay={100}>
          <HomelabMap
            hint={dictionary.homelab.hint}
            disclosure={
              homelabLive?.disclosure ?? dictionary.homelab.disclosure
            }
            panelTitle={
              homelabLive
                ? 'SANITIZED LIVE TOPOLOGY'
                : dictionary.homelab.panelTitle
            }
            servicesLabel={dictionary.homelab.servicesLabel}
            stats={homelabLive?.stats ?? dictionary.homelab.stats}
            topologyNodes={homelabLive?.topologyNodes}
            topologyEdges={homelabLive?.topologyEdges}
            topologyLegend={homelabLive?.topologyLegend}
          />
        </Reveal>
      </section>

      <section className="section-shell section-block" id="plan-finance">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.finance.eyebrow}
            title={dictionary.finance.title}
            titleAccent={dictionary.finance.titleAccent}
            description={
              <>
                {dictionary.finance.descriptionLead}{' '}
                <mark>{dictionary.finance.descriptionFlag}</mark>{' '}
                {dictionary.finance.descriptionTail}
              </>
            }
          />
        </Reveal>
        <Reveal delay={100}>
          <FinanceDemo dictionary={dictionary.finance} locale={locale} />
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

      <section className="section-shell section-block" id="stack">
        <Reveal>
          <SectionHeading
            eyebrow={dictionary.stack.eyebrow}
            title={dictionary.stack.title}
            description={dictionary.stack.description}
          />
        </Reveal>
        <div className="stack-grid">
          {technologyGroups.map((group, index) => {
            const groupLabel =
              (dictionary.stack.groups as Record<string, string>)[group.id] ??
              group.id;

            return (
              <Reveal key={group.id} delay={index * 70}>
                <article className="stack-card">
                  <h3>{groupLabel}</h3>
                  <div className="tag-list">
                    {group.items.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section
        className="section-shell section-block mobile-secondary-section"
        id="knowledge"
      >
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

      <section className="contact-section section-shell" id="contact">
        <div className="contact-intro">
          <h2>
            {dictionary.contact.titleLead}{' '}
            <em>{dictionary.contact.titleAccent}</em>
            {dictionary.contact.titleSuffix}
          </h2>
          <p>{dictionary.contact.description}</p>
          <div className="contact-actions">
            <Link href={`/${locale}/blog`}>{dictionary.nav.writing} →</Link>
            <Link href={`/${locale}/knowledge`}>
              {dictionary.nav.knowledge} graph →
            </Link>
          </div>
        </div>
        <div className="contact-links">
          <a
            className="contact-link"
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>/in/renarasecchim ↗</strong>
          </a>
          <a
            className="contact-link"
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>@Ar3secchim ↗</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
