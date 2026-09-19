import type { DemoSnapshot } from './types';

export const siteConfig = {
  name: 'Renara Secchim',
  shortName: 'RENARA / SWE',
  role: 'Engenheira de Software',
  location: 'Belém, PA · Brasil',
  email: 'renarasecchim@hotmail.com',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://renaradev.vercel.app',
  social: {
    github: 'https://github.com/Ar3secchim',
    linkedin: 'https://www.linkedin.com/in/renarasecchim/',
  },
} as const;

export const financeSnapshot: DemoSnapshot = {
  id: 'finance-demo-september',
  period: 'SET / DEMO',
  disclosure: 'Cenário demonstrativo com dados inteiramente simulados.',
  metrics: [
    { label: 'Receita', value: 'R$ 7.240', detail: '+8% vs. mês anterior' },
    { label: 'Gastos', value: 'R$ 3.180', detail: '44% da receita' },
    { label: 'Saldo', value: 'R$ 4.060', detail: '56% disponível' },
    { label: 'Categorias', value: '8', detail: '2 pedem atenção' },
  ],
};

export const homelabNodes = [
  {
    id: 'gateway',
    label: 'Gateway',
    detail: 'entrada e políticas de rede',
    type: 'network',
  },
  {
    id: 'compute',
    label: 'Compute',
    detail: 'virtualização e workloads',
    type: 'server',
  },
  {
    id: 'storage',
    label: 'Storage',
    detail: 'datasets e snapshots',
    type: 'storage',
  },
  {
    id: 'cluster',
    label: 'Cluster',
    detail: 'serviços orquestrados',
    type: 'server',
  },
  {
    id: 'observability',
    label: 'Observability',
    detail: 'métricas, logs e alertas',
    type: 'service',
  },
  {
    id: 'ci',
    label: 'CI/CD',
    detail: 'build, teste e entrega',
    type: 'service',
  },
] as const;
