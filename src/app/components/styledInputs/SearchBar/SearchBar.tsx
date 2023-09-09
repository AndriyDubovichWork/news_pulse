import React from 'react';
import style from './SearchBar.module.scss';
import { BsSearch } from 'react-icons/bs';
import Input from '../Input/Input';

export default function SearchBar() {
  return (
    <div className={style.container}>
      <Input placeholder='search anything' />

      <BsSearch className={style.icon} />
    </div>
  );
}
