import React from 'react';
import style from './ArticleBody.module.scss';
import Image from 'next/image';
import AboutArticle from './AboutArticle/AboutArticle';
import ArticleContent from './ArticleContent/ArticleContent';

function ArticleBody() {
  return (
    <div className={style.body}>
      <div className={style.content}>
        <h1 className={style.title}>title</h1>
        <Image
          alt='lake image'
          height={600}
          width={1072}
          src={
            'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        />
        <AboutArticle category='Sport' coments={12} date='20' />

        <ArticleContent />
      </div>
    </div>
  );
}

export default ArticleBody;
