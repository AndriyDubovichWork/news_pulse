'use client';

import React from 'react';
import style from './Posts.module.scss';
import ArrowedLink from '@/app/components/ArrowedLink/ArrowedLink';
import WriterInfo from '@/app/components/WriterInfo/WriterInfo';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import shuffleArray from '@/app/lib/shuffleArray';
import useGetData from '@/app/hooks/useGetData';
import WeatherChart from '@/app/components/Widgets/WeatherWidget/WeatherOfUser/WeatherChart/WeatherChart';
import Title from '@/app/components/Title/Title';
import useWidth from '@/app/hooks/useWidth';
import useMockData from '@/app/hooks/useMockData';
import { useSession } from 'next-auth/react';

function Posts() {
  const { news } = useGetData();

  const { randomChartData } = useMockData();
  const { width } = useWidth();
  const { data: session } = useSession();
  return (
    <main className={style.posts}>
      <ArrowedLink current='Profile Posts' />
      <WriterInfo session={session} />

      <Title title='View Posts' />

      <WeatherChart chartData={randomChartData} />

      <PaginatedArticlesWidget
        width={width}
        title='Popular Posts'
        news={shuffleArray(news)}
      />
    </main>
  );
}

export default Posts;
