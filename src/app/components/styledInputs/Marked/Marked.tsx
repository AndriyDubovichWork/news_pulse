'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import style from './marked.module.scss';

type marked = {
  isHoverable?: boolean;
};

function Marked({ isHoverable = true }: marked) {
  const [isMarked, setIsMarked] = useState(false);

  return (
    <Link
      href='/profile/marked'
      className={`${style.marked} ${isHoverable && style.hoverable}`}
      onMouseEnter={() => {
        setIsMarked(true);
      }}
      onMouseLeave={() => {
        setIsMarked(false);
      }}
    >
      {isMarked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Link>
  );
}

export default Marked;
