'use client';

import { useState, useEffect } from 'react';
import Article from '../../Article/Article';
import style from './HightArticlesWidget.module.scss';
import HighArticle from '../../Article/HighArticle';
import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';

type HightArticlesWidgetT = {
  news: NewsT;
  isWideScreen: boolean;
  width: number;
};

function HightArticlesWidget({
  width,
  news,
  isWideScreen,
}: HightArticlesWidgetT) {
  const shown = Math.floor(width / 500);
  const elementsNum = isWideScreen ? 3 : shown;
  const lessNews = news.slice(0, elementsNum);

  return (
    <div className={style.articles}>
      {lessNews.map((article, id) => {
        const isWide = id === 0;
        return (
          <HighArticle
            news={news}
            article={article}
            isWide={isWide}
            key={article.abstract}
          />
        );
      })}
    </div>
  );
}

export default HightArticlesWidget;
