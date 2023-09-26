import React from 'react';
import Category from './Category/Category';
import style from './CategoriesWidget.module.scss';
import useMockData from '@/app/hooks/useMockData';

export default function CategoriesWidget() {
  const { categories } = useMockData();
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Category category={category} key={category} />
      ))}
    </div>
  );
}
