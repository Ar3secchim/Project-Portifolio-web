import type { ExperienceEntry, Locale } from './types';

/**
 * Linha do tempo profissional, espelhando o LinkedIn. A descrição da FADESP é
 * genérica de propósito: não cita produto nem domínio para não ligar a
 * experiência real aos cenários ficcionalizados dos cases.
 */
const experienceByLocale: Record<Locale, ExperienceEntry[]> = {
  pt: [
    {
      company: 'FADESP',
      role: 'Engenheira de Software',
      period: 'jul/2025 — atual',
      arrangement: 'Tempo integral · híbrido · Belém',
      scope: 'Backend de sistemas tributários do estado.',
      steps: [
        { label: 'Júnior', date: 'jul/2025' },
        { label: 'Pleno I', date: 'fev/2026' },
      ],
      stack: ['Java 17', 'Spring Boot', 'Spring Batch', 'Angular', 'Oracle'],
    },
    {
      company: 'Máxima Segurança',
      role: 'Desenvolvedora de Software',
      period: 'jan/2025 — jul/2025',
      arrangement: 'Tempo integral · presencial · Belém',
      scope: 'Modernização de sistemas corporativos e migração de legado.',
    },
    {
      company: 'Fuvir',
      role: 'Desenvolvedora Web Jr e Gerente de Produto UI/UX',
      period: 'fev/2024 — set/2025',
      arrangement: 'Meio período · remoto',
      scope: 'Interfaces web responsivas e gestão de produto.',
    },
    {
      company: 'Mentor Cycle',
      role: 'Desenvolvedora Web Front-end',
      period: 'jun/2023 — mai/2024',
      arrangement: 'Meio período · remoto · open source',
      scope:
        'Colaboração em um projeto open source da comunidade de tecnologia.',
    },
  ],
  en: [
    {
      company: 'FADESP',
      role: 'Software Engineer',
      period: 'Jul 2025 — present',
      arrangement: 'Full-time · hybrid · Belém',
      scope: 'Backend for state tax systems.',
      steps: [
        { label: 'Junior', date: 'Jul 2025' },
        { label: 'Mid-level I', date: 'Feb 2026' },
      ],
      stack: ['Java 17', 'Spring Boot', 'Spring Batch', 'Angular', 'Oracle'],
    },
    {
      company: 'Máxima Segurança',
      role: 'Software Developer',
      period: 'Jan 2025 — Jul 2025',
      arrangement: 'Full-time · on-site · Belém',
      scope: 'Modernizing corporate systems and migrating legacy code.',
    },
    {
      company: 'Fuvir',
      role: 'Junior Web Developer and UI/UX Product Manager',
      period: 'Feb 2024 — Sep 2025',
      arrangement: 'Part-time · remote',
      scope: 'Responsive web interfaces and product management.',
    },
    {
      company: 'Mentor Cycle',
      role: 'Front-end Web Developer',
      period: 'Jun 2023 — May 2024',
      arrangement: 'Part-time · remote · open source',
      scope: 'Contributing to an open source project from the tech community.',
    },
  ],
};

export function getExperience(locale: Locale): ExperienceEntry[] {
  return experienceByLocale[locale];
}
