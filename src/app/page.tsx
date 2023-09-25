'use client';

import style from './home.module.scss';
import useGetData from './hooks/useGetData';
import Widgets from './components/Widgets/Widgets';
import useWidth from './hooks/useWidth';
import { signIn, signOut, useSession } from 'next-auth/react';
export default function Home() {
  const { weather, citiesWeather, news } = useGetData();
  const { width, isWideScreen } = useWidth();
  const { data: session } = useSession();

  console.log(session);

  // if (!session) {
  //   signIn();
  //   return null;
  // }
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
