import type { Locale } from './types';

const dictionaries = {
  pt: {
    localeName: 'Português',
    skip: 'Pular para o conteúdo',
    nav: {
      home: 'Início',
      homelab: 'Homelab',
      cases: 'Projetos',
      stack: 'Stack',
      knowledge: 'Knowledge',
      writing: 'Blog',
      contact: 'Contato',
    },
    theme: {
      label: 'Tema',
      options: { system: 'Auto', light: 'Claro', dark: 'Escuro' },
    },
    hero: {
      eyebrow: 'ENGENHARIA DE SOFTWARE / SISTEMAS',
      titleLines: ['Engenheira', 'de software', 'que entende', 'sistemas.'],
      description:
        'Construo backends resilientes, pipelines de dados e infraestrutura pensando no caminho completo: contexto, restrições, operação e quem vai manter a solução depois.',
      primaryCta: 'Explorar cases',
      secondaryCta: 'Conhecer meu raciocínio',
      status: 'PORTFÓLIO / SISTEMAS DOCUMENTADOS',
      scrollCue: 'SCROLL PARA EXPLORAR',
    },
    facts: [
      ['LOCALIZAÇÃO', 'Belém, PA'],
      ['FUNÇÃO ATUAL', 'Engenheira de Software'],
      ['FOCO', 'Backend · Dados · Plataforma'],
      ['HOMELAB', 'Topologia documentada'],
    ],
    /** Números ilustrativos do homelab — não são telemetria ao vivo. */
    liveStatus: 'LIVE STATUS',
    snapshotUnavailable: 'SNAPSHOT INDISPONÍVEL',
    statusStrip: [
      ['k3s cluster', '3 nodes / 11 pods'],
      ['plan-finance', 'modelo rodando'],
      ['Gitea CI', '2 pipelines'],
      ['Proxmox VE', '8 VMs / 6 LXC'],
      ['Jellyfin', 'idle'],
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
      eyebrow: 'INFRAESTRUTURA / HOMELAB',
      title: 'Um datacenter',
      titleAccent: 'em miniatura',
      description:
        'Meu ambiente de experimentação. Tudo que roda em produção no trabalho, eu entendo porque errei aqui primeiro.',
      panelTitle: 'NETWORK TOPOLOGY',
      servicesLabel: 'SERVIÇOS',
      hint: 'Selecione um nó para entender sua responsabilidade.',
      disclosure: 'Topologia conceitual e sanitizada. Métricas ilustrativas.',
      stats: [
        ['CPU AVG', '14%', '8 cores disponíveis'],
        ['RAM USADA', '18.4 GB', 'de 32 GB total'],
        ['STORAGE', '7.2 TB', 'de 12 TB ZFS'],
        ['SERVIÇOS', '23', 'em k3s + LXC'],
      ],
    },
    finance: {
      eyebrow: 'PROJETO / PLAN-FINANCE',
      title: 'Dashboard financeiro',
      titleAccent: 'com LLM',
      descriptionLead:
        'Sistema pessoal de gestão financeira com bot no WhatsApp que envia análises de gastos por categoria, alerta estouros de orçamento e responde perguntas em linguagem natural. Dados',
      descriptionFlag: 'fictícios',
      descriptionTail: 'para demonstração.',
      demo: 'DEMONSTRAÇÃO',
      replay: 'replay',
      period: 'MAR — SET 2024 · DADOS FICTÍCIOS',
      tabs: {
        flow: 'Fluxo',
        categories: 'Categorias',
        agent: 'Agente',
      },
      metrics: [
        ['RECEITA SET', 'R$ 12.400', '+26%', 'up'],
        ['GASTOS SET', 'R$ 6.200', '+12%', 'down'],
        ['SALDO SET', 'R$ 6.200', '+44%', 'up'],
        ['TAXA POUPANÇA', '50%', '↑ tendência', 'neutral'],
      ],
      series: { income: 'Receita', expense: 'Gastos' },
      categoryLabels: {
        housing: 'Moradia',
        infra: 'Infra',
        food: 'Alimentação',
        studies: 'Estudos',
        leisure: 'Lazer',
        health: 'Saúde',
      },
      insightLabel: 'INSIGHT DO MODELO',
      insight:
        '"Setembro foi seu melhor mês em 7 meses. A taxa de poupança subiu 8pp vs agosto, impulsionada por queda em gastos com lazer. Infra como percentual da receita caiu para 3.4% — abaixo da meta de 4%."',
      chat: {
        status: 'online',
        breakdownTime: '20:07',
        summary:
          'Julho fechou com R$ 6.980 de renda e R$ 2.862 em gastos, deixando R$ 4.117 livres.',
        alertLead: 'Mas',
        alertCount: '5 categorias estouraram',
        alertTail:
          ': Compras (924 vs. orç. 500), Educação (494 vs. 300), Lazer (203 vs. 150), e mais duas em atenção.',
        inputPlaceholder: 'Mensagem',
      },
      howLabel: 'COMO FUNCIONA',
      how: [
        'Você manda uma mensagem para o Porquinho no WhatsApp',
        'O agente consulta o banco e filtra pelo período ou categoria',
        'Claude gera a análise textual + gráfico de rosca por categoria',
        'Resposta chega em segundos com insights acionáveis',
      ],
      examples: [
        [
          '"Quanto gastei com alimentação esse mês?"',
          'R$ 206,43 — 7,2% da receita. Dentro do orçamento (250).',
        ],
        [
          '"Quais categorias estouraram em julho?"',
          '5 categorias: Compras, Educação, Lazer, Hobbies e Saúde.',
        ],
        [
          '"Fechar resumo do mês"',
          'Envia gráfico de rosca + texto analítico no chat.',
        ],
      ],
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
    stack: {
      eyebrow: 'INVENTÁRIO / STACK',
      title: 'Ferramentas que uso para construir e operar sistemas.',
      description:
        'A lista ganha contexto nos cases: cada tecnologia aparece ligada a um problema, uma decisão ou um aprendizado.',
      groups: {
        languages: 'Linguagens',
        backend: 'Backend',
        platform: 'Infra & Cloud',
        observability: 'Observabilidade',
        data: 'Dados',
        ai: 'IA & LLMs',
      },
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
      titleLead: 'Vamos',
      titleAccent: 'conversar',
      titleSuffix: '?',
      description:
        'Estou sempre aberta a trocar ideias sobre backend, dados, plataforma e problemas interessantes de engenharia.',
    },
    footer: 'Projetado e desenvolvido por Renara Secchim.',
  },
  en: {
    localeName: 'English',
    skip: 'Skip to content',
    nav: {
      home: 'Home',
      homelab: 'Homelab',
      cases: 'Cases',
      stack: 'Stack',
      knowledge: 'Knowledge',
      writing: 'Writing',
      contact: 'Contact',
    },
    theme: {
      label: 'Theme',
      options: { system: 'Auto', light: 'Light', dark: 'Dark' },
    },
    hero: {
      eyebrow: 'SOFTWARE ENGINEERING / SYSTEMS',
      titleLines: ['Software', 'engineer', 'who understands', 'systems.'],
      description:
        'I build resilient backends, data pipelines, and infrastructure while considering the whole path: context, constraints, operations, and the people who will maintain it later.',
      primaryCta: 'Explore cases',
      secondaryCta: 'See how I think',
      status: 'PORTFOLIO / DOCUMENTED SYSTEMS',
      scrollCue: 'SCROLL TO EXPLORE',
    },
    facts: [
      ['LOCATION', 'Belém, Brazil'],
      ['CURRENT ROLE', 'Software Engineer'],
      ['FOCUS', 'Backend · Data · Platform'],
      ['HOMELAB', 'Documented topology'],
    ],
    /** Illustrative homelab numbers — not live telemetry. */
    liveStatus: 'LIVE STATUS',
    snapshotUnavailable: 'SNAPSHOT UNAVAILABLE',
    statusStrip: [
      ['k3s cluster', '3 nodes / 11 pods'],
      ['plan-finance', 'model running'],
      ['Gitea CI', '2 pipelines'],
      ['Proxmox VE', '8 VMs / 6 LXC'],
      ['Jellyfin', 'idle'],
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
      eyebrow: 'INFRASTRUCTURE / HOMELAB',
      title: 'A datacenter',
      titleAccent: 'in miniature',
      description:
        'My experimentation environment. Everything that runs in production at work, I understand because I broke it here first.',
      panelTitle: 'NETWORK TOPOLOGY',
      servicesLabel: 'SERVICES',
      hint: 'Select a node to understand its responsibility.',
      disclosure: 'Conceptual, sanitized topology. Illustrative metrics.',
      stats: [
        ['CPU AVG', '14%', '8 cores available'],
        ['RAM USED', '18.4 GB', 'of 32 GB total'],
        ['STORAGE', '7.2 TB', 'of 12 TB ZFS'],
        ['SERVICES', '23', 'on k3s + LXC'],
      ],
    },
    finance: {
      eyebrow: 'PROJECT / PLAN-FINANCE',
      title: 'Financial dashboard',
      titleAccent: 'with an LLM',
      descriptionLead:
        'A personal finance system with a WhatsApp bot that sends spending analyses by category, flags budget overruns, and answers questions in natural language. Data is',
      descriptionFlag: 'fictional',
      descriptionTail: 'for demonstration.',
      demo: 'DEMONSTRATION',
      replay: 'replay',
      period: 'MAR — SEP 2024 · FICTIONAL DATA',
      tabs: {
        flow: 'Flow',
        categories: 'Categories',
        agent: 'Agent',
      },
      metrics: [
        ['SEP INCOME', 'R$ 12,400', '+26%', 'up'],
        ['SEP SPENDING', 'R$ 6,200', '+12%', 'down'],
        ['SEP BALANCE', 'R$ 6,200', '+44%', 'up'],
        ['SAVINGS RATE', '50%', '↑ trending', 'neutral'],
      ],
      series: { income: 'Income', expense: 'Spending' },
      categoryLabels: {
        housing: 'Housing',
        infra: 'Infra',
        food: 'Food',
        studies: 'Studies',
        leisure: 'Leisure',
        health: 'Health',
      },
      insightLabel: 'MODEL INSIGHT',
      insight:
        '"September was your best month in 7. The savings rate rose 8pp versus August, driven by lower leisure spending. Infra as a share of income fell to 3.4% — below the 4% target."',
      chat: {
        status: 'online',
        breakdownTime: '20:07',
        summary:
          'July closed with R$ 6,980 in income and R$ 2,862 in spending, leaving R$ 4,117 free.',
        alertLead: 'But',
        alertCount: '5 categories went over',
        alertTail:
          ': Shopping (924 vs. budget 500), Education (494 vs. 300), Leisure (203 vs. 150), plus two more to watch.',
        inputPlaceholder: 'Message',
      },
      howLabel: 'HOW IT WORKS',
      how: [
        'You send a message to Porquinho on WhatsApp',
        'The agent queries the database and filters by period or category',
        'Claude generates the written analysis plus a donut chart by category',
        'The answer arrives in seconds with actionable insights',
      ],
      examples: [
        [
          '"How much did I spend on food this month?"',
          'R$ 206.43 — 7.2% of income. Within budget (250).',
        ],
        [
          '"Which categories went over in July?"',
          '5 categories: Shopping, Education, Leisure, Hobbies and Health.',
        ],
        [
          '"Close out the month"',
          'Sends a donut chart plus written analysis in the chat.',
        ],
      ],
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
    stack: {
      eyebrow: 'INVENTORY / STACK',
      title: 'Tools I use to build and operate systems.',
      description:
        'The list gains context in the cases: every technology is connected to a problem, a decision, or a lesson.',
      groups: {
        languages: 'Languages',
        backend: 'Backend',
        platform: 'Infra & Cloud',
        observability: 'Observability',
        data: 'Data',
        ai: 'AI & LLMs',
      },
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
      titleLead: 'Let’s',
      titleAccent: 'talk',
      titleSuffix: '?',
      description:
        'I am always open to exchanging ideas about backend, data, platform, and interesting engineering problems.',
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
