import type {
  HomelabNodeType,
  HomelabTopologyEdge,
  HomelabTopologyNode,
} from './site';
import type { Locale } from './types';

const SNAPSHOT_URL = 'https://api.renara.dev/snapshot.json?v=2';

export interface HomelabSnapshot {
  schemaVersion: 2;
  generatedAt: string;
  validUntil: string;
  status: string;
  gitops: {
    applications: number;
    synced: number;
    outOfSync: number;
    healthy: number;
    degraded: number;
    autoSyncEnabled: number;
    lastSyncAt: string;
  };
  scale: {
    namespaces: number;
    nodesObserved: number;
    workloads: number;
    workloadsByKind: {
      deployments: number;
      statefulSets: number;
      daemonSets: number;
      other: number;
    };
    podsRunning: number;
    pods: {
      total: number;
      running: number;
      ready: number;
      pending: number;
      succeeded: number;
      failed: number;
    };
  };
  tls: {
    certificates: number;
    ready: number;
    notReady: number;
    expiringWithin30Days: number;
    daysToNextRenewal: number;
  };
  services: string[];
}

export interface HomelabLiveContent {
  topologyNodes: readonly HomelabTopologyNode[];
  topologyEdges: readonly HomelabTopologyEdge[];
  topologyLegend: readonly HomelabNodeType[];
  stats: readonly (readonly [string, string, string])[];
  statusStrip: readonly (readonly [string, string])[];
  statusLabel: string;
  disclosure: string;
}

function buildLiveTopology(
  snapshot: HomelabSnapshot,
  pt: boolean,
): Pick<
  HomelabLiveContent,
  'topologyEdges' | 'topologyLegend' | 'topologyNodes'
