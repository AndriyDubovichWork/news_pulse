'use client';

import React, { useState } from 'react';
import style from './Categories.module.scss';
import useGetData from '../hooks/useGetData';
import useSearchParams from '../hooks/useSearchParams';
import CategoryHeader from './Layout/CategoryHeader/CategoryHeader';
import GridArticles from '../components/GridArticles/GridArticles';
import { useRouter } from 'next/navigation';
import shuffleArray from '../lib/shuffleArray';

export default function Categories() {
  const router = useRouter();

  const { news, setNews } = useGetData();

  const { getParam } = useSearchParams();

  const category = getParam('category');
  if (!category) {
    router.push('/');
    return;
  }

  const shuffleNews = () => {
    setNews(shuffleArray(news));
  };

  return (
    <main className={style.categories}>
      <CategoryHeader category={category} shuffleNews={shuffleNews} />
      <GridArticles news={news} />
    </main>
  );
}
