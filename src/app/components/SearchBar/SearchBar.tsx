import React from 'react';
import style from './SearchBar.module.scss';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  return (
    <div className={style.container}>
      <input className={style.searchBar} placeholder='search anything' />
      <BsSearch className={style.icon} />
    </div>
  );
}
