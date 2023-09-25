'use client';
import { useState, useEffect } from 'react';
import style from './home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';

export default function Home() {
  //ToDo refactore this code

  const { weather, citiesWeather, news } = useGetData();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    let timeoutId: any;

    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    });
  }, []);

  return (
    <main className={style.home}>
      {weather && citiesWeather && news && (
        <Widgets
          width={width}
          weather={weather}
          citiesWeather={citiesWeather}
          news={news}
        />
      )}
    </main>
  );
}
