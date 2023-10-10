'use client';

import React from 'react';
import style from './Marked.module.scss';
import Image from 'next/image';
import Title from '@/app/components/Title/Title';
import useGetData from '@/app/hooks/useGetData';
import ArrowedLink from '@/app/components/ArrowedLink/ArrowedLink';
import GridArticles from '@/app/components/GridArticles/GridArticles';
import Paginator from '@/app/components/Paginator/Paginator';
import WriterInfo from '@/app/components/WriterInfo/WriterInfo';

export default function User() {
  const { news, shuffleNews } = useGetData();
  return (
    <main className={style.user}>
      <ArrowedLink current='Marked' />
      <WriterInfo isMarked />
      <div className={style.articles}>
        <GridArticles news={news} isGrid />
      </div>
      <Paginator shuffleNews={shuffleNews} />
    </main>
  );
}
