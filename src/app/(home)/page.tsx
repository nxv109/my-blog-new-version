import * as ArticleService from '@/services/articles';
import { IArticle } from '@/types/posts';

import './styles.scss';

async function Home() {
  const articlesResponse = await ArticleService.getArticles();
  const articles = articlesResponse?.data || [];

  return (
    <main className="article">
      <div className="article__inner">
        <h1 className="article__heading">Articles</h1>
        <div className="article__list">
          {articles.map((article: IArticle) => {
            return (
              <div key={article?._id} className="article__item">
                <h3 className="article__title">{article?.title}</h3>
                <p className="article__summary">{article?.summary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
