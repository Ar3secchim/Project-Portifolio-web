'use client';

import { useEffect, useState } from 'react';

export function ScrollEffects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${event.clientY}px`,
      );
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}
