import type { ComponentType } from 'react';

export type Locale = 'pt' | 'en';

export type CaseKind = 'personal' | 'professional';

export interface CaseDecision {
  title: string;
  rationale: string;
  tradeoff: string;
}

export interface CaseStudyMeta {
  slug: string;
  locale: Locale;
  kind: CaseKind;
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  decisions: CaseDecision[];
  outcomes: string[];
  technologies: string[];
  knowledgeNodeIds: string[];
  confidentiality: string;
  featured: boolean;
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
