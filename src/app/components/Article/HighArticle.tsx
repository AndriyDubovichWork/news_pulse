import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './article.module.scss';
import Link from 'next/link';
import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';

type highArticle = {
  article: ArticleT;
  news: ArticleT[];
  isWide: boolean;
};

function HighArticle({ article, isWide, news }: highArticle) {
  const data = article?.media?.[0]?.['media-metadata']?.[2];
  // const {}=usePaginationBoundaries()
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
        src={data.url || ArticlePlaceHolder.src}
        alt={data.url || 'article img'}
      />
      <div className={`${isWide && style.textWide} ${style.text}`}>
        <h3 className={style.title}>{article.title}</h3>
        <p className={style.abstract}>{article.abstract}</p>
      </div>
    </Link>
  );
}

export default HighArticle;
