import type { Locale } from './types';

const dictionaries = {
  pt: {
    localeName: 'Português',
    skip: 'Pular para o conteúdo',
    nav: {
      home: 'Início',
      cases: 'Cases',
      knowledge: 'Knowledge',
      writing: 'Blog',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'ENGENHARIA DE SOFTWARE / SISTEMAS',
      titleStart: 'Eu transformo',
      titleAccent: 'problemas complexos',
      titleEnd: 'em sistemas compreensíveis.',
      description:
        'Construo software pensando no caminho completo: contexto, restrições, operação e quem vai manter a solução depois.',
      primaryCta: 'Explorar cases',
      secondaryCta: 'Conhecer meu raciocínio',
      status: 'DISPONÍVEL PARA CONVERSAS TÉCNICAS',
    },
    facts: [
      ['BASE', 'Belém, PA'],
      ['ATUAÇÃO', 'Engenharia de Software'],
      ['FOCO', 'Backend · Dados · Plataforma'],
    ],
    about: {
      eyebrow: 'COMO EU PENSO',
      title: 'O código é só uma parte da solução.',
      body: 'Gosto de decompor sistemas, tornar decisões explícitas e testar ideias em ambientes que posso observar de ponta a ponta. Curiosidade e simplicidade orientam meu trabalho.',
      principles: [
        [
          '01',
          'Entender antes de abstrair',
          'Começo pelo problema, pelo fluxo real e pelas restrições — não pela ferramenta.',
        ],
        [
          '02',
          'Tornar trade-offs visíveis',
          'Uma boa decisão técnica explica também o custo e aquilo que ficou de fora.',
        ],
        [
          '03',
          'Aprender construindo',
          'Uso projetos próprios para experimentar, errar com segurança e consolidar conhecimento.',
        ],
        [
          '04',
          'Compartilhar o caminho',
          'Documentação e comunicação são parte da entrega, não tarefas posteriores.',
        ],
      ],
    },
    homelab: {
      eyebrow: 'SISTEMA / HOMELAB',
      title: 'Um laboratório para aprender sistemas de verdade.',
      description:
        'Um ambiente pessoal para explorar rede, virtualização, orquestração, observabilidade e automação. A visualização descreve responsabilidades — não expõe endereços ou dados internos.',
      hint: 'Selecione um nó para entender sua responsabilidade.',
      disclosure: 'Topologia conceitual e sanitizada.',
    },
    finance: {
      eyebrow: 'SISTEMA / PLAN-FINANCE',
      title: 'Finanças explicadas como conversa, não planilha.',
      description:
        'Uma experiência de gestão financeira que organiza transações e usa um agente para transformar perguntas em consultas e respostas compreensíveis.',
      demo: 'DEMONSTRAÇÃO',
      replay: 'Repetir conversa',
      userMessage: 'Onde meus gastos mais cresceram este mês?',
      agentMessage:
        'No cenário simulado, Compras e Lazer concentram o aumento. Juntas, elas representam R$ 620 acima do mês anterior. Eu começaria revisando compras recorrentes.',
    },
    cases: {
      eyebrow: 'ESTUDOS DE CASO',
      title: 'Decisões, contexto e aprendizados.',
      description:
        'Quatro recortes de como eu investigo problemas e desenho soluções. Cases profissionais usam contexto e resultados anonimizados.',
      all: 'Ver todos os cases',
      read: 'Abrir case',
      personal: 'Projeto pessoal',
      professional: 'Case anonimizado',
      pageTitle: 'Estudos de caso',
      pageDescription:
        'Sistemas observados pelo problema, pelas decisões e pelos trade-offs.',
      back: 'Voltar aos cases',
      problem: 'Problema',
      decisions: 'Decisões centrais',
      outcomes: 'Resultados e aprendizados',
      stack: 'Tecnologias e conceitos',
      related: 'Conhecimentos relacionados',
    },
    knowledge: {
      eyebrow: 'MAPA DE CONHECIMENTO',
      title: 'Tecnologias conectadas a decisões reais.',
      description:
        'Selecione um case ou uma tecnologia para enxergar onde o conhecimento foi aplicado. A rede é derivada dos metadados dos próprios cases.',
      clear: 'Limpar filtro',
      all: 'Explorar mapa completo',
      case: 'Cases',
      technology: 'Tecnologias',
      selected: 'Conexões de',
      instructions: 'Use Tab para navegar pelos nós e Enter para filtrar.',
    },
    writing: {
      eyebrow: 'ESCRITA / BLOG',
      title: 'O que estou organizando em palavras.',
      description:
        'Notas sobre engenharia, aprendizado e as perguntas que aparecem enquanto construo.',
      empty:
        'Os posts ficam indisponíveis quando a integração editorial não está configurada.',
      read: 'Ler artigo',
      all: 'Ver blog',
      originalLanguage: 'Conteúdo em português',
      minutes: 'min de leitura',
      back: 'Voltar ao blog',
    },
    contact: {
      eyebrow: 'CONTATO',
      title: 'Vamos conversar sobre sistemas?',
      description:
        'Estou sempre aberta a trocar ideias sobre backend, dados, plataforma e problemas interessantes de engenharia.',
      email: 'Enviar e-mail',
    },
    footer: 'Projetado e desenvolvido por Renara Secchim.',
  },
  en: {
    localeName: 'English',
    skip: 'Skip to content',
    nav: {
      home: 'Home',
      cases: 'Cases',
      knowledge: 'Knowledge',
      writing: 'Writing',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'SOFTWARE ENGINEERING / SYSTEMS',
      titleStart: 'I turn',
      titleAccent: 'complex problems',
      titleEnd: 'into understandable systems.',
      description:
        'I build software while considering the whole path: context, constraints, operations, and the people who will maintain it later.',
      primaryCta: 'Explore cases',
      secondaryCta: 'See how I think',
      status: 'OPEN TO TECHNICAL CONVERSATIONS',
    },
    facts: [
      ['BASE', 'Belém, Brazil'],
      ['ROLE', 'Software Engineering'],
      ['FOCUS', 'Backend · Data · Platform'],
    ],
    about: {
      eyebrow: 'HOW I THINK',
      title: 'Code is only one part of the solution.',
      body: 'I enjoy decomposing systems, making decisions explicit, and testing ideas in environments I can observe end to end. Curiosity and simplicity guide my work.',
      principles: [
        [
          '01',
          'Understand before abstracting',
          'I start with the problem, the real flow, and its constraints — not the tool.',
        ],
        [
          '02',
          'Make trade-offs visible',
          'A sound technical decision also explains its cost and what was left out.',
        ],
        [
          '03',
          'Learn by building',
          'I use personal projects to experiment, fail safely, and consolidate knowledge.',
        ],
        [
          '04',
          'Share the path',
          'Documentation and communication are part of delivery, not follow-up chores.',
        ],
      ],
    },
    homelab: {
      eyebrow: 'SYSTEM / HOMELAB',
      title: 'A lab for learning real systems.',
      description:
        'A personal environment for exploring networking, virtualization, orchestration, observability, and automation. The visualization describes responsibilities without exposing internal addresses or data.',
      hint: 'Select a node to understand its responsibility.',
      disclosure: 'Conceptual, sanitized topology.',
    },
    finance: {
      eyebrow: 'SYSTEM / PLAN-FINANCE',
      title: 'Finances explained as a conversation, not a spreadsheet.',
      description:
        'A personal finance experience that organizes transactions and uses an agent to turn questions into queries and understandable answers.',
      demo: 'DEMONSTRATION',
      replay: 'Replay conversation',
      userMessage: 'Where did my spending grow the most this month?',
      agentMessage:
        'In this simulated scenario, Shopping and Leisure account for most of the increase. Together, they are R$ 620 above last month. I would start by reviewing recurring purchases.',
    },
    cases: {
      eyebrow: 'CASE STUDIES',
      title: 'Decisions, context, and lessons.',
      description:
        'Four snapshots of how I investigate problems and design solutions. Professional cases use anonymized context and outcomes.',
      all: 'View all cases',
      read: 'Open case',
      personal: 'Personal project',
      professional: 'Anonymized case',
      pageTitle: 'Case studies',
      pageDescription:
        'Systems examined through their problems, decisions, and trade-offs.',
      back: 'Back to cases',
      problem: 'Problem',
      decisions: 'Core decisions',
      outcomes: 'Outcomes and lessons',
      stack: 'Technologies and concepts',
      related: 'Related knowledge',
    },
    knowledge: {
      eyebrow: 'KNOWLEDGE MAP',
      title: 'Technologies connected to real decisions.',
      description:
        'Select a case or technology to see where knowledge was applied. The network is derived directly from the case metadata.',
      clear: 'Clear filter',
      all: 'Explore the full map',
      case: 'Cases',
      technology: 'Technologies',
      selected: 'Connections for',
      instructions: 'Use Tab to navigate nodes and Enter to filter.',
    },
    writing: {
      eyebrow: 'WRITING / BLOG',
      title: 'What I am organizing into words.',
      description:
        'Notes about engineering, learning, and the questions that emerge while building.',
      empty:
        'Posts are unavailable when the editorial integration is not configured.',
      read: 'Read article',
      all: 'View blog',
      originalLanguage: 'Content in Portuguese',
      minutes: 'min read',
      back: 'Back to blog',
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Let’s talk about systems?',
      description:
        'I am always open to exchanging ideas about backend, data, platform, and interesting engineering problems.',
      email: 'Send an email',
    },
    footer: 'Designed and developed by Renara Secchim.',
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function isLocale(value: string): value is Locale {
  return value === 'pt' || value === 'en';
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
