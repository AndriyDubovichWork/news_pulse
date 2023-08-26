'use client';

import React from 'react';
import style from './Categories.module.scss';
import CategoriesWidget from '../components/Widgets/CategoriesWidget/CategoriesWidget';
import useGetData from '../hooks/useGetData';
import useSearchParams from '../hooks/useSearchParams';
import CategoryHeader from './Layout/CategoryHeader/CategoryHeader';
import CategoryBody from './Layout/CategoryBody/CategoryBody';

export default function Categories() {
  const { news } = useGetData();

  const { getParam } = useSearchParams();

  const category = getParam('category');
  if (!category) {
    return (
      <main className={style.categories}>
        <CategoriesWidget />
      </main>
    );
  }
  return (
    <main className={style.categories}>
      <CategoryHeader category={category} />
      <CategoryBody />
    </main>
  );
}
