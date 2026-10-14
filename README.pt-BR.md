# renara.dev

[Read in English](README.md) · **No ar:** [www.renara.dev](https://www.renara.dev)

Meu site pessoal: estudos de caso escritos como problema → decisões →
trade-offs, uma visão ao vivo (e sanitizada) do meu homelab Kubernetes e um
mapa de conhecimento que liga cada tecnologia ao case onde ela foi usada de
verdade. Disponível em português e inglês.

## O que tem aqui

- **Rotas bilíngues.** Toda página vive em `/[locale]` (`pt` ou `en`). O
  middleware escolhe o idioma pelo cookie ou pelo `Accept-Language` e
  redireciona `/`.
- **Cases em MDX com metadados tipados.** Cada case exporta um objeto `meta`
  (problema, decisões com seus trade-offs, resultados, tecnologias) e um texto.
  Páginas, cards e o mapa de conhecimento leem dessa mesma fonte.
- **Mapa de conhecimento derivado do conteúdo.** O grafo de cases e
  tecnologias é montado a partir dos metadados no build, então nunca diverge
  do que os cases dizem.
- **Status do homelab ao vivo.** A home lê um snapshot público produzido pelo
  [api-homelab-public](https://github.com/Ar3secchim/api-homelab-public),
  valida o formato e rejeita dados expirados.
- **Blog no Notion**, convertido para Markdown e cacheado com
  `unstable_cache`.
- **Acessibilidade e testes.** Vitest e Testing Library para invariantes de
  conteúdo e interações; Playwright com axe para troca de idioma, navegação
  por teclado e checagem automática de acessibilidade em celular, tablet e
  desktop.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · MDX · CSS com design tokens
(temas escuro e claro) · Notion API · Vitest · Playwright · axe-core · Vercel

## Estrutura

```text
app/[locale]/        páginas: home, cases, knowledge, blog
components/portfolio/ componentes (cards de case, mapa do homelab, demo financeira, ...)
content/{pt,en}/     estudos de caso em MDX
lib/portfolio/       loaders de conteúdo, dicionários, dados do site, parser do snapshot
lib/notion/          integração do blog
styles/              tokens, estilos base, de página e de componente
tests/unit/          Vitest
tests/e2e/           Playwright + axe
```

## Rodando localmente

Requer Node.js 24 (veja `engines` no `package.json`).

```bash
npm install
npm run dev
```

O site funciona sem variáveis de ambiente. As opcionais:

| Variável                  | Para quê                                                 |
| ------------------------- | -------------------------------------------------------- |
| `NOTION_API_KEY`          | Habilita o blog. Sem ela, o blog mostra um estado vazio. |
| `NOTION_BLOG_DATABASE_ID` | Troca o banco do Notion padrão.                          |
| `NEXT_PUBLIC_SITE_URL`    | URL canônica para metadados e sitemap.                   |

## Scripts

| Comando              | O que faz                                                                           |
| -------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento na porta 3000                                           |
| `npm run build`      | Build de produção                                                                   |
| `npm run typecheck`  | `tsc --noEmit`                                                                      |
| `npm run lint`       | ESLint                                                                              |
| `npm run lint:check` | Checagem do Prettier                                                                |
| `npm test`           | Testes unitários (Vitest)                                                           |
| `npm run test:e2e`   | Testes end-to-end e de acessibilidade (precisa de `npx playwright install` uma vez) |

## Licença

[MIT](LICENSE)
