'use client';

import { useCallback, useEffect, useState } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';

const ORDER: ThemePreference[] = ['system', 'light', 'dark'];
export const THEME_STORAGE_KEY = 'theme';

/** Preferência -> tema aplicado. 'system' consulta o SO na hora. */
function resolve(preference: ThemePreference): 'light' | 'dark' {
  if (preference !== 'system') return preference;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function apply(preference: ThemePreference) {
  document.documentElement.dataset.theme = resolve(preference);
}

interface ThemeToggleProps {
  labels: Record<ThemePreference, string>;
  description: string;
}

export function ThemeToggle({ labels, description }: ThemeToggleProps) {
  // Começa em 'system' no servidor; o valor real chega no efeito abaixo, para
  // o HTML renderizado não divergir do cliente durante a hidratação.
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      setPreference(stored);
    }
    setMounted(true);
  }, []);

  // Em 'system', o tema precisa acompanhar o SO enquanto a aba está aberta.
  useEffect(() => {
    if (preference !== 'system') return undefined;
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => apply('system');
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [preference]);

  const cycle = useCallback(() => {
    setPreference((current) => {
      const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* modo privado: o tema vale só para esta sessão */
      }
      apply(next);
      return next;
    });
  }, []);

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={cycle}
      aria-label={`${description}: ${labels[preference]}`}
      suppressHydrationWarning
    >
      <span aria-hidden="true">
        {preference === 'system' ? '◐' : preference === 'light' ? '☀' : '☾'}
      </span>
      <span suppressHydrationWarning>
        {mounted ? labels[preference] : labels.system}
      </span>
    </button>
  );
}
