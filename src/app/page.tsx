'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import useGetWeatherData from './hooks/useGetWeatherData';

export default function Home() {
  const { weather, news } = useGetWeatherData();

  return (
    <main className={style.home}>
      {weather && <WeatherWidget weather={weather} />}

      <div className={style.articles}>
        {news?.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </main>
  );
}
