'use client';

import { useEffect, useRef, useState } from 'react';

import type { CaseVideo as CaseVideoData } from '@/lib/portfolio/types';

interface CaseVideoProps {
  video: CaseVideoData;
}

/**
 * Vídeo mudo em loop com legendas sobrepostas pelo próprio site, para que o
 * mesmo arquivo sirva PT e EN. Com "reduzir movimento", não toca sozinho.
 */
export function CaseVideo({ video }: CaseVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [caption, setCaption] = useState(video.captions[0]?.text ?? '');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      setReducedMotion(query.matches);
      const element = ref.current;
      if (!element) return;
      if (query.matches) {
        element.pause();
      } else {
        element.play().catch(() => {});
      }
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  const onTimeUpdate = () => {
    const time = ref.current?.currentTime ?? 0;
    const current = video.captions.find(
      (item) => time >= item.start && time < item.end,
    );
    setCaption(current?.text ?? '');
  };

  return (
    <figure className="case-video">
      <div className="case-video-frame">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reducedMotion}
          aria-label={video.label}
          onTimeUpdate={onTimeUpdate}
        />
        {caption && (
          <p className="case-video-caption" aria-hidden="true">
            {caption}
          </p>
        )}
      </div>
      <figcaption>
        <span>{video.label}</span>
        <ol>
          {video.captions.map((item) => (
            <li key={item.start}>{item.text}</li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
