import { describe, expect, it } from 'vitest';

import {
  buildHomelabLiveContent,
  parseHomelabSnapshot,
} from '@/lib/portfolio/homelab-snapshot';

const validSnapshot = {
  schemaVersion: 2,
  generatedAt: '2026-09-20T12:52:06Z',
  validUntil: '2026-09-20T15:52:06Z',
  status: 'healthy',
  gitops: {
    applications: 15,
    synced: 15,
    outOfSync: 0,
    healthy: 15,
    degraded: 0,
    autoSyncEnabled: 15,
    lastSyncAt: '2026-09-20T12:48:32Z',
  },
  scale: {
    namespaces: 14,
    nodesObserved: 1,
    workloads: 30,
    workloadsByKind: {
      deployments: 28,
      statefulSets: 1,
      daemonSets: 0,
      other: 1,
    },
    podsRunning: 32,
    pods: {
      total: 37,
      running: 32,
      ready: 32,
      pending: 1,
      succeeded: 4,
      failed: 0,
    },
  },
  tls: {
    certificates: 2,
    ready: 2,
    notReady: 0,
    expiringWithin30Days: 0,
    daysToNextRenewal: 294,
  },
  services: ['ArgoCD', 'Traefik', 'cert-manager', 'Infisical'],
};

describe('homelab snapshot', () => {
  it('accepts a fresh schema v2 snapshot and builds live content', () => {
    const snapshot = parseHomelabSnapshot(
      validSnapshot,
      Date.parse('2026-09-20T13:00:00Z'),
    );

    expect(snapshot).not.toBeNull();
    const content = buildHomelabLiveContent(snapshot!, 'pt');
    expect(content.topologyNodes.map((node) => node.label)).toEqual([
      'Dispositivos',
      'Pi-hole',
      'Traefik Gateway',
      'Docker Services',
      'k3s Cluster',
      'Host local',
      'GitHub Actions',
      'ArgoCD',
      'Infisical Secrets',
    ]);
    expect(content.topologyNodes.map((node) => node.label)).not.toContain(
      'OPNsense',
    );
    expect(content.topologyEdges).toHaveLength(9);
    expect(content.stats).toContainEqual([
      'PODS',
      '32 / 37',
      '32 prontos · 1 pendente',
    ]);
    expect(content.statusStrip).toContainEqual([
      'ArgoCD',
      '15/15 sincronizados',
    ]);
    expect(content.statusLabel).toBe('LIVE STATUS · SAUDÁVEL');
  });

  it('rejects expired and malformed snapshots', () => {
    expect(
      parseHomelabSnapshot(validSnapshot, Date.parse('2026-09-20T16:00:00Z')),
    ).toBeNull();
    expect(
      parseHomelabSnapshot({ ...validSnapshot, schemaVersion: 1 }),
    ).toBeNull();
    expect(
      parseHomelabSnapshot({ ...validSnapshot, services: [null] }),
    ).toBeNull();
  });
});
