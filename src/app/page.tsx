'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import useGetData from './hooks/useGetData';
import Categories from './components/Categories/Categories';

export default function Home() {
  const { weather, citiesWeather, news } = useGetData();

  return (
    <main className={style.home}>
      <Categories />
      {weather && citiesWeather && (
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
