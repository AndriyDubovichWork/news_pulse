import useGetData from './useGetData';
import useSearchParamsHook from './useSearchParams';
import shuffleArray from '../lib/shuffleArray';
import { useState } from 'react';
export default function useCategoriesData() {
  const { news, setNews } = useGetData();

  const [isGrid, setIsGrid] = useState(true);

  const { getParam } = useSearchParamsHook();

  const category = getParam('category');

  const shuffleNews = () => {
    setNews(shuffleArray(news));
  };

  return { category, shuffleNews, news, isGrid, setIsGrid };
}
