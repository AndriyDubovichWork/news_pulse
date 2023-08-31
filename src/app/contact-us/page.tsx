import React, { ReactElement } from 'react';
import style from './ContactUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import TextArea from '../components/TextArea/TextArea';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import FileInput from '../components/FileInput/FileInput';

function UserInput({
  title,
  input,
  isWide,
}: {
  input: ReactElement<any, any>;
  title: string;
  isWide?: boolean;
}) {
  return (
    <div className={isWide ? style.wide : ''}>
      <Title title={title} withRectangle={false} />
      {input}
    </div>
  );
}

export default function ContactUs() {
  return (
    <div className={style.contact}>
      <ArrowedLink current='Contact Us' />

      <div className={style.inputs}>
        <UserInput input={<Input />} title='Subject' />
        <UserInput input={<Input />} title='Name' />
        <UserInput input={<Input />} title='Email' />
        <UserInput input={<TextArea />} title='Explanation' isWide />
        <UserInput input={<FileInput />} title='Add File' />
      </div>

      <Input type='button' value='send' className={style.button} />
    </div>
  );
}
