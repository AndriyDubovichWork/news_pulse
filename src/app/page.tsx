'use client';
import { useState, useEffect } from 'react';
import style from './Home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';
import useWidth from './hooks/useWidth';
export default function Home() {
  const { weather, citiesWeather, news, isDataLoaded } = useGetData();
  const { width, isWideScreen } = useWidth();

  // console.log(isDataLoaded);
  // useEffect(() => {
  //   setIsDataLoaded(weather && citiesWeather && news);
  // }, [weather, citiesWeather, news]);

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
