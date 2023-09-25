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
  const fittingElements = Math.floor(width / 700) || 1;
  const elementsNum = isWideScreen ? 3 : fittingElements;
  const slicedNews = news.slice(0, elementsNum);

  return (
    <>
      <Title title='Latest Posts' className={style.title} />
      <div className={`${style.latest} ${!isWideScreen && style.small}`}>
        {slicedNews.map((article, id) => {
          const isFirst = isWideScreen && id === 0;
          return (
            <div
              className={isFirst ? style.video : style.article}
              key={article.abstract}
            >
              <Article
                article={article}
                isHigh={isFirst}
                isWide={isWideScreen}
                key={article.abstract}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
