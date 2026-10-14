import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import {
  buildKnowledgeGraph,
  getCaseStudies,
  getFeaturedCaseStudies,
} from '@/lib/portfolio/cases';
import { getExperience } from '@/lib/portfolio/experience';

describe('portfolio content', () => {
  it('keeps the same case slugs in both locales', () => {
    const ptSlugs = getCaseStudies('pt').map((item) => item.slug);
    const enSlugs = getCaseStudies('en').map((item) => item.slug);

    expect(ptSlugs).toEqual(enSlugs);
    expect(new Set(ptSlugs).size).toBe(6);
  });

  it('features the same four cases on the home in both locales', () => {
    const ptFeatured = getFeaturedCaseStudies('pt').map((item) => item.slug);
    const enFeatured = getFeaturedCaseStudies('en').map((item) => item.slug);

    expect(ptFeatured).toEqual(enFeatured);
    expect(ptFeatured).toEqual([
      'motor-cobranca',
      'plan-finance',
      'odontoflow',
      'homelab-api',
    ]);
  });

  it('never names the fictional company in any case file', () => {
    (['pt', 'en'] as const).forEach((locale) => {
      const directory = join(process.cwd(), 'content', locale, 'cases');
      readdirSync(directory).forEach((file) => {
        expect(readFileSync(join(directory, file), 'utf8')).not.toMatch(
          /cobrix/i,
        );
      });
    });
  });

  it('keeps the experience timeline aligned across locales', () => {
    const pt = getExperience('pt');
    const en = getExperience('en');

    expect(pt.map((entry) => entry.company)).toEqual(
      en.map((entry) => entry.company),
    );
    expect(pt[0].company).toBe('FADESP');
  });

  it('publishes complete metadata for every case', () => {
    getCaseStudies('pt').forEach((item) => {
      expect(item.title.length).toBeGreaterThan(10);
      expect(item.decisions).toHaveLength(3);
      expect(item.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(item.technologies.length).toBeGreaterThanOrEqual(5);
      expect(item.confidentiality.length).toBeGreaterThan(20);
      expect(item.role.length).toBeGreaterThan(10);
      expect(item.result.length).toBeGreaterThan(10);
      expect(item.status.length).toBeGreaterThan(5);
    });
  });

  it('builds only valid knowledge graph edges', () => {
    const graph = buildKnowledgeGraph('pt');
    const nodeIds = new Set(graph.nodes.map((node) => node.id));

    graph.edges.forEach((edge) => {
      expect(nodeIds.has(edge.source)).toBe(true);
      expect(nodeIds.has(edge.target)).toBe(true);
    });
  });
});
