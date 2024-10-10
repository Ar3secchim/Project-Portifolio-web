import notion from '@/infra/NotionClient';

export class getBooksForTags {
  constructor() {}

  async execute(tags) {
    const response = await notion.databases.query({
      database_id: process.env.DATA_BASE_NOTION,
      filter: {
        and: [
          {
            property: 'tags',
            select: {
              equals: tags,
            },
          },
          {
            property: 'status',
            status: {
              does_not_equal: 'Not started',
            },
          },
        ],
        sorts: [
          {
            property: 'nota',
            direction: 'descending',
          },
        ],
      },
    });

    const books = response.results;

    return books.map((book) => ({
      id: book.properties.ID.unique_id.number,
      title: book.properties.title.title[0].plain_text,
      autor: book.properties.autor.rich_text[0].plain_text,
      tags: book.properties.tags.select.name,
      color: book.properties.tags.select.color,
      publishAt: book.properties.publishAt.date.start,
      nota: book.properties.nota.select.name,
    }));
  }
}
