'use client';

import useMockData from '@/app/hooks/useMockData';
import Link from 'next/link';
import React from 'react';
import IconWithText from '../../IconWithText/IconWithText';

import style from './dropDown.module.scss';

function DropDown() {
  const { dropDowns } = useMockData();
  return (
    <div className={style.dropDown}>
      {dropDowns.map(({ href, icon, text }) => {
        return (
          <Link key={href} href={href} className={style.Link}>
            <IconWithText
              icon={icon}
              text={text}
              containerClassName={style.Link}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default DropDown;
