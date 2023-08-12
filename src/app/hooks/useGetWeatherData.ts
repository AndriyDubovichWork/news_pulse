import { useState, useEffect } from 'react';
import getMostPopularNews from '../api/requests/getMostPopularNews';
import getUserIp from '../api/requests/getUserIp';
import getWeather from '../api/requests/getWeather';

export default function useGetWeatherData() {
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

  return { news, setNews, weather, setWeather };
}
