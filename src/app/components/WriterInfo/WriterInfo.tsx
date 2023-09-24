'use client';

import React from 'react';
import Button from '../styledInputs/Button/Button';
import IconWithText from '../IconWithText/IconWithText';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import Image from 'next/image';
import style from './WriterInfo.module.scss';
import Title from '../Title/Title';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function WriterInfo({ isMarked }: { isMarked?: boolean }) {
  const path = usePathname();
  const options = [
    { title: 'marked', href: '/profile/marked' },
    { title: 'send post', href: '/profile/post' },
    { title: 'posts', href: '/profile/posts' },
  ];
  return (
    <div className={style.writerInfo}>
      <Image
        className={style.banner}
        width={1491}
        height={150}
        alt='Image Banner'
        src={`https://random.imagecdn.app/1491/150/?avoidCachingSoItwillBeDifferentImages=bannerImage`}
      />
      <div className={style.writer}>
        <div className={style.user}>
          <Image
            className={style.userImg}
            width={75}
            height={75}
            alt='user Image'
            src={`https://random.imagecdn.app/75/75/?avoidCachingSoItwillBeDifferentImages=userImage`}
          />
          <p className={style.name}>Andriy Dubovich</p>
        </div>

        <div className={style.about}>
          {isMarked ? (
            <>
              {options.map(({ href, title }) => (
                <Link href={href} key={href}>
                  <Title title={title} withRectangle={path === href} />
                </Link>
              ))}
            </>
          ) : (
            <>
              <IconWithText icon={<AiOutlineStar />} text='Rate : 4.2' />
              <IconWithText icon={<AiOutlineUser />} text='Follower : 1.2k' />
              <IconWithText
                icon={<BsFillFileEarmarkPostFill />}
                text='Post : 29'
              />
            </>
          )}
        </div>

        {isMarked ? (
          <Link href={'/profile/edit'}>
            <Button
              isHihglighted={false}
              value={'Edit Profile'}
              className={style.button}
            />
          </Link>
        ) : (
          <Button value={'+ Follow'} className={style.button} />
        )}
      </div>
    </div>
  );
}

export default WriterInfo;
