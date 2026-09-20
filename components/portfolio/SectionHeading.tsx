import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Trecho destacado em itálico na cor de acento, logo após o título. */
  titleAccent?: string;
  description?: ReactNode;
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title}
          {titleAccent ? <em> {titleAccent}</em> : null}
        </h2>
        {description ? (
          <p className="section-description">{description}</p>
        ) : null}
      </div>
      {action ? <div className="section-action">{action}</div> : null}
    </div>
  );
}
