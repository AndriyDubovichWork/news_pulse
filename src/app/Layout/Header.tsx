import React from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import SearchBar from '../components/SearchBar/SearchBar';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.half}>
        <Link href='/news' className={style.logo}>
          News Pulse
        </Link>
        <Link href='/categories'>Categories</Link>
        <Link href='/pages'>Pages</Link>
        <Link href='/contact-us'>Contact us</Link>
        <Link href='/about-us'>About us</Link>
      </div>
      <div className={style.half}>
        <SearchBar />
        <p>user img</p>
        <p>name</p>
        <BsBookmark />
      </div>
    </header>
  );
}
