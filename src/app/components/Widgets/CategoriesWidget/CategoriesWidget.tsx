import React from 'react';
import Category from './Category/Category';
import style from './CategoriesWidget.module.scss';
const categories = [
  'Food',
  'Animal',
  'Car',
  'Sport',
  'Music',
  'Technology',
  'Abstract',
  'Nature',
];

export default function CategoriesWidget() {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Category category={category} key={category} />
      ))}
    </div>
  );
}
