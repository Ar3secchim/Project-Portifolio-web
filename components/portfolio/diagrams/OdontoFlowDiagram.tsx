import type { Locale } from '@/lib/portfolio/types';

import { Diagram, DiagramArrow, DiagramBox } from './primitives';

const labels = {
  pt: {
    title: 'Arquitetura do OdontoFlow',
    caption:
      'O app e a API seguem caminhos separados. Toda integração externa passa por uma interface interna, e a infraestrutura nasce do Terraform.',
    browserTitle: 'Navegador',
    browser: ['equipe da clínica'],
    worker: ['assina cada GET (SigV4)'],
    apiGateway: ['AWS · HTTP API'],
    s3Title: 'S3 privado',
    s3: ['SPA, sem acesso público'],
    lambda: ['JWT · Zod · erros'],
    cognito: ['login e emissão do JWT'],
    services: ['filtram pela organização'],
    postgres: ['Neon · via Prisma'],
    gateways: ['Stripe · S3 · SES', 'WhatsApp: 1 por clínica'],
    terraform: ['Cognito, S3, SES, budget', 'dev · hom · prod'],
    stripe: ['webhook idempotente', 'eventId único'],
  },
  en: {
    title: 'OdontoFlow architecture',
    caption:
      'The app and the API take separate paths. Every external integration goes through an internal interface, and the infrastructure comes from Terraform.',
    browserTitle: 'Browser',
    browser: ['clinic staff'],
    worker: ['signs every GET (SigV4)'],
    apiGateway: ['AWS · HTTP API'],
    s3Title: 'Private S3',
    s3: ['SPA, no public access'],
    lambda: ['JWT · Zod · errors'],
    cognito: ['sign-in and JWT issuing'],
    services: ['scoped to the organization'],
    postgres: ['Neon · through Prisma'],
    gateways: ['Stripe · S3 · SES', 'WhatsApp: one per clinic'],
    terraform: ['Cognito, S3, SES, budget', 'dev · staging · prod'],
    stripe: ['idempotent webhook', 'unique eventId'],
  },
} as const;

const markerId = 'odontoflow-arrow';

export function OdontoFlowDiagram({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <Diagram
      title={t.title}
      caption={t.caption}
      width={400}
      height={486}
      markerId={markerId}
    >
      <DiagramBox
        x={120}
        y={12}
        width={160}
        height={44}
        title={t.browserTitle}
        detail={t.browser}
        tone="outside"
      />

      <DiagramBox
        x={20}
        y={92}
        width={165}
        height={48}
        title="Cloudflare Worker"
        detail={t.worker}
      />
      <DiagramBox
        x={215}
        y={92}
        width={165}
        height={48}
        title="API Gateway"
        detail={t.apiGateway}
      />

      <DiagramBox
        x={20}
        y={172}
        width={165}
        height={48}
        title={t.s3Title}
        detail={t.s3}
      />
      <DiagramBox
        x={215}
        y={172}
        width={165}
        height={48}
        title="Lambda + Middy"
        detail={t.lambda}
        tone="accent"
      />

      <DiagramBox
        x={20}
        y={252}
        width={165}
        height={48}
        title="Cognito"
        detail={t.cognito}
      />
      <DiagramBox
        x={215}
        y={252}
        width={165}
        height={48}
        title="Services"
        detail={t.services}
        tone="accent"
      />

      <DiagramBox
        x={20}
        y={332}
        width={165}
        height={56}
        title="PostgreSQL"
        detail={t.postgres}
      />
      <DiagramBox
        x={215}
        y={332}
        width={165}
        height={62}
        title="Gateways"
        detail={t.gateways}
      />

      <DiagramBox
        x={20}
        y={418}
        width={165}
        height={62}
        title="Terraform"
        detail={t.terraform}
        tone="outside"
      />
      <DiagramBox
        x={215}
        y={418}
        width={165}
        height={62}
        title="Stripe"
        detail={t.stripe}
        tone="outside"
      />

      <DiagramArrow
        points={[
          [170, 56],
          [102, 92],
        ]}
        markerId={markerId}
        label="app"
        labelAt={[112, 74]}
      />
      <DiagramArrow
        points={[
          [230, 56],
          [297, 92],
        ]}
        markerId={markerId}
        label="API"
        labelAt={[268, 74]}
      />
      <DiagramArrow
        points={[
          [102, 140],
          [102, 172],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 140],
          [297, 172],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [185, 266],
          [215, 206],
        ]}
        markerId={markerId}
        dashed
      />
      <DiagramArrow
        points={[
          [297, 220],
          [297, 252],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 300],
          [297, 332],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [240, 300],
          [240, 316],
          [102, 316],
          [102, 332],
        ]}
        markerId={markerId}
      />
      <DiagramArrow
        points={[
          [297, 394],
          [297, 418],
        ]}
        markerId={markerId}
      />
    </Diagram>
  );
}
