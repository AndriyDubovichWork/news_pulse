import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './Article.module.scss';

type ArticlePropsT = { article: ArticleT };

function Article({ article }: ArticlePropsT) {
  return (
    <div>
      <a href={article.url} target='_blank'>
        <Image
          height={293}
          width={440}
          className={style.Image}
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
