'use client';

import React, { useState } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import SearchBar from '../components/styledInputs/SearchBar/SearchBar';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';

import Icon from '../components/Icon/Icon';
import IconWithText from '../components/IconWithText/IconWithText';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from '../components/styledInputs/Button/Button';

export default function Header() {
  const path = usePathname();

  const [isMarked, setIsMarked] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDowns = [
    { href: '/profile', icon: <FiUser size={24} />, text: 'Profile' },
    { href: '/profile/marked', icon: <BsBookmark size={24} />, text: 'Marked' },
    {
      href: '/api/auth/signout',
      icon: <IoExitOutline size={24} />,
      text: 'Exit',
    },
  ];
  const urls = [
    { href: '/', text: 'News Pulse' },
    { href: '/contact-us', text: 'Contact us' },
    { href: '/about-us', text: 'About us' },
  ];
  const { data: session } = useSession();
  return (
    <header className={style.header}>
      <div className={style.half}>
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
        <Link
          href='/profile/marked'
          className={style.icon}
          onMouseDown={() => {
            setIsMarked(true);
          }}
          onMouseUp={() => {
            setIsMarked(false);
          }}
        >
          {isMarked ? <BsFillBookmarkFill /> : <BsBookmark />}
        </Link>
      </div>
    </header>
  );
}
