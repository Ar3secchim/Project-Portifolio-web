'use client';

import { useState } from 'react';

import { financeSnapshot } from '@/lib/portfolio/site';
import type { Dictionary } from '@/lib/portfolio/dictionaries';

interface FinanceDemoProps {
  dictionary: Dictionary['finance'];
}

export function FinanceDemo({ dictionary }: FinanceDemoProps) {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="finance-demo">
      <div className="demo-toolbar">
        <div>
          <span className="live-dot" aria-hidden="true" />
          <span>{dictionary.demo}</span>
        </div>
        <button
          type="button"
          onClick={() => setReplayKey((value) => value + 1)}
          aria-label={dictionary.replay}
        >
          ↻ {dictionary.replay}
        </button>
      </div>
      <div className="metric-grid">
        {financeSnapshot.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.detail}</small>
          </div>
        ))}
      </div>
      <div className="agent-panel" key={replayKey}>
        <div className="agent-title">
          <span className="agent-avatar">R</span>
          <div>
            <strong>Porquinho</strong>
            <small>analysis agent · demo</small>
          </div>
        </div>
        <div className="chat-message is-user">{dictionary.userMessage}</div>
        <div className="chat-message is-agent">{dictionary.agentMessage}</div>
      </div>
      <p className="demo-disclosure">{financeSnapshot.disclosure}</p>
    </div>
  );
}
