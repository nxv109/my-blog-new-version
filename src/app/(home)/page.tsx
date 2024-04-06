import Link from 'next/link';

import Heading from '@/components/organisms/Heading/page';

import * as ArticleService from '@/services/articles';
import { IArticle } from '@/types/posts';

import './styles.scss';

async function Home() {
  const articlesResponse = await ArticleService.getArticles();
  const articles = articlesResponse?.data || [];

  return (
    <main className="article">
      <div className="article__inner">
        <Heading>Articles</Heading>
        <div className="article__list">
          {articles.map((article: IArticle) => {
            return (
              <Link
                className="article__item"
                key={article?._id}
                href={article?._id}
              >
                <h3 className="article__title">{article?.title}</h3>
                <p className="article__summary">{article?.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
