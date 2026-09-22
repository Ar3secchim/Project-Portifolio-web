import EnHomelab, {
  meta as enHomelabMeta,
} from '@/content/en/cases/homelab.mdx';
import EnHomelabApi, {
  meta as enHomelabApiMeta,
} from '@/content/en/cases/homelab-api.mdx';
import EnModularization, {
  meta as enModularizationMeta,
} from '@/content/en/cases/modularizacao.mdx';
import EnCollectionsEngine, {
  meta as enCollectionsEngineMeta,
} from '@/content/en/cases/motor-cobranca.mdx';
import EnOdontoFlow, {
  meta as enOdontoFlowMeta,
} from '@/content/en/cases/odontoflow.mdx';
import EnPlanFinance, {
  meta as enPlanFinanceMeta,
} from '@/content/en/cases/plan-finance.mdx';
import PtHomelab, {
  meta as ptHomelabMeta,
} from '@/content/pt/cases/homelab.mdx';
import PtHomelabApi, {
  meta as ptHomelabApiMeta,
} from '@/content/pt/cases/homelab-api.mdx';
import PtModularization, {
  meta as ptModularizationMeta,
} from '@/content/pt/cases/modularizacao.mdx';
import PtCollectionsEngine, {
  meta as ptCollectionsEngineMeta,
} from '@/content/pt/cases/motor-cobranca.mdx';
import PtOdontoFlow, {
  meta as ptOdontoFlowMeta,
} from '@/content/pt/cases/odontoflow.mdx';
import PtPlanFinance, {
  meta as ptPlanFinanceMeta,
} from '@/content/pt/cases/plan-finance.mdx';

import type {
  CaseStudy,
  CaseStudyMeta,
  KnowledgeGraph,
  KnowledgeNode,
  Locale,
} from './types';

function toCase(
  meta: Record<string, unknown>,
  Content: CaseStudy['Content'],
): CaseStudy {
  return { ...(meta as unknown as CaseStudyMeta), Content };
}

const casesByLocale: Record<Locale, CaseStudy[]> = {
  pt: [
    toCase(ptPlanFinanceMeta, PtPlanFinance),
    toCase(ptHomelabApiMeta, PtHomelabApi),
    toCase(ptOdontoFlowMeta, PtOdontoFlow),
    toCase(ptHomelabMeta, PtHomelab),
    toCase(ptCollectionsEngineMeta, PtCollectionsEngine),
    toCase(ptModularizationMeta, PtModularization),
  ],
  en: [
    toCase(enPlanFinanceMeta, EnPlanFinance),
    toCase(enHomelabApiMeta, EnHomelabApi),
    toCase(enOdontoFlowMeta, EnOdontoFlow),
    toCase(enHomelabMeta, EnHomelab),
    toCase(enCollectionsEngineMeta, EnCollectionsEngine),
    toCase(enModularizationMeta, EnModularization),
  ],
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return casesByLocale[locale];
}

export function getCaseStudy(
  locale: Locale,
  slug: string,
): CaseStudy | undefined {
  return getCaseStudies(locale).find((item) => item.slug === slug);
}

function toNodeId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function buildKnowledgeGraph(locale: Locale): KnowledgeGraph {
  const cases = getCaseStudies(locale);
  const nodes: KnowledgeNode[] = [];
  const edges: KnowledgeGraph['edges'] = [];
  const technologyIds = new Set<string>();

  cases.forEach((caseStudy) => {
    const caseNodeId = `case-${caseStudy.slug}`;
    nodes.push({
      id: caseNodeId,
      label: caseStudy.title,
      category: 'case',
      caseSlug: caseStudy.slug,
    });

    caseStudy.technologies.forEach((technology) => {
      const technologyId = `technology-${toNodeId(technology)}`;
      if (!technologyIds.has(technologyId)) {
        technologyIds.add(technologyId);
        nodes.push({
          id: technologyId,
          label: technology,
          category: 'technology',
        });
      }
      edges.push({
        id: `${caseNodeId}-${technologyId}`,
        source: caseNodeId,
        target: technologyId,
      });
    });
  });

  return { nodes, edges };
}
