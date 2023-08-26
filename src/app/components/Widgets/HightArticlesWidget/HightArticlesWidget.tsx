import React from 'react';
import Article from '../../Article/Article';
import style from './HightArticlesWidget.module.scss';

type HightArticlesWidgetT = {
  news: NewsT;
};

function HightArticlesWidget({ news }: HightArticlesWidgetT) {
  const lessNews = news.slice(0, 3);
  return (
    <div className={style.articles}>
      {lessNews.map((article, id) => {
        const isLast = id === 2;
        return <Article article={article} isHigh={true} isWide={isLast} />;
      })}
    </div>
  );
}

export default HightArticlesWidget;
