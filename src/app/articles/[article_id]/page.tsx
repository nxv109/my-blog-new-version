// 'use client';
// import useSWR from 'swr';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Heading from '@/components/organisms/Heading/page';

import * as ArticleService from '@/services/articles';

// import { fetcher, baseApiUrl } from '@/services/fetchApp';

import 'highlight.js/styles/androidstudio.css';
import './styles.scss';

async function Article({ params }: any) {
  // const { data, error, isLoading } = useSWR(
  //   `${baseApiUrl}/posts/${params.article_id}`,
  //   fetcher,
  // );

  // const article = data?.data || {};

  // if (isLoading) return <p>Loading...</p>;

  const articleResponse = await ArticleService.getArticleDetail({
    id: params?.article_id,
  });

  const article = articleResponse?.data || [];

  return (
    <main className="article-detail">
      <>
        <MDXRemote
          source={`# Hello World

          This is from Server Components!
          ![Alt text](https://i.ibb.co/wCmWtyG/prototype-js.png)
          `}
        />
        <Heading>{article?.title || ''}</Heading>
        <article className="article-detail__article">
          <p dangerouslySetInnerHTML={{ __html: article?.content || '' }} />
        </article>
      </>
    </main>
  );
}

export default Article;
