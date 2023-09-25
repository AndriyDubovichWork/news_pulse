'use client';

import React from 'react';
import useSearchParamsHook from '../hooks/useSearchParams';
import { useRouter } from 'next/navigation';
import style from './Article.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import ArticleBody from './ArticleBody/ArticleBody';
import useGetData from '../hooks/useGetData';
import Loading from '../loading';
import useWidth from '../hooks/useWidth';

export default function Article() {
  const router = useRouter();

  const { getParam } = useSearchParamsHook();
  const { news } = useGetData();
  const { width } = useWidth();
  const id = getParam('id');

  const [article] = news.filter(
    (article) => article.asset_id.toString() === id
  );

  if (id === null) {
    router.push('/');
    return;
  }

  return (
    <>
      {!article ? (
        <Loading />
      ) : (
        <main className={style.article}>
          <ArrowedLink current={article.title} />
          <ArticleBody width={width} news={news} article={article} />
        </main>
      )}
    </>
  );
}
