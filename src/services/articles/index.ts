import { IGetArticleDetailParams } from '@/types/posts';

import fetchApp from '../fetchApp';

async function getArticles() {
  return fetchApp({ endpoint: '/posts' });
}

async function getArticleDetail({ id }: IGetArticleDetailParams) {
  return fetchApp({ endpoint: `/posts/${id}` });
}

export { getArticles, getArticleDetail };
