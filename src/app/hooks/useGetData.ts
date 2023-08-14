import { useState, useEffect } from 'react';
import getMostPopularNews from '../api/requests/getMostPopularNews';
import getUserIp from '../api/requests/getUserIp';
import getWeather from '../api/requests/getWeather';

export default function useGetData() {
  const [news, setNews] = useState<ArticleT[]>([]);
  const [weather, setWeather] = useState<WeatherT>();
  const [worldWeather, setWorldWeather] = useState<WeatherT[]>();

  useEffect(() => {
    getMostPopularNews().then((fetchedNews) => {
      setNews(fetchedNews);
    });
    getUserIp().then((ip) => {
      getWeather(ip).then((res) => {
        setWeather(res);
      });
    });
    Promise.all([
      getWeather('London'),
      getWeather('New York'),
      getWeather('Paris'),
      getWeather('Lviv'),
    ]).then((values) => {
      setWorldWeather(values);
    });
  }, []);

  return { news, setNews, weather, setWeather, worldWeather };
}
