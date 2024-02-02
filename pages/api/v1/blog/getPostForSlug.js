import notion from "@/infra/NotionClient";
import { NotionToMarkdown } from "notion-to-md";

export class getPostForSlug {
  constructor() {}
  
  async execute(slug) {
    const response = await notion.databases.query({
      database_id: "00ae27edf7d144ba9886c85b63c51c2e",
      filter: {
        property: "slug",
        rich_text: {
          contains: slug,
        },
      },
    });

    const post = response.results[0].properties;
    const pageId = response.results[0].id;

    const n2m = new NotionToMarkdown({
      notionClient: notion,
    });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      tags: post.tags.multi_select.map((tags) => tags.name),
      publishAt: post.publishAt.date.start,
      slug: post.slug.rich_text[0].plain_text,
      title: post.title.title[0].plain_text,
      content: mdString.parent,
      time: post.timeread.number,
    };
  }
}
