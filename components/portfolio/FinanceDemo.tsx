'use client';

import { type PointerEvent as ReactPointerEvent, useState } from 'react';

import type { Dictionary } from '@/lib/portfolio/dictionaries';
import {
  financeCategories,
  financeChatBreakdown,
  financeFlow,
  financeStack,
} from '@/lib/portfolio/site';
import type { Locale } from '@/lib/portfolio/types';

type DemoTab = 'flow' | 'categories' | 'agent';

const DEMO_TABS: DemoTab[] = ['agent', 'flow', 'categories'];
const CHART = { w: 720, h: 230, top: 12, bottom: 26, left: 46, right: 8 };
const FLOW_MAX = 14000;
const FLOW_TICKS = [14000, 10500, 7000, 3500, 0];

interface Point {
  x: number;
  y: number;
}

type CategoryId = (typeof financeCategories)[number]['id'];

interface HoveredCategory {
  id: CategoryId;
  value: number;
  x: number;
  y: number;
}

/**
 * Catmull-Rom convertido para bezier cúbica: dá a curva suave do gráfico sem
 * depender de biblioteca. Cada ponto usa os vizinhos para achar os controles.
 */
function smoothPath(points: Point[]) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function toPoints(key: 'income' | 'expense'): Point[] {
  const inner = CHART.w - CHART.left - CHART.right;
  const usable = CHART.h - CHART.top - CHART.bottom;
  return financeFlow.map((row, index) => ({
    x: CHART.left + (inner * index) / (financeFlow.length - 1),
    y: CHART.top + usable * (1 - row[key] / FLOW_MAX),
  }));
}

interface FinanceDemoProps {
  dictionary: Dictionary['finance'];
  locale: Locale;
}

