'use client';
import styles from './Home.module.scss';
import getMostPopularNews from './requests/getMostPopularNews';
import { useState, useEffect } from 'react';
import Article from './components/Article/Article';

export default function Home() {
  const [news, setNews] = useState<ArticleT[]>([]);

  useEffect(() => {
    getMostPopularNews().then((fetchedNews) => {
      setNews(fetchedNews);
      console.log(fetchedNews);
    });
  }, []);

  return (
    <main className={styles.Home}>
      {news?.map((article) => {
        return <Article article={article} />;
      })}
    </main>
  );
}
