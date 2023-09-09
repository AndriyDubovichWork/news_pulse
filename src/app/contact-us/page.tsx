import React, { ReactElement } from 'react';
import style from './ContactUs.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import TextArea from '../components/styledInputs/TextArea/TextArea';
import Title from '../components/Title/Title';
import Input from '../components/styledInputs/Input/Input';
import FileInput from '../components/styledInputs/FileInput/FileInput';
import UserInput from '../components/styledInputs/UserInput/UserInput';
import Button from '../components/styledInputs/Button/Button';

export default function ContactUs() {


  
  return (
    <div className={style.contact}>
      <ArrowedLink current='Contact Us' />

      <div className={style.inputs}>
        <UserInput input={<Input />} title='Subject' />
        <UserInput input={<Input />} title='Name' />
        <UserInput input={<Input />} title='Email' />
        <UserInput input={<TextArea />} title='Explanation'  wideArea={'2 / 1 / 3 / 3'}/>
        <UserInput input={<FileInput />} title='Add File' />
      </div>



      <Button  value='send'/>
    </div>


);
}
