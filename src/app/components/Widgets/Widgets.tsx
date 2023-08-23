import React from 'react';
import CategoriesWidget from './CategoriesWidget/CategoriesWidget';
import HightArticlesWidget from './HightArticlesWidget/HightArticlesWidget';
import PaginatedArticlesWidget from './PaginatedArticlesWidget/PaginatedArticlesWidget';
import FootBallWidget from './FootBallWidget/FootBallWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';

type WidgetsPropsT = {
  weather: WeatherT;
  citiesWeather: WeatherT[];
  news: ArticleT[];
};

function Widgets({ weather, citiesWeather, news }: WidgetsPropsT) {
  return (
    <>
      <CategoriesWidget />

      <HightArticlesWidget news={news} />

      <PaginatedArticlesWidget title='Popular Posts' news={news} />

      <FootBallWidget />

      {weather && citiesWeather && (
        <WeatherWidget weather={weather} citiesWeather={citiesWeather} />
      )}
    </>
  );
}

export default Widgets;
