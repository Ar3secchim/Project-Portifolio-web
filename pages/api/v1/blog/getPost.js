import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export  default async function getPosts() {
  const notion = new Client({ auth: "secret_Qk4X8PhS91Jv5sN6ZeinkTQtQbVRFkVl2cPiga6OSPu"});
  const DATABASE_ID = "e2004ee6860c408d9ce64d9041309579";

  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  return response.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.tags.multi_select.map((tag) => tag.name),
      publishAt: post.properties.publishAt.date.start
    };
  });
}

export async function getPost(slug) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    title: response.results[0].properties.title.title[0].plain_text,
    content: mdString.parent,
  };
}