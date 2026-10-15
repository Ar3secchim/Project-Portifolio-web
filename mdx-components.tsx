import type { MDXComponents } from 'mdx/types';

import { OdontoFlowDiagram } from '@/components/portfolio/diagrams/OdontoFlowDiagram';
import { PlanFinanceDiagram } from '@/components/portfolio/diagrams/PlanFinanceDiagram';
import { CodeSource } from '@/components/portfolio/diagrams/primitives';

// Componentes disponíveis em qualquer MDX sem import explícito.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeSource,
    OdontoFlowDiagram,
    PlanFinanceDiagram,
  };
}
