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
import useWidth from '@/app/hooks/useWidth';
import useSearchParamsHook from '@/app/hooks/useSearchParams';

type writerInfo = { isMarked?: boolean; session?: Session | null | undefined };

function WriterInfo({ isMarked, session }: writerInfo) {
  const path = usePathname();
  const { profileOptions } = useMockData();
  const [isFollowed, setIsFollowed] = useState(false);

  const { isWideScreen } = useWidth();

  const { getParam } = useSearchParamsHook();

  return (
    <div className={style.writerInfo}>
      <Image
        className={style.banner}
        width={1491}
        height={150}
        alt='Image Banner'
        src={`https://random.imagecdn.app/1491/150/?avoidCachingSoItwillBeDifferentImages=bannerImage`}
      />
      <div className={`${style.writer} ${!isWideScreen && style.small}`}>
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
            {session?.user?.name || getParam('author') || 'Andriy Dubovich'}
          </p>
        </div>

        <div className={style.about}>
          {isMarked ? (
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
          ) : (
            <>
              {profileOptions.map(({ href, title }) => (
                <Link href={href} key={href}>
                  <Title title={title} withRectangle={path === href} />
                </Link>
              ))}
            </>
          )}
        </div>

        {isMarked ? (
          <Button
            className={style.Button}
            value={isFollowed ? 'followed' : '+ Follow'}
            isHihglighted={!isFollowed}
            style={{ alignSelf: 'center' }}
            onClick={() => setIsFollowed(!isFollowed)}
          />
        ) : (
          <Link href={'/profile/edit'} className={style.Button}>
            <Button
              isHihglighted={false}
              value={'Edit Profile'}
              style={{ alignSelf: 'center' }}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default WriterInfo;
