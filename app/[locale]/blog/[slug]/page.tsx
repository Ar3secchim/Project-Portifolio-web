import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { getAllPosts, getPost } from '@/lib/notion/posts';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';

interface BlogPostPageProps {
  params: { locale: string; slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return (['pt', 'en'] as const).flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  return post ? { title: post.title } : {};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isLocale(params.locale)) notFound();
  const post = await getPost(params.slug);
  if (!post) notFound();
  const dictionary = getDictionary(params.locale).writing;
  return (
    <main id="main-content" className="blog-post page-shell">
      <Link className="back-link" href={`/${params.locale}/blog`}>
        ← {dictionary.back}
      </Link>
      <header>
        <p className="eyebrow">{dictionary.eyebrow}</p>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.publishAt}</span>
          <span>
            {post.time} {dictionary.minutes}
          </span>
          {params.locale === 'en' ? (
            <span>{dictionary.originalLanguage}</span>
          ) : null}
        </div>
      </header>
      <article className="case-prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
