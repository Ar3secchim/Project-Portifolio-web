import type { ExperienceEntry } from '@/lib/portfolio/types';

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  progressionLabel: string;
}

export function ExperienceTimeline({
  entries,
  progressionLabel,
}: ExperienceTimelineProps) {
  return (
    <ol className="experience-list">
      {entries.map((entry) => (
        <li
          className="experience-item"
          key={`${entry.company}-${entry.period}`}
        >
          <div className="experience-when">
            <span>{entry.period}</span>
            <small>{entry.arrangement}</small>
          </div>
          <div className="experience-what">
            <h3>
              {entry.role} <em>· {entry.company}</em>
            </h3>
            <p>{entry.scope}</p>
            {entry.steps && entry.steps.length > 0 && (
              <p className="experience-steps">
                <span className="experience-steps-label">
                  {progressionLabel}
                </span>
                {entry.steps.map((step, index) => (
                  <span key={step.label}>
                    {index > 0 && <i aria-hidden="true">→</i>}
                    {step.label} <small>{step.date}</small>
                  </span>
                ))}
              </p>
            )}
            {entry.stack && entry.stack.length > 0 && (
              <div className="tag-list">
                {entry.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
