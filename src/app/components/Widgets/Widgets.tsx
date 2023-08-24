import React from 'react';
import CategoriesWidget from './CategoriesWidget/CategoriesWidget';
import HightArticlesWidget from './HightArticlesWidget/HightArticlesWidget';
import PaginatedArticlesWidget from './PaginatedArticlesWidget/PaginatedArticlesWidget';
import FootBallWidget from './FootBallWidget/FootBallWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import NewPosts from './NewPosts/NewPosts';
import shuffleArray from '@/app/lib/shuffleArray';

type WidgetsPropsT = {
  weather: WeatherT;
  citiesWeather: WeatherT[];
  news: ArticleT[];
};

function Widgets({ weather, citiesWeather, news }: WidgetsPropsT) {
  console.log(shuffleArray(news));

  return (
    <>
      <CategoriesWidget />

      <HightArticlesWidget news={shuffleArray(news)} />

      <PaginatedArticlesWidget
        title='Popular Posts'
        news={shuffleArray(news)}
      />

      <FootBallWidget />

      <NewPosts news={news} />

      <PaginatedArticlesWidget title='Trendy Posts' news={shuffleArray(news)} />

      <WeatherWidget weather={weather} citiesWeather={citiesWeather} />

      <PaginatedArticlesWidget title='Top Posts' news={shuffleArray(news)} />
    </>
  );
}

export default Widgets;
