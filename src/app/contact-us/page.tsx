import React, { ReactElement } from 'react';
import style from './ContactUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import TextArea from '../components/TextArea/TextArea';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';

function UserInput({
  title,
  input,
}: {
  input: ReactElement<any, any>;
  title: string;
}) {
  return (
    <>
      <Title title={title} withRectangle={false} />
      {input}
    </>
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
        <UserInput input={<TextArea />} title='Message' />
        <UserInput input={<TextArea />} title='Add File' />
      </div>
      {/* <TextArea /> */}
    </div>
  );
}
