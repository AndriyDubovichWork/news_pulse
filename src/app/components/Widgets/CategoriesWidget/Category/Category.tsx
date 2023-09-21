import React from 'react';
import style from './Category.module.scss';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

type CategoryT = {
  category: string;
};

export default function Category({ category }: CategoryT) {
  return (
    <Link
      href={`/categories/?category=${category}`}
      className={style.category}
      style={{}}
    >
      <p className={style.text}>#{category}</p>
    </Link>
  );
}