export function FinanceDemo({ dictionary, locale }: FinanceDemoProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [activeTab, setActiveTab] = useState<DemoTab>('agent');
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] =
    useState<HoveredCategory | null>(null);

  const money = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });

  /** Posiciona o tooltip de categoria junto ao ponteiro, dentro do gráfico. */
  const trackCategory = (
    event: ReactPointerEvent<HTMLDivElement>,
    id: CategoryId,
  ) => {
    const row = event.currentTarget;
    const chart = row.parentElement;
    if (!chart) return;
    const chartRect = chart.getBoundingClientRect();
    const value = financeCategories.find((c) => c.id === id)?.value ?? 0;
    setHoveredCategory({
      id,
      value,
      x: event.clientX - chartRect.left,
      y: row.offsetTop + row.offsetHeight + 6,
    });
  };

  /** Converte o x do ponteiro para o índice do mês mais próximo. */
  const trackPointer = (event: ReactPointerEvent<HTMLElement>) => {
    const svg = event.currentTarget.querySelector('svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    if (!rect.width) return;
    const xInView = ((event.clientX - rect.left) / rect.width) * CHART.w;
    const step =
      (CHART.w - CHART.left - CHART.right) / (financeFlow.length - 1);
    const index = Math.round((xInView - CHART.left) / step);
    setHovered(Math.min(Math.max(index, 0), financeFlow.length - 1));
  };

  const income = toPoints('income');
  const expense = toPoints('expense');
  const baseline = CHART.h - CHART.bottom;
  const closeArea = (points: Point[]) =>
    `${smoothPath(points)} L ${points[points.length - 1].x} ${baseline} L ${
      points[0].x
    } ${baseline} Z`;
  const incomeArea = closeArea(income);
  const expenseArea = closeArea(expense);
  const categoryMax = Math.max(...financeCategories.map((c) => c.value));
  const axisMax = Math.ceil((categoryMax * 1.02) / 550) * 550;

  return (
    <div className="finance-project">
      <ul className="finance-stack">
        {financeStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="finance-metrics">
        {dictionary.metrics.map(([label, value, delta, direction]) => (
          <article className="finance-metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small className={`is-${direction}`}>{delta}</small>
          </article>
        ))}
      </div>

      <div className="finance-demo">
        <div className="demo-bar">
          <div
            className="demo-tabs"
            role="tablist"
            aria-label={dictionary.demo}
          >
            {DEMO_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {dictionary.tabs[tab]}
              </button>
            ))}
          </div>
          <span className="demo-period">{dictionary.period}</span>
        </div>

        <div
          className="demo-panel"
          role="tabpanel"
          aria-label={dictionary.tabs[activeTab]}
        >
          {activeTab === 'flow' ? (
            <figure
              className="flow-chart"
              onPointerMove={trackPointer}
              onPointerLeave={() => setHovered(null)}
            >
              <figcaption className="sr-only">
                {financeFlow
                  .map(
                    (row) =>
                      `${row.label}: ${dictionary.series.income} ${money.format(
                        row.income,
                      )}, ${dictionary.series.expense} ${money.format(
                        row.expense,
                      )}`,
                  )
                  .join('. ')}
              </figcaption>
              <svg viewBox={`0 0 ${CHART.w} ${CHART.h}`} role="img">
                <defs>
                  <linearGradient id="flow-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="flow-fill-top" />
                    <stop offset="100%" className="flow-fill-bottom" />
                  </linearGradient>
                  <linearGradient
                    id="flow-fill-expense"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" className="flow-fill-expense-top" />
                    <stop offset="100%" className="flow-fill-expense-bottom" />
                  </linearGradient>
                </defs>
                {FLOW_TICKS.map((tick) => {
                  const y =
                    CHART.top +
                    (CHART.h - CHART.top - CHART.bottom) *
                      (1 - tick / FLOW_MAX);
                  return (
                    <g key={tick}>
                      <line
                        className="chart-gridline"
                        x1={CHART.left}
                        y1={y}
                        x2={CHART.w - CHART.right}
                        y2={y}
                      />
                      <text className="chart-tick" x={0} y={y + 3}>
                        {tick / 1000}k
                      </text>
                    </g>
                  );
                })}
                <path className="flow-area" d={incomeArea} />
                <path className="flow-area is-expense" d={expenseArea} />
                <path className="flow-line is-income" d={smoothPath(income)} />
                <path
                  className="flow-line is-expense"
                  d={smoothPath(expense)}
                />
                {hovered !== null ? (
                  <g className="flow-cursor">
                    <line
                      x1={income[hovered].x}
                      y1={CHART.top}
                      x2={income[hovered].x}
                      y2={baseline}
                    />
                    <circle
                      className="is-income"
                      cx={income[hovered].x}
                      cy={income[hovered].y}
                      r={4}
                    />
                    <circle
                      className="is-expense"
                      cx={expense[hovered].x}
                      cy={expense[hovered].y}
                      r={4}
                    />
                  </g>
                ) : null}
                {financeFlow.map((row, index) => (
                  <text
                    key={row.label}
                    className="chart-tick"
                    x={income[index].x}
                    y={CHART.h - 6}
                    textAnchor="middle"
                  >
                    {row.label}
                  </text>
                ))}
              </svg>
              {hovered !== null ? (
                <div
                  className="flow-tooltip"
                  style={{
                    left: `${(income[hovered].x / CHART.w) * 100}%`,
                    // Nas pontas o tooltip sairia do painel: ancora pelo lado oposto.
                    transform: `translateX(${
                      hovered <= 1
                        ? '0'
                        : hovered >= financeFlow.length - 2
                          ? '-100%'
                          : '-50%'
                    })`,
                  }}
                >
                  <strong>{financeFlow[hovered].label}</strong>
                  <span>
                    <i className="is-income" aria-hidden="true" />
                    {dictionary.series.income}:{' '}
                    <b>{money.format(financeFlow[hovered].income)}</b>
                  </span>
                  <span>
                    <i className="is-expense" aria-hidden="true" />
                    {dictionary.series.expense}:{' '}
                    <b>{money.format(financeFlow[hovered].expense)}</b>
                  </span>
                </div>
              ) : null}
            </figure>
          ) : null}

          {activeTab === 'categories' ? (
            <div className="category-chart">
              {financeCategories.map((category) => (
                <div
                  className={`category-row ${
                    hoveredCategory?.id === category.id ? 'is-active' : ''
                  }`}
                  key={category.id}
                  onPointerMove={(event) => trackCategory(event, category.id)}
                  onPointerLeave={() => setHoveredCategory(null)}
                >
                  <span>{dictionary.categoryLabels[category.id]}</span>
                  <div>
                    <i
                      style={{ width: `${(category.value / axisMax) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="category-axis" aria-hidden="true">
                {[0, 0.25, 0.5, 0.75, 1].map((step) => (
                  <span key={step}>{(axisMax * step) / 1000}k</span>
                ))}
              </div>
              {hoveredCategory ? (
                <div
                  className="category-tooltip"
                  style={{
                    left: hoveredCategory.x,
                    top: hoveredCategory.y,
                  }}
                >
                  <strong>
                    {dictionary.categoryLabels[hoveredCategory.id]}
                  </strong>
                  <span>
                    <i aria-hidden="true" />
                    <b>{money.format(hoveredCategory.value)}</b>
                  </span>
                </div>
              ) : null}
            </div>
          ) : null}

          {activeTab === 'agent' ? (
            <div className="agent-layout">
              <div className="whatsapp-mock" key={replayKey}>
                <header>
                  <span className="agent-avatar" aria-hidden="true">
                    🐷
                  </span>
                  <div>
                    <strong>Porquinho</strong>
                    <small>{dictionary.chat.status}</small>
                  </div>
                  <button
                    type="button"
                    onClick={() => setReplayKey((value) => value + 1)}
                  >
                    ↻ {dictionary.replay}
                  </button>
                </header>
                <div className="chat-thread">
                  <div className="chat-bubble">
                    <dl className="chat-breakdown">
                      {financeChatBreakdown.map(([name, amount]) => (
                        <div key={name}>
                          <dt>
                            <i aria-hidden="true" />
                            {name}
                          </dt>
                          <dd>{amount}</dd>
                        </div>
                      ))}
                    </dl>
                    <time>{dictionary.chat.breakdownTime}</time>
                  </div>
                  <div className="chat-bubble">
                    <p>{dictionary.chat.summary}</p>
                    <p>
                      {dictionary.chat.alertLead}{' '}
                      <mark>{dictionary.chat.alertCount}</mark>
                      {dictionary.chat.alertTail}
                    </p>
                    <time>{dictionary.chat.breakdownTime}</time>
                  </div>
                </div>
                <footer>
                  <span>{dictionary.chat.inputPlaceholder}</span>
                  <i aria-hidden="true">🎤</i>
                </footer>
              </div>

              <div className="agent-aside">
                <section className="agent-how">
                  <h3>{dictionary.howLabel}</h3>
                  <ol>
                    {dictionary.how.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
                {dictionary.examples.map(([question, answer]) => (
                  <section className="agent-example" key={question}>
                    <p>{question}</p>
                    <p>→ {answer}</p>
                  </section>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {activeTab === 'agent' ? null : (
          <aside className="model-insight">
            <h3>{dictionary.insightLabel}</h3>
            <p>{dictionary.insight}</p>
          </aside>
        )}
      </div>
    </div>
  );
}
