'use client';
import { useState, useEffect } from 'react';
import style from './home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';
import useWidth from './hooks/useWidth';

export default function Home() {
  //ToDo refactore this code

  const { weather, citiesWeather, news } = useGetData();
  const { width, isWideScreen } = useWidth();

  return (
    <main className={style.home}>
      {weather && citiesWeather && news && (
        <Widgets
          isWideScreen={isWideScreen}
          width={width}
          weather={weather}
          citiesWeather={citiesWeather}
          news={news}
        />
      )}
    </main>
  );
}
