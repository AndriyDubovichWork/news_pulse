'use client';

import { useState, useEffect } from 'react';
import Article from '../../Article/Article';
import style from './HightArticlesWidget.module.scss';

type HightArticlesWidgetT = {
  news: NewsT;
  width: number;
};

function HightArticlesWidget({ news, width }: HightArticlesWidgetT) {
  let isWideScreen = width >= 1500;
  const elementsNum = isWideScreen ? 3 : 2;
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
