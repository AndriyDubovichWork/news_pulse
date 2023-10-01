import React from 'react';
import CategoriesWidget from './CategoriesWidget/CategoriesWidget';
import HightArticlesWidget from './HightArticlesWidget/HightArticlesWidget';
import PaginatedArticlesWidget from './PaginatedArticlesWidget/PaginatedArticlesWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import NewPosts from './NewPosts/NewPosts';
import shuffleArray from '@/app/lib/shuffleArray';
import LatestPosts from './LatestPosts/LatestPosts';

type WidgetsPropsT = {
  weather: WeatherT;
  width: number;
  isWideScreen: boolean;
  citiesWeather: WeatherT[];
  news: NewsT;
};

function Widgets({
  weather,
  citiesWeather,
  news,
  width,
  isWideScreen,
}: WidgetsPropsT) {
  return (
    <>
      <CategoriesWidget />

      <HightArticlesWidget
        width={width}
        isWideScreen={isWideScreen}
        news={shuffleArray(news)}
      />

      <PaginatedArticlesWidget
        width={width}
        title='Popular Posts'
        news={shuffleArray(news)}
      />

      <NewPosts news={news} isWideScreen={isWideScreen} />

      <LatestPosts
        isWideScreen={isWideScreen}
        news={shuffleArray(news)}
        width={width}
      />

      <PaginatedArticlesWidget
        width={width}
        title='Trendy Posts'
        news={shuffleArray(news)}
      />

      <WeatherWidget
        isWideScreen={isWideScreen}
        weather={weather}
        citiesWeather={citiesWeather}
      />

      <PaginatedArticlesWidget
        width={width}
        title='Top Posts'
        news={shuffleArray(news)}
      />
    </>
  );
}

export default Widgets;
