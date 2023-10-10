import React from 'react';
import ArticlePlaceHolder from './nytLogo.png';
import Image from 'next/image';
import style from './Article.module.scss';
import Link from 'next/link';
import useWidth from '@/app/hooks/useWidth';
import Marked from '../styledInputs/Marked/Marked';
import Icon from '../Icon/Icon';
import useSearchParamsHook from '@/app/hooks/useSearchParams';

type ArticlePropsT = {
  article: ArticleT;
  isWide?: boolean;
  isHigh?: boolean;
};

function Article({ article, isWide = false }: ArticlePropsT) {
  const data = article?.media?.[0]?.['media-metadata']?.[2];
  const { isWideScreen } = useWidth();
  const author = article.byline.replace('By ', '');
  return (
    <Link
      href={`/article?id=${article.asset_id}`}
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
        <div className={style.author}>
          <div className={style.about}>
            <Link href={`/profile/marked?author=${author}`}>
              <Icon
                name='author'
                size={50}
                src={`https://random.imagecdn.app/124/124/?author=${article.byline}`}
              />
            </Link>
            <div className={style.text}>
              <p className={style.byLine}>{article.byline || 'By NYT'}</p>
              <p className={style.date}>
                {article.published_date.replaceAll('-', ' ') || 'unknown date'}
              </p>
            </div>
          </div>
          <Marked isHoverable={false} />
        </div>
      </div>
    </Link>
  );
}

export default Article;
