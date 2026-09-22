export const siteConfig = {
  name: 'Renara Secchim',
  shortName: 'RENARA',
  role: 'Engenheira de Software Pleno I',
  location: 'Belém, PA · Brasil',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://renaradev.vercel.app',
  social: {
    github: 'https://github.com/Ar3secchim',
    linkedin: 'https://www.linkedin.com/in/renarasecchim/',
  },
} as const;

/** Série do gráfico de fluxo. Valores em R$, todos fictícios. */
export const financeFlow = [
  { label: 'Mar', income: 6800, expense: 4200 },
  { label: 'Abr', income: 7400, expense: 4500 },
  { label: 'Mai', income: 7100, expense: 4300 },
  { label: 'Jun', income: 8600, expense: 5100 },
  { label: 'Jul', income: 8200, expense: 4800 },
  { label: 'Ago', income: 9800, expense: 5500 },
  { label: 'Set', income: 12400, expense: 6200 },
] as const;

/** Gastos por categoria no mês de referência, em R$. */
export const financeCategories = [
  { id: 'housing', value: 2150 },
  { id: 'infra', value: 620 },
  { id: 'food', value: 1480 },
  { id: 'studies', value: 560 },
  { id: 'leisure', value: 890 },
  { id: 'health', value: 430 },
] as const;

/** Linhas da mensagem de categorias no mock do WhatsApp. */
export const financeChatBreakdown = [
  ['Compras', 'R$ 925'],
  ['Educação', 'R$ 494'],
  ['Hobbies', 'R$ 418'],
  ['Saúde', 'R$ 318'],
  ['Alimentação', 'R$ 206'],
  ['Lazer', 'R$ 204'],
  ['Assinatura', 'R$ 175'],
  ['Transporte', 'R$ 123'],
] as const;

export const financeStack = [
  'FastAPI',
  'PostgreSQL',
  'Claude API',
  'React',
  'k3s',
  'WhatsApp API',
] as const;

/**
 * `x` / `y` são percentuais do canvas da topologia — posicionam o nó e também
 * servem de origem/destino das arestas em `homelabEdges`.
 */
export type HomelabNodeType = 'server' | 'service' | 'network' | 'storage';

export interface HomelabTopologyNode {
  id: string;
  label: string;
  detail: string;
  type: HomelabNodeType;
  services: readonly string[];
  x: number;
  y: number;
}

export type HomelabTopologyEdge = readonly [string, string];

export const homelabNodes = [
  {
    id: 'gateway',
    label: 'OPNsense',
    detail: 'Gateway, firewall e políticas que separam os fluxos da rede.',
    type: 'network',
    services: ['Firewall', 'VPN', 'DNS'],
    x: 15,
    y: 20,
  },
  {
    id: 'storage',
    label: 'TrueNAS',
    detail: 'Armazenamento com datasets, snapshots e política de recuperação.',
    type: 'storage',
    services: ['ZFS', 'Snapshots', 'NFS'],
    x: 85,
    y: 20,
  },
  {
    id: 'ci',
    label: 'Gitea + CI',
    detail: 'Código, build, testes e entrega dos serviços do laboratório.',
    type: 'service',
    services: ['Git', 'Pipelines', 'Registry'],
    x: 15,
    y: 52,
  },
  {
    id: 'cluster',
    label: 'k3s Cluster',
    detail: 'Orquestração dos workloads e experimentos de plataforma.',
    type: 'server',
    services: ['ArgoCD', 'cert-manager', 'Traefik'],
    x: 50,
    y: 52,
  },
  {
    id: 'observability',
    label: 'Observability',
    detail: 'Sinais operacionais para entender comportamento e falhas.',
    type: 'service',
    services: ['Grafana', 'Logs'],
    x: 85,
    y: 52,
  },
  {
    id: 'plan-finance',
    label: 'plan-finance',
    detail:
      'Aplicação financeira e agente executados com dados de demonstração.',
    type: 'service',
    services: ['FastAPI', 'PostgreSQL', 'LLM'],
    x: 30,
    y: 84,
  },
  {
    id: 'media',
    label: 'Media Server',
    detail: 'Workload usado para estudar storage, rede e disponibilidade.',
    type: 'service',
    services: ['Streaming', 'Storage', 'Network'],
    x: 70,
    y: 84,
  },
] as const satisfies readonly HomelabTopologyNode[];

/** Arestas da topologia. Uma aresta acende quando um dos seus nós é o selecionado. */
export const homelabEdges = [
  ['gateway', 'compute'],
  ['compute', 'storage'],
  ['compute', 'cluster'],
  ['storage', 'cluster'],
  ['ci', 'cluster'],
  ['cluster', 'observability'],
  ['cluster', 'plan-finance'],
  ['cluster', 'media'],
] as const satisfies readonly HomelabTopologyEdge[];

export const homelabLegend = [
  'server',
  'service',
  'network',
  'storage',
] as const satisfies readonly HomelabNodeType[];

export const technologyGroups = [
  {
    id: 'languages',
    items: ['Java', 'TypeScript'],
  },
  {
    id: 'frameworks',
    items: ['Spring Boot', 'React', 'Next.js', 'Angular', 'Express.js'],
  },
  {
    id: 'databases',
    items: ['MongoDB', 'Oracle', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'platform',
    items: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Cloudflare'],
  },
  {
    id: 'observability',
    items: ['Grafana', 'Elastic Search'],
  },
  {
    id: 'ai',
    items: ['LLM Tool Use', 'Claude API', 'OpenAI'],
  },
] as const;
