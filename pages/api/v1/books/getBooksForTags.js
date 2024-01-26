import notion from "@/infra/NotionClient";

export class getBooksForTags{
  constructor() {}

  async execute(tags) {
    const response = await notion.databases.query({
      database_id: "f8c50c2538ce4284aef0afd4752a639d",
      filter: {
        and: [
          {
            property: "tags",
            select: {
              equals: tags,
            },
          },
          {
            property: "status",
            status: {
              does_not_equal: "Not started",
            },
          },
        ],
        sorts: [
          {
            property: "nota",
            direction: "descending",
          },
        ],
      },
    });

    const books = response.results;

    return books.map((book) => {
      return {
        id: book.properties.ID.unique_id.number,
        title: book.properties.title.title[0].plain_text,
        autor: book.properties.autor.rich_text[0].plain_text,
        tags: book.properties.tags.select.name,
        color: book.properties.tags.select.color,
        publishAt: book.properties.publishAt.date.start,
        nota: book.properties.nota.select.name,
      };
    });
  }
}
