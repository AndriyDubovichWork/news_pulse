'use client';

import React from 'react';
import style from './footer.module.scss';
import Input from '../components/styledInputs/Input/Input';
import Title from '../components/Title/Title';
import Comment from '../components/Comment/Comment';
import Link from 'next/link';
import Icon from '../components/Icon/Icon';
import useWidth from '../hooks/useWidth';
import useMockData from '../hooks/useMockData';

export default function Footer() {
  const { AuthorsInstagram, comments } = useMockData();
  const { categories } = useMockData();
  const { isWideScreen } = useWidth();
  return (
    <footer className={`${style.footer} ${!isWideScreen && style.small}`}>
      <div className={style.leftfooterSection}>
        <div className={style.megaNews}>
          <Title title='Mega News' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin
          </p>
        </div>

        <div className={style.categories}>
          <Title title='Category' />
          <div className={style.links}>
            {categories.map((category, id) => (
              <Link
                href={`/categories/?category=${category}`}
                key={category + id}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className={style.newsLetters}>
          <Title title='Newsletters' />
          <Input
            placeholder='Write your email ..'
            style={{ width: '100%', height: '6vh', borderRadius: '12px' }}
          />
        </div>

        <div className={style.socialNetwork}>
          <Title title='Social Network' />
          <Link target='_blank' href={'https://www.instagram.com'}>
            <Icon
              name='instagram'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
            />
          </Link>
          <Link target='_blank' href={'https://www.facebook.com/'}>
            <Icon
              name='facebook'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png'
            />
          </Link>
        </div>

        <div className={style.copyright}>
          <p>Privacy Policy | Terms & Conditions</p>
          <p>All Copyright (c) 2022 Reserved</p>
        </div>
      </div>
      {isWideScreen && (
        <>
          <div className={style.newComents}>
            <Title title='New Comments' />
            {comments.map((comment) => (
              <Comment
                author={comment.author}
                text={comment.text}
                key={comment.text}
              />
            ))}
          </div>

          <div className={style.instagram}>
            <Title
              title='Follow on Instagram'
              className={style.instagramTitle}
            />

            {AuthorsInstagram.map((url, id) => {
              return (
                <Link href={url} key={url + id} target='_blank'>
                  <Icon
                    size={104}
                    src={`https://random.imagecdn.app/104/104/?avoidCachingSoItwillBeDifferentImages=${id}`}
                    name='instagram image'
                  />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </footer>
  );
}
