'use client';

import React from 'react';
import style from './Categories.module.scss';
import CategoriesWidget from '../components/Widgets/CategoriesWidget/CategoriesWidget';
import useGetData from '../hooks/useGetData';
import useSearchParams from '../hooks/useSearchParams';
import CategoryHeader from './Layout/CategoryHeader/CategoryHeader';
import GridArticles from '../components/GridArticles/GridArticles';
import { useRouter } from 'next/navigation';

export default function Categories() {
  const router = useRouter();

  const { news } = useGetData();

  const { getParam } = useSearchParams();

  const category = getParam('category');
  if (!category) {
    router.push('/');
    return;
  }
  return (
    <main className={style.categories}>
      <CategoryHeader category={category} />
      <GridArticles news={news} />
    </main>
  );
}
