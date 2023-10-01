'use client';

import React, { useState } from 'react';
import Button from '../styledInputs/Button/Button';
import IconWithText from '../IconWithText/IconWithText';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import Image from 'next/image';
import style from './WriterInfo.module.scss';
import Title from '../Title/Title';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMockData from '@/app/hooks/useMockData';
import { Session } from 'next-auth';
import randomNumStrFormat from '@/app/lib/generateRandomNumberInStringFormat';

type writerInfo = { isMarked?: boolean; session?: Session };

function WriterInfo({ isMarked, session }: writerInfo) {
  const path = usePathname();
  const { markedOptions } = useMockData();
  const [isFollowed, setIsFollowed] = useState(false);
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
            alt={session?.user?.name || 'user Image'}
            src={
              session?.user?.image ||
              `https://random.imagecdn.app/75/75/?avoidCachingSoItwillBeDifferentImages=userImage`
            }
          />
          <p className={style.name}>
            {session?.user?.name || 'Andriy Dubovich'}
          </p>
        </div>

        <div className={style.about}>
          {isMarked ? (
            <>
              {markedOptions.map(({ href, title }) => (
                <Link href={href} key={href}>
                  <Title title={title} withRectangle={path === href} />
                </Link>
              ))}
            </>
          ) : (
            <>
              <IconWithText
                icon={<AiOutlineStar />}
                text={'Rate : ' + randomNumStrFormat(3, 5)}
              />
              <IconWithText
                icon={<AiOutlineUser />}
                text={'Follower : ' + randomNumStrFormat(10_000, 500_000)}
              />
              <IconWithText
                icon={<BsFillFileEarmarkPostFill />}
                text={'Post : ' + randomNumStrFormat(10, 200)}
              />
            </>
          )}
        </div>

        {isMarked ? (
          <Link href={'/profile/edit'}>
            <Button
              isHihglighted={false}
              value={'Edit Profile'}
              style={{ alignSelf: 'center' }}
            />
          </Link>
        ) : (
          <Button
            value={isFollowed ? 'followed' : '+ Follow'}
            isHihglighted={!isFollowed}
            style={{ alignSelf: 'center' }}
            onClick={() => setIsFollowed(!isFollowed)}
          />
        )}
      </div>
    </div>
  );
}

export default WriterInfo;
