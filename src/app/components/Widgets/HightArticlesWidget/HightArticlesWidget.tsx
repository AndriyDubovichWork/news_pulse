'use client';

import { useState, useEffect } from 'react';
import Article from '../../Article/Article';
import style from './HightArticlesWidget.module.scss';

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
        const isLast = id === elementsNum - 1 && isWideScreen;
        return (
          <Article
            article={article}
            isHigh={true}
            isWide={isLast}
            key={article.abstract}
          />
        );
      })}
    </div>
  );
}

export default HightArticlesWidget;
