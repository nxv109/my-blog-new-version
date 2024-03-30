interface IArticle {
  _id: string;
  title: string;
  article_thumbnail: string;
  tags: string[];
  status: string;
  create_at: string;
  summary: string;
  content: string;
  slug: string;
}

export type { IArticle };
