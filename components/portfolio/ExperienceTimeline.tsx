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
      {entries.map((entry) => {
        const modifiers = [
          entry.current ? 'is-current' : '',
          entry.partTime ? 'is-part-time' : '',
        ].join(' ');

        return (
          <li
            className={`experience-item ${modifiers}`}
            key={`${entry.company}-${entry.period}`}
          >
            <span className="experience-marker" aria-hidden="true" />
            <div className="experience-when">
              <span>{entry.period}</span>
              <small>{entry.arrangement}</small>
              {/* Promoções viram pontos menores na trilha, a mais recente no
                  topo, seguindo a mesma ordem da linha do tempo. */}
              {entry.steps && entry.steps.length > 0 && (
                <>
                  <p className="experience-steps-label">{progressionLabel}</p>
                  <ol className="experience-steps">
                    {[...entry.steps].reverse().map((step) => (
                      <li key={step.label}>
                        {step.label} <small>{step.date}</small>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
            <div className="experience-what">
              <h3>
                {entry.role} <em>· {entry.company}</em>
              </h3>
              <p>{entry.scope}</p>
              {entry.stack && entry.stack.length > 0 && (
                <div className="tag-list">
                  {entry.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
