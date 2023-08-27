import React from 'react';
import Article from '../Article/Article';
import style from './GridArticles.module.scss';
type GridArticlesPropsT = {
  news: NewsT;
  isGrid?: boolean;
};

function GridArticles({ news, isGrid = true }: GridArticlesPropsT) {
  const isLined = !isGrid;
  return (
    <div className={isGrid ? style.grid : style.lined}>
      {news.map((article) => (
        <Article article={article} key={article.abstract} isWide={isLined} />
      ))}
    </div>
  );
}

export default GridArticles;
