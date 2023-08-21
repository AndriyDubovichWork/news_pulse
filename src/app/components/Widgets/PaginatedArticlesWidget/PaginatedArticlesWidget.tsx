import React, { useState } from 'react';
import Title from '../../Title/Title';
import style from './PaginatedArticlesWidget.module.scss';
import Article from '../../Article/Article';
import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';

type PaginatedArticlesWidgetT = {
  title: string;
  news: ArticleT[];
};

export default function PaginatedArticlesWidget({
  title,
  news,
}: PaginatedArticlesWidgetT) {
  const { disabled, boundaries, moveRight, moveLeft } = usePaginationBoundaries(
    news.length
  );

  return (
    <>
      <Title title={title} />
      <button onClick={moveLeft} disabled={disabled.left}>
        -
      </button>
      <button onClick={moveRight} disabled={disabled.right}>
        +
      </button>
      <div className={style.posts}>
        {news
          .filter(
            (article, id) => id >= boundaries.left && id <= boundaries.right
          )
          .map((article) => {
            return <Article article={article} key={article.byline} />;
          })}
      </div>
    </>
  );
}