'use client';

import React from 'react';
import style from './Categories.module.scss';
import { useSearchParams } from 'next/navigation';

export default function Categories() {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  return <main className={style.categories}>Categories {category}</main>;
}
