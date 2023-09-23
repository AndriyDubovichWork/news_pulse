'use client';

import React, { useState } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import SearchBar from '../components/styledInputs/SearchBar/SearchBar';
import { BsBookmark, BsPencil } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';

import Icon from '../components/Icon/Icon';
import IconWithText from '../components/IconWithText/IconWithText';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  const [showDropDown, setShowDropDown] = useState(false);

  const dropDowns = [
    { href: '/profile', icon: <FiUser size={24} />, text: 'Profile' },
    { href: '/profile/marked', icon: <BsBookmark size={24} />, text: 'Marked' },
    {
      href: '/profile/exit',
      icon: <IoExitOutline size={24} />,
      text: 'Exit',
    },
  ];
  const urls = [
    { href: '/', text: 'News Pulse' },
    { href: '/contact-us', text: 'Contact us' },
    { href: '/about-us', text: 'About us' },
  ];
  return (
    <header className={style.header}>
      <div className={style.half}>
        {urls.map(({ href, text }) => (
          <Link
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
        <SearchBar />

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
            src='https://random.imagecdn.app/36/36/?avoidCachingSoItwillBeDifferentImages=user'
          />
          <p className={style.name}>Andriy</p>

          <IoIosArrowDown />
          {showDropDown && (
            <div className={style.dropDown}>
              {dropDowns.map(({ href, icon, text }) => {
                return (
                  <Link href={href} className={style.Link}>
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
        <Link href='/profile/marked' className={style.icon}>
          <BsBookmark />
        </Link>
      </div>
    </header>
  );
}
