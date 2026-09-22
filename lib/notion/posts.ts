import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { unstable_cache } from 'next/cache';

import type { BlogPost, BlogPostSummary } from '@/lib/portfolio/types';

interface NotionText {
  plain_text?: string;
}

interface NotionSelect {
  name?: string;
}

interface NotionProperty {
  title?: NotionText[];
  rich_text?: NotionText[];
  multi_select?: NotionSelect[];
  date?: { start?: string } | null;
  number?: number | null;
  status?: { name?: string } | null;
}

interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

const databaseId =
  process.env.NOTION_BLOG_DATABASE_ID ?? '00ae27edf7d144ba9886c85b63c51c2e';

function createClient(): Client | null {
  return process.env.NOTION_API_KEY
    ? new Client({ auth: process.env.NOTION_API_KEY })
    : null;
}

function isNotionPage(value: unknown): value is NotionPage {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as { id?: unknown; properties?: unknown };
  return (
    typeof candidate.id === 'string' &&
    Boolean(candidate.properties) &&
    typeof candidate.properties === 'object'
  );
}

function firstPlainText(
  property: NotionProperty | undefined,
  key: 'title' | 'rich_text',
): string {
  return property?.[key]?.[0]?.plain_text ?? '';
}

function toSummary(page: NotionPage): BlogPostSummary | null {
  const slug = firstPlainText(page.properties.slug, 'rich_text');
  const title = firstPlainText(page.properties.title, 'title');
  if (!slug || !title) return null;

  return {
    id: page.id,
    slug,
    title,
    tags:
      page.properties.tags?.multi_select?.flatMap((tag) =>
        tag.name ? [tag.name] : [],
      ) ?? [],
    publishAt: page.properties.publishAt?.date?.start ?? '',
    time: page.properties.timeread?.number ?? 0,
    language: 'pt',
  };
}

async function queryAllPosts(): Promise<BlogPostSummary[]> {
  const notion = createClient();
  if (!notion) return [];

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: 'status', status: { equals: 'Done' } },
      sorts: [{ property: 'publishAt', direction: 'descending' }],
    });

    return (response.results as unknown[])
      .filter(isNotionPage)
      .flatMap((page) => {
        const post = toSummary(page);
        return post ? [post] : [];
      });
  } catch (error: unknown) {
    console.error(
      'Unable to load Notion posts.',
      error instanceof Error ? error.message : error,
    );
    return [];
  }
}

async function queryPost(slug: string): Promise<BlogPost | null> {
  const notion = createClient();
  if (!notion) return null;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: 'slug', rich_text: { equals: slug } },
      page_size: 1,
    });
    const page = (response.results as unknown[]).find(isNotionPage);
    if (!page) return null;
    const summary = toSummary(page);
    if (!summary) return null;

    const converter = new NotionToMarkdown({ notionClient: notion });
    const blocks = await converter.pageToMarkdown(page.id);
    const markdown = converter.toMarkdownString(blocks);
    return { ...summary, content: markdown.parent };
  } catch (error: unknown) {
    console.error(
      'Unable to load Notion post.',
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

export const getAllPosts = unstable_cache(
  queryAllPosts,
  ['portfolio-notion-posts'],
  { revalidate: 3600 },
);

export const getPost = unstable_cache(queryPost, ['portfolio-notion-post'], {
  revalidate: 3600,
});
