'use client';

import { useState } from 'react';

import { homelabNodes } from '@/lib/portfolio/site';

interface HomelabMapProps {
  hint: string;
  disclosure: string;
}

export function HomelabMap({ hint, disclosure }: HomelabMapProps) {
  const [selectedId, setSelectedId] = useState<string>(homelabNodes[0].id);
  const selected =
    homelabNodes.find((node) => node.id === selectedId) ?? homelabNodes[0];

  return (
    <div className="homelab-shell">
      <div className="window-bar">
        <span />
        <span />
        <span />
        <small>CONCEPTUAL TOPOLOGY</small>
      </div>
      <div className="homelab-layout">
        <div className="topology" role="group" aria-label="Homelab topology">
          {homelabNodes.map((node, index) => (
            <button
              key={node.id}
              type="button"
              className={`topology-node node-${index + 1} ${
                selectedId === node.id ? 'is-selected' : ''
              }`}
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
        </div>
        <aside className="node-detail" aria-live="polite">
          <p className="mono-hint">{hint}</p>
          <div>
            <span className="detail-index">
              SELECTED / {selected.type.toUpperCase()}
            </span>
            <h3>{selected.label}</h3>
            <p>{selected.detail}</p>
          </div>
          <p className="demo-disclosure">{disclosure}</p>
        </aside>
      </div>
    </div>
  );
}
