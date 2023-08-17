import React from 'react';
import Category from './Category/Category';
import style from './Categories.module.scss';
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

export default function Categories() {
  return (
    <div className={style.categories}>
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
}
