'use client';

import React from 'react';
import style from './aboutUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import Explanation from './Explanation/Explanation';
import Info from './Info/Info';
import Team from './Team/Team';
import useWidth from '../hooks/useWidth';
function aboutUs() {
  const { isWideScreen } = useWidth();
  return (
    <div className={style.aboutUs}>
      <ArrowedLink current='About Us' />
      <Explanation isWideScreen={isWideScreen} />
      <Info isWideScreen={isWideScreen} />
      <Team />
    </div>
  );
}

export default aboutUs;
