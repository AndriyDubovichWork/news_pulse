import React from 'react';
import style from './ArticleBody.module.scss';
import Image from 'next/image';
import AboutArticle from './AboutArticle/AboutArticle';
import ArticleContent from './ArticleContent/ArticleContent';
import ArticleComments from './ArticleComments/ArticleComments';
import PaginatedArticlesWidget from '@/app/components/Widgets/PaginatedArticlesWidget/PaginatedArticlesWidget';
import useGetData from '@/app/hooks/useGetData';

type ArticleBodyPropsT = {
  article: ArticleT;
  news: NewsT;
};

function ArticleBody({ article, news }: ArticleBodyPropsT) {
  return (
    <div className={style.body}>
      <div className={style.content}>
        <h1 className={style.title}>{article.title}</h1>
        <Image
          className={style.mainImage}
          alt={article?.media?.[0]?.caption || 'lake image'}
          height={600}
          width={1072}
          src={
            article?.media?.[0]?.['media-metadata']?.[2].url ||
            'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        />
        <AboutArticle category='Sport' coments={12} date='20' />

        <ArticleContent />
        <ArticleComments />

        <PaginatedArticlesWidget news={news} title='Related Posts' />
      </div>
    </div>
  );
}

export default ArticleBody;
