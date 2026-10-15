import type { ReactNode } from 'react';

type Point = readonly [number, number];

interface DiagramProps {
  title: string;
  caption: string;
  width: number;
  height: number;
  markerId: string;
  children: ReactNode;
}

/** Moldura comum: SVG responsivo, seta reutilizável e legenda acessível. */
export function Diagram({
  title,
  caption,
  width,
  height,
  markerId,
  children,
}: DiagramProps) {
  return (
    <figure className="case-diagram">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={title}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path className="diagram-marker" d="M0,0 L8,4 L0,8 z" />
          </marker>
        </defs>
        {children}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

interface DiagramBoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  detail?: readonly string[];
  tone?: 'default' | 'accent' | 'outside';
}

export function DiagramBox({
  x,
  y,
  width,
  height,
  title,
  detail = [],
  tone = 'default',
}: DiagramBoxProps) {
  return (
    <g className={`diagram-box is-${tone}`}>
      <rect x={x} y={y} width={width} height={height} rx={6} />
      <text className="diagram-title" x={x + 12} y={y + 19}>
        {title}
      </text>
      {detail.map((line, index) => (
        <text
          className="diagram-detail"
          key={line}
          x={x + 12}
          y={y + 35 + index * 14}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

interface DiagramBandProps {
  x: number;
  y: number;
  width: number;
  label: string;
  accent?: boolean;
}

/** Faixa horizontal dentro de uma caixa, usada para camadas. */
export function DiagramBand({
  x,
  y,
  width,
  label,
  accent = false,
}: DiagramBandProps) {
  return (
    <g className={`diagram-band ${accent ? 'is-accent' : ''}`}>
      <rect x={x} y={y} width={width} height={26} rx={4} />
      <text x={x + 10} y={y + 17}>
        {label}
      </text>
    </g>
  );
}

interface DiagramArrowProps {
  points: readonly Point[];
  markerId: string;
  label?: string | readonly string[];
  labelAt?: Point;
  dashed?: boolean;
  bothEnds?: boolean;
}

export function DiagramArrow({
  points,
  markerId,
  label,
  labelAt,
  dashed = false,
  bothEnds = false,
}: DiagramArrowProps) {
  const marker = `url(#${markerId})`;
  const labelLines = typeof label === 'string' ? [label] : label ?? [];

  return (
    <g>
      <polyline
        className={`diagram-arrow ${dashed ? 'is-dashed' : ''}`}
        points={points.map(([px, py]) => `${px},${py}`).join(' ')}
        markerEnd={marker}
        markerStart={bothEnds ? marker : undefined}
      />
      {labelAt &&
        labelLines.map((line, index) => (
          <text
            className="diagram-label"
            key={line}
            x={labelAt[0]}
            y={labelAt[1] + index * 13}
          >
            {line}
          </text>
        ))}
    </g>
  );
}

interface DiagramBoundaryProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

export function DiagramBoundary({
  x,
  y,
  width,
  height,
  label,
}: DiagramBoundaryProps) {
  return (
    <g>
      <rect
        className="diagram-boundary"
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
      />
      <text className="diagram-boundary-label" x={x + 12} y={y + 16}>
        {label}
      </text>
    </g>
  );
}

/** Caminho do arquivo acima de um trecho de código num case. */
export function CodeSource({ path }: { path: string }) {
  return <p className="code-source">{path}</p>;
}
