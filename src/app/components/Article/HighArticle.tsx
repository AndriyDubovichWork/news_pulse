import React, { MouseEventHandler } from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './highArticle.module.scss';
import Link from 'next/link';
import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

type highArticle = {
  article: ArticleT;
  news: ArticleT[];
  isWide: boolean;
};

function HighArticle({ article, isWide, news }: highArticle) {
  const { boundaries, disabled, moveLeft, moveRight, moveEnd, moveStart } =
    usePaginationBoundaries(news.length, 1);
  if (isWide) {
    article = news[boundaries.left];
  }
  const data = article?.media?.[0]?.['media-metadata']?.[2];
  return (
    <Link
      href={`/article?id=${article.asset_id}`}
      className={`${style.highArticle} ${
        isWide && style.wideArticle && style.highNWideArticle
      }`}
    >
      <Image
        height={452}
        width={isWide ? 690 : 320}
        className={style.image}
        src={data?.url || ArticlePlaceHolder.src}
        alt={data.url || 'article img'}
      />
      {isWide && (
        <div className={style.arrows}>
          <button
            className={style.arrow}
            disabled={disabled.left}
            onClick={(e) => {
              e.preventDefault();
              if (e.ctrlKey) {
                moveStart();
              } else {
                moveLeft();
              }
            }}
          >
            <SlArrowLeft />
          </button>
          <button
            className={style.arrow}
            disabled={disabled.right}
            onClick={(e) => {
              e.preventDefault();
              if (e.ctrlKey) {
                moveEnd();
              } else {
                moveRight();
              }
            }}
          >
            <SlArrowRight />
          </button>
        </div>
      )}
      <div className={style.text}>
        <h3 className={style.title}>{article.title}</h3>
        <p className={style.abstract}>{article.abstract}</p>
      </div>
    </Link>
  );
}

export default HighArticle;
