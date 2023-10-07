'use client';

import React from 'react';
import style from './Categories.module.scss';

import CategoryHeader from './Layout/CategoryHeader/CategoryHeader';
import GridArticles from '../components/GridArticles/GridArticles';
import useCategoriesData from '../hooks/useCategoriesData';

import { useRouter } from 'next/navigation';
import Paginator from '../components/Paginator/Paginator';

export default function Categories() {
  const { category, news, shuffleNews, isGrid, setIsGrid } =
    useCategoriesData();
  const router = useRouter();
  if (!category) {
    router.push('/');
    return;
  }

  return (
    <main className={style.categories}>
      <CategoryHeader
        category={category}
        shuffleNews={shuffleNews}
        setIsGrid={setIsGrid}
        isGrid={isGrid}
      />
      <GridArticles news={news} isGrid={isGrid} />
      <Paginator shuffleNews={shuffleNews} />
    </main>
  );
}
