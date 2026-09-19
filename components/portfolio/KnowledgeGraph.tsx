'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import type { Dictionary } from '@/lib/portfolio/dictionaries';
import type {
  KnowledgeGraph as KnowledgeGraphData,
  Locale,
} from '@/lib/portfolio/types';

interface KnowledgeGraphProps {
  graph: KnowledgeGraphData;
  locale: Locale;
  dictionary: Dictionary['knowledge'];
  compact?: boolean;
}

export function KnowledgeGraph({
  graph,
  locale,
  dictionary,
  compact = false,
}: KnowledgeGraphProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const connectedIds = useMemo(() => {
    if (!selectedId) return new Set(graph.nodes.map((node) => node.id));
    const ids = new Set([selectedId]);
    graph.edges.forEach((edge) => {
      if (edge.source === selectedId) ids.add(edge.target);
      if (edge.target === selectedId) ids.add(edge.source);
    });
    return ids;
  }, [graph, selectedId]);
  const selected = graph.nodes.find((node) => node.id === selectedId);
  const visibleNodes = compact ? graph.nodes.slice(0, 18) : graph.nodes;

  return (
    <div className={`knowledge-shell ${compact ? 'is-compact' : ''}`}>
      <div className="knowledge-toolbar">
        <p aria-live="polite">
          {selected
            ? `${dictionary.selected} “${selected.label}”`
            : dictionary.instructions}
        </p>
        {selected ? (
          <button type="button" onClick={() => setSelectedId(null)}>
            {dictionary.clear}
          </button>
        ) : null}
      </div>
      <div
        className="knowledge-grid"
        role="group"
        aria-label={dictionary.title}
      >
        {visibleNodes.map((node) => {
          const active = connectedIds.has(node.id);
          return (
            <button
              key={node.id}
              type="button"
              className={`knowledge-node is-${node.category} ${
                active ? 'is-related' : 'is-muted'
              }`}
              aria-pressed={selectedId === node.id}
              onClick={() =>
                setSelectedId((value) => (value === node.id ? null : node.id))
              }
            >
              <span>
                {node.category === 'case'
                  ? dictionary.case
                  : dictionary.technology}
              </span>
              <strong>{node.label}</strong>
            </button>
          );
        })}
      </div>
      {selected?.caseSlug ? (
        <Link
          className="arrow-link knowledge-case-link"
          href={`/${locale}/cases/${selected.caseSlug}`}
        >
          Open case ↗
        </Link>
      ) : null}
    </div>
  );
}
