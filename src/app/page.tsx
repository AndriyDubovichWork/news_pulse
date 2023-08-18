'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import useGetData from './hooks/useGetData';
import CategoriesWidget from './components/Widgets/CategoriesWidget/CategoriesWidget';
import WeatherWidget from './components/Widgets/WeatherWidget/WeatherWidget';

export default function Home() {
  const { weather, citiesWeather, news } = useGetData();

  return (
    <main className={style.home}>
      <CategoriesWidget />
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
