'use client';

import React from 'react';
import style from './User.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import Image from 'next/image';
import IconWithText from '../components/IconWithText/IconWithText';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import Button from '../components/styledInputs/Button/Button';
import useGetData from '../hooks/useGetData';
import GridArticles from '../components/GridArticles/GridArticles';
import Paginator from '../components/Paginator/Paginator';
import WriterInfo from '../components/WriterInfo/WriterInfo';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

export default function User() {
  const { news, shuffleNews } = useGetData();
  const { data: session } = useSession();
  return (
    <main className={style.user}>
      <ArrowedLink current='Writer' />
      <WriterInfo session={session as Session} />

      <div className={style.articles}>
        <GridArticles news={news} isGrid />
      </div>
      <Paginator shuffleNews={shuffleNews} />
    </main>
  );
}
