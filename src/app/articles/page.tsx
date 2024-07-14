import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

import Heading from '@/components/organisms/Heading/page';

import * as ArticleService from '@/services/articles';
import { IArticle } from '@/types/posts';

import './styles.scss';
import 'highlight.js/styles/github.css';

async function Article() {
  const articlesResponse = await ArticleService.getArticles();
  const articles = articlesResponse?.data || [];

  const content = '`this inline should work nice and steady`\n ```javascript\nconst a = 12;\n```';

  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <main className='article'>
      <div className='article__inner'>
        <Heading>Articles</Heading>
        <MDXRemote source={content} options={options} />
        <div className='article__list'>
          {articles.map((article: IArticle) => {
            return (
              <Link
                className='article__item'
                key={article?._id}
                href={`articles/${article?._id}`}
              >
                <h3 className='article__title'>{article?.title}</h3>
                <p className='article__summary'>{article?.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Article;
