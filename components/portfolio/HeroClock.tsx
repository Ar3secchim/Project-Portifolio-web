'use client';

import { useEffect, useState } from 'react';

import type { Locale } from '@/lib/portfolio/types';

interface HeroClockProps {
  locale: Locale;
}

export function HeroClock({ locale }: HeroClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  let formatted = '—';

  if (now) {
    const formatter = new Intl.DateTimeFormat(
      locale === 'pt' ? 'pt-BR' : 'en-US',
      {
        timeZone: 'America/Belem',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      },
    );
    formatted = formatter.format(now);
  }

  return (
    <time className="hero-clock" dateTime={now?.toISOString()}>
      {formatted} · BRT <span aria-hidden="true">_</span>
    </time>
  );
}
