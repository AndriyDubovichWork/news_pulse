import Image from 'next/image';
import React from 'react';
import style from './LatestVideos.module.scss';
import Article from '../../Article/Article';
import Title from '../../Title/Title';

type LatestVideosPropsT = {
  news: ArticleT[];
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
            <div className={isFirst ? style.video : ''}>
              <Article article={article} isHigh={isFirst} isWide={true} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LatestVideos;
