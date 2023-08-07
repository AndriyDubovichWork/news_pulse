import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './article.module.scss';

type ArticlePropsT = { article: ArticleT };

function Article({ article }: ArticlePropsT) {
  return (
    <div>
      <a href={article.url} target='_blank' className={style.article}>
        <Image
          height={293}
          width={440}
          className={style.image}
          src={
            article?.media?.[0]?.['media-metadata']?.[2]?.url ||
            ArticlePlaceHolder.src
          }
          alt='12'
        />
        <h3>{article.title}</h3>
        <p>{article.abstract}</p>
      </a>
    </div>
  );
}

export default Article;
