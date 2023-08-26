'use client';

import React from 'react';
import style from './Categories.module.scss';
import { useSearchParams } from 'next/navigation';
import CategoriesWidget from '../components/Widgets/CategoriesWidget/CategoriesWidget';
import CategoryHeader from './Layout/CategoryHeader';

export default function Categories() {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
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
    </main>
  );
}
