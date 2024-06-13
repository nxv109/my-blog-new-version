'use client';
import useSWR from 'swr';

import Heading from '@/components/organisms/Heading/page';

import { fetcher, baseApiUrl } from '@/services/fetchApp';

import 'highlight.js/styles/androidstudio.css';
import './styles.scss';

function Article({ params }: any) {
  const { data, error, isLoading } = useSWR(
    `${baseApiUrl}/posts/${params.article_id}`,
    fetcher,
  );

  const article = data?.data || {};

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="article-detail">
      {error ? (
        <p>Failed to load</p>
      ) : (
        <>
          <Heading>{article?.title || ''}</Heading>
          <article className="article-detail__article">
            <p dangerouslySetInnerHTML={{ __html: article?.content || '' }} />
          </article>
        </>
      )}
    </main>
  );
}

export default Article;
