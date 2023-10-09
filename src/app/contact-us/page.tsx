'use client';

import React from 'react';
import style from './ContactUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import TextArea from '../components/styledInputs/TextArea/TextArea';
import Input from '../components/styledInputs/Input/Input';
import FileInput from '../components/styledInputs/FileInput/FileInput';
import UserInput from '../components/styledInputs/UserInput/UserInput';
import Button from '../components/styledInputs/Button/Button';
import useWidth from '../hooks/useWidth';

export default function ContactUs() {
  const { isWideScreen } = useWidth();

  return (
    <div className={style.contact}>
      <ArrowedLink current='Contact Us' />

      <div className={`${style.inputs} ${!isWideScreen && style.small}`}>
        <UserInput input={<Input />} title='Subject' />
        <UserInput input={<Input />} title='Name' />
        <UserInput input={<Input />} title='Email' />
        <UserInput
          input={<TextArea />}
          title='Explanation'
          wideArea={'2 / 1 / 3 / 3'}
        />
        <UserInput input={<FileInput />} title='Add File' />
      </div>

      <Button value='send' snackBar={{ message: 'message sent' }} />
    </div>
  );
}
