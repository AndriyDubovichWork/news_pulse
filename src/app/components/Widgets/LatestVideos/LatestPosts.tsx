import React from 'react';
import style from './LatestPosts.module.scss';
import Article from '../../Article/Article';
import Title from '../../Title/Title';

type LatestPostsPropsT = {
  news: NewsT;
};

export default function LatestPosts({ news }: LatestPostsPropsT) {
  const slicedNews = news.slice(0, 3);

  return (
    <>
      <Title title='Latest Posts' className={style.title} />
      <div className={style.latest}>
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
                isWide={true}
                key={article.abstract}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
