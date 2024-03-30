import fetchApp from '../fetchApp';

async function getArticles() {
  return fetchApp({ endpoint: '/posts' });
}

export { getArticles };
