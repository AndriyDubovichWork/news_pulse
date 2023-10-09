'use client';
import { useState, useEffect } from 'react';
import style from './Home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';
import useWidth from './hooks/useWidth';
export default function Home() {
  const { weather, citiesWeather, news, isDataLoaded } = useGetData();
  const { width, isWideScreen } = useWidth();

  if (isDataLoaded && !news) {
    throw new Error("couldn't load news");
  }
  return (
    <main className={style.home}>
      {isDataLoaded && (
        <Widgets
          isWideScreen={isWideScreen}
          width={width}
          weather={weather as WeatherT}
          citiesWeather={citiesWeather as WeatherT[]}
          news={news}
        />
      )}
    </main>
  );
}
