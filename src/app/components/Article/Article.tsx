import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './article.module.scss';
import Link from 'next/link';

type ArticlePropsT = { article: ArticleT; isWide?: boolean };

function Article({ article, isWide = false }: ArticlePropsT) {
  const data = article?.media?.[0]?.['media-metadata']?.[2];
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
        <p>{article.abstract}</p>
      </div>
    </Link>
  );
}

export default Article;
