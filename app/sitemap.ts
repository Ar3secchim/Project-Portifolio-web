import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/notion/posts';
import { getCaseStudies } from '@/lib/portfolio/cases';
import { siteConfig } from '@/lib/portfolio/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const staticEntries = (['pt', 'en'] as const).flatMap((locale) => {
    const base = `${siteConfig.url}/${locale}`;
    return [
      { url: base, changeFrequency: 'monthly' as const, priority: 1 },
      {
        url: `${base}/cases`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${base}/knowledge`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${base}/blog`,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      ...getCaseStudies(locale).map((caseStudy) => ({
        url: `${base}/cases/${caseStudy.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
      ...posts.map((post) => ({
        url: `${base}/blog/${post.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ];
  });
  return staticEntries;
}
