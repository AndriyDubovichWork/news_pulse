import React from 'react';
import style from './Category.module.scss';
import Link from 'next/link';

type CategoryT = {
  category: string;
};

export default function Category({ category }: CategoryT) {
  const id = Math.random();
  return (
    <Link
      href={`/categories/?category=${category}`}
      className={style.category}
      style={{
        objectFit: 'cover',

        backgroundImage: `url(https://random.imagecdn.app/170/48/?avoidCachingSoItwillBeDifferentImages=${id})`,
      }}
    >
      <p className={style.text}>#{category}</p>
    </Link>
  );
}
