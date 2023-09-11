import { useState, useEffect } from "react";
import getMostPopularNews from "../api/requests/getMostPopularNews";
import getUserIp from "../api/requests/getUserIp";
import getWeather from "../api/requests/getWeather";
import shuffleArray from "../lib/shuffleArray";

export default function useGetData() {
  const [news, setNews] = useState<NewsT>([]);
  const [weather, setWeather] = useState<WeatherT>();
  const [citiesWeather, setCitiesWeather] = useState<WeatherT[]>();

  const shuffleNews = () => {
    setNews(shuffleArray(news));
  };
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
      getWeather("London"),
      getWeather("New York"),
      getWeather("Paris"),
      getWeather("Lviv"),
    ]).then((values) => {
      setCitiesWeather(values);
    });
  }, []);

  return { shuffleNews, news, setNews, weather, setWeather, citiesWeather };
}
