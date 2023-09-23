'use client';
import React from 'react';
import style from './ArticleBody.module.scss';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import getArticleByUrl from '@/app/api/requests/getArticleByUrl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type ArticleBodyPropsT = {
  article: ArticleT;
  news: NewsT;
};

async function ArticleBody({ article, news }: ArticleBodyPropsT) {
  const html = await getArticleByUrl(article.url);

  if (!html) {
  }
  return (
    <div className={style.body}>
      <Link target='_blank' href={article.url} className={style.url}>
        Original Article
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={style.content}
      />
      <PaginatedArticlesWidget news={news} title='Related Posts' />
    </div>
  );
}

export default ArticleBody;
