'use client';
import React from 'react';
import style from './ArticleBody.module.scss';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import getArticleByUrl from '@/app/api/requests/getArticleByUrl';
import Link from 'next/link';
import useWidth from '@/app/hooks/useWidth';
import Share from '@/app/components/Share/Share';

type ArticleBodyPropsT = {
  article: ArticleT;
  news: NewsT;
  width: number;
};

async function ArticleBody({ article, news, width }: ArticleBodyPropsT) {
  const html = await getArticleByUrl(article.url);
  // const { isWideScreen } = useWidth();
  return (
    <div className={style.body}>
      {html && <Share url={article.url} quote={article.title} />}
      <Link target='_blank' href={article.url} className={style.url}>
        Original Article
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={`${style.content} ${!false && style.smallContent}`}
      />
      {html && <Share url={article.url} quote={article.title} />}

      <PaginatedArticlesWidget
        width={width}
        news={news}
        title='Related Posts'
      />
    </div>
  );
}

export default ArticleBody;
