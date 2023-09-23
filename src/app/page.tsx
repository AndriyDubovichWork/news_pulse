'use client';
import style from './home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';

export default async function Home() {
  const { weather, citiesWeather, news } = await useGetData();

  return (
    <main className={style.home}>
      {weather && citiesWeather && news && (
        <Widgets weather={weather} citiesWeather={citiesWeather} news={news} />
      )}
    </main>
  );
}
