'use client';

import { useState } from 'react';

import {
  homelabEdges,
  homelabLegend,
  homelabNodes,
} from '@/lib/portfolio/site';
import type {
  HomelabNodeType,
  HomelabTopologyEdge,
  HomelabTopologyNode,
} from '@/lib/portfolio/site';

interface HomelabMapProps {
  hint: string;
  disclosure: string;
  panelTitle: string;
  servicesLabel: string;
  stats: readonly (readonly [string, string, string])[];
  topologyNodes?: readonly HomelabTopologyNode[];
  topologyEdges?: readonly HomelabTopologyEdge[];
  topologyLegend?: readonly HomelabNodeType[];
}

function getEdgeCoordinates(
  from: HomelabTopologyNode,
  to: HomelabTopologyNode,
) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const trim = Math.min(
    0.45,
    1 / Math.max(Math.abs(dx) / 10, Math.abs(dy) / 5.5),
  );

  return {
    x1: from.x + dx * trim,
    y1: from.y + dy * trim,
    x2: to.x - dx * trim,
    y2: to.y - dy * trim,
  };
}

export function HomelabMap({
  hint,
  disclosure,
  panelTitle,
  servicesLabel,
  stats,
  topologyNodes = homelabNodes,
  topologyEdges = homelabEdges,
  topologyLegend = homelabLegend,
}: HomelabMapProps) {
  const [selectedId, setSelectedId] = useState('cluster');
  const nodeById = new Map(topologyNodes.map((node) => [node.id, node]));
  const selected = nodeById.get(selectedId) ?? topologyNodes[0];
  const isLiveTopology = topologyNodes !== homelabNodes;

  if (!selected) return null;

  return (
    <div className="homelab-grid">
      <div className="homelab-shell">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <small>{panelTitle}</small>
        </div>
        <div
          className={`topology ${isLiveTopology ? 'is-live' : ''}`}
          role="group"
          aria-label="Homelab topology"
        >
          <svg className="topology-edges" aria-hidden="true">
            <defs>
              <marker
                id="topology-arrow"
                markerHeight="6"
                markerWidth="6"
                orient="auto"
                refX="5"
                refY="3"
                viewBox="0 0 6 6"
              >
                <path className="topology-arrow" d="M 0 0 L 6 3 L 0 6 z" />
              </marker>
              <marker
                id="topology-arrow-active"
                markerHeight="6"
                markerWidth="6"
                orient="auto"
                refX="5"
                refY="3"
                viewBox="0 0 6 6"
              >
                <path
                  className="topology-arrow is-active"
                  d="M 0 0 L 6 3 L 0 6 z"
                />
              </marker>
            </defs>
            {topologyEdges.map(([from, to]) => {
              const a = nodeById.get(from);
              const b = nodeById.get(to);
              if (!a || !b) return null;
              const isActive = selectedId === from || selectedId === to;
              const edge = getEdgeCoordinates(a, b);

              return (
                <line
                  key={`${from}-${to}`}
                  className={`topology-edge ${isActive ? 'is-active' : ''}`}
                  x1={`${edge.x1}%`}
                  y1={`${edge.y1}%`}
                  x2={`${edge.x2}%`}
                  y2={`${edge.y2}%`}
                  markerEnd={`url(#topology-arrow${isActive ? '-active' : ''})`}
                />
              );
            })}
          </svg>

          {topologyNodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`topology-node ${
                selectedId === node.id ? 'is-selected' : ''
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setSelectedId(node.id)}
              aria-pressed={selectedId === node.id}
            >
              <span
                className={`node-status is-${node.type}`}
                aria-hidden="true"
              />
              <strong>{node.label}</strong>
              <small>{node.type}</small>
            </button>
          ))}

          <ul className="topology-legend">
            {topologyLegend.map((type) => (
              <li key={type}>
                <span className={`node-status is-${type}`} aria-hidden="true" />
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="homelab-rail" aria-live="polite">
        <article className="node-detail">
          <header>
            <span
              className={`node-status is-${selected.type}`}
              aria-hidden="true"
            />
            <strong>{selected.label}</strong>
            <small>{selected.type}</small>
          </header>
          <p>{selected.detail}</p>
          <p className="detail-index">{servicesLabel}</p>
          <div className="node-services">
            {selected.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </article>

        <dl className="homelab-stats">
          {stats.map(([label, value, note]) => (
            <div key={label}>
              <dt>
                {label}
                <small>{note}</small>
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mono-hint">{hint}</p>
        <p className="demo-disclosure">{disclosure}</p>
      </aside>
    </div>
  );
}
