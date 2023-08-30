import React from 'react';
import style from './LatestVideos.module.scss';
import Article from '../../Article/Article';
import Title from '../../Title/Title';

type LatestVideosPropsT = {
  news: NewsT;
};

function LatestVideos({ news }: LatestVideosPropsT) {
  const slicedNews = news.slice(0, 3);

  return (
    <>
      <Title title='Latest Videos' className={style.title} />
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

export default LatestVideos;
