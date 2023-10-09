'use client';
import { useState, useEffect } from 'react';
import style from './Home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';
import useWidth from './hooks/useWidth';
export default function Home() {
  const { weather, citiesWeather, news, isDataLoaded } = useGetData();
  const { width, isWideScreen } = useWidth();
  const incorrectData = !weather || !citiesWeather || !news;
  // console.log(isDataLoaded);
  // useEffect(() => {
  //   setIsDataLoaded(weather && citiesWeather && news);
  // }, [weather, citiesWeather, news]);
  if (isDataLoaded && incorrectData) {
    throw new Error(
      "couldn't load required data ,if multiple reloads didnt help wait for a minute and than reload"
    );
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
