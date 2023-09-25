import React from 'react';
import CategoriesWidget from './CategoriesWidget/CategoriesWidget';
import HightArticlesWidget from './HightArticlesWidget/HightArticlesWidget';
import PaginatedArticlesWidget from './PaginatedArticlesWidget/PaginatedArticlesWidget';
import FootBallWidget from './FootBallWidget/FootBallWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import NewPosts from './NewPosts/NewPosts';
import shuffleArray from '@/app/lib/shuffleArray';
import LatestPosts from './LatestVideos/LatestPosts';

type WidgetsPropsT = {
  weather: WeatherT;
  width: number;
  citiesWeather: WeatherT[];
  news: NewsT;
};

function Widgets({ weather, citiesWeather, news, width }: WidgetsPropsT) {
  return (
    <>
      <CategoriesWidget />

      <HightArticlesWidget news={shuffleArray(news)} width={width} />

      <PaginatedArticlesWidget
        width={width}
        title='Popular Posts'
        news={shuffleArray(news)}
      />

      {/* <FootBallWidget /> */}

      <NewPosts news={news} />

      <LatestPosts news={shuffleArray(news)} />

      <PaginatedArticlesWidget
        width={width}
        title='Trendy Posts'
        news={shuffleArray(news)}
      />

      <WeatherWidget weather={weather} citiesWeather={citiesWeather} />

      <PaginatedArticlesWidget
        width={width}
        title='Top Posts'
        news={shuffleArray(news)}
      />
    </>
  );
}

export default Widgets;
