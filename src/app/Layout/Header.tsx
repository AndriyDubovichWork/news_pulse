'use client';

import React, { useState } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

import Icon from '../components/Icon/Icon';
import IconWithText from '../components/IconWithText/IconWithText';
import { usePathname } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Button from '../components/styledInputs/Button/Button';
import useMockData from '../hooks/useMockData';
import { GiHamburgerMenu } from 'react-icons/gi';
import Marked from '../components/styledInputs/Marked/Marked';

type header = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setIsSidebarOpen }: header) {
  const path = usePathname();

  const [showDropDown, setShowDropDown] = useState(false);

  const { dropDowns, urls } = useMockData();

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
            {showDropDown && (
              <div className={style.dropDown}>
                {dropDowns.map(({ href, icon, text }) => {
                  return (
                    <Link key={href} href={href} className={style.Link}>
                      <IconWithText
                        icon={icon}
                        text={text}
                        textClassName={style.Link}
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <Button onClick={() => signIn()} value='Login' />
        )}
        <Marked />
      </div>
    </header>
  );
}
