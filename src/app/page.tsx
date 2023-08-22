'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import useGetData from './hooks/useGetData';
import CategoriesWidget from './components/Widgets/CategoriesWidget/CategoriesWidget';
import WeatherWidget from './components/Widgets/WeatherWidget/WeatherWidget';
import PaginatedArticlesWidget from './components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';

export default function Home() {
  const { weather, citiesWeather, news } = useGetData();

  return (
    <main className={style.home}>
      <CategoriesWidget />


      <PaginatedArticlesWidget title='Popular Posts' news={news} />

      {weather && citiesWeather && (
        <WeatherWidget weather={weather} citiesWeather={citiesWeather} />
      )}
    </main>
  );
}
