import getImagemBooks from './getImagemBooks';

import notion from '@/infra/NotionClient';

export class getBooks {
  constructor() {}

  async execute() {
    const { results } = await notion.databases.query({
      database_id: process.env.DATA_BASE_NOTION,
      sorts: [
        {
          property: 'nota',
          direction: 'descending',
        },
      ],
      filter: {
        and: [
          {
            property: 'status',
            status: {
              does_not_equal: 'Not started',
            },
          },
        ],
      },
    });

    const ArrayBook = await Promise.all(
      results.map(async (book) => {
        const key = book.properties.media.url;
        const media = await getImagemBooks(key);
        return {
          id: book.properties.ID.unique_id.number,
          title: book.properties.title.title[0].plain_text,
          autor: book.properties.autor.rich_text[0].plain_text,
          tags: book.properties.tags.select.name,
          color: book.properties.tags.select.color,
          nota: book.properties.nota.select.name,
          media,
        };
      }),
    );

    return ArrayBook;
  }
}
