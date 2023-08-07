import React from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.half}>
        <Link href='/news' className={style.logo}>
          News Pulse
        </Link>
        <Link href='/categories'>categories</Link>
      </div>
      <div className={style.half}>
        <p>News Pulse</p>
      </div>
    </header>
  );
}
