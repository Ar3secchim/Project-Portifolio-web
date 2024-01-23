import notion from "@/infra/NotionClient";

export class getAllPosts {
  constructor() {}
  
  async execute() {
    const response = await notion.databases.query({
      database_id: "00ae27edf7d144ba9886c85b63c51c2e",
      filter: {
        property: "status",
        status: {
          equals: "Done",
        },
      },
    });

    return response.results.map((post) => {
      return {
        id: post.properties.ID.unique_id.number,
        title: post.properties.title.title[0].plain_text,
        slug: post.properties.slug.rich_text[0].plain_text,
        tags: post.properties.tags.multi_select.map((tags) => tags.name),
        publishAt: post.properties.publishAt.date.start,
        time: post.properties.timeread.number,
      };
    });
  }
}