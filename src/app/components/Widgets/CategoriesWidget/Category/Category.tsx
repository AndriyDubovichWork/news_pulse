import React from 'react';
import style from './Category.module.scss';
import Link from 'next/link';

type CategoryT = {
  category: string;
};

export default async function Category({ category }: CategoryT) {
  return (
    <Link href={`/categories/?category=${category}`} className={style.category}>
      <p className={style.text}>#{category}</p>
    </Link>
  );
}
