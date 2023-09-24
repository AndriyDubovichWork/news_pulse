import React from 'react';
import CategoriesWidget from './CategoriesWidget/CategoriesWidget';
import HightArticlesWidget from './HightArticlesWidget/HightArticlesWidget';
import PaginatedArticlesWidget from './PaginatedArticlesWidget/PaginatedArticlesWidget';
import FootBallWidget from './FootBallWidget/FootBallWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import NewPosts from './NewPosts/NewPosts';
import shuffleArray from '@/app/lib/shuffleArray';
import LatestVideos from './LatestVideos/LatestVideos';

type WidgetsPropsT = {
  weather: WeatherT;
  citiesWeather: WeatherT[];
  news: NewsT;
};

function Widgets({ weather, citiesWeather, news }: WidgetsPropsT) {
  return (
    <>
      <CategoriesWidget />

      <HightArticlesWidget news={shuffleArray(news)} />

      <PaginatedArticlesWidget
        title='Popular Posts'
        news={shuffleArray(news)}
      />

      {/* <FootBallWidget /> */}

      <NewPosts news={news} />

      <LatestVideos news={shuffleArray(news)} />

      <PaginatedArticlesWidget title='Trendy Posts' news={shuffleArray(news)} />

      <WeatherWidget weather={weather} citiesWeather={citiesWeather} />

      <PaginatedArticlesWidget title='Top Posts' news={shuffleArray(news)} />
    </>
  );
}

export default Widgets;
