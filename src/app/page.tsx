'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import useGetData from './hooks/useGetData';

export default function Home() {
  const { weather, news, citiesWeather } = useGetData();

  return (
    <main className={style.home}>
      {weather && (
        <WeatherWidget weather={weather} citiesWeather={citiesWeather} />
      )}

      <div className={style.articles}>
        {news?.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </main>
  );
}
