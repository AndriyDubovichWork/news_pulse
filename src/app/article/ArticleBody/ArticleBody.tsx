'use client';
import React from 'react';
import style from './ArticleBody.module.scss';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import getArticleByUrl from '@/app/api/requests/getArticleByUrl';
import Link from 'next/link';
import Share from '@/app/components/styledInputs/Share/Share';
import Like from '@/app/components/styledInputs/Like/Like';

type ArticleBodyPropsT = {
  article: ArticleT;
  news: NewsT;
  width: number;
};

async function ArticleBody({ article, news, width }: ArticleBodyPropsT) {
  if (!article && news) {
    throw new Error('could not find this article');
  }
  const html = await getArticleByUrl(article.url);

  const shareAndLike = (
    <div className={style.shareAndLike}>
      <Share url={article.url} quote={article.title} />
      <Like />
    </div>
  );

  return (
    <div className={style.body}>
      {html && shareAndLike}
      <Link target='_blank' href={article.url} className={style.url}>
        Original Article
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={`${style.content} ${!false && style.smallContent}`}
      />
      {html && shareAndLike}

      <PaginatedArticlesWidget
        width={width}
        news={news}
        title='Related Posts'
      />
    </div>
  );
}

export default ArticleBody;
