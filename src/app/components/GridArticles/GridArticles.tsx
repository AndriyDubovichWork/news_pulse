import React from 'react';
import Article from '../Article/Article';
import style from './GridArticles.module.scss';
type GridArticlesPropsT = {
  news: NewsT;
};

function GridArticles({ news }: GridArticlesPropsT) {
  return (
    <div className={style.grid}>
      {news.map((article) => (
        <Article article={article} key={article.abstract} />
      ))}
    </div>
  );
}

export default GridArticles;
