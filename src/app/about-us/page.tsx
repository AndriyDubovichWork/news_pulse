import React from 'react';
import style from './aboutUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import Explanation from './Explanation/Explanation';
function aboutUs() {
  return (
    <div className={style.aboutUs}>
      <ArrowedLink current='About Us' />
      <Explanation />
    </div>
  );
}

export default aboutUs;
