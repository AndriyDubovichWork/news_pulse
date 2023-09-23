import React, { useState } from 'react';
import Title from '../../Title/Title';
import style from './PaginatedArticlesWidget.module.scss';
import Article from '../../Article/Article';
import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
type PaginatedArticlesWidgetT = {
  title: string;
  news: NewsT;
};

export default function PaginatedArticlesWidget({
  title,
  news,
}: PaginatedArticlesWidgetT) {
  const { disabled, boundaries, moveRight, moveLeft, moveEnd, moveStart } =
    usePaginationBoundaries(news.length);

  return (
    <>
      <div className={style.headerSection}>
        <Title title={title} />

        <div className={style.arrows}>
          <button
            onClick={(e) => {
              if (e.ctrlKey) {
                moveStart();
              } else {
                moveLeft();
              }
            }}
            disabled={disabled.left}
            className={style.arrow}
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={(e) => {
              if (e.ctrlKey) {
                moveEnd();
              } else {
                moveRight();
              }
            }}
            disabled={disabled.right}
            className={style.arrow}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

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
