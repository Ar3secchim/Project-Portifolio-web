import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { getAllPosts } from '@/lib/notion/posts';
import { getDictionary, isLocale } from '@/lib/portfolio/dictionaries';

interface BlogPageProps {
  params: { locale: string };
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: getDictionary(params.locale).writing.all };
}

export default async function BlogPage({ params }: BlogPageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale);
  const posts = await getAllPosts();
  return (
    <main id="main-content" className="page-shell">
      <SectionHeading
        eyebrow={dictionary.writing.eyebrow}
        title={dictionary.writing.title}
        description={dictionary.writing.description}
      />
      <div className="blog-index">
        {posts.length ? (
          posts.map((post) => (
            <article key={post.id}>
              <div>
                <span>{post.publishAt}</span>
                <span>
                  {post.time} {dictionary.writing.minutes}
                </span>
                {params.locale === 'en' ? (
                  <span>{dictionary.writing.originalLanguage}</span>
                ) : null}
              </div>
              <h2>
                <Link href={`/${params.locale}/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <div className="tag-list">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                className="arrow-link"
                href={`/${params.locale}/blog/${post.slug}`}
              >
                {dictionary.writing.read} ↗
              </Link>
            </article>
          ))
        ) : (
          <p className="empty-state">{dictionary.writing.empty}</p>
        )}
      </div>
    </main>
  );
}