> {
  const topologyNodes: readonly HomelabTopologyNode[] = [
    {
      id: 'network-clients',
      label: pt ? 'Dispositivos' : 'Network devices',
      detail: pt
        ? 'Clientes da rede local que consomem DNS e os serviços publicados.'
        : 'Local network clients consuming DNS and published services.',
      type: 'network',
      services: ['LAN', 'DNS'],
      x: 50,
      y: 8,
    },
    {
      id: 'dns',
      label: 'Pi-hole',
      detail: pt
        ? 'Resolução DNS e filtragem para os dispositivos da rede local.'
        : 'DNS resolution and filtering for devices on the local network.',
      type: 'network',
      services: ['DNS', pt ? 'Filtragem' : 'Filtering'],
      x: 50,
      y: 20,
    },
    {
      id: 'gateway',
      label: 'Traefik Gateway',
      detail: pt
        ? 'Camada sanitizada de entrada, proxy reverso e terminação TLS.'
        : 'Sanitized entry layer, reverse proxy, and TLS termination.',
      type: 'network',
      services: [
        'Reverse proxy',
        `${snapshot.tls.ready}/${snapshot.tls.certificates} TLS`,
        'Ingress',
      ],
      x: 50,
      y: 32,
    },
    {
      id: 'docker',
      label: 'Docker Services',
      detail: pt
        ? 'Serviços auxiliares executados fora do cluster, sem exposição de hosts ou portas.'
        : 'Supporting services running outside the cluster, without exposing hosts or ports.',
      type: 'server',
      services: [
        'Pi-hole',
        pt ? 'Automação' : 'Automation',
        pt ? 'Bancos de dados' : 'Databases',
      ],
      x: 22,
      y: 51,
    },
    {
      id: 'cluster',
      label: 'k3s Cluster',
      detail: pt
        ? `${snapshot.scale.nodesObserved} nó observado executando ${snapshot.scale.workloads} workloads e ${snapshot.scale.podsRunning} pods.`
        : `${snapshot.scale.nodesObserved} observed node running ${snapshot.scale.workloads} workloads and ${snapshot.scale.podsRunning} pods.`,
      type: 'server',
      services: snapshot.services,
      x: 78,
      y: 51,
    },
    {
      id: 'host',
      label: pt ? 'Host local' : 'Local host',
      detail: pt
        ? 'Servidor Linux, armazenamento e conectividade que sustentam os dois ambientes de execução.'
        : 'Linux server, storage, and connectivity supporting both runtime environments.',
      type: 'server',
      services: ['Linux', 'Storage', 'Tunnel'],
      x: 50,
      y: 67,
    },
    {
      id: 'ci',
      label: 'GitHub Actions',
      detail: pt
        ? 'Entrega contínua por runner próprio, sem publicar detalhes operacionais.'
        : 'Continuous delivery through a self-hosted runner, without publishing operational details.',
      type: 'service',
      services: ['CI/CD', 'Self-hosted runner'],
      x: 24,
      y: 82,
    },
    {
      id: 'argocd',
      label: 'ArgoCD',
      detail: pt
        ? `Controla a entrega GitOps do cluster: ${snapshot.gitops.synced}/${snapshot.gitops.applications} aplicações sincronizadas.`
        : `Controls GitOps delivery to the cluster: ${snapshot.gitops.synced}/${snapshot.gitops.applications} applications synchronized.`,
      type: 'service',
      services: [
        'GitOps',
        `${snapshot.gitops.healthy}/${snapshot.gitops.applications} healthy`,
        `${snapshot.gitops.autoSyncEnabled} auto-sync`,
      ],
      x: 52,
      y: 82,
    },
    {
      id: 'secrets',
      label: 'Infisical Secrets',
      detail: pt
        ? 'Sincronização de segredos para workloads e serviços da infraestrutura.'
        : 'Secret synchronization for infrastructure workloads and services.',
      type: 'service',
      services: ['Secret sync', 'Infra', 'Apps'],
      x: 82,
      y: 82,
    },
  ];
  const topologyEdges: readonly HomelabTopologyEdge[] = [
    ['network-clients', 'dns'],
    ['dns', 'gateway'],
    ['gateway', 'docker'],
    ['gateway', 'cluster'],
    ['host', 'docker'],
    ['host', 'cluster'],
    ['ci', 'argocd'],
    ['argocd', 'cluster'],
    ['secrets', 'cluster'],
  ];

  return {
    topologyNodes,
    topologyEdges,
    topologyLegend: ['server', 'service', 'network'],
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isCount(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) >= 0;
}

function isDateString(value: unknown): value is string {
  return typeof value === 'string' && Number.isFinite(Date.parse(value));
}

export function parseHomelabSnapshot(
  value: unknown,
  now = Date.now(),
): HomelabSnapshot | null {
  if (!isRecord(value) || value.schemaVersion !== 2) return null;

  const { gitops, scale, tls } = value;
  if (!isRecord(gitops) || !isRecord(scale) || !isRecord(tls)) return null;
  if (!isRecord(scale.workloadsByKind) || !isRecord(scale.pods)) return null;
  if (!isDateString(value.generatedAt) || !isDateString(value.validUntil)) {
    return null;
  }
  if (Date.parse(value.validUntil) <= now) return null;
  if (typeof value.status !== 'string') return null;
  if (
    !Array.isArray(value.services) ||
    !value.services.every((service) => typeof service === 'string')
  ) {
    return null;
  }

  const counts = [
    gitops.applications,
    gitops.synced,
    gitops.outOfSync,
    gitops.healthy,
    gitops.degraded,
    gitops.autoSyncEnabled,
    scale.namespaces,
    scale.nodesObserved,
    scale.workloads,
    scale.workloadsByKind.deployments,
    scale.workloadsByKind.statefulSets,
    scale.workloadsByKind.daemonSets,
    scale.workloadsByKind.other,
    scale.podsRunning,
    scale.pods.total,
    scale.pods.running,
    scale.pods.ready,
    scale.pods.pending,
    scale.pods.succeeded,
    scale.pods.failed,
    tls.certificates,
    tls.ready,
    tls.notReady,
    tls.expiringWithin30Days,
    tls.daysToNextRenewal,
  ];
  if (!counts.every(isCount) || !isDateString(gitops.lastSyncAt)) return null;

  return value as unknown as HomelabSnapshot;
}

export async function getHomelabSnapshot(): Promise<HomelabSnapshot | null> {
  try {
    const response = await fetch(SNAPSHOT_URL, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;
    return parseHomelabSnapshot(await response.json());
  } catch {
    return null;
  }
}

export function buildHomelabLiveContent(
  snapshot: HomelabSnapshot,
  locale: Locale,
): HomelabLiveContent {
  const pt = locale === 'pt';
  const { gitops, scale, tls } = snapshot;
  const generatedAt = new Intl.DateTimeFormat(pt ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Belem',
    timeZoneName: 'short',
  }).format(new Date(snapshot.generatedAt));

  let stats: HomelabLiveContent['stats'];
  let statusStrip: HomelabLiveContent['statusStrip'];
  let statusLabel: string;

  if (pt) {
    const pendingLabel = scale.pods.pending === 1 ? 'pendente' : 'pendentes';
    const nodeLabel = scale.nodesObserved === 1 ? 'nó' : 'nós';
    stats = [
      ['NÓS', String(scale.nodesObserved), 'observados pelo cluster'],
      [
        'PODS',
        `${scale.pods.running} / ${scale.pods.total}`,
        `${scale.pods.ready} prontos · ${scale.pods.pending} ${pendingLabel}`,
      ],
      [
        'WORKLOADS',
        String(scale.workloads),
        `${scale.workloadsByKind.deployments} deploy · ${scale.workloadsByKind.statefulSets} stateful`,
      ],
      [
        'GITOPS',
        `${gitops.synced} / ${gitops.applications}`,
        `${gitops.healthy} saudáveis · ${gitops.degraded} degradados`,
      ],
    ];
    statusStrip = [
      [
        'k3s cluster',
        `${scale.nodesObserved} ${nodeLabel} · ${scale.podsRunning} pods`,
      ],
      ['ArgoCD', `${gitops.synced}/${gitops.applications} sincronizados`],
      ['workloads', `${scale.workloads} observados`],
      ['TLS', `${tls.ready}/${tls.certificates} prontos`],
    ];
    statusLabel =
      snapshot.status === 'healthy'
        ? 'LIVE STATUS · SAUDÁVEL'
        : `LIVE STATUS · ${snapshot.status.toUpperCase()}`;
  } else {
    const nodeLabel = scale.nodesObserved === 1 ? 'node' : 'nodes';
    stats = [
      ['NODES', String(scale.nodesObserved), 'observed by the cluster'],
      [
        'PODS',
        `${scale.pods.running} / ${scale.pods.total}`,
        `${scale.pods.ready} ready · ${scale.pods.pending} pending`,
      ],
      [
        'WORKLOADS',
        String(scale.workloads),
        `${scale.workloadsByKind.deployments} deploy · ${scale.workloadsByKind.statefulSets} stateful`,
      ],
      [
        'GITOPS',
        `${gitops.synced} / ${gitops.applications}`,
        `${gitops.healthy} healthy · ${gitops.degraded} degraded`,
      ],
    ];
    statusStrip = [
      [
        'k3s cluster',
        `${scale.nodesObserved} ${nodeLabel} · ${scale.podsRunning} pods`,
      ],
      ['ArgoCD', `${gitops.synced}/${gitops.applications} synced`],
      ['workloads', `${scale.workloads} observed`],
      ['TLS', `${tls.ready}/${tls.certificates} ready`],
    ];
    statusLabel =
      snapshot.status === 'healthy'
        ? 'LIVE STATUS · HEALTHY'
        : `LIVE STATUS · ${snapshot.status.toUpperCase()}`;
  }

  return {
    ...buildLiveTopology(snapshot, pt),
    stats,
    statusStrip,
    statusLabel,
    disclosure: pt
      ? `Snapshot público atualizado em ${generatedAt}.`
      : `Public snapshot updated ${generatedAt}.`,
  };
}
