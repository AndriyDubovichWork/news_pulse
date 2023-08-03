'use client';
import styles from './Home.module.scss';
import getMostPopularNews from './requests/getMostPopularNews';
import { useState, useEffect } from 'react';
export default function Home() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    getMostPopularNews().then((fetchedNews) => {
      setNews(fetchedNews);
      console.log(fetchedNews);
    });
  }, []);

  return (
    <main className={styles.Home}>
      {news?.map((Article) => {
        return (
          <div>
            <a href={Article.url}>
              <img
                src={Article?.media?.[0]?.['media-metadata']?.[2]?.url}
                alt='12'
              />
              {Article.title}
            </a>
          </div>
        );
      })}
    </main>
  );
}
