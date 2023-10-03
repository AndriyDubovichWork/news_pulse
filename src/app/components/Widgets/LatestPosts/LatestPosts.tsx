import React from 'react';
import style from './LatestPosts.module.scss';
import Article from '../../Article/Article';
import Title from '../../Title/Title';

type LatestPostsPropsT = {
  news: NewsT;
  width: number;
  isWideScreen: boolean;
};

export default function LatestPosts({
  news,
  width,
  isWideScreen,
}: LatestPostsPropsT) {
  const shown = Math.floor(width / 750) || 1;
  const elementsNum = isWideScreen ? 3 : shown;
  const slicedNews = news.slice(0, elementsNum);

  return (
    <>
      <Title title='Latest Posts' className={style.title} />
      <div className={`${style.latest} ${!isWideScreen && style.small}`}>
        {slicedNews.map((article, id) => {
          const isFirst = id === 0;
          return (
            <div
              className={isFirst ? style.video : style.article}
              key={article.abstract}
            >
              <Article
                article={article}
                isHigh={isFirst}
                isWide={isWideScreen || isFirst}
                key={article.abstract}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
