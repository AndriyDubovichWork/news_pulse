import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './article.module.scss';
import Link from 'next/link';
import useWidth from '@/app/hooks/useWidth';

type ArticlePropsT = { article: ArticleT; isWide?: boolean; isHigh?: boolean };

function Article({ article, isWide = false, isHigh = false }: ArticlePropsT) {
  const data = article?.media?.[0]?.['media-metadata']?.[2];
  const { isWideScreen } = useWidth();
  if (isHigh)
    return (
      <Link
        href={`/article?id=${article.asset_id}`}
        // target='_blank'
        className={`${style.highArticle} ${
          isWide && style.wideArticle && style.highNWideArticle
        }`}
      >
        <Image
          height={452}
          width={isWide ? 690 : 320}
          className={style.image}
          src={data?.url || ArticlePlaceHolder.src}
          alt={data?.url}
        />
        <div className={`${isWide && style.textWide} ${style.text}`}>
          <h3 className={style.title}>{article.title}</h3>
          <p className={style.abstract}>{article.abstract}</p>
        </div>
      </Link>
    );

  return (
    <Link
      href={`/article?id=${article.asset_id}`}
      // target='_blank'
      className={`${style.article} ${
        isWide && isWideScreen && style.wideArticle
      }`}
    >
      <Image
        height={190}
        width={340}
        className={style.image}
        src={data?.url || ArticlePlaceHolder.src}
        alt={data?.url}
      />
      <div className={style.text}>
        <h3 className={style.title}>{article.title}</h3>
        <p className={style.abstract}>{article.abstract}</p>
        <p className={style.byline}>{article.byline}</p>
      </div>
    </Link>
  );
}

export default Article;
