import { describe, expect, it } from 'vitest';

import { buildKnowledgeGraph, getCaseStudies } from '@/lib/portfolio/cases';

describe('portfolio content', () => {
  it('keeps the same case slugs in both locales', () => {
    const ptSlugs = getCaseStudies('pt').map((item) => item.slug);
    const enSlugs = getCaseStudies('en').map((item) => item.slug);

    expect(ptSlugs).toEqual(enSlugs);
    expect(new Set(ptSlugs).size).toBe(4);
  });

  it('publishes complete metadata for every case', () => {
    getCaseStudies('pt').forEach((item) => {
      expect(item.title.length).toBeGreaterThan(10);
      expect(item.decisions).toHaveLength(3);
      expect(item.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(item.technologies.length).toBeGreaterThanOrEqual(5);
      expect(item.confidentiality.length).toBeGreaterThan(20);
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
