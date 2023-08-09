'use client';
import styles from './home.module.scss';
import getMostPopularNews from './api/requests/getMostPopularNews';
import { useState, useEffect } from 'react';
import Article from './components/Article/Article';
import Weather from './components/Weather/Weather';
import getUserIp from './api/requests/getUserIp';
import getWeather from './api/requests/getWeather';

export default function Home() {
  const [news, setNews] = useState<ArticleT[]>([]);
  const [weather, setWeather] = useState<WeatherT>();
  const [ip, setIp] = useState<string>('');

  useEffect(() => {
    getMostPopularNews().then((fetchedNews) => {
      setNews(fetchedNews);
    });
    getUserIp().then((ip) => {
      setIp(ip);
      getWeather(ip).then((res) => {
        setWeather(res);
      });
    });
  }, []);

  return (
    <main className={styles.home}>
      {weather && <Weather weather={weather} />}

      {ip}
      {news?.map((article) => {
        return <Article article={article} />;
      })}
      {/* <Weather /> */}
    </main>
  );
}
