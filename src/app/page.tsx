'use client';
import style from './home.module.scss';
import getMostPopularNews from './api/requests/getMostPopularNews';
import { useState, useEffect } from 'react';
import Article from './components/Article/Article';
import Weather from './components/Weather/Weather';
import getUserIp from './api/requests/getUserIp';
import getWeather from './api/requests/getWeather';

export default function Home() {
  const [news, setNews] = useState<ArticleT[]>([]);
  const [weather, setWeather] = useState<WeatherT>();

  useEffect(() => {
    getMostPopularNews().then((fetchedNews) => {
      setNews(fetchedNews);
    });
    getUserIp().then((ip) => {
      getWeather(ip).then((res) => {
        setWeather(res);
      });
    });
  }, []);

  return (
    <main className={style.home}>
      {weather && <Weather weather={weather} />}

      <div className={style.articles}>
        {news?.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </main>
  );
}
