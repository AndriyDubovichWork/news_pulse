import React from 'react';
import style from './NewPosts.module.scss';
import Article from '../../Article/Article';
import Title from '../../Title/Title';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type NewPostsPropsT = {
  news: NewsT;
  isWideScreen: boolean;
};

function NewPosts({ news, isWideScreen }: NewPostsPropsT) {
  const visibleNews = news.slice(0, 6);

  return (
    <>
      <div className={style.header}>
        <Title title='New Posts' />
        <Link href={'/hello'} className={style.more}>
          see more
          <IoIosArrowForward />
        </Link>
      </div>
      <div className={`${style.newPosts} ${!isWideScreen && style.small}`}>
        {visibleNews.map((article) => {
          return (
            <Article
              article={article}
              isWide={isWideScreen}
              key={article.abstract}
            />
          );
        })}
      </div>
    </>
  );
}

export default NewPosts;
