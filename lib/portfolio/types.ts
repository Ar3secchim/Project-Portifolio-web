import type { ComponentType } from 'react';

export type Locale = 'pt' | 'en';

export type CaseKind = 'personal' | 'professional' | 'product';

export interface CaseDecision {
  title: string;
  rationale: string;
  tradeoff: string;
}

export interface CaseLink {
  label: string;
  href: string;
}

export interface CaseStudyMeta {
  slug: string;
  locale: Locale;
  kind: CaseKind;
  eyebrow: string;
  title: string;
  summary: string;
  /** Resumo de 20s no topo do case: papel, resultado e status. */
  role: string;
  result: string;
  status: string;
  problem: string;
  decisions: CaseDecision[];
  outcomes: string[];
  technologies: string[];
  knowledgeNodeIds: string[];
  confidentiality: string;
  /** Repositório privado cujo código pode ser mostrado numa avaliação técnica. */
  codeOnRequest?: boolean;
  /** Cases com `featured` aparecem na home; os demais só em /cases. */
  featured: boolean;
  links?: CaseLink[];
}

export interface ExperienceStep {
  label: string;
  date: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  arrangement: string;
  scope: string;
  /** Promoções no mesmo vínculo, em ordem cronológica. */
  steps?: ExperienceStep[];
  stack?: string[];
  current?: boolean;
  partTime?: boolean;
}

export interface CaseStudy extends CaseStudyMeta {
  Content: ComponentType<Record<string, unknown>>;
}

export interface KnowledgeNode {
  id: string;
  label: string;
  category: 'case' | 'technology' | 'principle';
  caseSlug?: string;
}

export interface KnowledgeEdge {
  id: string;
  source: string;
  target: string;
}

export interface KnowledgeGraph {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
}

export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  publishAt: string;
  time: number;
  language: Locale;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
}
