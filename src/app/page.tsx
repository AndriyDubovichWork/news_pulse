'use client';
import style from './home.module.scss';
import Article from './components/Article/Article';
import useGetData from './hooks/useGetData';
import CategoriesWidget from './components/Widgets/CategoriesWidget/CategoriesWidget';
import WeatherWidget from './components/Widgets/WeatherWidget/WeatherWidget';
import PaginatedArticlesWidget from './components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import HightArticlesWidget from './components/Widgets/HightArticlesWidget/HightArticlesWidget';
import FootBallWidget from './components/Widgets/FootBallWidget/FootBallWidget';

export default function Home() {
  const { weather, citiesWeather, news } = useGetData();

  return (
    <main className={style.home}>
      <CategoriesWidget />

      <HightArticlesWidget news={news} />

      <PaginatedArticlesWidget title='Popular Posts' news={news} />

      <FootBallWidget />

      {weather && citiesWeather && (
        <WeatherWidget weather={weather} citiesWeather={citiesWeather} />
      )}
    </main>
  );
}
