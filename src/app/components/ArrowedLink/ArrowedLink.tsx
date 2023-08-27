import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import style from './ArrowedLink.module.scss';

function ArrowedLink({ current }: { current: string }) {
  return (
    <div className={style.link}>
      <Link href='/'>Home</Link>
      <IoIosArrowForward />
      <p className={style.current}>{current}</p>
    </div>
  );
}

export default ArrowedLink;
