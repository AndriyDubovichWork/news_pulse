'use client';

import React from 'react';
import useSearchParamsHook from '../hooks/useSearchParams';
import { useRouter } from 'next/navigation';
import style from './Article.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import ArticleBody from './ArticleBody/ArticleBody';

export default function Article() {
  const router = useRouter();

  const { getParam } = useSearchParamsHook();

  const id = getParam('id');

  if (id === null) {
    router.push('/');
    return;
  }

  return (
    <main className={style.article}>
      <ArrowedLink current={id} />
      <ArticleBody />
    </main>
  );
}
