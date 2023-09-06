'use client';

import React, { useState } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import SearchBar from '../components/SearchBar/SearchBar';
import { BsBookmark } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';

import Icon from '../components/Icon/Icon';
import IconWithText from '../components/IconWithText/IconWithText';

export default function Header() {
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

  return (
    <header className={style.header}>
      <div className={style.half}>
        <Link href='/' className={style.logo}>
          News Pulse
        </Link>
        <Link href='/categories'>Categories</Link>
        <Link href='/pages'>Pages</Link>
        <Link href='/contact-us'>Contact us</Link>
        <Link href='/about-us'>About us</Link>
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
        <BsBookmark className={style.icon} />
      </div>
    </header>
  );
}
