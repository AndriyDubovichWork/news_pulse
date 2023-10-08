'use client';

import React, { useState } from 'react';
import style from './Header.module.scss';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

import Icon from '../components/Icon/Icon';
import { usePathname } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Button from '../components/styledInputs/Button/Button';
import useMockData from '../hooks/useMockData';
import { GiHamburgerMenu } from 'react-icons/gi';
import Marked from '../components/styledInputs/Marked/Marked';
import DropDown from '../components/styledInputs/DropDown/DropDown';

type header = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setIsSidebarOpen }: header) {
  const path = usePathname();

  const [showDropDown, setShowDropDown] = useState(false);

  const { urls } = useMockData();

  const { data: session } = useSession();

  return (
    <header className={style.header}>
      <div className={style.half}>
        <GiHamburgerMenu
          className={style.hamburger}
          onClick={() => setIsSidebarOpen(true)}
        />

        {urls.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className={path === href ? style.selected : style.url}
          >
            {text}
          </Link>
        ))}
        {/* <Link href="/categories">Categories</Link>
        <Link href="/pages">Pages</Link> */}
      </div>
      <div className={style.half}>
        {/* <SearchBar /> */}
        {session ? (
          <div
            className={style.user}
            onMouseEnter={() => {
              setShowDropDown(true);
            }}
            onMouseLeave={() => {
              setShowDropDown(false);
            }}
          >
            <Icon
              size={36}
              name='user'
              src={
                session?.user?.image ||
                'https://random.imagecdn.app/36/36/?avoidCachingSoItwillBeDifferentImages=user'
              }
            />
            <p className={style.name}>{session?.user?.name}</p>

            <IoIosArrowDown />
            {showDropDown && <DropDown />}
          </div>
        ) : (
          <Button onClick={() => signIn()} value='Login' />
        )}
        <Marked />
      </div>
    </header>
  );
}
