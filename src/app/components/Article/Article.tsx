import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './article.module.scss';
import Link from 'next/link';

type ArticlePropsT = { article: ArticleT; isWide?: boolean; isHigh?: boolean };

function Article({ article, isWide = false, isHigh = false }: ArticlePropsT) {
  const data = article?.media?.[0]?.['media-metadata']?.[2];

  if (isHigh)
    return (
      <Link
        href={article.url}
        target='_blank'
        className={`${style.highArticle} ${isWide && style.wideArticle}`}
      >
        <Image
          width={0}
          height={0}
          style={{ width: '90%', height: 'auto' }}
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
      href={article.url}
      target='_blank'
      className={`${style.article} ${isWide && style.wideArticle}`}
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
      </div>
    </Link>
  );
}

export default Article;
