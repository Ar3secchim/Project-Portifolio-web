import type { Locale } from '@/lib/portfolio/types';

import {
  Diagram,
  DiagramArrow,
  DiagramBand,
  DiagramBoundary,
  DiagramBox,
} from './primitives';

const labels = {
  pt: {
    title: 'Arquitetura do PlanFinance',
    caption:
      'Tudo roda no homelab, exceto o modelo. O build falha se uma camada importar outra que ela não pode conhecer.',
    whatsapp: ['você, no celular'],
    browserTitle: 'Navegador',
    browser: ['dashboard web'],
    homelab: 'HOMELAB',
    evolution: ['ponte com o WhatsApp'],
    tunnel: ['de dentro para fora'],
    frontend: ['React + nginx'],
    backend: 'Backend · Express',
    presentation: 'Apresentação · controllers HTTP e webhook',
    application: 'Aplicação · loop do agente e casos de uso',
    domain: 'Domínio · regras puras, sem dependências',
    infrastructure: 'Infra · Prisma, SDK Claude, gráficos, PDF',
    postgres: ['lançamentos e orçamentos'],
    claude: ['Anthropic · fora de casa'],
    webhook: ['webhook', '⇄ resposta'],
  },
  en: {
    title: 'PlanFinance architecture',
    caption:
      'Everything runs in the homelab except the model. The build fails if a layer imports one it must not know about.',
    whatsapp: ['you, on your phone'],
    browserTitle: 'Browser',
    browser: ['web dashboard'],
    homelab: 'HOMELAB',
    evolution: ['bridge to WhatsApp'],
    tunnel: ['inside-out connection'],
    frontend: ['React + nginx'],
    backend: 'Backend · Express',
    presentation: 'Presentation · HTTP controllers and webhook',
    application: 'Application · agent loop and use cases',
    domain: 'Domain · pure rules, no dependencies',
    infrastructure: 'Infra · Prisma, Claude SDK, charts, PDF',
    postgres: ['transactions and budgets'],
    claude: ['Anthropic · off-site'],
    webhook: ['webhook', '⇄ reply'],
  },
} as const;

const markerId = 'plan-finance-arrow';

export function PlanFinanceDiagram({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <Diagram
      title={t.title}
      caption={t.caption}
      width={400}
      height={546}
      markerId={markerId}
    >
      <DiagramBoundary
        x={10}
        y={76}
        width={380}
        height={394}
        label={t.homelab}
      />

      <DiagramBox
        x={20}
        y={12}
        width={165}
        height={44}
        title="WhatsApp"
        detail={t.whatsapp}
        tone="outside"
      />
      <DiagramBox
        x={215}
        y={12}
        width={165}
        height={44}
        title={t.browserTitle}
        detail={t.browser}
        tone="outside"
      />

      <DiagramBox
        x={20}
        y={100}
        width={165}
        height={44}
        title="Evolution API"
        detail={t.evolution}
      />
      <DiagramBox
        x={215}
        y={100}
        width={165}
        height={44}
        title="Cloudflare Tunnel"
        detail={t.tunnel}
      />
      <DiagramBox
        x={215}
        y={168}
        width={165}
        height={44}
        title="Frontend"
        detail={t.frontend}
      />

      <DiagramBox x={20} y={236} width={360} height={156} title={t.backend} />
      <DiagramBand x={32} y={268} width={336} label={t.presentation} />
      <DiagramBand x={32} y={297} width={336} label={t.application} accent />
      <DiagramBand x={32} y={326} width={336} label={t.domain} />
      <DiagramBand x={32} y={355} width={336} label={t.infrastructure} />

      <DiagramBox
        x={20}
        y={412}
        width={165}
        height={44}
        title="PostgreSQL"
        detail={t.postgres}
      />
      <DiagramBox
        x={215}
        y={490}
        width={165}
        height={44}
        title="Claude API"
        detail={t.claude}
        tone="outside"
      />

      <DiagramArrow
        points={[
          [102, 56],
          [102, 100],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [102, 144],
          [102, 236],
        ]}
        markerId={markerId}
        bothEnds
        label={t.webhook}
        labelAt={[110, 186]}
      />
      <DiagramArrow
        points={[
          [297, 56],
          [297, 100],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 144],
          [297, 168],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 212],
          [297, 236],
        ]}
        markerId={markerId}
        label="/api"
        labelAt={[305, 228]}
      />
      <DiagramArrow
        points={[
          [102, 392],
          [102, 412],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 392],
          [297, 490],
        ]}
        markerId={markerId}
        label="tool use"
        labelAt={[305, 444]}
      />
    </Diagram>
  );
}
