'use client';

import React from 'react';
import style from './Posts.module.scss';
import ArrowedLink from '@/app/components/ArrowedLink/ArrowedLink';
import WriterInfo from '@/app/components/WriterInfo/WriterInfo';
import GridArticles from '@/app/components/GridArticles/GridArticles';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import shuffleArray from '@/app/lib/shuffleArray';
import useGetData from '@/app/hooks/useGetData';
import WeatherChart from '@/app/components/Widgets/WeatherWidget/WeatherOfUser/WeatherChart/WeatherChart';
import useWeatherOfUserData from '@/app/hooks/useWeatherOfUserData';
import Loading from '@/app/loading';
import useGenerateRandomChartData from '@/app/hooks/useGenerateRandomChartData';
import Title from '@/app/components/Title/Title';
import useWidth from '@/app/hooks/useWidth';

function Posts() {
  const { news } = useGetData();

  const chartData = useGenerateRandomChartData(10);
  const { width } = useWidth();
  return (
    <main className={style.posts}>
      <ArrowedLink current='Profile Posts' />
      <WriterInfo isMarked />

      <Title title='View Posts' />

      <WeatherChart chartData={chartData} />

      <PaginatedArticlesWidget
        width={width}
        title='Popular Posts'
        news={shuffleArray(news)}
      />
    </main>
  );
}

export default Posts;
